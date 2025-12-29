/* ========================================================================== */
/* [수정됨] 인라인 갤러리 엔진 (ID 중복 문제 해결을 위한 DOM 탐색 방식 적용) */
/* ========================================================================== */
/* ========================================================================== */
/* [최종] 스마트 갤러리 엔진 (대표 이미지 우선 로드 & 자동 필터링)             */
/* ========================================================================== */
window.InlineGallery = {
    dataStore: {},

    // [1] 데이터 등록 (후보군 등록)
    register: function(id, candidates) {
        this.dataStore[id] = {
            candidates: candidates || [], // 로딩 전 후보 리스트
            images: [],                   // 실제 로딩 성공한 이미지
            verified: false,              // 검증 여부
            currentIndex: 0
        };
    },

    // [2] 토글 (열기/닫기)
    toggle: function(id, btn, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }

        const container = btn.closest('.sub-title-group').nextElementSibling;
        if (!container) return;

        const data = this.dataStore[id];
        if (!data) return;

        const isOpen = container.classList.contains('open');

        if (isOpen) {
            // 닫기
            container.classList.remove('open');
            container.style.maxHeight = null;
            btn.classList.remove('active');
            btn.innerHTML = '🖼️';
        } else {
            // 열기
            btn.classList.add('active');
            btn.innerHTML = '🔼';
            container.classList.add('open');

            // 검증되지 않았으면 이미지 로딩 시도
            if (!data.verified) {
                this.verifyAndRender(id, container);
            } else {
                // 이미 검증됐으면 바로 렌더링 (높이 계산)
                this.updateHeight(container);
            }
        }
    },

    // [3] 이미지 검증 및 로드 (핵심 로직)
    verifyAndRender: async function(id, container) {
        const data = this.dataStore[id];
        container.innerHTML = `<div class="gallery-empty-state"><div style="font-size:1.5rem;">⏳</div><div>이미지 확인 중...</div></div>`;
        this.updateHeight(container);

        // 1. 대표 이미지(Main)가 있는지 먼저 확인
        const mainCandidate = data.candidates.find(c => c.isMain);
        if (mainCandidate) {
            const isMainValid = await this.checkImage(mainCandidate.src);
            if (isMainValid) {
                // 대표 이미지가 있으면 그것만 등록하고 종료
                data.images = [mainCandidate];
                data.verified = true;
                this.render(id, container);
                return;
            }
        }

        // 2. 대표 이미지가 없으면 개별 아이템 이미지 확인
        const itemCandidates = data.candidates.filter(c => !c.isMain);
        const promises = itemCandidates.map(async (c) => {
            const isValid = await this.checkImage(c.src);
            return isValid ? c : null;
        });

        const results = await Promise.all(promises);
        data.images = results.filter(img => img !== null); // 유효한 것만 남김
        data.verified = true;
        this.render(id, container);
    },

    // 이미지 존재 여부 체크 (비동기)
    checkImage: function(src) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = src;
        });
    },

    // [4] 렌더링
    render: function(id, container) {
        const data = this.dataStore[id];
        const images = data.images;

        // 이미지가 하나도 없으면 준비중 표시
        if (images.length === 0) {
            container.innerHTML = `
                <div class="gallery-empty-state">
                    <div style="font-size: 2.5rem; margin-bottom: 10px;">🚧</div>
                    <div style="font-size: 1rem; font-weight: 700; color: #868e96;">이미지 준비 중입니다</div>
                </div>`;
            this.updateHeight(container);
            return;
        }

        // 1개면 싱글 모드 (버튼/캡션 숨김), 2개 이상이면 일반 모드
        if (images.length === 1) {
            container.classList.add('single-mode');
        } else {
            container.classList.remove('single-mode');
        }

        let slidesHTML = '';
        images.forEach(img => {
            slidesHTML += `
                <div class="gallery-slide">
                    <img class="gallery-image" src="${img.src}" alt="이미지" onload="this.classList.add('loaded')">
                    <div class="gallery-caption-overlay">${img.title || ''}</div>
                </div>`;
        });

        const controlsHTML = images.length > 1 ? `
            <button class="gallery-nav prev" onclick="window.InlineGallery.move('${id}', -1, event)">◀</button>
            <button class="gallery-nav next" onclick="window.InlineGallery.move('${id}', 1, event)">▶</button>
        ` : '';

        container.innerHTML = `
            <div class="gallery-track">
                ${slidesHTML}
            </div>
            ${controlsHTML}
        `;
        
        this.updateHeight(container);
    },

    // 높이 강제 업데이트
    updateHeight: function(container) {
        const scrollHeight = container.scrollHeight > 200 ? container.scrollHeight : 200;
        container.style.maxHeight = scrollHeight + "px";
    },

    // [5] 슬라이드 이동
    move: function(id, direction, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }
        
        const data = this.dataStore[id];
        if (!data || data.images.length <= 1) return;

        const btn = event.target.closest('button');
        const container = btn.closest('.inline-gallery-container');
        const track = container.querySelector('.gallery-track');
        
        const total = data.images.length;
        data.currentIndex = (data.currentIndex + direction + total) % total;
        track.style.transform = `translateX(-${data.currentIndex * 100}%)`;
    }
};
// [전역 변수 선언]
let activeCardId = null;
// [신규] 도약(Jump) 연결 고리 데이터 정의
// 형식: '출발카드ID': { section: '목적지섹션ID', card: '목적지카드ID', label: '버튼에 뜰 이름' }
// [최종 수정] 도약(Jump) 연결 고리 데이터 정의
// 이제 하나의 카드에 여러 개의 버튼을 달 수 있습니다. (배열 형태 [])
let jumpHistory = null; // [신규] 돌아갈 위치를 기억하는 변수
const detailPanel = document.getElementById('detail-panel-template');
let rotationInterval = null;
let closeTimeout = null;
let currentSectionTitle = "";
let currentSectionDesc = "";
let isGeoTransparent = false; // 권역 투명화 상태 변수

// [신규] 전역 네비게이션 버튼 객체
const prevBtn = document.getElementById('prev-card-btn');
const nextBtn = document.getElementById('next-card-btn');
const bgBtn = document.getElementById('bg-view-btn');
const bgModal = document.getElementById('bg-modal');
const returnBtn = document.getElementById('return-jump-btn'); // [추가] 돌아가기 버튼 객체

/* [교체] 패널 콘텐츠 생성 함수 (기존 이미지 자동 연동) */
window.generatePanelContent = function(data, cardId) {
    let html = '';

    // (1) 상단 기준 (Criteria) - 기존 유지
    if (data.criteria) {
        if (data.criteria.isSpecial) {
            html += `<div class="panel-criteria-group"><button class="map-toggle-btn" onclick="toggleClimateMap(this)">${data.criteria.buttonText || '지도 보기'}</button><div class="criteria-wrapper"><div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">`;
            data.criteria.items.forEach(c => { html += `<div class="criteria-item"><span class="criteria-icon">${c.icon}</span><div class="criteria-content"><span class="criteria-label">${c.label}</span><span class="criteria-text">${c.text}</span></div></div>`; });
            html += `</div></div>`;
            if (data.criteria.image) html += `<div class="climate-map-area"><img src="${data.criteria.image}" class="climate-map-img"></div>`;
            html += `</div>`;
        } else if (Array.isArray(data.criteria)) {
            const colCount = data.criteria.length;
            html += `<div class="panel-criteria-group" style="display: grid; grid-template-columns: repeat(${colCount}, 1fr) !important; gap: 15px; padding: 20px 0; margin-bottom: 30px; border-bottom: 1px dashed rgba(0,0,0,0.1);">`;
            data.criteria.forEach(c => { html += `<div class="criteria-item"><span class="criteria-icon">${c.icon}</span><div class="criteria-content"><span class="criteria-label">${c.label}</span><span class="criteria-text">${c.text}</span></div></div>`; });
            html += `</div>`;
        }
    }

    // (2) 하위 카드 (Sub Cards)
    html += `<div class="panel-grid">`;
    if (data.subCards) {
        data.subCards.forEach((card, index) => {
            const subCardId = `sub-card-${cardId}-${index}`;
            const subCardIndex = index + 1;
            
            // [핵심] 이미지 경로 자동 생성 (기존 로직 활용)
            // 중분류 대표 이미지 (Main)
            const mainImageSrc = `images/gallery/${cardId}-${subCardIndex}.webp`;
            
            let collectedImages = [];
            collectedImages.push({ src: mainImageSrc, title: card.title, isMain: true });

            // 세부 항목 이미지 경로 미리 생성하여 매핑
            let itemImages = {}; 

            if (card.items) {
                card.items.forEach((item, itemIndex) => {
                    const textOnly = item.name.replace(/<[^>]*>?/gm, '');
                    // 세부 항목 이미지 (Sub)
                    const itemImageSrc = `images/gallery/${cardId}-${subCardIndex}-${itemIndex + 1}.webp`;
                    
                    collectedImages.push({ src: itemImageSrc, title: textOnly, isMain: false });
                    itemImages[itemIndex] = itemImageSrc; // 인덱스로 매핑해둠
                });
            }
            
            if (window.InlineGallery) { window.InlineGallery.register(subCardId, collectedImages); }

            // [수정] 버튼 그룹 생성 (기존 갤러리 버튼 + 신규 딥다이브 버튼)
            let btnGroupHTML = `<div class="sub-control-group">`;
            
            // 1. 신규 딥다이브 버튼 (아이콘만, 텍스트 제거)
            if (card.deepDive) {
                // 이미지 경로는 상단에서 생성된 mainImageSrc 사용
                btnGroupHTML += `
                <button class="sub-deep-dive-btn" onclick="openArticleModal(this)" title="심화 학습">
                    📖
                    <div class="hidden-article-content" data-title="${card.title}" data-image="${mainImageSrc}">${card.deepDive}</div>
                </button>`;
            }

            // 2. 기존 갤러리 버튼 (이 안으로 이동)
            btnGroupHTML += `<button class="inline-gallery-btn" onclick="window.InlineGallery.toggle('${subCardId}', this, event)">🖼️</button>`;
            
            btnGroupHTML += `</div>`;

            // [수정] HTML 조립
            html += `
            <div class="sub-region-card" id="${subCardId}">
                <div class="sub-title-group">
                    <div class="sub-title-number"></div>
                    <div class="sub-title-content">
                        <h3 class="sub-title-heading">${card.title}</h3>
                        <p class="sub-title-description">${card.desc}</p>
                    </div>
                    <!-- 버튼 그룹 삽입 -->
                    ${btnGroupHTML}
                </div>

                <div id="gallery-${subCardId}" class="inline-gallery-container"></div>
                
                ${card.criteria ? `
                <div class="sub-card-criteria-grid">
                    ${card.criteria.map(c => `<div class="criteria-item"><span class="criteria-icon">${c.icon}</span><div class="criteria-content"><span class="criteria-label">${c.label}</span><span class="criteria-text">${c.text}</span></div></div>`).join('')}
                </div>` : ''}
                
                <ul class="detail-list">`;
            
            if (card.items) {
                card.items.forEach((item, itemIndex) => {
                    const linkedName = createSearchLink(item.name);
                    const examplesAttr = JSON.stringify(item.examples).replace(/"/g, '&quot;');
                    const metaInfo = item.meta ? `<div class="meta-info">${item.meta}</div>` : '';
                    
                    // [수정] 세부 항목 딥다이브 버튼 (자동 생성된 itemImages 사용)
                    let itemDeepDiveBtn = '';
                    if (item.deepDive) {
                        // 해당 인덱스의 이미지 경로 가져오기
                        const imgSrc = itemImages[itemIndex];
                        itemDeepDiveBtn = `
                        <span class="article-btn" onclick="openArticleModal(this)" title="심화 학습 읽기">
                            📖
                            <div class="hidden-article-content" data-title="${item.name}" data-image="${imgSrc}">${item.deepDive}</div>
                        </span>`;
                    }

                    html += `<li class="detail-item"><div class="detail-header"><span class="detail-name">${linkedName}${itemDeepDiveBtn}</span><span class="detail-examples" data-list="${examplesAttr}">${item.examples[0]}</span></div>${metaInfo}<span class="detail-desc">${item.desc}</span></li>`;
                });
            }
            html += `</ul></div>`;
        });
    }
    html += `</div>`;

    return html;
};

    // [1] 섹션 전환 기능 (모바일 활성화 오류 수정)
function switchSection(sectionId) {
    const body = document.body;
    
    const bgMap = { 
        'home': "url('images/world-map-main.webp')", 
        'maps': "url('images/maps-bg.webp')",
        'ocean': "url('images_ocean/ocean-bg.webp')", 
        'terrain': "url('images/world-physical-map.webp')", 
        'climate': "url('images/world-climate.webp')", 
        'soil': "url('images/soil-bg.webp')", 
        'cloud': "linear-gradient(to bottom, #1e3c72 0%, #2a5298 40%, #6dd5fa 80%, #ffffff 100%)",
        'earth-system': "black", // [신규] 우주 배경을 위해 검은색으로 시작 (CSS로 제어 예정)
        'special': "url('images/special.webp')", 
        'freshwater': "url('images/freshwater.webp')", 
        'agriculture': "url('images_human/agri.webp')",
        'livestock': "url('images_human/livestock.webp')",
        'resources': "url('images_human/resources.webp')", 
        'energy': "url('images_human/energy.webp')", 
        'population': "url('images_human/population.webp')",
        'industry': "url('images_human/industry.webp')", 
        'city': "url('images_human/city.webp')", 
        'language': "url('images_human/language.webp')",
        'rural': "url('images/rural.webp')",
        'urban': "url('images/urban.webp')",
        'economic': "url('images/economic.webp')",
        'geopolitics': "url('images/geopolitics.webp')", 
        'religion': "url('images_human/religion.webp')",
        'tourism': "url('images/tourism.webp')",       // 여행과 관광 지리
        'conflict': "url('images/conflict.webp')",     // 갈등과 공존의 세계
        'cultural': "url('images/cultural.webp')"      // 문화의 확산과 경관
    };

    body.style.background = ''; 

    if (bgBtn) {
        if (sectionId === 'home') {
            bgBtn.style.display = 'none';
        } else if (sectionId === 'geo' || bgMap[sectionId]) {
            bgBtn.style.display = 'flex';
        } else {
            bgBtn.style.display = 'none';
        }
    }

    if (sectionId === 'geo') {
        body.style.background = 'none';
    } else if (bgMap[sectionId]) {
        body.style.backgroundImage = bgMap[sectionId];
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundAttachment = 'fixed';
        body.style.backgroundRepeat = 'no-repeat';
    } else {
        body.style.background = 'none';
    }   

    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) targetSection.classList.add('active');

    // [핵심 수정] 모든 메뉴 버튼의 활성 상태를 초기화합니다.
    document.querySelectorAll('.tab-btn, .sub-tab-btn, .group-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains('group-btn')) {
            btn.style.color = '';
        }
    });

    // [핵심 수정] querySelectorAll을 사용하여 데스크톱과 모바일의 모든 해당 버튼을 찾습니다.
    const targetBtns = document.querySelectorAll(`button[onclick*="switchSection('${sectionId}')"]`);
    
    if (targetBtns.length > 0) {
        // 찾은 모든 버튼(원본, 복사본)에 active 클래스를 추가합니다.
        targetBtns.forEach(btn => {
            btn.classList.add('active');
        });

        // 첫 번째 버튼을 기준으로 섹션 제목과 설명을 가져옵니다. (한 번만 실행)
        const firstBtn = targetBtns[0];
        const titleEl = firstBtn.querySelector('.menu-title');
        const descEl = firstBtn.querySelector('.menu-desc');
        currentSectionTitle = titleEl ? (titleEl.innerText || titleEl.textContent) : "";
        currentSectionDesc = descEl ? (descEl.innerText || descEl.textContent) : "";
        
        // 상위 그룹 버튼(.group-btn)도 모두 활성화합니다.
        targetBtns.forEach(btn => {
            const parentGroup = btn.closest('.nav-group');
            if (parentGroup) {
                const groupLabel = parentGroup.querySelector('.group-btn');
                if (groupLabel) {
                    groupLabel.classList.add('active');
                    groupLabel.style.color = '#2d3436';
                }
            }
        });
    } else {
        currentSectionTitle = "";
        currentSectionDesc = "";
    }

    const header = document.querySelector('header');
    const searchBox = document.getElementById('global-search');
    if (sectionId === 'home') {
        if (header) header.classList.remove('scrolled', 'header-shrunk');
        if (searchBox) searchBox.style.display = 'none';
    } else {
        if (searchBox) searchBox.style.display = 'flex';
    }

    const climateScale = document.getElementById('climate-scale');
    if (climateScale) {
        climateScale.style.display = (sectionId === 'climate') ? 'block' : 'none';
    }

    closeAllPanels();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const climateBandsBtn = document.getElementById('climate-bands-toggle');
    if (climateBandsBtn) {
        if (sectionId === 'climate') {
            climateBandsBtn.style.display = 'flex';
        } else {
            climateBandsBtn.style.display = 'none';
            document.body.classList.remove('show-climate-bands');
            climateBandsBtn.classList.remove('active');
        }
    }
    setTimeout(updateActiveLabel, 0);
}

// [2] 검색 링크 및 위키 매핑 (생략 없이 유지)
const wikiMap = { "화북": "화베이", "화남": "화난", "내륙 고원 지대": "운귀고원", "일본 열도": "일본", "만주": "만주", "몽골 초원": "몽골", "시베리아": "시베리아", "류큐": "류큐", "대만": "타이완", "타림분지": "타림 분지", "티베트 고원": "티베트", "안남산맥 동부": "베트남", "안남산맥 서부": "인도차이나 반도", "말레이 및 순다 열도": "말레이 제도", "필리핀": "필리핀", "호주 대륙": "호주", "동남부/서남부 온대 해안": "호주", "북부 사바나": "다윈", "내륙 사막": "아웃백", "폴리네시아": "폴리네시아", "미크로네시아": "미크로네시아", "멜라네시아": "멜라네시아", "히말라야 권역": "히말라야 산맥", "네팔": "네팔", "부탄 및 시킴": "부탄", "북부 평원": "인도-갠지스 평원", "인더스 유역": "인더스 강", "힌두스탄 평원": "힌두스탄 평원", "갠지스 유역 (벵골)": "갠지스 강", "데칸 및 남인도": "데칸고원", "고원 고지대": "데칸고원", "해안 평야 지역": "뭄바이", "주변부 불교 지역": "스리랑카", "스리랑카": "스리랑카", "부탄": "부탄", "중앙아시아": "중앙아시아", "아나톨리아 고원": "아나톨리아", "이란 고원": "이란", "파미르 고원": "파미르 고원", "하천 농경 지역": "비옥한 초승달 지대", "오아시스 농업 지역": "아라비아 사막", "아나톨리아 서부": "아나톨리아", "마그레브 지역": "마그레브", "사헬 및 서아프리카": "사헬", "사헬 서부": "사헬", "기니만 연안": "기니만", "중앙아프리카": "중앙아프리카", "콩고 분지": "콩고 분지", "주변 사바나 및 호수": "아프리카 대호수", "동아프리카": "동아프리카", "사헬 동부": "수단", "아프리카의 뿔": "아프리카의 뿔", "동아프리카 해안": "스와힐리 해안", "남아프리카": "남아프리카", "한류성 사막 지역": "나미브 사막", "동부 온대 지역": "남아프리카 공화국", "마다가스카르섬": "마다가스카르", "마다가스카르": "마다가스카르", "서유럽": "서유럽", "브리튼 제도": "브리튼 제도", "서유럽 평원": "유럽 대평원", "중부유럽 평원": "북유럽 평원", "북독일 평원": "북독일 평원", "폴란드": "폴란드", "남유럽": "남유럽", "이베리아": "이베리아 반도", "이탈리아": "이탈리아", "발칸 남부": "발칸 반도", "동유럽 평원": "동유럽 평원", "흑해 연안": "흑해", "우랄 서부 삼림지대": "동유럽 평원", "북유럽": "북유럽", "스칸디나비아": "스칸디나비아", "발트 3국": "발트 3국", "산악 지대": "유럽의 산맥", "중부 내륙 산악": "알프스 산맥", "발칸 북부": "발칸 반도", "태평양 연안 온대기후": "북아메리카 서해안", "서부 산악 및 배후 비그늘": "북아메리카 코르디예라", "중부 농업지대": "내륙평야", "미 북동부 및 오대호": "미국 북동부", "남부 선벨트": "선벨트", "북극권 및 아한대": "북극", "북부 (서안해양성)": "북미 태평양 연안", "남부 (지중해성)": "캘리포니아", "건조 대분지": "그레이트베이슨", "산악 지역 (로키)": "로키 산맥", "그레이트플레인스 (서)": "그레이트플레인스", "프레리 (동)": "프레리", "오대호 연안": "오대호", "대서양 연안": "메갈로폴리스", "애팔래치아 권역": "애팔래치아 산맥", "남동부 및 플로리다": "미국 남동부", "멕시코만 연안": "멕시코만", "캐나다 순상지 및 북극 제도": "캐나다 순상지", "알래스카": "알래스카", "브라질": "브라질", "안데스": "안데스 산맥", "건조 권역": "파타고니아 사막", "라플라타 유역": "라플라타강", "저위도 플랜테이션": "플랜테이션", "멕시코 및 중앙아메리카": "중앙아메리카", "아마존 분지": "아마존 분지", "브라질 고원": "브라질고원", "중부 안데스": "페루", "북부 안데스": "콜롬비아", "남부 안데스": "칠레", "파타고니아": "파타고니아", "한류성 사막 (아타카마)": "아타카마 사막", "팜파스": "팜파스", "기아나 고지": "기아나", "카리브 연안": "카리브해", "멕시코 고원": "멕시코", "중앙아메리카 지협": "파나마", "힌두쿠시-카라코람": "카라코람 산맥", "아프가니스탄": "아프가니스탄", "카슈미르": "카슈미르", "카슈미르 계곡": "카슈미르", "캅카스 권역": "캅카스", "캅카스": "캅카스", "레반트 지역": "레반트", "이스라엘 및 팔레스타인": "이스라엘-팔레스타인 분쟁", "접경지 아랍권": "레반트" };
function createSearchLink(text) { const cleanText = text.replace(/<[^>]+>/g, '').trim(); let query = wikiMap[cleanText] || cleanText; const iTagMatch = text.match(/<i[^>]*>(.*?)<\/i>/); if (iTagMatch) { query = iTagMatch[1]; } else if (query.includes('(')) { query = query.split('(')[0].trim(); } const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`; return `<a href="${url}" target="_blank" title="${query} Google 검색">${text}</a>`; }
const ambientThemes = { 1: 'linear-gradient(135deg, #f5f5f5 0%, #cfd9df 100%)', 2: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)', 3: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', 4: 'linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)', 5: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)', 6: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)', 7: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', 8: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)', 9: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)' };
const geoFocus = { 1: { pos: '88% 28%', size: '260%' }, 2: { pos: '92% 75%', size: '240%' }, 3: { pos: '74% 42%', size: '300%' }, 4: { pos: '56% 38%', size: '230%' }, 5: { pos: '53% 65%', size: '230%' }, 6: { pos: '51% 18%', size: '350%' }, 7: { pos: '18% 25%', size: '230%' }, 8: { pos: '29% 75%', size: '230%' }, 9: { pos: '66% 32%', size: '300%' } };

// 3. 카드 생성 함수 (renderCards): 페이지 로딩 시 실행됨
function renderCards(containerId, dataObj) {
    const container = document.getElementById(containerId);
    if (!container) return;

    Object.keys(dataObj).forEach(key => {
        const data = dataObj[key];
        const cardId = `card-${key}`;
        
        if (document.getElementById(cardId)) return;

        const article = document.createElement('article');
        article.className = 'region-card';
        article.id = cardId;
        article.onclick = (event) => activateCard(key, event);
        article.style.setProperty('--theme', data.theme);

        let svgContent = '';
        if (data.iconSVG) {
            svgContent = `<svg class="card-bg-icon" viewBox="0 0 200 200">${data.iconSVG}</svg>`;
        }

        // [핵심] 여기서 generatePanelContent에 'key'(고유ID)를 넘겨줍니다.
        article.innerHTML = `
            ${svgContent}
            <div class="card-header">
                <div class="header-content">
                    <h2>${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="hidden-data">
                ${generatePanelContent(data, key)} 
            </div>
        `;

        container.appendChild(article);
    });
}

// [수정] 카드 활성화 함수 (페이지네이션 복구판)
function activateCard(id, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }
    if (typeof resetTransparency === 'function') resetTransparency();

    const header = document.querySelector('header');
    if (header) { header.classList.add('scrolled', 'header-shrunk'); }
    
    if (activeCardId === id) { closeAllPanels(); return; }
    
    document.querySelectorAll('.region-card').forEach(card => { 
        card.classList.remove('active'); 
        card.classList.add('dimmed'); 
    });
    
    stopTextRotation();
    if (closeTimeout) clearTimeout(closeTimeout);
    
    activeCardId = id;
    const clickedCard = document.getElementById(`card-${id}`);
    if (!clickedCard) return;
    
    clickedCard.classList.add('active');
    clickedCard.classList.remove('dimmed');
    if (ambientThemes[id]) document.body.style.background = ambientThemes[id];

    const geoBg = document.getElementById('geo-bg');
    const geoKey = id.toString().replace('geo-', '');
    if (geoBg) {
        if (geoFocus[geoKey]) {
            geoBg.style.backgroundPosition = geoFocus[geoKey].pos;
            geoBg.style.backgroundSize = geoFocus[geoKey].size;
        } else {
            geoBg.style.backgroundPosition = 'center 85%';
            geoBg.style.backgroundSize = 'cover';
        }
    }
    
    const contentArea = document.getElementById('detail-content-area');
    const hiddenData = clickedCard.querySelector('.hidden-data');

    if (hiddenData && contentArea) {
        contentArea.innerHTML = hiddenData.innerHTML;
    } else {
        return;
    }

    let themeColor = window.getComputedStyle(clickedCard).getPropertyValue('--theme').trim() || 
                     window.getComputedStyle(clickedCard).borderLeftColor;
    detailPanel.style.setProperty('--panel-theme', themeColor);

    if (window.innerWidth <= 1024) {
        const grid = contentArea.querySelector('.panel-criteria-group');
        if (grid) {
            grid.style.setProperty('grid-template-columns', 'repeat(2, 1fr)', 'important');
        }
    }

    initDynamicLists(contentArea);
    autoNumberSubCards(contentArea);

    if (typeof jumpConnections !== 'undefined') {
        const jumpList = jumpConnections[id];
        if (jumpList && jumpList.length > 0) {
            const jumpBtnContainer = document.createElement('div');
            jumpBtnContainer.className = 'jump-btn-container';
            jumpBtnContainer.innerHTML = '<span class="jump-guide-text">더 알아보기</span>';
            jumpList.forEach(data => {
                const jumpBtn = document.createElement('button');
                jumpBtn.className = 'jump-link-btn';
                jumpBtn.innerHTML = `🚀 ${data.label}`;
                jumpBtn.onclick = function() { executeJump(data.section, data.card); };
                jumpBtnContainer.appendChild(jumpBtn);
            });
            contentArea.appendChild(jumpBtnContainer);
        }
    }

    detailPanel.classList.remove('open');
    detailPanel.style.display = 'block';
    insertPanelAfterRow(clickedCard);
    
    requestAnimationFrame(() => { 
        requestAnimationFrame(() => { 
            detailPanel.classList.add('open'); 
        }); 
    });
    
    startTextRotation(contentArea);
    
    // [핵심] 0.3초 뒤에 페이지네이션 생성 (렌더링 완료 후)
    setTimeout(() => {
        let targetY;
        const panelTop = detailPanel.getBoundingClientRect().top + window.scrollY;

        if (window.innerWidth <= 1024) {
            targetY = panelTop - 60; 
            // [호출] 여기서 실행
            setupMobilePagination(contentArea); 
        } 
        else {
            const pcHeaderHeight = document.querySelector('header')?.offsetHeight || 0;
            targetY = clickedCard.offsetTop - pcHeaderHeight - 20;
        }

        window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 300);
    
    if (typeof updateGlobalNav === 'function') updateGlobalNav(clickedCard);
}

/* ========================================================================== */
/* [패널 생성 함수] 데이터를 HTML로 변환하고 갤러리를 등록하는 역할 */
/* ========================================================================== */



// [수정] 카드 자동 생성 시스템 (표준형) - ID 전달 기능 추가
function renderCards(containerId, dataObj) {
    const container = document.getElementById(containerId);
    if (!container) return;

    Object.keys(dataObj).forEach(key => {
        const data = dataObj[key];
        const cardId = `card-${key}`;
        
        // 이미 존재하는 카드는 건너뜀 (중복 방지)
        if (document.getElementById(cardId)) return;

        const article = document.createElement('article');
        article.className = 'region-card';
        article.id = cardId;
        article.onclick = (event) => activateCard(key, event);
        
        // 테마 색상 적용
        article.style.setProperty('--theme', data.theme);

        // SVG 아이콘 처리
        let svgContent = '';
        if (data.iconSVG) {
            svgContent = `<svg class="card-bg-icon" viewBox="0 0 200 200">${data.iconSVG}</svg>`;
        }

        // 내부 HTML 조립
        // [핵심] generatePanelContent(data, key) -> key(ID)를 반드시 넘겨줘야 함
        article.innerHTML = `
            ${svgContent}
            <div class="card-header">
                <div class="header-content">
                    <h2>${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="hidden-data">
                ${generatePanelContent(data, key)} 
            </div>
        `;

        container.appendChild(article);
    });
}

// [수정] 카드 활성화 함수 (모바일 스크립트 에러 수정판)
function activateCard(id, event) {
    // 1. 이벤트 전파 방지 및 초기화
    if (event) { event.stopPropagation(); event.preventDefault(); }
    if (typeof resetTransparency === 'function') resetTransparency();

    const header = document.querySelector('header');
    if (header) { header.classList.add('scrolled', 'header-shrunk'); }
    
    // 이미 열려있는 카드를 다시 누르면 닫기
    if (activeCardId === id) { closeAllPanels(); return; }
    
    // 다른 카드들 비활성화 처리
    document.querySelectorAll('.region-card').forEach(card => { 
        card.classList.remove('active'); 
        card.classList.add('dimmed'); 
    });
    
    stopTextRotation();
    if (closeTimeout) clearTimeout(closeTimeout);
    
    // 2. 현재 클릭한 카드 식별
    activeCardId = id;
    const clickedCard = document.getElementById(`card-${id}`);
    if (!clickedCard) {
        console.error(`Card not found: card-${id}`);
        return;
    }
    
    // 스타일 활성화
    clickedCard.classList.add('active');
    clickedCard.classList.remove('dimmed');
    if (ambientThemes[id]) document.body.style.background = ambientThemes[id];

    // 배경 지도 이동 로직 (권역 섹션용)
    const geoBg = document.getElementById('geo-bg');
    const geoKey = id.toString().replace('geo-', '');
    if (geoBg) {
        if (geoFocus[geoKey]) {
            geoBg.style.backgroundPosition = geoFocus[geoKey].pos;
            geoBg.style.backgroundSize = geoFocus[geoKey].size;
        } else {
            geoBg.style.backgroundPosition = 'center 85%';
            geoBg.style.backgroundSize = 'cover';
        }
    }
    
    // 3. [데이터 로딩] 카드 내부에 숨겨진 HTML을 그대로 가져옴 (가장 안전함)
    const contentArea = document.getElementById('detail-content-area');
    const hiddenData = clickedCard.querySelector('.hidden-data');

    if (hiddenData && contentArea) {
        contentArea.innerHTML = hiddenData.innerHTML;
    } else {
        console.error("Hidden data is missing in the card.");
        return;
    }

    // 4. 테마 색상 적용
    let themeColor = window.getComputedStyle(clickedCard).getPropertyValue('--theme').trim() || 
                     window.getComputedStyle(clickedCard).borderLeftColor;
    detailPanel.style.setProperty('--panel-theme', themeColor);

    // 5. 모바일 그리드 강제 조정 (CSS 충돌 방지)
    if (window.innerWidth <= 1024) {
        const grid = contentArea.querySelector('.panel-criteria-group');
        if (grid) {
            grid.style.setProperty('grid-template-columns', 'repeat(2, 1fr)', 'important');
        }
    }

    // 6. 동적 기능 재초기화
    initDynamicLists(contentArea);
    autoNumberSubCards(contentArea);

    // 7. 도약(Jump) 버튼 생성 및 추가
    if (typeof jumpConnections !== 'undefined') {
        const jumpList = jumpConnections[id];
        if (jumpList && jumpList.length > 0) {
            const jumpBtnContainer = document.createElement('div');
            jumpBtnContainer.className = 'jump-btn-container';
            
            const guideText = document.createElement('span');
            guideText.className = 'jump-guide-text';
            guideText.innerText = '더 알아보기';
            jumpBtnContainer.appendChild(guideText);
            
            jumpList.forEach(data => {
                const jumpBtn = document.createElement('button');
                jumpBtn.className = 'jump-link-btn';
                jumpBtn.innerHTML = `🚀 ${data.label}`;
                jumpBtn.onclick = function() { executeJump(data.section, data.card); };
                jumpBtnContainer.appendChild(jumpBtn);
            });
            contentArea.appendChild(jumpBtnContainer);
        }
    }

    // 8. 패널 표시 및 애니메이션
    detailPanel.classList.remove('open');
    detailPanel.style.display = 'block';
    
    // 패널 위치 이동 (클릭한 카드 다음 줄로)
    insertPanelAfterRow(clickedCard);
    
    // [수정됨] 에러를 유발하던 setupMobilePagination 호출 삭제함
    // 모바일 가로 스크롤은 CSS(scroll-snap)로 자동 처리됩니다.
    
    // 열림 애니메이션 강제 실행
    requestAnimationFrame(() => { 
        requestAnimationFrame(() => { 
            detailPanel.classList.add('open'); 
        }); 
    });
    
    startTextRotation(contentArea);
    
    // 9. 스크롤 이동 (헤더 높이 고려)
    setTimeout(() => {
        let targetY;
        const panelTop = detailPanel.getBoundingClientRect().top + window.scrollY;

        if (window.innerWidth <= 1024) {
            // 모바일: 패널 상단이 헤더 아래에 오도록 (여유분 60px)
            targetY = panelTop - 60;
            
            // [복구] 페이지네이션 점 생성 함수 호출
            setupMobilePagination(contentArea); 
        } 
        else {
            // PC: 클릭한 카드가 보이도록
            const pcHeaderHeight = document.querySelector('header')?.offsetHeight || 0;
            targetY = clickedCard.offsetTop - pcHeaderHeight - 20;
        }

        window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 300);
    
    // 전역 네비게이션 버튼 업데이트
    if (typeof updateGlobalNav === 'function') updateGlobalNav(clickedCard);
}

// [4] 패널 삽입 위치 계산
function insertPanelAfterRow(clickedCard) {
    if (clickedCard.closest('#section-climate')) {
        clickedCard.after(detailPanel);
        detailPanel.style.borderTopLeftRadius = '12px';
        detailPanel.style.borderTopRightRadius = '12px';
        return;
    }
    const currentGrid = clickedCard.closest('.grid-container');
    if (!currentGrid) return;
    const gridColumnCount = window.getComputedStyle(currentGrid).gridTemplateColumns.split(" ").length;
    const allCards = Array.from(currentGrid.querySelectorAll('.region-card'));
    const clickedIndex = allCards.indexOf(clickedCard);
    if (clickedIndex === -1) return;
    const insertTargetCard = allCards[Math.min(Math.floor(clickedIndex / gridColumnCount) * gridColumnCount + gridColumnCount - 1, allCards.length - 1)];
    if (insertTargetCard) insertTargetCard.after(detailPanel);
    const positionInRow = clickedIndex % gridColumnCount;
    detailPanel.style.borderTopLeftRadius = '12px';
    detailPanel.style.borderTopRightRadius = '12px';
    if (gridColumnCount > 1) {
        if (positionInRow === 0) detailPanel.style.borderTopLeftRadius = '0';
        else if (positionInRow === gridColumnCount - 1) detailPanel.style.borderTopRightRadius = '0';
    }
}

// [수정] 패널 닫기 함수
function closeAllPanels(event) {
    if (event) event.stopPropagation();
    if (typeof resetTransparency === 'function') resetTransparency();
    
    const header = document.querySelector('header');
    if (header) header.classList.remove('header-shrunk', 'scrolled');
    
    activeCardId = null;
    stopTextRotation();
    
    document.querySelectorAll('.region-card').forEach(card => { 
        card.classList.remove('active', 'dimmed'); 
    });

    document.body.style.background = '';
    // [배경 복구 로직 시작]
    const currentSection = document.querySelector('.content-section.active');
    const currentId = currentSection ? currentSection.id.replace('section-', '') : '';
    
    // 섹션별 배경 이미지 매핑 (switchSection 함수와 동일)
    const bgMapForReset = { 
        'home': "url('images/world-map-main.webp')", 
        'maps': "url('images/maps-bg.webp')",
        'ocean': "url('images_ocean/ocean-bg.webp')", 
        'terrain': "url('images/world-physical-map.webp')", 
        'climate': "url('images/world-climate.webp')", 
        'special': "url('images/special.webp')", 
        'soil': "url('images/soil-bg.webp')", 
        'cloud': "linear-gradient(to bottom, #1e3c72 0%, #2a5298 40%, #6dd5fa 80%, #ffffff 100%)",
        'earth-system': "black", // [신규] 우주 배경을 위해 검은색으로 시작 (CSS로 제어 예정)
        'freshwater': "url('images/freshwater.webp')", 
        'agriculture': "url('images_human/agri.webp')",
        'livestock': "url('images_human/livestock.webp')", 
        'resources': "url('images_human/resources.webp')", 
        'energy': "url('images_human/energy.webp')", 
        'population': "url('images_human/population.webp')",
        'industry': "url('images_human/industry.webp')", 
        'city': "url('images_human/city.webp')", 
        'language': "url('images_human/language.webp')",
        'rural': "url('images/rural.webp')",
        'urban': "url('images/urban.webp')",
        'economic': "url('images/economic.webp')",
        'geopolitics': "url('images/geopolitics.webp')", 
        'religion': "url('images_human/religion.webp')", 
        'tourism': "url('images/tourism.webp')",       // 여행과 관광 지리
        'conflict': "url('images/conflict.webp')",     // 갈등과 공존의 세계
        'cultural': "url('images/cultural.webp')"      // 문화의 확산과 경관
    };

    if (currentId === 'geo') {
        document.body.style.background = 'none';
    } else if (bgMapForReset[currentId]) {
        document.body.style.backgroundImage = bgMapForReset[currentId];
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
    } else {
        document.body.style.backgroundColor = '#f5f7fa';
    }
    // [배경 복구 로직 끝]
    // (배경 복구 로직 생략 - 기존 유지)

    if (detailPanel.classList.contains('open')) {
        detailPanel.classList.remove('open');
        detailPanel.classList.add('closing');
        if (closeTimeout) clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => { 
            detailPanel.style.display = 'none'; 
            detailPanel.classList.remove('closing');
        }, 400);
    }
    
    // [추가] 점 제거
    const dots = document.querySelector('.pagination-dots');
    if (dots) dots.remove();

    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
}

// [6] 동적 리스트 및 텍스트 로테이션
function initDynamicLists(container) { container.querySelectorAll('.detail-item').forEach(item => { const exampleSpan = item.querySelector('.detail-examples'); if (!exampleSpan) return; const list = JSON.parse(exampleSpan.dataset.list || "[]"); if (list.length > 0) { exampleSpan.innerHTML = createSearchLink(list[0]); exampleSpan.dataset.index = 0; if (list.length > 1) { const fullListDiv = document.createElement('div'); fullListDiv.className = 'full-list-container'; updateHoverListContent(fullListDiv, list, 0); item.appendChild(fullListDiv); } } }); }
function updateHoverListContent(container, list, excludeIndex) { const filteredList = list.filter((_, index) => index !== excludeIndex); container.innerHTML = filteredList.length > 0 ? filteredList.map(item => createSearchLink(item)).join('<span class="separator"> · </span>') : ''; }
function startTextRotation(container) { rotationInterval = setInterval(() => { container.querySelectorAll('.detail-examples').forEach(el => { const list = JSON.parse(el.dataset.list || "[]"); if (list.length <= 1) return; el.style.opacity = 0; setTimeout(() => { let nextIndex = ((parseInt(el.dataset.index) || 0) + 1) % list.length; el.innerHTML = createSearchLink(list[nextIndex]); el.dataset.index = nextIndex; el.style.opacity = 1; const listContainer = el.closest('.detail-item')?.querySelector('.full-list-container'); if (listContainer) updateHoverListContent(listContainer, list, nextIndex); }, 500); }); }, 8000); }
function stopTextRotation() { clearInterval(rotationInterval); }

// [7] 검색 필터링
function filterCards(keyword) { const lowerKeyword = keyword.toLowerCase(); const activeSection = document.querySelector('.content-section.active'); if (!activeSection) return; const cards = activeSection.querySelectorAll('.region-card'); cards.forEach(card => { const visibleText = card.textContent.toLowerCase(); const hiddenData = Array.from(card.querySelectorAll('[data-list]')).map(el => el.dataset.list).join(' ').toLowerCase(); if (visibleText.includes(lowerKeyword) || hiddenData.includes(lowerKeyword)) { card.style.display = 'flex'; } else { card.style.display = 'none'; } }); }

// [8] 이벤트 리스너
window.addEventListener("click", e => { if (!e.target.closest(".region-card, .detail-panel, .nav-tabs, .floating-search, .global-nav-btn")) closeAllPanels(); });
window.addEventListener("resize", () => { if (activeCardId) { const activeCardElement = document.getElementById(`card-${activeCardId}`); if (activeCardElement) insertPanelAfterRow(activeCardElement); } });
window.addEventListener('DOMContentLoaded', () => { 
    updateActiveLabel(); 
    // 초기 로딩 시 홈 화면이면 눈 버튼 숨기기
    const bgBtn = document.getElementById('bg-view-btn'); 
    const homeSection = document.getElementById('section-home'); 
    if (bgBtn && homeSection && homeSection.classList.contains('active')) { 
        bgBtn.style.display = 'none'; 
    } 
});

// [9] 아코디언 토글
window.toggleAccordion = function(element, event) { if (event) event.stopPropagation(); const content = element.querySelector('.climate-accordion-body'); if (!content) return; const isExpanded = element.classList.contains('expanded'); if (isExpanded) { content.style.maxHeight = content.scrollHeight + "px"; requestAnimationFrame(() => { content.style.maxHeight = "0"; content.style.opacity = "0"; element.classList.remove('expanded'); }); } else { element.classList.add('expanded'); content.style.maxHeight = content.scrollHeight + "px"; content.style.opacity = "1"; } };

// [10] 기후 지도 토글 함수
function toggleClimateMap(btn) { const panelGroup = btn.closest('.panel-criteria-group'); if (!panelGroup) return; const isOpen = panelGroup.classList.toggle('map-open'); if (!btn.dataset.originalText) {
    btn.dataset.originalText = btn.innerHTML;
}
btn.innerHTML = isOpen ? '🔼 접기' : btn.dataset.originalText; }

// [11] 패럴랙스 & 스크롤 보정
window.addEventListener('scroll', () => { const geoSection = document.getElementById('section-geo'); if (!geoSection || !geoSection.classList.contains('active')) return; const scrollY = window.scrollY; const bgLayer = document.getElementById('geo-bg'); const dimLayer = document.getElementById('geo-dim'); if (bgLayer && dimLayer) { bgLayer.style.transform = `translateY(${-scrollY * 0.05}px)`; const progress = Math.min(scrollY / 600, 1); bgLayer.style.filter = `blur(${progress * 3}px)`; dimLayer.style.backgroundColor = `rgba(12, 22, 59, ${progress * 0.6})`; } });
const originalScrollTo = window.scrollTo;
window.scrollTo = function(options) { 
    const geoSection = document.getElementById('section-geo'); 
    // [수정] PC 화면(1024px 초과)일 때만 작동하도록 제한
    if (window.innerWidth > 1024 && geoSection && geoSection.classList.contains('active') && activeCardId) { 
        const card = document.getElementById(`card-${activeCardId}`); 
        if (card) { 
            const headerHeight = document.querySelector('header')?.offsetHeight || 0; 
            const targetY = card.getBoundingClientRect().top + window.scrollY - headerHeight - 20; 
            originalScrollTo.call(window, { top: targetY, behavior: 'smooth' }); 
            return; 
        } 
    } 
    originalScrollTo.apply(window, arguments); 
};

// [12] 그래프 토글
function toggleGraph(button) { event.stopPropagation(); const graphContainer = button.nextElementSibling; const accordionBody = button.closest('.climate-accordion-body'); if (!graphContainer || !accordionBody) return; const isOpen = graphContainer.classList.toggle('open'); button.classList.toggle('active', isOpen); button.innerHTML = isOpen ? '🔼 닫기' : '📊 보기'; const currentAccordionHeight = parseInt(accordionBody.style.maxHeight || accordionBody.scrollHeight); const graphHeight = graphContainer.scrollHeight; if (isOpen) { graphContainer.style.maxHeight = graphHeight + "px"; accordionBody.style.maxHeight = (currentAccordionHeight + graphHeight) + "px"; } else { graphContainer.style.maxHeight = null; accordionBody.style.maxHeight = Math.max(0, currentAccordionHeight - graphHeight) + "px"; } }

// [14] 패널 라벨 업데이트
function updateActiveLabel() { document.querySelectorAll('.nav-group').forEach(group => { const activeTab = group.querySelector('.sub-tab-btn.active'); if (activeTab) { const titleEl = activeTab.querySelector('.menu-title'); const iconEl = activeTab.querySelector('.menu-icon'); const labelText = titleEl ? (titleEl.innerText || titleEl.textContent || '').trim() : ''; const iconText = iconEl ? (iconEl.innerText || iconEl.textContent || '').trim() : ''; if (labelText) { group.setAttribute('data-active-tab', iconText + ' ' + labelText); } else { group.removeAttribute('data-active-tab'); } } else { group.removeAttribute('data-active-tab'); } }); }

// [신규] 2단계: 도약 및 복귀 함수 정의

// 1. 도약 실행 함수 (출발 -> 도착)
// 1. 도약 실행 함수 (콜백 방식 적용)
// 1. 도약 실행 함수 (저장 로직 강화)
function executeJump(targetSection, targetCardId) {
    // A. [수정] 현재 활성화된 섹션 ID를 확실하게 가져옴
    // (active 클래스가 붙은 섹션을 찾되, 없으면 home으로 간주)
    const activeSec = document.querySelector('.content-section.active');
    const currentSection = activeSec ? activeSec.id.replace('section-', '') : 'home';
    
    // 현재 스크롤 위치
    const currentScroll = window.scrollY;
    
    // 현재 열려있는 카드 ID (전역변수 activeCardId 활용)
    const currentCard = activeCardId;

    // B. 기록 저장 (이제 확실한 출발지 정보를 담습니다)
    jumpHistory = {
        section: currentSection,
        cardId: currentCard,
        scroll: currentScroll
    };

    // C. 버튼 보여주기
    const returnBtn = document.getElementById('return-jump-btn');
    if(returnBtn) returnBtn.style.display = 'block';

    // D. 이동 시작
    switchSection(targetSection);
    
    // 0.6초 뒤 도착지 카드 열기
    setTimeout(() => {
        activateCard(targetCardId);
    }, 600);
}

// 2. 복귀 실행 함수 (투박하지만 확실한 딜레이 방식)
// 2. 복귀 실행 함수 (안전장치 추가)
function returnToOrigin() {
    // 저장된 기록이 없거나, 카드 정보가 없으면 취소
    if (!jumpHistory || !jumpHistory.section) {
        console.error("돌아갈 기록이 없습니다."); // F12 콘솔에서 확인용
        return;
    }

    // A. 저장된 섹션으로 이동
    switchSection(jumpHistory.section);
    
    // B. 0.6초 대기 후 카드 열기
    setTimeout(() => {
        // 저장된 카드가 있으면 열기
        if (jumpHistory.cardId) {
            activateCard(jumpHistory.cardId);
        }
        
        // C. 다시 0.6초 대기 후 스크롤 복구 및 버튼 숨김
        setTimeout(() => {
            window.scrollTo({ top: jumpHistory.scroll, behavior: 'smooth' });
            
            // 초기화
            jumpHistory = null;
            document.getElementById('return-jump-btn').style.display = 'none';
        }, 600);
        
    }, 600);
}

// [15] 배경 보기 및 투명화 기능 (키보드/마우스 통합 & 자동복구)
// 1. 기존 HTML onclick 무력화
if (bgBtn) bgBtn.onclick = null;

if (bgBtn) {
    // [기능 A] 마우스 꾹 누르기 (Hold) - 투명화
    const startAction = (e) => {
        const isGeoSection = document.getElementById('section-geo').classList.contains('active');
        if (isGeoSection) {
            e.preventDefault();
            setGeoTransparency(true); // 투명하게
        }
    };

    // [기능 B] 마우스 떼기 - 원상복구
    const endAction = () => {
        const isGeoSection = document.getElementById('section-geo').classList.contains('active');
        if (isGeoSection) {
            setGeoTransparency(false); // 불투명하게 복구
        }
    };

    // [기능 C] 클릭 (일반 섹션 팝업 / 권역 섹션은 무시)
    const clickAction = (e) => {
        const isGeoSection = document.getElementById('section-geo').classList.contains('active');
        if (!isGeoSection) {
            openBgModalLogic();
        } else {
            e.stopPropagation(); // 권역 섹션에서는 클릭이 뒤로 새지 않게 방어
        }
    };

    bgBtn.addEventListener('mousedown', startAction);
    bgBtn.addEventListener('touchstart', startAction, {passive: false});
    bgBtn.addEventListener('mouseup', endAction);
    bgBtn.addEventListener('mouseleave', endAction);
    bgBtn.addEventListener('touchend', endAction);
    bgBtn.addEventListener('click', clickAction);
}

// 투명화 상태를 실제로 적용하는 함수 (공통 사용)
function setGeoTransparency(makeTransparent) {
    const activePanel = document.querySelector('.detail-panel.open');
    const dimLayer = document.getElementById('geo-dim');
    const gridContainer = document.querySelector('#section-geo .grid-container');
    const bgLayer = document.getElementById('geo-bg');

    if (makeTransparent) {
        // 투명하게
        if (activePanel) activePanel.style.opacity = '0';
        if (dimLayer) dimLayer.style.opacity = '0';
        if (gridContainer) gridContainer.style.opacity = '0';
        if (bgLayer) bgLayer.style.filter = 'none';
        isGeoTransparent = true;
    } else {
        // 복구
        if (activePanel) activePanel.style.opacity = '1';
        if (dimLayer) dimLayer.style.opacity = '1';
        if (gridContainer) gridContainer.style.opacity = '1';
        if (bgLayer) bgLayer.style.filter = ''; // CSS 원래 값으로
        isGeoTransparent = false;
    }
}

function openBgModalLogic() {
    const currentBg = document.body.style.backgroundImage;
    const urlMatch = currentBg.match(/url\(['"]?(.*?)['"]?\)/);
    if (urlMatch && urlMatch[1]) {
        const bgModalImg = document.getElementById('bg-modal-img');
        const bgModalTitle = document.getElementById('bg-modal-title');
        const bgModalDesc = document.getElementById('bg-modal-desc');
        bgModalImg.src = urlMatch[1];
        bgModalTitle.innerText = currentSectionTitle;
        bgModalDesc.innerText = currentSectionDesc;
        bgModalTitle.style.display = currentSectionTitle ? 'block' : 'none';
        bgModalDesc.style.display = currentSectionDesc ? 'block' : 'none';
        bgModal.style.display = 'flex';
        requestAnimationFrame(() => bgModal.classList.add('show'));
    } else {
        alert("볼 수 있는 배경 이미지가 없습니다.");
    }
}

function closeBgModal() {
    const bgModal = document.getElementById('bg-modal');
    bgModal.classList.remove('show');
    setTimeout(() => { bgModal.style.display = 'none'; }, 300);
}

// [16] 지도 위치 초기화 함수
function resetMap() { 
    const geoBg = document.getElementById('geo-bg'); 
    if (geoBg) { 
        geoBg.style.backgroundSize = 'cover'; 
        geoBg.style.backgroundPosition = 'center 85%'; 
    } 
}

// [17] 전역 네비게이션 버튼 제어 & 키보드 단축키 로직 통합
if (prevBtn && nextBtn) {
    function navigateGlobal(direction) {
        if (!activeCardId) return;
        
        // 투명화 상태라면 복구 먼저 (안전장치)
        if (isGeoTransparent) resetTransparency();

        const currentCard = document.getElementById(`card-${activeCardId}`);
        if (!currentCard) return;
        
        let targetCard = (direction === 'next') ? currentCard.nextElementSibling : currentCard.previousElementSibling;
        
        // detail-panel 건너뛰기
        while (targetCard && !targetCard.classList.contains('region-card')) {
            targetCard = (direction === 'next') ? targetCard.nextElementSibling : targetCard.previousElementSibling;
        }
        
        if (targetCard && targetCard.classList.contains('region-card')) {
            const newId = targetCard.id.replace('card-', '');
            activateCard(newId);
        }
    }
    prevBtn.addEventListener('click', () => navigateGlobal('prev'));
    nextBtn.addEventListener('click', () => navigateGlobal('next'));

    function updateGlobalNav(currentCard) {
        if (!currentCard) { prevBtn.style.display = 'none'; nextBtn.style.display = 'none'; return; }
        let prevCard = currentCard.previousElementSibling;
        while (prevCard && !prevCard.classList.contains('region-card')) { prevCard = prevCard.previousElementSibling; }
        let nextCard = currentCard.nextElementSibling;
        while (nextCard && !nextCard.classList.contains('region-card')) { nextCard = nextCard.nextElementSibling; }
        prevBtn.style.display = (prevCard) ? 'block' : 'none';
        nextBtn.style.display = (nextCard) ? 'block' : 'none';
    }
}

/* [최종 통합] 키보드 조작 기능 (ESC, 방향키, V키) */
document.addEventListener('keydown', (event) => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

    const isPanelOpen = detailPanel && detailPanel.classList.contains('open');

    // 1. ESC 키: 패널 닫기
    if (event.key === 'Escape') {
        if (isPanelOpen) {
            // 투명화 상태였다면 복구 후 닫기
            if (isGeoTransparent) resetTransparency();
            closeAllPanels();
        }
        // 배경 팝업이 열려있다면 닫기
        const modal = document.getElementById('bg-modal');
        if (modal && modal.style.display === 'flex') closeBgModal();
    }

    // 2. V 키: 배경 보기 토글
    if (event.key === 'v' || event.key === 'V') {
        if (bgBtn && bgBtn.style.display !== 'none') {
            const isGeoSection = document.getElementById('section-geo').classList.contains('active');
            
            if (isGeoSection) {
                // 권역 섹션: 투명화 토글
                setGeoTransparency(!isGeoTransparent);
            } else {
                // 다른 섹션: 팝업 모달 토글
                const modal = document.getElementById('bg-modal');
                if(modal.style.display === 'flex') closeBgModal();
                else openBgModalLogic();
            }
        }
    }
    
    // 3. 방향키: 카드 이동
    if (isPanelOpen) {
        if (event.key === 'ArrowLeft') {
            if (prevBtn && prevBtn.style.display !== 'none') navigateGlobal('prev');
        } else if (event.key === 'ArrowRight') {
            if (nextBtn && nextBtn.style.display !== 'none') navigateGlobal('next');
        }
    }
});

// 다른 행동 시 투명화 자동 복구 (안전장치)
function resetTransparency() {
    if (isGeoTransparent) {
        setGeoTransparency(false);
    }
}
// [신규] 대기 대순환 띠 토글 기능
const climateBandsBtn = document.getElementById('climate-bands-toggle');
if (climateBandsBtn) {
    climateBandsBtn.addEventListener('click', () => {
        document.body.classList.toggle('show-climate-bands');
        climateBandsBtn.classList.toggle('active');
    });
}
// [최종] 돌아가기 버튼 기능 연결
if (returnBtn) {
    returnBtn.addEventListener('click', returnToOrigin);
}

// [수정] 중분류 카드 자동 번호 매기기 함수 (기후 섹션 예외 처리 추가)
function autoNumberSubCards(container) {
    // 1. 현재 활성화된 카드가 'climate'로 시작하면(기후 섹션이면) 즉시 종료
    // 기후 섹션은 숫자가 아니라 이모지를 보여줘야 하기 때문입니다.
    if (activeCardId && String(activeCardId).startsWith('climate')) return;

    // 2. 그 외의 섹션(지형, 인문 등)은 기존대로 번호를 매김
    const subCards = container.querySelectorAll('.sub-region-card');
    subCards.forEach((card, index) => {
        const numberElement = card.querySelector('.sub-title-number');
        if (numberElement) {
            numberElement.textContent = index + 1;
        }
    });
}


// [신규] 기후 카드 전용 렌더링 함수 (고산/특수 기후 구분선 제거 적용)
function renderClimateCards(containerId, dataObj) {
    const container = document.getElementById(containerId);
    if (!container) return;

    Object.keys(dataObj).forEach(key => {
        // 1. '비위도성 기후' 구분선 삽입 로직
        if (key === 'climate-s') {
            const divider = document.createElement('div');
            divider.className = 'climate-divider';
            divider.innerHTML = '<span>비위도성 기후</span>';
            container.appendChild(divider);
        }

        const data = dataObj[key];
        const cardId = `card-${key}`;
        
        if (document.getElementById(cardId)) return;

        const article = document.createElement('article');
        article.className = 'region-card';
        article.id = cardId;
        article.onclick = (event) => activateCard(key, event);
        article.style.setProperty('--theme', data.theme);

        // 2. 배경 아이콘
        const svgContent = `<svg class="card-bg-icon" viewBox="0 0 200 200">${data.iconSVG}</svg>`;

        // 3. 헤더 (기후 분류 가이드)
        // 원본과 동일한 폰트/정렬 스타일 강제 주입
        const baseStyle = 'display: flex; flex-direction: column; justify-content: center; font-size: 0.9rem; font-family: "Pretendard", sans-serif; font-weight: 500; color: var(--text-secondary); line-height: 1.3;';
        const styleGroup2 = baseStyle + ' align-items: flex-end; padding-right: 15px;';
        const styleGroup3 = baseStyle + ' align-items: flex-start; padding-left: 15px;';

        let group2HTML = `<div class="climate-sub-group-2" style="${styleGroup2}">`;
        if (data.guides.group2.length > 0) {
            group2HTML += data.guides.group2.map(g => `<div class="guide-row"><span class="guide-char">${g.char}</span>${g.text}</div>`).join('');
        }
        group2HTML += `</div>`;
        
        let group3HTML = `<div class="climate-sub-group-3" style="${styleGroup3}">`;
        if (data.guides.group3.length > 0) {
            group3HTML += data.guides.group3.map(g => `<div class="guide-row"><span class="guide-char">${g.char}</span>${g.text}</div>`).join('');
        }
        group3HTML += `</div>`;

        // [수정] 고산(s)과 특수(x) 기후에서는 구분선을 제거
        let separatorHTML = `<div class="classification-separator"></div>`;
        if (key === 'climate-s' || key === 'climate-x') {
            separatorHTML = '';
        }

        const headerHTML = `
            <div class="card-header">
                <div class="header-content">
                    <h2><span class="climate-char-box">${data.char}</span> ${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
                
                ${group2HTML}
                ${separatorHTML}
                ${group3HTML}
                
                <div class="expand-icon">▼</div>
            </div>
        `;

        // 4. 패널 내부 콘텐츠
        let mapHTML = '';
        if (data.criteria.mapImage) {
            mapHTML = `<div class="climate-map-area"><img src="${data.criteria.mapImage}" alt="${data.title} 분포도" class="climate-map-img"></div>`;
        }
        
        const criteriaHTML = `
            <div class="panel-criteria-group">
                <button class="map-toggle-btn" onclick="toggleClimateMap(this)">🗺️ 지도 펼치기</button>
                <div class="criteria-wrapper">
                    <div class="criteria-item"><span class="criteria-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.25a1 1 0 0 1 1 1V15.5a5.25 5.25 0 1 1-2 0V2.25a1 1 0 0 1 1-1Zm0 17a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"/></svg></span><div class="criteria-content"><span class="criteria-label">쾨펜의 구분법</span><span class="criteria-text">${data.criteria.koppen}</span></div></div>
                    <div class="criteria-item"><span class="criteria-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.211 3.32a1.25 1.25 0 0 0-1.768 0l-7.25 7.25a.75.75 0 0 1-1.06 0L2.88 3.32a1.25 1.25 0 0 0-1.767 1.768l7.078 7.078a.25.25 0 0 0 0 .354L2.95 17.77a1.25 1.25 0 1 0 1.768 1.768l5.25-5.25a.75.75 0 0 1 1.06 0l5.25 5.25a1.25 1.25 0 1 0 1.768-1.768l-5.25-5.25a.25.25 0 0 0 0-.354l7.078-7.078a1.25 1.25 0 0 0 0-1.768Z"/></svg></span><div class="criteria-content"><span class="criteria-label">주요 식생 및 토양</span><span class="criteria-text">${data.criteria.soilVeg}</span></div></div>
                </div>
                ${mapHTML}
            </div>
        `;

        let featuresHTML = '';
        if (data.features && data.features.length > 0) {
            featuresHTML = `<div class="panel-grid" style="grid-template-columns: repeat(2, 1fr); gap: 20px; border-bottom: 1px dashed rgba(0,0,0,0.1); padding-bottom: 30px; margin-bottom: 30px;">`;
            data.features.forEach(feat => {
                let itemsHTML = `<ul class="detail-list" style="border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 20px; margin-top: 20px;">`;
                feat.items.forEach(item => {
                    itemsHTML += `
                        <li class="detail-item">
                            <span class="detail-name">${item.name}</span>
                            <div class="meta-info" style="justify-content: flex-start; gap: 20px;">${item.meta.split('·').map(m => `<span>${m.trim()}</span>`).join('')}</div>
                            <span class="detail-desc">${item.desc}</span>
                        </li>`;
                });
                itemsHTML += `</ul>`;

                featuresHTML += `
                    <div class="sub-region-card" style="margin: 0; cursor: pointer;" onclick="this.classList.toggle('expanded')">
                        <div class="sub-title-group">
                            <div class="sub-title-number">${feat.icon}</div>
                            <div class="sub-title-content">
                                <h3 class="sub-title-heading">${feat.title}</h3>
                                <p class="sub-title-description">${feat.desc}</p>
                            </div>
                            <div class="accordion-arrow">▼</div>
                        </div>
                        <div class="accordion-body">${itemsHTML}</div>
                    </div>`;
            });
            featuresHTML += `</div>`;
        }

        let subClimatesHTML = `<div class="climate-sub-grid">`;
        data.subClimates.forEach(sub => {
            let itemsHTML = `<ul class="detail-list">`;
            sub.items.forEach(item => {
                const linkedName = createSearchLink(item.name);
                const examplesAttr = JSON.stringify(item.examples).replace(/"/g, '&quot;');
                
                // [추가] 메타데이터가 있으면 HTML 생성, 없으면 빈 문자열
                const metaInfo = item.meta ? `<div class="meta-info">${item.meta}</div>` : '';
                
                itemsHTML += `
                    <li class="detail-item">
                        <div class="detail-header">
                            <span class="detail-name">${linkedName}</span>
                            <span class="detail-examples" data-list="${examplesAttr}">${item.examples[0]}</span>
                        </div>
                        ${metaInfo} <!-- [추가] 여기에 메타데이터 삽입 -->
                        <span class="detail-desc">${item.desc}</span>
                    </li>`;
            });
            itemsHTML += `</ul>`;

            subClimatesHTML += `
                <div class="climate-sub-card" onclick="toggleAccordion(this, event)">
                    <div class="climate-sub-header">
                        <div style="display:flex; align-items:center;">
                            <div class="climate-code">${sub.code}</div>
                            <div class="climate-name-group"><h3>${sub.name}</h3><p>${sub.desc}</p></div>
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="climate-accordion-body">
                        <div class="climate-detail-wrapper">
                            <button class="graph-toggle-btn" onclick="toggleGraph(this)">📊 보기</button>
                            <div class="graph-container">
                                <div class="climate-graph-box"><img src="${sub.graph}" alt="${sub.code} 기후 그래프" class="climate-graph-img"></div>
                            </div>
                            ${itemsHTML}
                        </div>
                    </div>
                </div>`;
        });
        subClimatesHTML += `</div>`;

        article.innerHTML = `
            ${svgContent}
            ${headerHTML}
            <div class="hidden-data">
                ${criteriaHTML}
                ${featuresHTML}
                ${subClimatesHTML}
            </div>
        `;

        container.appendChild(article);
    });
}

/* [신규] 구름 렌더링 함수 (독립 함수로 분리) */
function renderCloudGrid(containerId, dataObj) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    // 데이터 그룹 순회 (상층 -> 중층 -> 하층 -> 수직)
    const order = ["cloud-high", "cloud-mid", "cloud-low", "cloud-vertical"];

    order.forEach(groupKey => {
        const clouds = dataObj[groupKey];
        if (!clouds) return;

        clouds.forEach(cloud => {
            const card = document.createElement('div');
            // CSS 클래스 조합: 기본 + 행 위치 + (수직/성장 여부)
            card.className = `cloud-card ${cloud.gridArea || ''}`;
            
            if (cloud.isVertical) {
                card.classList.add('vertical-cloud');
            }
            if (cloud.isGrowing) {
                card.classList.add('growing-cloud');
            }

            // 이미지 경로 자동 생성
            // [수정] 파일명이 대문자로 시작한다면 toLowerCase()를 제거해야 함
            const imageName = cloud.english + ".webp"; 
            card.style.setProperty('--bg-image', `url('images/${imageName}')`);

            // 태그 생성
            let tagsHTML = '';
            if (cloud.phenomena) {
                tagsHTML = cloud.phenomena.map(p => `<span class="phenomenon-tag">${p}</span>`).join('');
            }

            // 내용 주입
            card.innerHTML = `
                <div class="cloud-title-group">
                    <h3 class="cloud-name">${cloud.name}</h3>
                    <span class="cloud-english">${cloud.english}</span>
                </div>
                <p class="cloud-desc">${cloud.desc}</p>
                <div class="cloud-phenomena">${tagsHTML}</div>
            `;
            
            container.appendChild(card);
        });
    });
}

/* [최종 통합] 페이지 로딩 및 초기화 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 모든 데이터 렌더링 실행
    if (typeof geoData !== 'undefined') renderCards('main-grid', geoData);
    if (typeof terrainData !== 'undefined') renderCards('terrain-grid', terrainData);
    if (typeof specialData !== 'undefined') renderCards('special-grid', specialData);
    if (typeof freshwaterData !== 'undefined') renderCards('freshwater-grid', freshwaterData);
    if (typeof oceanData !== 'undefined') renderCards('ocean-grid', oceanData);
    if (typeof climateData !== 'undefined') renderClimateCards('climate-main-grid', climateData);
    if (typeof populationData !== 'undefined') renderCards('population-grid', populationData);
    if (typeof agricultureData !== 'undefined') renderCards('agriculture-grid', agricultureData);
    if (typeof livestockData !== 'undefined') renderCards('livestock-grid', livestockData);
    if (typeof resourcesData !== 'undefined') renderCards('resources-grid', resourcesData);
    if (typeof energyData !== 'undefined') renderCards('energy-grid', energyData);
    if (typeof industryData !== 'undefined') renderCards('industry-grid', industryData);
    if (typeof cityData !== 'undefined') renderCards('city-grid', cityData);
    if (typeof languageData !== 'undefined') renderCards('language-grid', languageData);
    if (typeof religionData !== 'undefined') renderCards('religion-grid', religionData);
    if (typeof tourismData !== 'undefined') renderCards('tourism-grid', tourismData);
    if (typeof geopoliticsData !== 'undefined') renderCards('geopolitics-grid', geopoliticsData);
    if (typeof conflictData !== 'undefined') renderCards('conflict-grid', conflictData);
    if (typeof economicData !== 'undefined') renderCards('economic-grid', economicData);
    if (typeof ruralData !== 'undefined') renderCards('rural-grid', ruralData);
    if (typeof urbanData !== 'undefined') renderCards('urban-grid', urbanData);
    if (typeof culturalData !== 'undefined') renderCards('cultural-grid', culturalData);
    if (typeof soilData !== 'undefined') renderCards('soil-grid', soilData);
    if (typeof mapsData !== 'undefined') renderCards('maps-grid', mapsData);
    
    // [중요] 구름 섹션 렌더링 호출
    if (typeof cloudData !== 'undefined') renderCloudGrid('cloud-grid', cloudData);
    if (typeof precipData !== 'undefined') renderPrecipitation('precip-panel', precipData);
    // [추가] 기단과 전선 렌더링 호출
    if (typeof airMassData !== 'undefined') renderAirMass('air-mass-panel', airMassData);
    if (typeof frontData !== 'undefined') renderFronts('front-panel', frontData);


    // 2. 모바일 메뉴 기능 초기화
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const overlay = document.getElementById('mobile-nav-overlay');
    const panel = document.getElementById('mobile-nav-panel');
    const mobileNavContent = document.getElementById('mobile-nav-content');

    if (!mobileMenuBtn || !mobileNavContent) return;

    // 데스크톱 메뉴 복사 및 재조립
    const allDesktopItems = document.querySelectorAll('.header-left .logo-btn, .header-right .tab-btn, .header-right .nav-group');
    let mobileMenuHTML = '';
    allDesktopItems.forEach(item => {
        if (item.classList.contains('logo-btn')) {
            const homeBtn = document.createElement('button');
            homeBtn.className = 'tab-btn active'; 
            homeBtn.setAttribute('onclick', "switchSection('home')");
            homeBtn.innerHTML = `<span class="menu-icon">🏠</span>HOME`;
            mobileMenuHTML += homeBtn.outerHTML;
        } else {
            mobileMenuHTML += item.outerHTML;
        }
    });
    mobileNavContent.innerHTML = mobileMenuHTML;

    // 메뉴 열고 닫는 함수
    const openMenu = () => {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    // 이벤트 연결
    mobileMenuBtn.addEventListener('click', openMenu);
    mobileCloseBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // 패널 내부 클릭 동작
    mobileNavContent.addEventListener('click', (e) => {
        const targetButton = e.target.closest('button');
        if (!targetButton) return;

        if (targetButton.classList.contains('group-btn')) {
            const currentGroup = targetButton.closest('.nav-group');
            mobileNavContent.querySelectorAll('.nav-group.open').forEach(group => {
                if (group !== currentGroup) group.classList.remove('open');
            });
            currentGroup.classList.toggle('open');
        } else {
            closeMenu();
        }
    });
});
/* [신규] 강수 유형 렌더링 함수 */
function renderPrecipitation(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'precip-card';
        
        card.innerHTML = `
            <div class="precip-header">
                <h3 class="precip-title">${item.title}</h3>
                <span class="precip-meta">${item.meta}</span>
            </div>
            <p class="precip-desc">${item.desc}</p>
            <div class="precip-related">
                <span class="related-label">연관 구름:</span> ${item.related}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// [최종 복구] 모바일 페이지네이션 (패널 내부 추가)
function setupMobilePagination(contentArea) {
    // 1. 모바일 아니면 중단
    if (window.innerWidth > 1024) return;

    const panelGrid = contentArea.querySelector('.panel-grid');
    if (!panelGrid) return;

    // 2. 기존 점 제거
    const oldDots = document.querySelector('.pagination-dots');
    if (oldDots) oldDots.remove();

    // 3. 카드 개수 확인
    const cards = panelGrid.querySelectorAll('.sub-region-card');
    if (cards.length <= 1) return;

    // 4. 점 컨테이너 생성
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'pagination-dots';
    
    // 5. 점 생성
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'dot active' : 'dot';
        dotsContainer.appendChild(dot);
    });

    // [핵심 수정] body가 아니라 패널(detail-panel-template)에 추가
    const panel = document.getElementById('detail-panel-template');
    panel.appendChild(dotsContainer);

    // 6. 스크롤 이벤트
    panelGrid.onscroll = () => {
        const scrollLeft = panelGrid.scrollLeft;
        const cardWidth = cards[0].offsetWidth + 15; 
        const activeIndex = Math.round(scrollLeft / cardWidth);
        
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((d, i) => {
            if (i === activeIndex) d.classList.add('active');
            else d.classList.remove('active');
        });
    };
}

/* [복구] 아티클 모달 제어 함수 (Deep Dive) */
function openArticleModal(btn) {
    // 버튼 내부에 숨겨진 데이터 찾기
    const hiddenContent = btn.querySelector('.hidden-article-content');
    if (!hiddenContent) return;

    // 데이터 추출
    const title = hiddenContent.dataset.title;
    const imageSrc = hiddenContent.dataset.image;
    const bodyContent = hiddenContent.innerHTML;

    // 모달 요소 가져오기
    const modal = document.getElementById('article-modal');
    const modalTitle = document.getElementById('article-title');
    const modalImgContainer = document.getElementById('article-img-container');
    const modalImg = document.getElementById('article-img');
    const modalBody = document.getElementById('article-body');

    if (modal && modalTitle && modalBody) {
        // 내용 주입
        modalTitle.innerHTML = title;
        modalBody.innerHTML = bodyContent;

        // 이미지 처리 (이미지가 있을 때만 표시)
        if (imageSrc && imageSrc !== "undefined" && modalImgContainer && modalImg) {
            modalImg.src = imageSrc;
            modalImgContainer.style.display = 'block';
        } else if (modalImgContainer) {
            modalImgContainer.style.display = 'none';
        }

        // 모달 열기 (애니메이션 적용)
        modal.style.display = 'flex';
        requestAnimationFrame(() => {
            modal.classList.add('show');
        });
        document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }
}

function closeArticleModal(event) {
    const modal = document.getElementById('article-modal');
    if (modal) {
        modal.classList.remove('show');
        // 애니메이션(0.3초)이 끝난 뒤 display: none 처리
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // 스크롤 복구
        }, 300);
    }
}

/* [지구 시스템] 엘니뇨/라니냐 토글 */
function setEnso(state) {
    const container = document.querySelector('.earth-system-ocean-view');
    const btns = document.querySelectorAll('.enso-controls button');
    
    // 클래스 초기화
    container.classList.remove('elnino', 'lanina');
    
    // 버튼 활성 상태 초기화
    btns.forEach(btn => btn.classList.remove('active'));
    
    // 상태 적용
    if (state !== 'normal') {
        container.classList.add(state);
    }
    
    // 클릭한 버튼 활성화 (텍스트로 찾기)
    const targetBtn = Array.from(btns).find(btn => {
        if (state === 'normal') return btn.innerText === '평상시';
        if (state === 'elnino') return btn.innerText === '엘니뇨';
        if (state === 'lanina') return btn.innerText === '라니냐';
    });
    if (targetBtn) targetBtn.classList.add('active');
}

/* [신규] 기단 렌더링 함수 */
function renderAirMass(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'precip-card'; // 기존 스타일 재사용
        
        card.innerHTML = `
            <div class="precip-header">
                <h3 class="precip-title">${item.title}</h3>
                <span class="precip-meta">${item.meta}</span>
            </div>
            <p class="precip-desc">${item.desc}</p>
            <div class="precip-related">
                <span class="related-label">발원지:</span> ${item.origin}
            </div>
        `;
        container.appendChild(card);
    });
}

/* [신규] 전선 렌더링 함수 */
function renderFronts(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'precip-card'; // 기존 스타일 재사용
        
        card.innerHTML = `
            <div class="precip-header">
                <h3 class="precip-title">${item.title} <span style="float:right;">${item.symbol}</span></h3>
                <span class="precip-meta">${item.meta}</span>
            </div>
            <p class="precip-desc">${item.desc}</p>
            <div class="precip-related">
                <span class="related-label">동반 구름:</span> ${item.cloud}
            </div>
        `;
        container.appendChild(card);
    });
}

/* [신규] 홈 화면 랜덤 탐험 데이터 */
const discoveryData = [
    { text: "🤠 카우보이와 서부극의 무대", section: "geo", card: "7" },
    { text: "🧛 드라큘라의 성, 루마니아", section: "religion", card: "religion-2" },
    { text: "☕ 커피의 고향, 에티오피아", section: "agriculture", card: "agri-3" },
    { text: "🌋 불의 고리, 환태평양 조산대", section: "terrain", card: "terrain-1" },
    { text: "🕋 이슬람의 성지, 메카", section: "religion", card: "religion-3" },
    { text: "🐧 펭귄이 사는 사막?", section: "special", card: "special-3" },
    { text: "🏰 해가 지지 않는 나라", section: "geopolitics", card: "geopol-2" },
    { text: "📱 아이폰은 어디서 만들어질까?", section: "industry", card: "industry-2" },
    { text: "🌪️ 토네이도의 고향", section: "climate", card: "climate-b" },
    { text: "💎 피의 다이아몬드", section: "resources", card: "resources-3" },
    { text: "🍜 쌀국수의 나라", section: "geo", card: "2" },
    { text: "💃 정열의 탱고와 아르헨티나", section: "geo", card: "8" },
    { text: "🧊 얼음으로 뒤덮인 땅, 툰드라", section: "climate", card: "climate-e" },
    { text: "🏭 산업혁명의 발상지", section: "industry", card: "industry-1" },
    { text: "🏙️ 세계의 수도, 뉴욕", section: "city", card: "city-1" },
    { text: "🌊 아마존강의 거대한 숨결", section: "freshwater", card: "hydro-2" },
    { text: "🕌 타지마할의 나라", section: "geo", card: "3" },
    { text: "🥖 바게트와 예술의 도시", section: "city", card: "city-5" },
    { text: "🍣 스시와 장인 정신", section: "geo", card: "1" },
    { text: "🦁 사파리의 왕국", section: "geo", card: "5" },
    // [자연지리]
    { text: "🌋 폼페이를 삼킨 화산", section: "special", card: "special-5" }, // 화산 지형
    { text: "💧 지구가 빚은 물방울 다이아몬드", section: "special", card: "special-4" }, // 카르스트 (석회동굴)
    { text: "🌊 바다가 갈라지는 기적", section: "special", card: "special-6" }, // 해안 지형 (육계도)
    { text: "❄️ 겨울왕국의 실제 무대", section: "special", card: "special-2" }, // 빙하 지형 (피오르)
    { text: "🏜️ 소금으로 된 하얀 사막", section: "special", card: "special-3" }, // 건조 지형 (우유니)

    // [인문지리 - 도시/문화]
    { text: "🎭 가면 뒤에 숨은 도시", section: "city", card: "city-5" }, // 베네치아 (축제)
    { text: "🎰 사막 위의 라스베이거스", section: "city", card: "city-2" }, // 포디즘 도시 (교외화/위락)
    { text: "🏰 해리포터가 탄생한 거리", section: "city", card: "city-1" }, // 런던 (문화)
    { text: "🎨 가우디가 짓다 만 성당", section: "tourism", card: "tourism-2" }, // 역사 유적 (바르셀로나)
    { text: "💀 죽은 자들의 날 축제", section: "tourism", card: "tourism-5" }, // 축제 (멕시코)

    // [경제/산업]
    { text: "🍫 초콜릿의 씁쓸한 비밀", section: "agriculture", card: "agri-3" }, // 카카오
    { text: "🚗 자동차 왕국 디트로이트", section: "industry", card: "industry-1" }, // 자동차 산업
    { text: "🚀 우주로 가는 항구", section: "industry", card: "industry-5" }, // 항공우주
    { text: "🔋 전기차의 심장, 리튬", section: "resources", card: "resources-4" }, // 전략 광물
    { text: "👗 패스트 패션의 공장", section: "industry", card: "industry-2" }, // 섬유/의류

    // [지정학/분쟁]
    { text: "⚔️ 유럽의 화약고", section: "conflict", card: "conflict-2" }, // 발칸 반도
    { text: "🚧 38선과 DMZ", section: "geopolitics", card: "geopol-3" }, // 경계 (전횡적 경계)
    { text: "🏴‍☠️ 소말리아 해적의 바다", section: "ocean", card: "hydro-7" }, // 아라비아해/홍해
    { text: "🛢️ 석유가 흐르는 좁은 길목", section: "geopolitics", card: "geopol-4" }, // 조임목 (호르무즈)
    { text: "🧊 녹아내리는 북극의 자원", section: "conflict", card: "conflict-3" }, // 자원 전쟁

    // [역사/종교]
    { text: "✡️ 통곡의 벽 앞에서", section: "religion", card: "religion-1" }, // 유대교
    { text: "☸️ 달라이 라마의 고향", section: "religion", card: "religion-5" }, // 불교 (티베트)
    { text: "📜 공자의 가르침", section: "religion", card: "religion-6" }, // 유교
    { text: "⛪ 바티칸의 비밀", section: "geopolitics", card: "geopol-4" }, // 위요지 (바티칸)
    { text: "🕉️ 갠지스강의 목욕 의식", section: "religion", card: "religion-4" }, // 힌두교

    // [기후/환경]
    { text: "🌧️ 매일 오후 2시의 소나기", section: "climate", card: "climate-a" }, // 열대우림 (스콜)
    { text: "🌫️ 안개 속에 숨은 사막", section: "climate", card: "climate-b" }, // 한류성 사막 (나미브)
    { text: "🍇 와인을 만드는 태양", section: "climate", card: "climate-c" }, // 지중해성 기후
    { text: "🌲 끝없는 침엽수림 타이가", section: "climate", card: "climate-d" }, // 냉대 기후
    { text: "🌬️ 편서풍이 부는 곳", section: "earth-system", card: "none" } // 대기 대순환 (카드 없음, 섹션만 이동)
];

/* [수정] 랜덤 탐험 로직 (자동 롤링 추가) */
let currentDiscovery = null;
let discoveryInterval = null; // 타이머 변수

function setRandomDiscovery() {
    if (!discoveryData || discoveryData.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * discoveryData.length);
    currentDiscovery = discoveryData[randomIndex];
    
    const textEl = document.getElementById('discovery-text');
    if (textEl) {
        // 페이드 아웃 -> 텍스트 변경 -> 페이드 인 효과
        textEl.style.opacity = 0;
        
        setTimeout(() => {
            textEl.innerText = currentDiscovery.text;
            textEl.style.opacity = 1;
            // 애니메이션 재실행
            textEl.style.animation = 'none';
            textEl.offsetHeight; /* trigger reflow */
            textEl.style.animation = 'textFadeIn 0.5s ease-out';
        }, 300); // 0.3초 뒤 텍스트 변경
    }
}

function randomJump() {
    if (currentDiscovery) {
        executeJump(currentDiscovery.section, currentDiscovery.card);
    }
}

// 타이머 시작 함수
function startDiscoveryRolling() {
    if (discoveryInterval) clearInterval(discoveryInterval);
    setRandomDiscovery(); // 즉시 한 번 실행
    discoveryInterval = setInterval(setRandomDiscovery, 10000); // 10초마다 실행
}

// 타이머 정지 함수
function stopDiscoveryRolling() {
    if (discoveryInterval) {
        clearInterval(discoveryInterval);
        discoveryInterval = null;
    }
}

// 초기화 및 섹션 전환 감지
document.addEventListener('DOMContentLoaded', () => {
    // 초기 실행 (홈 화면일 경우)
    const homeSection = document.getElementById('section-home');
    if (homeSection && homeSection.classList.contains('active')) {
        startDiscoveryRolling();
    }
    
    const logoBtn = document.querySelector('.logo-btn');
    if (logoBtn) {
        logoBtn.addEventListener('click', () => {
            // 홈으로 돌아올 때 롤링 재시작
            setTimeout(() => {
                const isHome = document.getElementById('section-home').classList.contains('active');
                if (isHome) startDiscoveryRolling();
            }, 100);
        });
    }
});

// [중요] switchSection 함수 내부에 타이머 제어 로직 추가 필요
// 기존 switchSection 함수 안에서 홈 화면을 벗어날 때 stopDiscoveryRolling()을 호출해야 합니다.