// [데이터 전용 파일] data.js

// [신규] 세계의 권역 데이터 (HTML/CSS 통합본)
// [신규] 세계의 권역 데이터 (HTML/CSS 통합본)
// [신규] 지도와 지리 정보 데이터 (뼈대)
const mapsData = {
    // mapsData 객체 내부의 "map-1" 부분을 아래 내용으로 교체하세요.

    "map-1": {
        title: "고지도와 세계 인식",
        subtitle: "인류가 세상을 이해하고 그려온 발자취",
        badge: "I",
        theme: "#2c3e50",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><path d="M100,20 V180 M20,100 H180" stroke="currentColor" stroke-width="2" opacity="0.5"/>`,
        criteria: [
            { icon: "👁️", label: "세계관", text: "신화와 종교" },
            { icon: "🧭", label: "목적", text: "항해와 통치" },
            { icon: "📏", label: "진화", text: "상상과 측량" }
        ],
        subCards: [
            {
                title: "과학과 실용의 지도", desc: "신화에서 벗어나 수학과 측량으로 세상을 그리다",
                criteria: [
                    { icon: "📐", label: "기반", text: "수학, 천문학" },
                    { icon: "🎯", label: "목적", text: "정확한 위치 파악" }
                ],
                items: [
                    { name: "프톨레마이오스 세계지도", examples: ["2세기(15세기 복원)", "위도와 경도", "원뿔 도법"], meta: "📐 최초의 투영법 · 🌍 지리학의 시조", desc: "서양 지도학의 시조. 투영법을 최초로 적용하여 지구를 과학적으로 표현. 르네상스 시대에 복원되어 대항해시대의 이론적 토대가 됨." },
                    { name: "타불라 페우팅게리아나", examples: ["4세기", "로마 도로망", "두루마리 지도"], meta: "🛣️ 로마의 도로 · 🚇 노선도의 원형", desc: "로마 제국의 도로망 지도. 지형의 정확도보다 도시 간 연결과 거리를 중시한 실용적 지도." },
                    { name: "알 이드리시의 타불라 로제리아나", examples: ["1154년", "이슬람 지도학", "남쪽이 위"], meta: "☪️ 문명의 계승 · ⬆️ 남쪽을 위로", desc: "중세 암흑기 유럽을 대신해 그리스의 지식과 아랍의 정보를 집대성한 지도. 남쪽을 위로 배치한 것이 특징." }
                ]
            },
            {
                title: "신화와 종교의 지도", desc: "눈에 보이는 세상이 아닌, 믿음이 투영된 세상",
                criteria: [
                    { icon: "✝️", label: "기반", text: "성경, 신화" },
                    { icon: "🎨", label: "형태", text: "도식적, 상징적" }
                ],
                items: [
                    { name: "바빌로니아 점토판 지도", examples: ["기원전 6세기", "가장 오래된 지도", "원반형"], meta: "🧱 최고(最古)의 지도 · 🌊 신화적 세계관", desc: "현존하는 가장 오래된 세계지도. 바빌론을 중심으로 세상을 원반으로 묘사." },
                    { name: "티오(T-O) 지도", examples: ["중세 유럽", "예루살렘 중심", "에덴동산(동쪽)"], meta: "✝️ 기독교 세계관 · 📍 예루살렘 중심", desc: "예루살렘을 중심에, 동쪽(에덴동산)을 위쪽에 배치. 아시아, 유럽, 아프리카를 T자형 물길로 나눈 관념적 지도." },
                    { name: "헤러퍼드 마파 문디", examples: ["1300년경", "성경의 역사", "괴물과 전설"], meta: "📜 중세 백과사전 · 🐉 전설과 신화", desc: "지리 정보뿐만 아니라 성경의 역사와 전설 속 괴물을 한 장에 담아낸 거대한 종교화." }
                ]
            },
            {
                title: "대항해시대의 길잡이", desc: "바다를 건너 제국을 건설하기 위한 도구",
                criteria: [
                    { icon: "🧭", label: "기반", text: "나침반, 항해술" },
                    { icon: "🚢", label: "목적", text: "항로 개척, 무역" }
                ],
                items: [
                    { name: "포르톨라노 해도", examples: ["13~15세기", "방위선(Rhumb line)", "지중해 항해"], meta: "🧭 나침반 항해 · ⚓ 실전용 해도", desc: "나침반 항해를 위해 해안선과 항구를 정밀하게 그린 실전용 바다 지도." },
                    { name: "발트제뮐러 지도", examples: ["1507년", "아메리카 명명", "신대륙 인식"], meta: "🌎 신대륙 발견 · 🇺🇸 아메리카 명명", desc: "신대륙에 최초로 '아메리카'라는 이름을 붙인 지도. 아시아와 분리된 독립된 대륙으로 인식." },
                    { name: "메르카토르 세계지도", examples: ["1569년", "정각 도법", "항해의 표준"], meta: "🚢 항해의 표준 · 📐 정각 도법", desc: "구체인 지구를 평면에 펼쳐 직선 항해를 가능케 한 혁명적 지도. 고위도 면적 왜곡의 원인." }
                ]
            },
            {
                title: "동양의 세계관", desc: "중화사상에서 근대적 과학 수용까지",
                criteria: [
                    { icon: "🇨🇳", label: "기반", text: "중화사상, 실학" },
                    { icon: "🌏", label: "변화", text: "세계 인식의 확장" }
                ],
                items: [
                    { name: "화이도 (華夷圖)", examples: ["12세기", "중화사상", "만리장성"], meta: "🇨🇳 중화사상 · 🧱 문화적 위계", desc: "중국을 세계의 중심에 거대하게 그리고, 주변국을 오랑캐로 묘사하여 문화적 위계를 표현." },
                    { name: "혼일강리역대국도지도", examples: ["1402년(조선)", "아프리카/유럽 포함", "개방적"], meta: "🇰🇷 조선 초기 · 🌍 개방적 세계관", desc: "동양 최고(最古)의 세계지도. 중화사상을 넘어 아프리카와 유럽까지 포함한 열린 시각." },
                    { name: "천하도 (天下圖)", examples: ["조선 중기", "산해경", "상상의 나라"], meta: "📖 산해경 · 🌌 도교적 상상력", desc: "실재하지 않는 상상의 세계. 도교적 세계관과 전설 속 나라들을 원형으로 배치한 조선인의 내면 지도." },
                    { name: "지구전후도", examples: ["1834년(최한기)", "목판본", "지구설 수용"], meta: "🔭 실학 사상 · 🌐 지구설 수용", desc: "최한기가 제작한 목판본. 서양의 과학적 지식을 수용하여 중화사상을 탈피하고 세계를 구체로 인식." }
                ]
            },
            {
                title: "조선의 지도학, 대동여지도", desc: "발로 쓴 국토의 기록, 지식의 대중화",
                criteria: [
                    { icon: "🗺️", label: "제작", text: "고산자 김정호" },
                    { icon: "🖨️", label: "특징", text: "목판본, 분첩식" }
                ],
                items: [
                    { name: "대동여지도 전도", examples: ["1861년", "1/16만 축척", "전통 측량"], meta: "🗺️ 김정호 · 📏 놀라운 정확성", desc: "서양의 측량 기술 없이 전통적인 방식으로 현대 지도에 버금가는 정확도를 달성한 걸작." },
                    { name: "분첩 절첩식 구조", examples: ["22첩", "병풍식 접이", "휴대성"], meta: "📚 병풍식 접이 · 🎒 휴대성 극대화", desc: "거대한 지도를 책처럼 접어서 가지고 다닐 수 있게 만든 구조. 현대 도로 지도책의 원형." },
                    { name: "목판 인쇄와 대중화", examples: ["대량 생산", "지식 보급", "목판본"], meta: "🖨️ 대량 생산 · 📢 지식의 보급", desc: "필사본의 한계를 넘어 목판으로 대량 생산하여 지리 정보의 대중화를 시도." },
                    { name: "지도표와 산경표", examples: ["범례(기호)", "산자분수령", "도로 표시"], meta: "⛰️ 산자분수령 · 🏷️ 기호(범례) 사용", desc: "현대적인 기호를 사용하여 정보를 체계화하고, 산맥을 끊어지지 않는 선으로 연결하여 국토를 유기적으로 인식." }
                ]
            }
        ]
    },
    // mapsData 객체 내부의 "map-2" 부분을 아래 내용으로 교체하세요.

    "map-2": {
        title: "지도의 구성 요소",
        subtitle: "지도를 읽기 위한 약속과 언어",
        badge: "II",
        theme: "#8e44ad",
        iconSVG: `<rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><path d="M140,140 L160,160" stroke="currentColor" stroke-width="8" opacity="0.5"/>`,
        criteria: [
            { icon: "📏", label: "축척", text: "거리의 비율" },
            { icon: "🧭", label: "방위", text: "북쪽의 기준" },
            { icon: "🏷️", label: "기호", text: "약속된 상징" }
        ],
        subCards: [
            {
                title: "축척과 일반화", desc: "세상을 얼마나 줄이고 단순화할 것인가",
                criteria: [
                    { icon: "🔍", label: "대축척", text: "좁은 지역 상세" },
                    { icon: "🌏", label: "소축척", text: "넓은 지역 간략" }
                ],
                items: [
                    { name: "지적도 (1:500 ~ 1:6,000)", examples: ["토지 대장", "재산권 행사", "건축 허가"], meta: "🏠 대축척 지도 · 📏 필지 경계", desc: "건물 형태와 필지 경계선까지 정밀하게 묘사한 대축척 지도." },
                    { name: "지형도 (1:25,000 ~ 1:50,000)", examples: ["등산 지도", "군사 작전도", "국토지리정보원"], meta: "⛰️ 등고선 · 🪖 표준 축척", desc: "등고선으로 지형 기복을 표현하여 등산, 군사, 국토 개발에 두루 쓰이는 표준 지도." },
                    { name: "전도 (1:100만 이상)", examples: ["세계 전도", "대한민국 전도", "교과서 부도"], meta: "🗺️ 소축척 지도 · 📉 과감한 생략", desc: "도시와 하천은 점과 선으로 단순화되고, 세계와 국가를 한눈에 보여주는 지도." },
                    { name: "지하철 노선도 (위상 지도)", examples: ["해리 벡(런던)", "수도권 전철", "도쿄 메트로"], meta: "🚇 위상수학 · 🔗 연결성 중심", desc: "축척과 방위를 무시하고 목적에 맞게 연결성만 남긴 극단적인 지도." }
                ]
            },
            {
                title: "방위와 기호의 역사", desc: "약속된 언어와 방향의 기준",
                criteria: [
                    { icon: "⬆️", label: "방위", text: "문화적 관습" },
                    { icon: "🔑", label: "기호", text: "정보의 표준화" }
                ],
                items: [
                    { name: "T-O 지도 (동쪽이 위)", examples: ["중세 유럽", "헤러퍼드 지도", "에덴동산"], meta: "✝️ 중세 유럽 · 🌅 Orient(동쪽)", desc: "성지 예루살렘이 있는 동쪽을 위로 두어 '오리엔테이션'의 어원이 된 지도." },
                    { name: "알 이드리시 지도 (남쪽이 위)", examples: ["이슬람 지도학", "시칠리아 왕국", "메카 방향"], meta: "☪️ 이슬람 · 🕋 메카 방향", desc: "메카가 있는 남쪽을 위로 둔 지도. 북쪽이 언제나 지도의 위는 아니다." },
                    { name: "대동여지도 지도표", examples: ["김정호", "목판본", "범례"], meta: "🏷️ 범례의 표준화 · 🏔️ 산과 강", desc: "가항 하천, 역참 등을 22개의 기호로 표준화해 누구나 쉽게 읽도록 한 범례." },
                    { name: "오픈스트리트맵 (OSM)", examples: ["위키백과식 지도", "집단 지성", "디지털 태그"], meta: "🌐 집단 지성 · 💻 디지털 기호", desc: "전 세계 사용자가 합의한 태그와 기호로 만들어가는, 현대의 표준화된 디지털 지도 플랫폼." }
                ]
            },
            {
                title: "세 가지 북쪽", desc: "나침반이 가리키는 곳은 진짜 북쪽이 아니다",
                criteria: [
                    { icon: "★", label: "진북", text: "북극성" },
                    { icon: "🧭", label: "자북", text: "나침반" },
                    { icon: "🗺️", label: "도북", text: "지도 위" }
                ],
                items: [
                    { name: "진북 (True North)", examples: ["북극성", "지리적 북극점", "경선"], meta: "★ 북극성 · 📐 변하지 않는 기준", desc: "북극성(지리적 북극점)의 방향. 변하지 않는 영원한 기준이며, 지도상의 경선이 향하는 곳." },
                    { name: "자북 (Magnetic North)", examples: ["나침반", "지구 자기장", "캐나다 북부"], meta: "🧭 나침반 N극 · 🧲 지구 자기장", desc: "나침반의 N극이 가리키는 방향. 지구 자기장의 변화로 매년 위치가 조금씩 이동함." },
                    { name: "도북 (Grid North)", examples: ["지도상의 북쪽", "모눈(Grid)", "TM 좌표계"], meta: "🗺️ 지도상의 북쪽 · 📏 모눈(Grid)", desc: "평면 지도에 모눈을 그릴 때 설정한 세로선의 위쪽 방향. 지도 제작상의 기준." },
                    { name: "자침 편차 (Declination)", examples: ["독도법", "나침반 보정", "G-M Angle"], meta: "📐 각도 차이 · 🧭 독도법 필수", desc: "진북과 자북 사이의 각도 차이. 지도(도북)와 나침반(자북)을 일치시키기 위해 반드시 보정해야 하는 오차." }
                ]
            }
        ]
    },
    // mapsData 객체 내부의 "map-3" 부분을 아래 내용으로 교체하세요.

    "map-3": {
        title: "지도 투영법",
        subtitle: "둥근 지구를 평면에 담는 수학적 딜레마",
        badge: "III",
        theme: "#2980b9",
        iconSVG: `<path d="M20,100 Q100,20 180,100 T20,100" fill="none" stroke="currentColor" stroke-width="6" opacity="0.3"/><path d="M100,20 V180" stroke="currentColor" stroke-width="2" opacity="0.5"/>`,
        criteria: [
            { icon: "📐", label: "원리", text: "3차원 ➔ 2차원" },
            { icon: "⚠️", label: "왜곡", text: "면적, 각도, 거리" },
            { icon: "🗺️", label: "종류", text: "원통, 원뿔, 평면" }
        ],
        subCards: [
            {
                title: "정각 도법 (Conformal)", desc: "모양은 지키되, 크기를 포기한다",
                items: [
                    { 
                        name: "메르카토르 도법", 
                        examples: ["항해지도", "구글맵(Web Mercator)"], 
                        meta: "🚢 항해의 표준 · 📐 각도 정확", 
                        desc: "경선과 위선이 직각으로 교차하여 나침반 항해에 유리하나, 고위도로 갈수록 면적이 극단적으로 확대됨.",                        
                    },
                    { 
                        name: "횡축 메르카토르 (TM)", 
                        examples: ["한국 지형도", "군사 지도"], 
                        meta: "🇰🇷 한국 표준 · ↕️ 남북 방향 유리", 
                        desc: "지구를 옆으로 뉘어 투영한 방식. 중앙 경선 부근의 왜곡이 적어 남북으로 긴 나라의 대축척 지도에 사용.",                        
                    },
                    { 
                        name: "람베르트 정각 원뿔 도법", 
                        examples: ["항공도", "미국 전도"], 
                        meta: "✈️ 항공도 · 🌐 중위도 최적", 
                        desc: "원뿔을 씌워 투영한 방식. 중위도 지역의 형태 왜곡이 적어 동서로 긴 나라(미국, 러시아)나 항공도에 적합.",
                    }
                ]
            },
            {
                title: "정적 도법 (Equal-Area)", desc: "크기는 지키되, 모양을 포기한다",
                items: [
                    { 
                        name: "페터스 도법", 
                        examples: ["유니세프 지도", "제3세계"], 
                        meta: "🌍 제3세계 강조 · ⚖️ 면적의 평등", 
                        desc: "메르카토르 도법의 제국주의적 시각을 비판하며 등장. 적도 지방의 실제 크기를 보여주지만 모양이 길게 찌그러짐.",
                    },
                    { 
                        name: "몰바이데 도법", 
                        examples: ["세계 전도", "기후 분포도"], 
                        meta: "🥚 타원형 지도 · 📊 분포도 표준", 
                        desc: "지구를 타원형으로 표현하여 면적 비를 정확하게 유지. 세계 전도나 인구, 기후 분포도 제작에 널리 쓰임.",
                    },
                    { 
                        name: "구드 호몰로사인 도법", 
                        examples: ["교과서 부도", "해양 지도"], 
                        meta: "🍊 찢어진 귤껍질 · 🌊 바다의 단절", 
                        desc: "대륙의 모양과 면적 왜곡을 최소화하기 위해 바다 부분을 과감하게 찢어서 펼친 단열 도법.",
                    }
                ]
            },
            {
                title: "정거 및 방위 도법", desc: "특정 지점에서의 거리와 방향을 지킨다",
                items: [
                    { 
                        name: "정거 방위 도법", 
                        examples: ["UN기", "항공 노선도"], 
                        meta: "🇺🇳 UN기 · ✈️ 항공 노선도", 
                        desc: "중심점에서 모든 지점까지의 직선 거리가 정확함. 최단 경로를 파악해야 하는 항공 노선도나 지진파 분석에 사용.",                        
                    },
                    { 
                        name: "심사 도법 (Gnomonic)", 
                        examples: ["대권 항로", "항해 계획"], 
                        meta: "📏 대권 항로 · ⚓ 항해 계획", 
                        desc: "지도상의 모든 직선이 지구상의 최단 거리(대권)가 되는 도법. 항해나 항공의 계획 단계에서 경로 파악용으로 쓰임.",                        
                    },
                    { 
                        name: "평사 도법 (Stereographic)", 
                        examples: ["기상도", "천문도"], 
                        meta: "☁️ 기상도 · 🔭 천문도", 
                        desc: "각도가 정확하고 원이 원으로 표현되는 특징이 있어, 구름의 모양이나 별자리를 그리는 기상도와 천문도에 활용.",                        
                    }
                ]
            },
            {
                title: "절충 도법 (Compromise)", desc: "적당히 타협해서 보기 좋게 만든다",
                items: [
                    { 
                        name: "로빈슨 도법", 
                        examples: ["내셔널 지오그래픽(과거)", "세계 전도"], 
                        meta: "📖 내셔널 지오그래픽 · ⚖️ 시각적 균형", 
                        desc: "면적이나 각도 어느 하나도 완벽하지 않지만, 전체적인 왜곡을 줄여 지구가 가장 자연스럽게 보이도록 만든 도법.",                        
                    },
                    { 
                        name: "빈켈 트리펠 도법", 
                        examples: ["현재 표준", "교과서"], 
                        meta: "🌐 현재의 표준 · 📉 왜곡 최소화", 
                        desc: "면적, 각도, 거리의 왜곡을 수학적으로 최소화하여 현재 내셔널 지오그래픽 등에서 세계 지도의 표준으로 사용.",                        
                    },
                    { 
                        name: "반데어그린텐 도법", 
                        examples: ["구형 세계지도", "벽걸이 지도"], 
                        meta: "🌕 원형 지도 · 📜 과거의 표준", 
                        desc: "지구를 원형으로 표현한 도법. 과거에 널리 쓰였으나 극지방의 왜곡이 심해 현재는 로빈슨이나 빈켈 트리펠로 대체됨.",                        
                    }
                ]
            }
        ]
    },
    "map-4": {
        title: "주제도와 통계 지도",
        subtitle: "목적에 따라 정보를 시각화하는 방법",
        badge: "IV",
        theme: "#c0392b",
        iconSVG: `<circle cx="60" cy="60" r="10" fill="currentColor" opacity="0.5"/><circle cx="140" cy="100" r="20" fill="currentColor" opacity="0.5"/><circle cx="80" cy="140" r="15" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "📊", label: "데이터", text: "통계의 시각화" },
            { icon: "🎨", label: "표현", text: "점, 선, 면" },
            { icon: "🥴", label: "변형", text: "카토그램 (왜곡)" }
        ],
        subCards: []
    },
    "map-5": {
        title: "디지털 지구와 GIS",
        subtitle: "살아있는 지도, 데이터로 분석하는 세상",
        badge: "V",
        theme: "#d35400",
        iconSVG: `<path d="M20,140 L100,180 L180,140 M20,100 L100,140 L180,100 M20,60 L100,100 L180,60" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "💻", label: "기술", text: "GIS, GPS, RS" },
            { icon: "🛰️", label: "수집", text: "인공위성, 드론" },
            { icon: "📱", label: "활용", text: "내비게이션, 입지" }
        ],
        subCards: []
    }
};

const geoData = {
    "1": {
        title: "동아시아",
        subtitle: "산맥과 사막으로 둘러싸인 정주민과 유목민의 각축장",
        badge: "I",
        theme: "#2d3436",
        iconSVG: `<path d="M0,150 Q50,100 100,150 T200,150 V200 H0 Z" fill="currentColor" opacity="0.6"/><path d="M20,200 Q70,120 120,200 T220,200" fill="currentColor" opacity="0.4"/><path d="M-20,200 Q40,80 100,200" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 130명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>쌀</b>, 밀, 옥수수" },
            { icon: "🏛️", label: "주요 문화/종교", text: "유교, 대승불교, 한자 문화" }
        ],
        subCards: [
            {
                title: "정주 농경 문명", desc: "유교와 한자로 이어진 온대 벼농사 문화권.",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cfa, Cwa, Dw" },
                    { icon: "💰", label: "상품 작물", text: "<b>차</b>, 면화" }
                ],
                items: [
                    { name: "화북", examples: ["황허 유역", "베이징 <span class=\"cap\"></span>", "시안", "뤄양", "개봉", "태산"], meta: "🧱 만리장성 · 🌾 밀과 잡곡", desc: "만리장성을 쌓고 유목에 맞선 중화의 최전선." },
                    { name: "화남", examples: ["창장 유역", "상하이", "난징", "항저우", "우한", "청두", "쑤저우"], meta: "🍚 벼농사 중심 · 🍵 차 문화", desc: "벼농사의 중심. 중화 경제의 심장." },
                    { name: "내륙 고원 지대", examples: ["윈난", "구이저우", "쿤밍", "광시 좡족", "리장", "샹그릴라"], meta: "🏔️ 소수민족 · 🏞️ 카르스트", desc: "고원에 웅거한 여러 소수민족의 요람." },
                    { name: "한반도", examples: ["<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇰🇵\">북한</i>", "서울 <span class=\"cap\"></span>", "평양 <span class=\"cap\"></span>", "부산", "인천", "제주도"], meta: "🐯 산악 지형 · 🌶️ 발효 음식", desc: "대륙의 끝과 대양의 관문이 만나는 곳에 위치한 산악 반도" },
                    { name: "일본 열도", examples: ["<i data-flag=\"🇯🇵\">일본</i>", "도쿄 <span class=\"cap\"></span>", "교토", "오사카", "홋카이도", "나라", "후쿠오카"], meta: "🌸 화산 열도 · 🍣 해양 문화", desc: "동쪽 바다 너머의 독자적 소우주" }
                ]
            },
            {
                title: "유목 및 반농반목 문명", desc: "실크로드를 잇고 대륙의 주인이 되기도 한 평원의 지배자들.",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dwc, BWk" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (목축)" }
                ],
                items: [
                    { name: "만주", examples: ["동북 3성", "선양", "하얼빈", "다롄", "장춘", "지린"], meta: "🌲 흑토 지대 · 🏭 중화학 공업", desc: "정복 왕조가 탄생한 반농반목 삼림 지대" },
                    { name: "몽골 초원", examples: ["<i data-flag=\"🇲🇳\">몽골</i>", "울란바토르 <span class=\"cap\"></span>", "고비 사막", "내몽골 자치구", "카라코룸"], meta: "⛺ 유목 문화 · 🐎 기마 민족", desc: "대륙을 넘어 세계를 제패한 강력한 유목민이 태동한 북방 무대" },
                    { name: "시베리아", examples: ["러시아 극동", "블라디보스토크", "바이칼 호수", "이르쿠츠크", "노보시비르스크", "캄차카 반도"], meta: "❄️ 영구동토층 · 🛢️ 천연가스", desc: "척박한 동토를 떠도는 북방 유목민의 땅" }
                ]
            },
            {
                title: "해양 상업 문명", desc: "남북을 바다로 잇고 연결한 네트워크 결절",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cfa" },
                    { icon: "💰", label: "상품 작물", text: "바나나, 설탕, 열대 과일" }
                ],
                items: [
                    { name: "류큐", examples: ["오키나와", "나하", "아마미 군도", "이시가키", "미야코지마"], meta: "🏝️ 산호초 · 🚢 중계 무역", desc: "동중국해 중계 무역으로 번영한 도서" },
                    { name: "대만", examples: ["<i data-flag=\"🇹🇼\">대만</i>", "타이베이 <span class=\"cap\"></span>", "가오슝", "타이난", "화롄", "타이중"], meta: "💻 반도체 · 🍍 열대 과일", desc: "대륙과 대양이 교차하는 지정학적 앵커" }
                ]
            },
            {
                title: "완충지 및 점이지역", desc: "한 세계의 경계이자 다른 세계로의 통로",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BWk, ET" },
                    { icon: "💰", label: "상품 작물", text: "<b>면화</b>, 멜론" }
                ],
                items: [
                    { name: "타림분지", examples: ["신장 위구르", "우루무치", "카슈가르", "타클라마칸 사막", "투루판", "둔황"], meta: "🐫 실크로드 · 🍈 오아시스", desc: "카레즈와 오아시스로 사막을 이은 비단길의 통로" },
                    { name: "티베트 고원", examples: ["티베트 자치구", "라싸", "칭하이성", "카일라스 산", "시가체", "포탈라궁"], meta: "🕉️ 라마 불교 · 🏔️ 세계의 지붕", desc: "세계의 지붕이자 아시아의 급수탑" }
                ]
            }
        ]
    },
    "2": {
        title: "동남아시아 및 오세아니아",
        subtitle: "문명을 잇고 바다를 개척하다.",
        badge: "II",
        theme: "#0984e3",
        iconSVG: `<path d="M0,100 Q25,80 50,100 T100,100 T150,100 T200,100 V200 H0 Z" fill="currentColor" opacity="0.6"/><path d="M0,140 Q25,120 50,140 T100,140 T150,140 T200,140 V200 H0 Z" fill="currentColor" opacity="0.4"/><path d="M0,180 Q25,160 50,180 T100,180 T150,180 T200,180 V200 H0 Z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "155명 (동남아) / 5명 (오세아니아)" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>쌀</b>, 옥수수, 카사바" },
            { icon: "🏛️", label: "주요 문화/종교", text: "이슬람교, 상좌부 불교, 앵글로색슨" }
        ],
        subCards: [
            {
                title: "대륙부 동남아시아", desc: "인도 아대륙과 중원 세력의 교차로",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Am, Aw" },
                    { icon: "💰", label: "상품 작물", text: "<b>쌀</b>, <b>고무</b>, 옥수수" }
                ],
                items: [
                    { name: "안남산맥 동부", examples: ["<i data-flag=\"🇻🇳\">베트남</i>", "하노이 <span class=\"cap\"></span>", "호치민", "다낭", "후에", "하롱베이"], meta: "🇻🇳 유교 문화 · 🥢 젓가락", desc: "한자와 유교, 그리고 대승불교" },
                    { name: "안남산맥 서부", examples: ["<i data-flag=\"🇹🇭\">태국</i>", "방콕 <span class=\"cap\"></span>", "<i data-flag=\"🇲🇲\">미얀마</i>", "양곤", "<i data-flag=\"🇰🇭\">캄보디아</i>", "<i data-flag=\"🇱🇦\">라오스</i>", "치앙마이", "앙코르와트", "만달레이", "비엔티안"], meta: "🛕 상좌부 불교 · 🍛 인도 영향", desc: "인도가 스며든 상좌부 불교" }
                ]
            },
            {
                title: "해양부 동남아시아", desc: "몬순의 동쪽 끝, 인도양과 태평양의 가교",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Af, Am" },
                    { icon: "💰", label: "상품 작물", text: "<b>팜유</b>, <b>고무</b>, 코코아" }
                ],
                items: [
                    { name: "말레이 및 순다 열도", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>", "자카르타 <span class=\"cap\"></span>", "<i data-flag=\"🇲🇾\">말레이시아</i>", "쿠알라룸푸르 <span class=\"cap\"></span>", "<i data-flag=\"🇸🇬\">싱가포르</i>", "<i data-flag=\"🇧🇳\">브루나이</i>", "발리", "보르네오"], meta: "☪️ 이슬람교 · 🌶️ 향신료 무역", desc: "몬순과 이슬람으로 이루어진 해양 네트워크" },
                    { name: "필리핀", examples: ["<i data-flag=\"🇵🇭\">필리핀</i>", "마닐라 <span class=\"cap\"></span>", "세부", "다바오", "보라카이", "팔라완"], meta: "✝️ 가톨릭 · 🎸 라틴 문화", desc: "가톨릭과 영어가 뿌리내린 태평양의 관문" }
                ]
            },
            {
                title: "호주 대륙", desc: "서구 월경지가 된 월리스선 이남의 신세계",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Csa, Cfa, BSh, BWk" },
                    { icon: "💰", label: "상품 작물", text: "밀, <b>포도</b>, <b>면양</b>" }
                ],
                items: [
                    { name: "동남부/서남부 온대 해안", examples: ["<i data-flag=\"🇦🇺\">호주</i>", "캔버라 <span class=\"cap\"></span>", "시드니", "멜버른", "퍼스", "브리즈번", "애들레이드"], meta: "🏙️ 주요 도시 · 🍷 와인 산지", desc: "앵글로색슨의 월경지가 된 온화한 지역" },
                    { name: "북부 사바나", examples: ["다윈", "케언즈", "노던 준주", "그레이트 배리어 리프"], meta: "🐊 악어 서식지 · 🥩 소 방목", desc: "도서와 맞닿은 몬순 지역" },
                    { name: "내륙 사막", examples: ["아웃백", "앨리스 스프링스", "울룰루", "심슨 사막"], meta: "🏜️ 아웃백 · ⛏️ 철광석", desc: "안정 지괴의 척박한 붉은 흙이 펼쳐진 드넓은 아웃백" }
                ]
            },
            {
                title: "태평양 도서", desc: "가장 먼 바다로 나간 모험가들의 섬",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Af" },
                    { icon: "💰", label: "상품 작물", text: "코프라, <b>코코넛</b>, 바닐라" }
                ],
                items: [
                    { name: "폴리네시아", examples: ["<i data-flag=\"🇳🇿\">뉴질랜드</i>", "웰링턴 <span class=\"cap\"></span>", "하와이", "사모아", "타히티", "이스터 섬"], meta: "🗿 모아이 · ⛵ 항해술", desc: "가장 멀리까지 항해한 바다의 민족" },
                    { name: "미크로네시아", examples: ["괌", "사이판", "팔라우", "마셜 제도", "나우루"], meta: "🏝️ 산호섬 · ☢️ 핵실험지", desc: "점점이 흩뿌려진 산호섬의 열대 바다" },
                    { name: "멜라네시아", examples: ["<i data-flag=\"🇵🇬\">파푸아뉴기니</i>", "포트모르즈비 <span class=\"cap\"></span>", "<i data-flag=\"🇫🇯\">피지</i>", "솔로몬 제도", "바누아투"], meta: "🌋 화산섬 · 🏾 흑인종", desc: "대륙의 일부였던 검은 군도" }
                ]
            }
        ]
    },
    "3": {
        title: "남부 아시아",
        subtitle: "히말라야로 감싸인 종교의 용광로",
        badge: "III",
        theme: "#e17055",
        iconSVG: `<path d="M60,100 A40,40 0 0,1 140,100 V160 H60 Z" fill="currentColor" opacity="0.6"/><rect x="95" y="40" width="10" height="60" fill="currentColor" opacity="0.6"/><circle cx="100" cy="40" r="10" fill="currentColor" opacity="0.6"/><path d="M30,120 V200 H170 V120" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 380명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>쌀</b>, 밀, 잡곡" },
            { icon: "🏛️", label: "주요 문화/종교", text: "힌두교, 이슬람교" }
        ],
        subCards: [
            {
                title: "히말라야 권역", desc: "세계의 지붕에 살아가는 산의 민족",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "H, Dwc" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (목축/약초)" }
                ],
                items: [
                    { name: "네팔", examples: ["<i data-flag=\"🇳🇵\">네팔</i>", "카트만두 <span class=\"cap\"></span>", "에베레스트", "안나푸르나", "포카라"], meta: "🚩 셰르파 · 🕉️ 힌두교", desc: "험산의 독실한 힌두교 국가" },
                    { name: "부탄 및 시킴", examples: ["<i data-flag=\"🇧🇹\">부탄</i>", "팀푸 <span class=\"cap\"></span>", "시킴", "다르질링", "파로"], meta: "🐉 행복의 나라 · ☸️ 불교", desc: "산악에 은거한 불교 왕국" }
                ]
            },
            {
                title: "북부 평원", desc: "아리아인과 이슬람이 달린 대평원",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BSh, Cwa" },
                    { icon: "💰", label: "상품 작물", text: "사탕수수, <b>황마</b>, <b>면화</b>" }
                ],
                items: [
                    { name: "인더스 유역", examples: ["<i data-flag=\"🇵🇰\">파키스탄</i>", "이슬라마바드 <span class=\"cap\"></span>", "라호르", "카라치", "모헨조다로", "페샤와르"], meta: "🕌 이슬람 · 🌾 밀 농사", desc: "건조 밀농사권, 이슬람의 침입로" },
                    { name: "힌두스탄 평원", examples: ["<i data-flag=\"🇮🇳\">인도</i>", "뉴델리 <span class=\"cap\"></span>", "아그라", "바라나시", "자이푸르", "러크나우"], meta: "🐮 소 숭배 · 🍛 카레", desc: "힌두 문명을 먹여 살린 비옥한 심장부" },
                    { name: "갠지스 유역 (벵골)", examples: ["<i data-flag=\"🇧🇩\">방글라데시</i>", "다카 <span class=\"cap\"></span>", "콜카타", "갠지스강 삼각주", "순다르반스", "치타공"], meta: "🌊 델타 · 🐟 쌀과 생선", desc: "강력한 몬순, 비옥한 델타 위의 벼농사" }
                ]
            },
            {
                title: "데칸 및 남인도", desc: "고원이 수호한 드라비다의 본산",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Am, Aw" },
                    { icon: "💰", label: "상품 작물", text: "<b>커피</b>, <b>향신료</b>, <b>면화</b>" }
                ],
                items: [
                    { name: "고원 고지대", examples: ["하이데라바드", "데칸 고원", "마하라슈트라", "푸네", "마이소르"], meta: "🪨 용암 대지 · 🧶 면화", desc: "북방의 침입을 막아낸 용암의 대지" },
                    { name: "해안 평야 지역", examples: ["뭄바이", "첸나이", "벵갈루루", "케랄라", "고아", "코치"], meta: "🚢 향신료 무역 · ⛪ 기독교 전파", desc: "인도양 몬순 네트워크 결절" }
                ]
            },
            {
                title: "주변부 불교 지역", desc: "상좌부 불교의 타임캡슐",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Am, Af" },
                    { icon: "💰", label: "상품 작물", text: "<b>차</b>, 코코넛" }
                ],
                items: [
                    { name: "스리랑카", examples: ["<i data-flag=\"🇱🇰\">스리랑카</i>", "콜롬보 <span class=\"cap\"></span>", "캔디", "실론섬", "갈레", "시기리야"], meta: "🦁 사자 바위 · 🍵 홍차", desc: "인도양의 눈물, 불교의 보루" }
                ]
            }
        ]
    },
    "4": {
        title: "건조 아시아와 북아프리카",
        subtitle: "이슬람 민족과 사막의 세계",
        badge: "IV",
        theme: "#fdcb6e",
        iconSVG: `<path d="M50,120 A50,50 0 0,1 150,120 V200 H50 Z" fill="currentColor" opacity="0.6"/><circle cx="100" cy="50" r="10" fill="currentColor" opacity="0.6"/><path d="M95,60 V120 H105 V60 Z" fill="currentColor" opacity="0.6"/><path d="M140,40 A30,30 0 1,1 140,80 A25,25 0 1,0 140,40 Z" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 35명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "밀, 보리, <b>대추야자</b>" },
            { icon: "🏛️", label: "주요 문화/종교", text: "이슬람교 (수니/시아)" }
        ],
        subCards: [
            {
                title: "범 튀르크 권역", desc: "동아시아의 경계부터 아나톨리아까지",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BSk, Csa" },
                    { icon: "💰", label: "상품 작물", text: "<b>면화</b>, 담배, 포도" }
                ],
                items: [
                    { name: "중앙아시아", examples: ["<i data-flag=\"🇺🇿\">우즈베키스탄</i>", "타슈켄트 <span class=\"cap\"></span>", "<i data-flag=\"🇰🇿\">카자흐스탄</i>", "<i data-flag=\"🇰🇬\">키르기스스탄</i>", "사마르칸트", "부하라", "알마티"], meta: "🐎 유목민 · 🕌 푸른 타일", desc: "비단길을 수놓은 기마 민족의 고향" },
                    { name: "아나톨리아 고원", examples: ["<i data-flag=\"🇹🇷\">튀르키예</i>", "앙카라 <span class=\"cap\"></span>", "카파도키아", "코니아", "트로이", "안탈리아"], meta: "🇹🇷 튀르크 · 🏺 동서양 교차", desc: "동로마를 넘어선 튀르크의 서쪽 끝" }
                ]
            },
            {
                title: "범 페르시아 권역", desc: "고원이 낳은 대제국의 후예",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BWk" },
                    { icon: "💰", label: "상품 작물", text: "<b>양귀비</b>, <b>사프란</b>, 카펫용 양모" }
                ],
                items: [
                    { name: "이란 고원", examples: ["<i data-flag=\"🇮🇷\">이란</i>", "테헤란 <span class=\"cap\"></span>", "이스파한", "시라즈", "야즈드", "페르세폴리스"], meta: "🦁 페르시아 · ⚛️ 시아파", desc: "산맥으로 감싸인 시아파의 산악 요새" },
                    { name: "파미르 고원", examples: ["<i data-flag=\"🇹🇯\">타지키스탄</i>", "두샨베 <span class=\"cap\"></span>", "파미르 고원", "호로그", "판샨베"], meta: "🏔️ 세계의 지붕 · 🧶 페르시아계", desc: "매듭처럼 얽힌 건조 아시아의 관문" }
                ]
            },
            {
                title: "범 아랍 권역", desc: "이슬람의 본산이자 무역의 달인",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BWh" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (석유/천연가스)" }
                ],
                items: [
                    { name: "하천 농경 지역", examples: ["<i data-flag=\"🇪🇬\">이집트</i>", "카이로 <span class=\"cap\"></span>", "<i data-flag=\"🇮🇶\">이라크</i>", "바그다드 <span class=\"cap\"></span>", "바빌론", "모술", "알렉산드리아"], meta: "🏛️ 피라미드 · 📜 문명의 요람", desc: "인류 최초의 문명, 비옥한 초승달과 나일강" },
                    { name: "오아시스 농업 지역", examples: ["<i data-flag=\"🇸🇦\">사우디아라비아</i>", "리야드 <span class=\"cap\"></span>", "<i data-flag=\"🇦🇪\">UAE</i>", "두바이", "메카", "메디나", "아부다비"], meta: "🛢️ 석유 · 🕋 메카", desc: "이슬람의 요람. 석유가 샘솟는 사막의 심장." }
                ]
            },
            {
                title: "지중해 권역", desc: "바다로 다른 세계와 통하다",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cs" },
                    { icon: "💰", label: "상품 작물", text: "<b>올리브</b>, 포도, 감귤" }
                ],
                items: [
                    { name: "아나톨리아 서부", examples: ["이스탄불", "이즈미르", "안탈리아", "에페소스", "보드룸"], meta: "🏛️ 그리스 유적 · 🌊 에게해", desc: "그리스, 로마, 그리고 튀르크" },
                    { name: "마그레브 지역", examples: ["<i data-flag=\"🇲🇦\">모로코</i>", "라바트 <span class=\"cap\"></span>", "<i data-flag=\"🇩🇿\">알제리</i>", "카사블랑카", "튀니스", "마라케시", "페스"], meta: "🕌 베르베르인 · 🥘 쿠스쿠스", desc: "지중해로 유럽과 맞닿은 이슬람의 서쪽 끝" }
                ]
            }
        ]
    },
    "5": {
        title: "사하라 이남 아프리카",
        subtitle: "역동적인 자연과 부족 공동체의 모자이크",
        badge: "V",
        theme: "#636e72",
        iconSVG: `<path d="M95,200 V120 H105 V200" fill="currentColor" opacity="0.8"/><path d="M40,100 Q100,50 160,100 Q100,80 40,100" fill="currentColor" opacity="0.6"/><path d="M60,110 Q100,90 140,110" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 50명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>카사바</b>, 얌, 옥수수" },
            { icon: "🏛️", label: "주요 문화/종교", text: "기독교, 이슬람교, 토착 신앙" }
        ],
        subCards: [
            {
                title: "사헬 및 서아프리카", desc: "정글과 사막을 대상으로 연결하다",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BSh, Aw" },
                    { icon: "💰", label: "상품 작물", text: "땅콩, 면화, <b>코코아</b>" }
                ],
                items: [
                    { name: "세네감비아 해안", examples: ["<i data-flag=\"🇸🇳\">세네갈</i>", "다카르", "<i data-flag=\"🇬🇲\">감비아</i>", "반줄", "기니비사우"], meta: "🇫🇷 프랑스어권 · 🥜 땅콩", desc: "사헬의 서쪽 끝, 프랑스 식민 문화의 중심지." },
                    { name: "니제르강 내륙 삼각주", examples: ["<i data-flag=\"🇲🇱\">말리</i>", "팀북투", "<i data-flag=\"🇳🇪\">니제르</i>", "몹티", "젠네"], meta: "🕌 진흙 모스크 · 🐫 소금 무역", desc: "니제르강을 따라 사막의 경계를 누빈 유목 제국의 땅." },
                    { name: "서부 기니만", examples: ["<i data-flag=\"🇨🇮\">코트디부아르</i>", "아비장", "<i data-flag=\"🇬🇭\">가나</i>", "아크라", "상아 해안", "황금 해안"], meta: "🍫 카카오 · 🏰 노예 무역 요새", desc: "사막 끝의 해안 밀림, 향신료와 상아부터 카카오 플랜테이션까지." },
                    { name: "동부 기니만", examples: ["<i data-flag=\"🇳🇬\">나이지리아</i>", "라고스", "포트하커트", "베냉", "토고", "노예 해안"], meta: "🛢️ 석유 · 🎬 놀리우드", desc: "노예 무역의 상흔이 남은 아프리카 최대의 유전 지대." }
                ]
            },
            {
                title: "중앙아프리카", desc: "압도적인 자연과 살아가는 민족의 땅",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Af, Aw" },
                    { icon: "💰", label: "상품 작물", text: "<b>커피</b>, <b>코코아</b>, 구리" }
                ],
                items: [
                    { name: "콩고 분지", examples: ["<i data-flag=\"🇨🇩\">콩고민주공화국</i>", "킨샤사 <span class=\"cap\"></span>", "<i data-flag=\"🇬🇦\">가봉</i>", "브라자빌", "오카피 보호구역"], meta: "🌳 열대우림 · 🦍 고릴라", desc: "우림과 폭포에 둘러싸인 아프리카의 심장" },
                    { name: "대호수 지역", examples: ["<i data-flag=\"🇺🇬\">우간다</i>", "캄팔라 <span class=\"cap\"></span>", "<i data-flag=\"🇷🇼\">르완다</i>", "키갈리", "빅토리아호", "세렝게티"], meta: "🦁 사파리 · ⛰️ 화산", desc: "지구대와 호수에 펼쳐진 야생의 땅" },
                    { name: "남부 사바나", examples: ["<i data-flag=\"🇿🇲\">잠비아</i>", "루사카", "<i data-flag=\"🇦🇴\">앙골라</i>", "코퍼벨트", "루붐바시"], meta: "⛏️ 구리/코발트 · 💎 다이아몬드", desc: "구리와 코발트, 다이아몬드가 매장된 비탄의 광물 벨트" }
                ]
            },
            {
                title: "동아프리카", desc: "지구대 너머에서 홍해와 인도양으로 바깥과 통하다",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Aw, Am, BSh" },
                    { icon: "💰", label: "상품 작물", text: "<b>커피</b>, 차, 정향" }
                ],
                items: [
                    { name: "사헬 동부", examples: ["<i data-flag=\"🇸🇩\">수단</i>", "하르툼 <span class=\"cap\"></span>", "<i data-flag=\"🇸🇸\">남수단</i>", "청나일, 백나일", "메로에 피라미드"], meta: "🔺 누비아 문명 · 💧 나일강", desc: "나일강이 기른 고대 누비아의 후예" },
                    { name: "아프리카의 뿔", examples: ["<i data-flag=\"🇪🇹\">에티오피아</i>", "아디스아바바 <span class=\"cap\"></span>", "<i data-flag=\"🇸🇴\">소말리아</i>", "지부티", "모가디슈"], meta: "☕ 커피 원산지 · ✝️ 콥트교", desc: "홍해를 굽어 보는 메카의 관문" },
                    { name: "동아프리카 해안", examples: ["<i data-flag=\"🇰🇪\">케냐</i>", "나이로비 <span class=\"cap\"></span>", "<i data-flag=\"🇹🇿\">탄자니아</i>", "잔지바르", "몸바사", "세이셸"], meta: "⛵ 스와힐리 · 🌶️ 향신료", desc: "인도양 몬순 서쪽 끝의 스와힐리 무역 도시" }
                ]
            },
            {
                title: "남아프리카", desc: "사막, 산맥, 그리고 희망봉",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Csa, Cfa, BWk, BSh" },
                    { icon: "💰", label: "상품 작물", text: "포도, 감귤, 다이아몬드" }
                ],
                items: [
                    { name: "칼라하리 사막", examples: ["<i data-flag=\"🇧🇼\">보츠와나</i>", "산족(부시맨)", "오카방고 델타", "센트럴 칼라하리 동물보호구역"], meta: "🏹 수렵 채집 · 💎 다이아몬드", desc: "세계 최대 내륙 델타를 품은 붉은 모래의 반건조 사막." },
                    { name: "나미브 사막", examples: ["<i data-flag=\"🇳🇦\">나미비아</i>", "스켈레톤 코스트", "소수스블레이", "데드블레이"], meta: "🏜️ 붉은 사구 · 🌊 한류 사막", desc: "벵겔라 한류와 안개가 빚어낸, 세계에서 가장 오래된 해안 사막." },
                    { name: "펠트", examples: ["<i data-flag=\"🇿🇦\">남아공</i>", "요하네스버그", "프리토리아", "하이펠트", "로우펠트"], meta: "🏙️ 경제 중심 · ⛏️ 금광", desc: "금과 다이아몬드 위에 세워진 남아프리카 공화국의 경제 심장부." },
                    { name: "드라켄즈버그 산맥과 해안", examples: ["<i data-flag=\"🇿🇦\">남아공</i>", "케이프타운", "더반", "레소토", "희망봉"], meta: "🍇 와이너리 · 🐧 펭귄", desc: "아프리카 남단을 감싸는 고대 산맥과 지중해성 기후의 포도밭." }
                ]
            },
            {
                title: "인도양 및 대서양 도서", desc: "대륙의 그림자, 고립된 환경이 빚어낸 독자적 정체성",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Af, Am" },
                    { icon: "💰", label: "상품 작물", text: "<b>바닐라</b>, <b>정향</b>, 설탕" }
                ],
                items: [
                    { name: "마다가스카르", examples: ["<i data-flag=\"🇲🇬\">마다가스카르</i>", "안타나나리보", "바오밥 나무 거리", "칭기"], meta: "🌳 바오밥 · 🐒 여우원숭이", desc: "독자 진화한 생명의 섬, 다른 세계에서 온 이방인." },
                    { name: "마스카렌 및 스와힐리 제도", examples: ["<i data-flag=\"🇲🇺\">모리셔스</i>", "세이셸", "레위니옹", "잔지바르"], meta: "🏖️ 휴양지 · 🐦 도도새", desc: "플렌테이션의 아픔과 크레올 문화의 유산이 깃든 세계적 휴양지." },
                    { name: "마카로네시아 및 기니만 제도", examples: ["<i data-flag=\"🇨🇻\">카보베르데</i>", "상투메 프린시페", "비오코섬"], meta: "🌋 화산섬 · 🎶 모르나 음악", desc: "포르투갈 항해사와 노예 무역의 역사가 남은 대서양 화산군도." }
                ]
            }
        ]
    },
    "6": {
        title: "유럽",
        subtitle: "지중해부터 대서양까지, 세계의 중심이 된 서구의 본산",
        badge: "VI",
        theme: "#6c5ce7",
        iconSVG: `<path d="M80,200 V100 L100,50 L120,100 V200 H80 Z" fill="currentColor" opacity="0.6"/><path d="M40,200 V120 L50,100 L60,120 V200 H40 Z" fill="currentColor" opacity="0.4"/><path d="M140,200 V120 L150,100 L160,120 V200 H140 Z" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 75명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>밀</b>, <b>감자</b>, 보리" },
            { icon: "🏛️", label: "주요 문화/종교", text: "크리스트교" }
        ],
        subCards: [
            {
                title: "서유럽", desc: "현대 세계의 기틀을 닦다",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cfb" },
                    { icon: "💰", label: "상품 작물", text: "<b>포도</b>, 맥주 보리, 치즈" }
                ],
                items: [
                    { name: "브리튼 제도", examples: ["<i data-flag=\"🇬🇧\">영국</i>", "런던 <span class=\"cap\"></span>", "<i data-flag=\"🇮🇪\">아일랜드</i>", "더블린 <span class=\"cap\"></span>", "에든버러", "맨체스터", "벨파스트"], meta: "🏭 산업혁명 · 🚢 해양 제국", desc: "해양으로 나간 게르만과 켈트" },
                    { name: "서유럽 평원", examples: ["<i data-flag=\"🇫🇷\">프랑스</i>", "파리 <span class=\"cap\"></span>", "<i data-flag=\"🇳🇱\">네덜란드</i>", "암스테르담 <span class=\"cap\"></span>", "브뤼셀", "리옹", "보르도"], meta: "🍷 와인 · 🏰 문화 유산", desc: "라인강을 타고 대서양에 나아간 무역의 중심" }
                ]
            },
            {
                title: "중부유럽 평원", desc: "정복자들이 달리던 동서의 통로",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cfb, Dfb" },
                    { icon: "💰", label: "상품 작물", text: "사탕무, <b>감자</b>, 호밀" }
                ],
                items: [
                    { name: "북독일 평원", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "베를린 <span class=\"cap\"></span>", "함부르크", "뮌헨", "드레스덴", "프랑크푸르트"], meta: "🍺 맥주 · ⚙️ 제조업", desc: "프로이센이 일어선 엘베강 유역의 숲" },
                    { name: "폴란드", examples: ["<i data-flag=\"🇵🇱\">폴란드</i>", "바르샤바 <span class=\"cap\"></span>", "크라쿠프", "그단스크", "브로츠와프", "아우슈비츠"], meta: "✝️ 가톨릭 · 🎹 쇼팽", desc: "독일과 러시아 틈새의 비극의 평원" }
                ]
            },
            {
                title: "남유럽", desc: "지중해 네트워크의 구성원",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cs" },
                    { icon: "💰", label: "상품 작물", text: "<b>올리브</b>, <b>포도</b>, 감귤" }
                ],
                items: [
                    { name: "이베리아", examples: ["<i data-flag=\"🇪🇸\">스페인</i>", "마드리드 <span class=\"cap\"></span>", "<i data-flag=\"🇵🇹\">포르투갈</i>", "리스본 <span class=\"cap\"></span>", "바르셀로나", "세비야", "포르투"], meta: "💃 플라멩코 · ☀️ 태양의 해변", desc: "이슬람을 막고 남미를 차지한 대서양의 관문" },
                    { name: "이탈리아", examples: ["<i data-flag=\"🇮🇹\">이탈리아</i>", "로마 <span class=\"cap\"></span>", "밀라노", "베네치아", "피렌체", "나폴리", "시칠리아"], meta: "🎨 르네상스 · 🍕 미식", desc: "로마와 르네상스의 영광이 깃든 반도" },
                    { name: "발칸 남부", examples: ["<i data-flag=\"🇬🇷\">그리스</i>", "아테네 <span class=\"cap\"></span>", "<i data-flag=\"🇧🇬\">불가리아</i>", "소피아 <span class=\"cap\"></span>", "테살로니키", "산토리니"], meta: "🏛️ 고대 문명 · ☦️ 정교회", desc: "유럽 문명이 태동한 고대 그리스" }
                ]
            },
            {
                title: "동유럽 평원", desc: "심장지대를 지배하라",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dfb" },
                    { icon: "💰", label: "상품 작물", text: "<b>해바라기</b>, 사탕무" }
                ],
                items: [
                    { name: "흑해 연안", examples: ["<i data-flag=\"🇺🇦\">우크라이나</i>", "키이우 <span class=\"cap\"></span>", "오데사", "크림 반도", "리비우", "도네츠크"], meta: "🌻 흑토 지대 · 🍞 유럽의 빵바구니", desc: "흑토와 화석 연료" },
                    { name: "우랄 서부 삼림지대", examples: ["<i data-flag=\"🇷🇺\">러시아</i> (유럽)", "모스크바 <span class=\"cap\"></span>", "상트페테르부르크", "볼가강", "카잔", "소치"], meta: "🏰 크렘린 · 🩰 발레", desc: "팽창을 추구하는 유라시아의 심장" }
                ]
            },
            {
                title: "북유럽", desc: "빙하와 복지",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dfc, Cfb" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (임업/어업)" }
                ],
                items: [
                    { name: "스칸디나비아", examples: ["<i data-flag=\"🇸🇪\">스웨덴</i>", "스톡홀름 <span class=\"cap\"></span>", "<i data-flag=\"🇳🇴\">노르웨이</i>", "오슬로 <span class=\"cap\"></span>", "베르겐", "헬싱키", "코펜하겐"], meta: "🌲 침엽수림 · 🛋️ 디자인", desc: "피오르와 호수의 복지의 땅" },
                    { name: "발트 3국", examples: ["<i data-flag=\"🇪🇪\">에스토니아</i>", "탈린 <span class=\"cap\"></span>", "<i data-flag=\"🇱🇻\">라트비아</i>", "liga <span class=\"cap\"></span>", "빌뉴스", "클라이페다"], meta: "🏰 중세 도시 · 💻 IT 강국", desc: "북유럽화된 동유럽" },
                    { name: "아이슬란드", examples: ["<i data-flag=\"🇮🇸\">아이슬란드</i>", "레이캬비크 <span class=\"cap\"></span>", "블루라군", "오로라", "싱벨리어"], meta: "🇮🇸 불과 얼음의 땅 · 🌋 지열 에너지", desc: "노르드와 켈트가 만난 유럽의 서쪽 끝" }
                    
                ]
            },
            {
                title: "산악 지대", desc: "단결 또는 분열의 산맥",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dfc, Cfb, H" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (목축/관광)" }
                ],
                items: [
                    { name: "중부 내륙 산악", examples: ["<i data-flag=\"🇨🇭\">스위스</i>", "베른 <span class=\"cap\"></span>", "<i data-flag=\"🇦🇹\">오스트리아</i>", "빈 <span class=\"cap\"></span>", "취리히", "잘츠부르크", "인스브루크"], meta: "🏔️ 알프스 · ⌚ 시계 산업", desc: "알프스에 기댄 중립의 요새" },
                    { name: "발칸 북부", examples: ["<i data-flag=\"🇷🇸\">세르비아</i>", "베오그라드 <span class=\"cap\"></span>", "<i data-flag=\"🇭🇷\">크로아티아</i>", "자그레브 <span class=\"cap\"></span>", "사라예보", "두브로브니크"], meta: "⚔️ 민족 갈등 · 🌊 아드리아해", desc: "종교와 민족이 뒤얽힌 유럽의 화약고" }
                ]
            }
        ]
    },
    "7": {
        title: "앵글로아메리카",
        subtitle: "대서양과 태평양을 이은 서구 프론티어",
        badge: "VII",
        theme: "#00cec9",
        iconSVG: `<rect x="0" y="20" width="200" height="20" fill="currentColor" opacity="0.3"/><rect x="0" y="60" width="200" height="20" fill="currentColor" opacity="0.3"/><rect x="0" y="100" width="200" height="20" fill="currentColor" opacity="0.3"/><rect x="0" y="140" width="200" height="20" fill="currentColor" opacity="0.3"/><rect x="0" y="180" width="200" height="20" fill="currentColor" opacity="0.3"/><path d="M20,10 L30,35 L10,20 L30,20 L10,35 Z" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 18명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>옥수수</b>, <b>밀</b>, 대두" },
            { icon: "🏛️", label: "주요 문화/종교", text: "개신교 중심의 크리스트교" }
        ],
        subCards: [
            {
                title: "태평양 연안 온대기후", desc: "서부 개척의 끝에 닿은 온대의 땅",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Csb, Cs" },
                    { icon: "💰", label: "상품 작물", text: "<b>포도</b>, 견과류" }
                ],
                items: [
                    { name: "북서부 해안", examples: ["시애틀", "밴쿠버", "포틀랜드", "워싱턴주", "타코마", "올림피아"], meta: "🌲 온대우림 · ✈️ 항공 산업", desc: "서안 해양성 기후가 지배하는 상록수림과 첨단 항공 산업의 본산" },
                    { name: "남서부 해안", examples: ["캘리포니아", "샌프란시스코", "로스앤젤레스", "실리콘밸리", "샌디에이고", "새크라멘토"], meta: "💻 실리콘밸리 · 🎬 할리우드", desc: "지중해를 방불케 하는 기후에 꽃핀 세계를 선도하는 IT 클러스터" }
                ]
            },
            {
                title: "서부 산악 및 배후 비그늘", desc: "보안관이 지키던 개척지",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BWk, BSk" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (광업)" }
                ],
                items: [
                    { name: "건조 대분지", examples: ["네바다", "라스베이거스", "애리조나", "그랜드캐년", "피닉스", "솔트레이크시티"], meta: "🎰 카지노 · 🌵 선인장", desc: "험지와 사막에 들어선 오락의 도시" },
                    { name: "산악 지역 (로키)", examples: ["콜로라도", "덴버", "와이오밍", "옐로스톤", "아스펜", "밴프"], meta: "⛷️ 스키 리조트 · ⛏️ 광업", desc: "황금광시대의 기억을 간직한 거산" }
                ]
            },
            {
                title: "중부 농업지대", desc: "강수량이 동서로 나눈 세계의 곡창",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dfa, Dfb, BSk" },
                    { icon: "💰", label: "상품 작물", text: "<b>옥수수</b>, <b>밀</b>, 대두" }
                ],
                items: [
                    { name: "그레이트플레인스 (서)", examples: ["텍사스", "오클라호마", "캔자스", "댈러스", "오클라호마시티", "오마하"], meta: "🌪️ 토네이도 · 🥩 목축업", desc: "목축과 밀농사가 펼쳐지는 건조 대평원" },
                    { name: "프레리 (동)", examples: ["아이오와", "일리노이", "미주리", "세인트루이스", "미니애폴리스", "인디애나폴리스"], meta: "🌽 콘벨트 · 🚜 기계화 농업", desc: "세계의 곡창, 끝없는 콘벨트" }
                ]
            },
            {
                title: "미 북동부 및 오대호", desc: "북미 역사가 시작된 곳",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dfa, Cfa" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (공업/금융)" }
                ],
                items: [
                    { name: "오대호 연안", examples: ["시카고", "디트로이트", "토론토", "피츠버그", "클리블랜드", "밀워키"], meta: "🏭 러스트 벨트 · 🚗 자동차 산업", desc: "제조업이 빛나던 러스트벨트" },
                    { name: "뉴잉글랜드", examples: ["뉴욕", "워싱턴 D.C. <span class=\"cap\"></span>", "보스턴", "필라델피아", "볼티모어", "뉴어크"], meta: "🏙️ 메갈로폴리스 · 🎓 아이비리그", desc: "13개 식민지가 뿌리내린 대서양 연안의 메갈로폴리스" },
                    { name: "애팔래치아 권역", examples: ["웨스트버지니아", "켄터키", "테네시", "애팔래치아 산맥", "내슈빌", "피츠버그"], meta: "⛏️ 탄광 · 🎸 컨트리 음악", desc: "촌락적 경관의 잊혀진 탄광" }
                ]
            },
            {
                title: "남부 선벨트", desc: "미국의 새로운 심장",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cfa" },
                    { icon: "💰", label: "상품 작물", text: "<b>면화</b>, 감귤류, 담배" }
                ],
                items: [
                    { name: "남동부 및 플로리다", examples: ["조지아", "애틀랜타", "플로리다", "마이애미", "올랜도", "찰스턴", "뉴올리언스"], meta: "🍊 오렌지 · 🚀 우주 산업", desc: "목화 플랜테이션에서 첨단 산업 허브로" },
                    { name: "멕시코만 연안", examples: ["휴스턴", "뉴올리언스", "루이지애나", "NASA", "오스틴", "샌안토니오"], meta: "🛢️ 석유 화학 · 🎷 재즈", desc: "우주 산업과 에너지 패권이 결합된 성장가도" }
                ]
            },
            {
                title: "북극권 및 아한대", desc: "자원과 기후변화의 열쇠를 품은 극한지",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "ET, Dfc" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (에너지/임업)" }
                ],
                items: [
                    { name: "캐나다 순상지 및 북극 제도", examples: ["누나부트", "노스웨스트 준주", "유콘", "허드슨 만", "배핀 섬", "옐로나이프"], meta: "💎 다이아몬드 · ❄️ 이누이트", desc: "빙하와 호수의 동토와 쇄빙선의 바다" },
                    { name: "알래스카", examples: ["<i data-flag=\"🇺🇸\">알래스카</i>", "앵커리지", "주노 <span class=\"cap\"></span>", "페어뱅크스", "데날리 국립공원"], meta: "🛢️ 유전 · 🐻 야생동물", desc: "불의 고리에 위치한 최후의 프론티어" }
                ]
            }
        ]
    },
    "8": {
        title: "라틴아메리카",
        subtitle: "원주민과 이베리아, 그리고 혼혈 대륙",
        badge: "VIII",
        theme: "#00b894",
        iconSVG: `<path d="M0,200 L100,80 L200,200 Z" fill="currentColor" opacity="0.6"/><path d="M85,80 V40 H115 V80 Z" fill="currentColor" opacity="0.8"/><path d="M60,50 H140 V70 H60 Z" fill="currentColor" opacity="0.8"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 32명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "<b>옥수수</b>, 쌀, 밀" },
            { icon: "🏛️", label: "주요 문화/종교", text: "로마 가톨릭" }
        ],
        subCards: [
            {
                title: "브라질", desc: "삼바와 축구의 나라",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Aw, Af" },
                    { icon: "💰", label: "상품 작물", text: "<b>커피</b>, <b>사탕수수</b>, 대두" }
                ],
                items: [
                    { name: "아마존 분지", examples: ["<i data-flag=\"🇧🇷\">브라질</i> (북부)", "마나우스", "아마존강", "열대우림", "벨렘", "이키토스"], meta: "🌳 지구의 허파 · 🏹 원주민", desc: "세계의 허파, 미지의 열대우림" },
                    { name: "브라질 고원", examples: ["상파울루", "리우데자네이루", "브라질리아 <span class=\"cap\"></span>", "세하두", "벨로오리존치", "쿠리치바"], meta: "☕ 커피 농장 · 🏙️ 메가시티", desc: "브라질을 견인하는 대도시와 배후지의 세하두 초원" },
                    { name: "판타나우", examples: ["<i data-flag=\"🇧🇷\">브라질</i>", "마투그로수두술", "재규어", "생태 관광", "파라과이강"], meta: "🐊 습지 생태계 · 🐆 재규어", desc: "세계 최대의 내륙 습지이자 침수 초원" }
                ]
            },
            {
                title: "안데스", desc: "남미 대륙의 등뼈",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "H, Csb" },
                    { icon: "💰", label: "상품 작물", text: "<b>감자</b>, <b>코카</b>, <b>커피</b>" }
                ],
                items: [
                    { name: "북부 안데스", examples: ["<i data-flag=\"🇨🇴\">콜롬비아</i>", "보고타 <span class=\"cap\"></span>", "<i data-flag=\"🇻🇪\">베네수엘라</i>", "카라카스 <span class=\"cap\"></span>", "키토", "메데인", "야노스"], meta: "☕ 고산 커피 · 💃 살사", desc: "안데스 고산과 야노스 저지대가 뒤섞인 혼혈과 커피의 땅" },
                    { name: "중부 안데스", examples: ["<i data-flag=\"🇵🇪\">페루</i>", "리마 <span class=\"cap\"></span>", "<i data-flag=\"🇧🇴\">볼리비아</i>", "라파스 <span class=\"cap\"></span>", "쿠스코", "티티카카 호수"], meta: "☀️ 잉카 문명 · 🦙 라마/알파카", desc: "태양의 제국 잉카 원주민 본산" },
                    { name: "남부 안데스", examples: ["<i data-flag=\"🇨🇱\">칠레</i>", "산티아고 <span class=\"cap\"></span>", "발파라이소", "피오르 해안", "멘도사", "아타카마"], meta: "🍷 와인 · ⛏️ 구리", desc: "편서풍 온대 지역과 남쪽 끝의 피오르" }
                ]
            },
            {
                title: "건조 권역", desc: "두 얼굴의 사막",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "BWk" },
                    { icon: "💰", label: "상품 작물", text: "뚜렷한 작물 없음 (목축)" }
                ],
                items: [
                    { name: "파타고니아사막", examples: ["<i data-flag=\"🇦🇷\">아르헨티나</i> (남부)", "티에라델푸에고", "우수아이아", "빙하", "바릴로체", "토레스 델 파이네"], meta: "🌬️ 강한 편서풍 · 🐑 양 방목", desc: "편서풍의 비그늘. 바람이 빚은 사막." },
                    { name: "아타카마사막", examples: ["<i data-flag=\"🇨🇱\">칠레</i> (북부)", "안토파가스타", "구리 광산", "<i data-flag=\"🇵🇪\">페루</i> 해안"], meta: "🔭 천문대 · 🌵 선인장", desc: "훔볼트 한류와 맞닿은 가장 건조한 사막" }
                ]
            },
            {
                title: "라플라타 유역", desc: "남미 속의 유럽",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cfa" },
                    { icon: "💰", label: "상품 작물", text: "<b>쇠고기</b>, <b>밀</b>, 대두" }
                ],
                items: [
                    { name: "그란 차코", examples: ["<i data-flag=\"🇵🇾\">파라과이</i>", "<i data-flag=\"🇦🇷\">아르헨티나</i>", "아순시온", "필코마요강", "기업적 목축"], meta: "🌳  quebracho · 🤠 목축업", desc: "남미 최후의 농업 프론티어, '녹색의 지옥'." },
                    { name: "팜파스", examples: ["<i data-flag=\"🇦🇷\">아르헨티나</i>", "부에노스아이레스 <span class=\"cap\"></span>", "<i data-flag=\"🇺🇾\">우루과이</i>", "몬테비데오 <span class=\"cap\"></span>", "로사리오", "푼타 델 에스테"], meta: "🥩 아사도 · 💃 탱고", desc: "유럽 이민자가 일군 남반구 최대의 목초지" }
                ]
            },
            {
                title: "저위도 플랜테이션", desc: "제국주의의 부끄러운 자화상",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Af, Am" },
                    { icon: "💰", label: "상품 작물", text: "<b>사탕수수</b>, 바나나" }
                ],
                items: [
                    { name: "기아나 고지", examples: ["<i data-flag=\"🇸🇷\">수리남</i>", "<i data-flag=\"🇬🇾\">가이아나</i>", "프랑스령 기아나", "엔젤 폭포", "카이엔", "조지타운"], meta: "⛰️ 테푸이 · 🚀 우주센터", desc: "남미의 작은 유럽, 열강이 가른 잃어버린 고원의 호라이마" },
                    { name: "카리브 연안", examples: ["<i data-flag=\"🇨🇺\">쿠바</i>", "아바나 <span class=\"cap\"></span>", "<i data-flag=\"🇭🇹\">아이티</i>", "<i data-flag=\"🇯🇲\">자메이카</i>", "나소", "산토도밍고", "산후안"], meta: "🏖️ 휴양지 · 🚬 시가", desc: "흑인 노예, 사탕수수 프플랜테이션" }
                ]
            },
            {
                title: "멕시코 및 중앙아메리카", desc: "북중미의 라틴 문명",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Aw, Cw" },
                    { icon: "💰", label: "상품 작물", text: "<b>커피</b>, 바나나, <b>사탕수수</b>" }
                ],
                items: [
                    { name: "멕시코 고원", examples: ["<i data-flag=\"🇲🇽\">멕시코</i>", "멕시코시티 <span class=\"cap\"></span>", "유카탄 반도", "칸쿤", "과달라하라", "몬테레이"], meta: "🌮 타코 · 🏛️ 아즈텍/마야", desc: "아즈테카와 마야의 본산" },
                    { name: "중앙아메리카 지협", examples: ["<i data-flag=\"🇵🇦\">파나마</i>", "<i data-flag=\"🇨🇷\">코스타리카</i>", "<i data-flag=\"🇬🇹\">과테말라</i>", "<i data-flag=\"🇳🇮\">니카라과</i>", "벨리즈시티", "산호세"], meta: "🚢 파나마 운하 · 🍌 바나나", desc: "육지와 바다로 두 대륙을 잇다." }
                ]
            }
        ]
    },
    "9": {
        title: "문명의 파쇄대",
        subtitle: "거대 문명이 정면충돌하는 화약고",
        badge: "IX",
        theme: "#d63031",
        iconSVG: `<path d="M0,200 L50,100 L100,200 L150,50 L200,200 Z" fill="currentColor" opacity="0.6"/><path d="M20,200 L60,140 L100,200" fill="currentColor" opacity="0.4"/><path d="M120,200 L160,120 L200,200" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "📍", label: "인구 밀도", text: "약 50명/km²" },
            { icon: "🌾", label: "주요 식량 작물", text: "밀, 옥수수, 쌀" },
            { icon: "🏛️", label: "주요 문화/종교", text: "혼합적, 이슬람교, 기독교" }
        ],
        subCards: [
            {
                title: "힌두쿠시-카라코람", desc: "힌두교와 이슬람의 정면충돌",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "H, BWk" },
                    { icon: "💰", label: "상품 작물", text: "<b>양귀비</b>, 면화, 건과류" }
                ],
                items: [
                    { name: "아프가니스탄", examples: ["<i data-flag=\"🇦🇫\">아프가니스탄</i>", "카불 <span class=\"cap\"></span>", "힌두쿠시 산맥", "칸다하르", "헤라트", "바미안", "와칸 회랑"], meta: "🪦 제국의 무덤 · 🕌 탈레반", desc: "해양과 대륙이 충돌하는 제국의 무덤." },
                    { name: "카슈미르", examples: ["카슈미르 계곡", "스리나가르", "잠무", "라다크", "카라코람 산맥", "K2"], meta: "🧣 캐시미어 · ⚔️ 영토 분쟁", desc: "파키스탄에 들어가지 못한 이슬람 번국" }
                ]
            },
            {
                title: "캅카스 권역", desc: "유럽과 아시아의 끝.",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Dfb, Cs" },
                    { icon: "💰", label: "상품 작물", text: "<b>와인</b>, 석유/천연가스" }
                ],
                items: [
                    { name: "캅카스", examples: ["<i data-flag=\"🇬🇪\">조지아</i>", "트빌리시 <span class=\"cap\"></span>", "<i data-flag=\"🇦🇲\">아르메니아</i>", "<i data-flag=\"🇦🇿\">아제르바이잔</i>", "바쿠", "예레반", "아라라트 산"], meta: "🍷 와인 발상지 · 🔥 불의 나라", desc: "성경과 쿠란이 맞대는 인종과 종교의 박물관" }
                ]
            },
            {
                title: "레반트 지역", desc: "하나의 성지, 세 개의 종교.",
                criteria: [
                    { icon: "☁️", label: "주요 기후대", text: "Cs, BWh" },
                    { icon: "💰", label: "상품 작물", text: "<b>올리브</b>, 감귤, 인광석" }
                ],
                items: [
                    { name: "이스라엘 및 팔레스타인", examples: ["<i data-flag=\"🇮🇱\">이스라엘</i>", "<i data-flag=\"🇵🇸\">팔레스타인</i>", "예루살렘 <span class=\"cap\"></span>", "텔아비브", "가자 지구", "서안 지구"], meta: "✡️ 유대교 · ✝️ 기독교 · ☪️ 이슬람", desc: "약속의 땅을 둘러싼 유대인과 아랍인의 분쟁 심장부" },
                    { name: "접경지 아랍권", examples: ["<i data-flag=\"🇱🇧\">레바논</i>", "<i data-flag=\"🇸🇾\">시리아</i>", "<i data-flag=\"🇯🇴\">요르단</i>", "베이루트", "다마스쿠스", "암만"], meta: "🌲 백향목 · 🏛️ 페트라", desc: "이스라엘과 맞닿은 가장 위태로운 단층선" }
                ]
            }
        ]
    }
};

// [신규] 세계의 대지형 데이터 (HTML/CSS 통합본)
const terrainData = {
    "terrain-1": {
        title: "<span class=\"geo-badge\">신생대</span>신기 조산대",
        subtitle: "지금도 솟아오르는 젊고 험준한 산맥들",
        badge: "I",
        theme: "#8D6E63",
        iconSVG: `<path d="M20,180 L60,100 L100,140 L140,80 L180,180 Z" stroke="currentColor" stroke-width="10" fill="none" opacity="0.6"/><path d="M0,180 L40,120 L80,160 L120,100 L160,180" stroke="currentColor" stroke-width="10" fill="none" opacity="0.4"/>`,
        criteria: [
            { icon: "⏳", label: "지질 시대", text: "신생대" },
            { icon: "🌋", label: "지각 활동", text: "활발한 활동" },
            { icon: "⛰️", label: "지형 특징", text: "연속성 높은 험준한 산맥" }
        ],
        subCards: [
            {
                title: "알프스-히말라야 조산대", desc: "유라시아를 횡단한 세계의 지붕",
                criteria: [
                    { icon: "💥", label: "충돌판", text: "아프리카/인도-유라시아" },
                    { icon: "🛢️", label: "주요 자원", text: "석유/천연가스" }
                ],
                items: [
                    { name: "남유럽 산지와 고원", examples: ["알프스산맥", "이베리아 메세타 고원", "아펜니노산맥", "피레네산맥"], meta: "🗻 알프스 (4,809m) · 🚩 남유럽", desc: "게르만, 라틴 문명의 터전을 나누는 유럽의 지붕" },
                    { name: "발칸 & 카르파티아 산맥", examples: ["카르파티아산맥", "디나르알프스산맥", "발칸산맥"], meta: "🗻 게를라흐 (2,655m) · 🚩 동유럽", desc: "유럽의 화약고를 품은, 민족과 종교가 뒤섞인 복잡한 산악 지대" },
                    { name: "서아시아 고원지대", examples: ["아나톨리아 고원", "캅카스산맥", "자그로스산맥", "이란 고원"], meta: "🗻 아라라트 (5,137m) · 🚩 서아시아", desc: "건조 세계의 심장부를 지키는 거대한 산악 요새이자 문명의 교차로" },
                    { name: "범히말라야 & 파미르", examples: ["히말라야산맥", "티베트고원", "파미르 매듭", "K2"], meta: "🗻 에베레스트 (8,848m) · 🚩 남아시아/중앙아시아", desc: "인도와 아시아가 만나 빚어낸 행성의 정수리이자 '세계의 지붕'" }
                ]
            },
            {
                title: "환태평양 조산대", desc: "전율하는 불의 고리",
                criteria: [
                    { icon: "💥", label: "충돌판", text: "태평양/나스카-주변 대륙판" },
                    { icon: "⛏️", label: "주요 자원", text: "구리/주석" }
                ],
                items: [
                    { name: "안데스산맥", examples: ["아콩카과", "마추픽추", "티티카카호", "칠레"], meta: "🗻 아콩카과 (6,961m) · 🚩 남미 서부", desc: "남미 대륙의 척추이자 잉카 문명의 무대" },
                    { name: "북미 코르디예라와 멕시코 고원", examples: ["로키산맥", "시에라네바다", "멕시코 고원", "데날리"], meta: "🗻 데날리 (6,190m) · 🚩 북미 서부", desc: "북미 대륙을 관통하는 거대한 산맥과 아즈텍 문명을 품은 화산 고원" },
                    { name: "북태평양 화산 고리", examples: ["쿠릴 열도", "캄차카 반도", "알류샨 열도"], meta: "🗻 클류쳅스카야 (4,750m) · 🚩 북태평양", desc: "열강들의 전략적 요충지가 된 아한대의 화산 징검다리" },
                    { name: "동아시아 호상열도", examples: ["일본 열도", "필리핀", "류큐 열도", "후지산", "피나투보 화산"], meta: "🗻 후지산 (3,776m) · 🚩 동아시아", desc: "대륙과 대양 사이에서 태풍과 지진을 막아서는 동아시아의 방파제" },
                    { name: "오세아니아 화산대", examples: ["순다 열도", "뉴질랜드 남알프스", "뉴기니섬"], meta: "🗻 푼착자야 (4,884m) · 🚩 오세아니아", desc: "월리스 선 이남 신세계에 위치한 남반구 불의 고리" }
                ]
            },
            {
                title: "재활성 산지", desc: "오래된 지괴가 충돌로 다시 융기한 곳",
                criteria: [
                    { icon: "💥", label: "충돌판", text: "대륙판 내부 충돌" },
                    { icon: "💎", label: "주요 자원", text: "희토류/광물" }
                ],
                items: [
                    { name: "아틀라스산맥", examples: ["모로코", "알제리", "투브칼산"], meta: "🗻 투브칼 (4,167m) · 🚩 북아프리카", desc: "아프리카판의 충돌로 솟아오른 북아프리카의 장벽" },
                    { name: "톈산-알타이산맥", examples: ["키르기스스탄", "신장 위구르", "포베다산"], meta: "🗻 포베다 (7,439m) · 🚩 중앙아시아", desc: "히말라야의 여파로 다시 솟아오른 중앙아시아의 알프스" }
                ]
            }
        ]
    },
    "terrain-2": {
        title: "<span class=\"geo-badge\">고생대<br>선캄브리아대</span>고기 조산대와 안정 육괴",
        subtitle: "시간이 깎아낸 대륙의 뿌리, 자원의 보고",
        badge: "II",
        theme: "#546E7A",
        iconSVG: `<path d="M20,180 Q100,100 180,180" stroke="currentColor" stroke-width="10" fill="none" opacity="0.6"/><path d="M0,180 Q100,120 200,180" stroke="currentColor" stroke-width="10" fill="none" opacity="0.4"/><rect x="40" y="175" width="120" height="25" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "⏳", label: "지질 시대", text: "고생대 이전" },
            { icon: "🛡️", label: "지각 활동", text: "안정된 지괴" },
            { icon: "🏞️", label: "지형 특징", text: "완만한 산지, 낮은 연속성" }
        ],
        subCards: [
            {
                title: "고기 습곡 산지 (고생대)", desc: "오랜 침식으로 완만해진, 석탄을 품은 고대의 산맥.",
                criteria: [
                    { icon: "⏳", label: "형성 시기", text: "고생대" },
                    { icon: "⚫", label: "주요 자원", text: "석탄" }
                ],
                items: [
                    { name: "애팔래치아산맥", examples: ["미국 동부", "석탄", "판게아의 흔적"], meta: "🗻 미첼 (2,037m) · 🚩 북미 동부", desc: "북미 산업혁명을 이끈 석탄의 보고(寶庫)" },
                    { name: "우랄산맥", examples: ["러시아", "유럽-아시아 경계", "페름기", "자원"], meta: "🗻 나로드나야 (1,895m) · 🚩 러시아", desc: "유럽과 아시아를 가르는 오래된 경계선" },
                    { name: "스칸디나비아산맥", examples: ["노르웨이", "스웨덴", "피오르", "칼레도니아 조산대"], meta: "🗻 갈회피겐 (2,469m) · 🚩 북유럽", desc: "빙하가 깎아낸 피오르 해안의 등뼈" },
                    { name: "그레이트디바이딩산맥", examples: ["호주 동부", "블루마운틴", "강수량 경계"], meta: "🗻 코지어스코 (2,228m) · 🚩 호주 동부", desc: "호주 동부 해안과 건조 내륙을 나누는 분수령" },
                    { name: "드라켄즈버그산맥", examples: ["남아프리카공화국", "레소토", "용의 산"], meta: "🗻 타바나은틀레냐나 (3,482m) · 🚩 남아프리카", desc: "아프리카 남부 고원을 병풍처럼 둘러싼 거대한 단층 산맥" }
                ]
            },
            {
                title: "순상지 (Shields)", desc: "대륙의 가장 오래된 핵, 철광석을 품은 고대의 땅.",
                criteria: [
                    { icon: "📜", label: "기원", text: "선캄브리아기 대륙의 핵" },
                    { icon: "⛏️", label: "주요 자원", text: "철광석" }
                ],
                items: [
                    { name: "캐나다 순상지", examples: ["허드슨만", "오대호 북부", "철광석"], meta: "🗻 이베르빌 (1,652m) · 🚩 북미 북동부", desc: "북미 대륙의 심장부를 차지하는, 빙하가 깎아낸 호수와 삼림의 땅." },
                    { name: "발트 순상지", examples: ["스웨덴", "핀란드", "호수의 나라"], meta: "🗻 할티 (1,324m) · 🚩 북유럽", desc: "수만 개의 호수를 품은 북유럽의 기반암이자 철광석의 보고." },
                    { name: "시베리아 순상지", examples: ["시베리아 중앙고원", "다이아몬드", "니켈"], meta: "🗻 푸토라나 고원 (1,701m) · 🚩 시베리아", desc: "세계 최대의 다이아몬드 산지를 품고 있는 아시아 북부의 얼어붙은 심장." }
                ]
            },
            {
                title: "탁상지 (Tablelands)", desc: "순상지 위에 퇴적층이 쌓여 형성된, 테이블 형태의 대지.",
                criteria: [
                    { icon: " 📜", label: "기원", text: "순상지 위 퇴적층" },
                    { icon: "💎", label: "주요 자원", text: "다이아몬드/보크사이트" }
                ],
                items: [
                    { name: "아프리카 탁상지", examples: ["콩고 분지", "칼라하리 사막", "빅토리아 폭포"], meta: "🗻 킬리만자로 (5,895m) · 🚩 아프리카", desc: "대륙 전체가 거대한 고원으로 이루어진, 가장 전형적인 탁상지." },
                    { name: "호주 서부 고원", examples: ["아웃백", "울룰루", "철광석(필바라)"], meta: "🗻 메해리 (1,249m) · 🚩 호주 서부", desc: "호주 대륙의 3분의 2를 차지하는, 세계 최대 철광석 산지를 품은 붉은 대지." },
                    { name: "데칸 고원", examples: ["인도 반도", "서고츠/동고츠 산맥", "현무암"], meta: "🗻 아나이무디 (2,695m) · 🚩 인도 남부", desc: "거대한 현무암 용암이 굳어 형성된, 인도 남부의 흑색 면화토 지대." },
                    { name: "브라질 고원", examples: ["상파울루", "브라질리아", "이구아수 폭포", "커피"], meta: "🗻 피쿠 다 반데이라 (2,892m) · 🚩 브라질", desc: "브라질 인구와 산업의 심장부이자 세계 최대의 커피 생산지." },
                    { name: "기아나 고지", examples: ["엔젤 폭포", "테푸이", "잃어버린 세계"], meta: "🗻 피쿠 다 네블리나 (2,994m) · 🚩 남미 북부", desc: "열대 강수와 침식이 빚어낸 기묘한 테이블 마운틴(테푸이)의 땅." }
                ]
            }
        ]
    },
    "terrain-3": {
        title: "<span class=\"geo-badge\">확장<br>보존</span>열곡대와 판의 균열",
        subtitle: "대륙이 찢어지고 판이 충돌하는 역동의 현장",
        badge: "III",
        theme: "#fa8231",
        iconSVG: `<path d="M80,20 L60,180 M120,20 L140,180" stroke="currentColor" stroke-width="12" stroke-dasharray="20 10" opacity="0.4"/><path d="M100,20 V180" stroke="currentColor" stroke-width="4" opacity="0.2"/>`,
        criteria: [
            { icon: "⏳", label: "지질 시대", text: "신생대" },
            { icon: "↔️", label: "경계 유형", text: "확장/보존 경계" },
            { icon: "🌋", label: "지각 활동", text: "화산/단층 활동" }
        ],
        subCards: [
            {
                title: "동아프리카 지구대", desc: "인류의 요람이자 미래의 대양",
                criteria: [
                    { icon: "↔️", label: "판의 경계", text: "아라비아-아프리카판 발산" },
                    { icon: "💧", label: "주요 특징", text: "담수호" }
                ],
                items: [
                    { name: "에티오피아고원", examples: ["아파르 저지대", "다나킬 사막", "에르타알레 화산", "홍해"], meta: "🌋 에르타 알레 (613m) · 🚩 아프리카의 뿔", desc: "세 개의 판이 만나 대륙이 갈라지기 시작한 곳" },
                    { name: "대호수 지역", examples: ["빅토리아호", "탕가니카호", "말라위호", "리프트 밸리"], meta: "🗻 킬리만자로 (5,895m) · 🚩 동아프리카", desc: "땅이 갈라진 틈으로 물이 고여 만들어진 깊은 호수들" },
                    { name: "화산과 사바나", examples: ["킬리만자로산", "케냐산", "세렝게티", "마사이마라"], meta: "🗻 케냐산 (5,199m) · 🚩 동아프리카", desc: "열곡 활동이 빚어낸 화산과 야생동물의 낙원" }
                ]
            },
            {
                title: "기타 판의 경계", desc: "새로운 땅이 솟거나 서로 스쳐 지나는 곳",
                criteria: [
                    { icon: "↔️", label: "판의 경계", text: "발산형/보존형" },
                    { icon: "♨️", label: "주요 자원", text: "지열 에너지" }
                ],
                items: [
                    { name: "아이슬란드 (발산형)", examples: ["대서양 중앙 해령", "싱벨리어", "화산과 간헐천"], meta: "🗻 흐반나달스흐누퀴르 (2,110m) · 🚩 북대서양", desc: "바다 속 해령이 육지 위로 드러난 불과 얼음의 땅" },
                    { name: "미 서부 단층 (보존형)", examples: ["산안드레아스", "데스밸리", "베이슨 앤 레인지"], meta: "🗻 휘트니 (4,421m) · 🚩 미국 서부", desc: "두 개의 판이 어긋나며 미끄러지는 거대한 흉터" }
                ]
            },
            {
                title: "열점 (Hotspot)", desc: "판의 내부를 뚫고 올라온 마그마의 기둥",
                criteria: [
                    { icon: "🔥", label: "형성 원인", text: "맨틀 플룸 상승" },
                    { icon: "🌋", label: "주요 활동", text: "화산 활동" }
                ],
                items: [
                    { name: "하와이 열도", examples: ["마우나로아", "킬라우에아", "화산섬 사슬", "태평양 판"], meta: "🌋 마우나케아 (4,207m) · 🚩 태평양", desc: "움직이는 판 위로 솟아오른 거대한 화산 사슬" },
                    { name: "옐로스톤", examples: ["올드 페이스풀", "간헐천", "슈퍼 화산", "칼데라"], meta: "🗻 이글 피크 (3,466m) · 🚩 미국 와이오밍", desc: "북미 대륙 지하에서 숨 쉬고 있는 거대한 초화산" },
                    { name: "갈라파고스 제도", examples: ["이사벨라섬", "핀존섬", "진화론", "고유 생태계"], meta: "🌋 울프 화산 (1,707m) · 🚩 태평양", desc: "세 개의 판이 만나는 곳, 고유 생태계의 보고" }
                ]
            }
        ]
    }
};

// [신규] 세계의 특수 지형 데이터 (HTML/CSS 통합본)
const specialData = {
    "special-1": {
        title: "<span class=\"geo-badge\">유수</span>유수와 하천 지형",
        subtitle: "흐르는 물이 깎고 쌓아 만든 대지의 혈관",
        badge: "I",
        theme: "#00a8ff",
        iconSVG: `<path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="currentColor" stroke-width="15" opacity="0.4"/><path d="M0,140 Q50,90 100,140 T200,140" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/>`,
        criteria: [
            { icon: "💧", label: "주요 작용", text: "유수의 침식/퇴적" },
            { icon: "🏞️", label: "형성 과정", text: "상류(침식)→하류(퇴적)" },
            { icon: "🏠", label: "인간 생활", text: "취락, 농경, 교통" }
        ],
        subCards: [
            {
                title: "하천 침식 지형", desc: "하천이 조각한 자연의 예술품",
                items: [
                    { name: "V자곡과 협곡", examples: ["그랜드 캐니언", "앤텔로프 캐니언", "황허 협곡"], meta: "⛰️ 지반 융기 · 💧 수직적 침식", desc: "대지 융기와 하천의 침식이 빚은 깊은 골짜기" },
                    { name: "폭포", examples: ["이구아수 폭포", "빅토리아 폭포", "나이아가라 폭포", "엔젤 폭포"], meta: "🌊 두부 침식 · 🏞️ 경연암의 경계", desc: "암석의 경도 차이로 형성된 물의 절벽" },
                    { name: "감입 곡류", examples: ["한반도 지형(영월)", "호스슈 벤드", "동강"], meta: "🏞️ 융기하는 하천 · 🐍 구불구불한 물길", desc: "융기로 인해 깊게 파인 구불구불한 물길" }
                ]
            },
            {
                title: "상류 퇴적 지형", desc: "상류의 삶의 터전",
                items: [
                    { name: "선상지", examples: ["사천 선상지", "데스밸리 선상지", "타림분지 가장자리"], meta: "⛰️ 곡구부 퇴적 · 💧 복류천 발달", desc: "골짜기 입구에 부채꼴로 퇴적된 자갈밭" },
                    { name: "하안단구", examples: ["남한강 단양", "라인강 중류", "콜로라도강"], meta: "📈 지반 융기의 증거 · 🏞️ 계단 모양 지형", desc: "과거의 강바닥이 융기해 형성된 계단 지형" }
                ]
            },
            {
                title: "하류 퇴적 지형", desc: "도시를 짓고 바다와 통하다",
                items: [
                    { name: "범람원", examples: ["나일강변", "미시시피강변", "한강 하류"], meta: "🌾 비옥한 충적토 · 🏠 농경과 취락 발달", desc: "하천 범람으로 토사가 쌓인 비옥한 평야" },
                    { name: "하중도", examples: ["맨해튼", "여의도", "파리 시테섬"], meta: "🏙️ 도심 속 섬 · 💧 퇴적 작용의 산물", desc: "하천 중심 퇴적지에 건설된 천혜의 요새이자 도시의 심장부" },
                    { name: "구하도", examples: ["서울 강남", "서울 잠실", "도쿄 긴자"], meta: "🏞️ 버려진 물길 · 🌙 우각호", desc: "문명의 힘으로 새로이 탄생한 과거의 물길" }
                ]
            },
            {
                title: "풍요와 위험, 거대 삼각주", desc: "강 하구의 퇴적 지형, 문명의 곡창지대이자 기후 위기의 최전선",
                items: [
                    { name: "벵골 삼각주", examples: ["다카", "콜카타", "순다르반스(맹그로브)", "치타공"], meta: "🗺️ 105,000km² · 👥 1억 4천만 명", desc: "갠지스와 브라마푸트라가 만든 세계 최대의 인구 밀집지이자 홍수터" },
                    { name: "메콩 삼각주", examples: ["껀터", "수상 시장", "호치민", "카마우곶"], meta: "🗺️ 40,500km² · 👥 2,100만 명", desc: "베트남의 쌀독(Rice Bowl)이라 불리는 비옥한 곡창 지대" },
                    { name: "나일 삼각주", examples: ["알렉산드리아", "로제타", "담이에타", "수에즈"], meta: "🗺️ 24,000km² · 👥 4,500만 명", desc: "사막 속에서 이집트 인구의 대부분을 부양하는 부채꼴 녹지" },
                    { name: "미시시피 삼각주", examples: ["뉴올리언스", "배턴루지", "멕시코만", "재즈의 발상지"], meta: "🗺️ 12,000km² · 🔱 조족상 삼각주", desc: "멕시코만으로 뻗어 나가는 조족상(새발 모양) 삼각주의 전형" }
                ]
            }
        ]
    },
    "special-2": {
        title: "<span class=\"geo-badge\">빙하</span>빙하와 주빙하 지형",
        subtitle: "거대한 얼음과 극한의 추위가 조각한 땅",
        badge: "II",
        theme: "#74b9ff",
        iconSVG: `<path d="M20,180 L60,80 L100,140 L140,60 L180,180" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/><path d="M20,180 L180,180" stroke="currentColor" stroke-width="20" opacity="0.2"/>`,
        criteria: [
            { icon: "❄️", label: "주요 작용", text: "빙하의 침식/퇴적" },
            { icon: "🧊", label: "형성 시기", text: "빙하기 (플라이스토세)" },
            { icon: "🏔️", label: "분포 지역", text: "고위도, 고산 지대" }
        ],
        subCards: [
            {
                title: "빙하 침식 지형", desc: "빙하가 도려낸 절경",
                items: [
                    { name: "피오르", examples: ["송네 피오르", "밀포드 사운드", "칠레 남부"], meta: "🌊 빙식곡의 침수 · 🏞️ 좁고 깊은 협만", desc: "빙하 U자곡에 바닷물이 들어온 좁고 깊은 만" },
                    { name: "호른과 권곡", examples: ["마터호른", "에베레스트", "백두산 천지(권곡)"], meta: "🏔️ 산정상부 침식 · ❄️ 빙하의 요람", desc: "빙하가 산 정상을 깎아 만든 봉우리와 와지" },
                    { name: "U자곡", examples: ["요세미티 밸리", "라우터브루넨", "인터라켄"], meta: "🏞️ U자형 단면 · 💧 융빙수 하천", desc: "빙하의 이동으로 깎인 급경사 골짜기" }
                ]
            },
            {
                title: "빙하 퇴적 지형", desc: "얼어붙은 땅의 흔적",
                items: [
                    { name: "모레인", examples: ["롱아일랜드", "케이프코드", "알프스 빙하 끝"], meta: "🪨 빙하 운반 물질(Till) · 🗺️ 빙하의 흔적", desc: "빙하가 운반하여 쌓아놓은 흙과 돌무더기" },
                    { name: "드럼린", examples: ["아일랜드", "뉴욕주 북부", "위스콘신"], meta: "🏞️ 유선형 언덕 · ➡️ 빙하의 방향", desc: "빙하의 흐름 방향으로 형성된 유선형 언덕" },
                    { name: "에스커", examples: ["핀란드 푼카하류", "캐나다 매니토바", "아일랜드"], meta: "💧 융빙수 하천 퇴적 · 〰️ 구불구불한 제방", desc: "빙하 아래 터널을 흐르던 물길이 남긴 긴 자취. 모래와 자갈이 쌓여 형성된 구불구불한 천연 제방." }
                ]
            },
            {
                title: "주빙하 지형", desc: "빙하와 대지의 상호작용",
                items: [
                    { name: "구조토", examples: ["스발바르 제도", "알래스카", "한라산 윗세오름"], meta: "❄️ 동결과 융해 반복 · 🧊 다각형 무늬", desc: "동결과 융해로 자갈이 정렬된 기하학적 무늬" },
                    { name: "솔리플럭션", examples: ["툰드라 경사면", "티베트 고원", "대관령"], meta: "💧 토양 포행 · 📉 완만한 사면 이동", desc: "녹은 흙이 영구동토층 위를 흘러내리는 현상" },
                    { name: "핑고", examples: ["캐나다 턱토약턱", "시베리아 야쿠티아"], meta: "🧊 땅속의 얼음 렌즈 · ⛰️ 툰드라의 언덕", desc: "지하수가 얼어 지표를 들어 올린 얼음 언덕" },
                    { name: "애추 (Talus)", examples: ["밀양 얼음골", "비슬산 암괴류", "알프스 산록"], meta: "❄️ 기계적 풍화 · ⛰️ 너덜겅", desc: "동결과 융해 반복으로 깨진 암석이 절벽 아래에 원뿔 모양으로 쌓인 각진 돌무더기." }
                ]
            }
        ]
    },
    "special-3": {
        title: "<span class=\"geo-badge\">건조</span>건조 지형",
        subtitle: "바람과 모래의 바다, 물리적 풍화의 대지",
        badge: "III",
        theme: "#fdcb6e",
        iconSVG: `<path d="M20,180 Q60,100 100,180 T180,180" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/><circle cx="150" cy="50" r="20" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "🌬️", label: "주요 작용", text: "바람의 침식/퇴적" },
            { icon: "☀️", label: "기후 조건", text: "강수량 < 증발량" },
            { icon: "🏜️", label: "지형 특징", text: "물리적 풍화 우세" }
        ],
        subCards: [
            {
                title: "바람의 조각 (침식)", desc: "모래바람이 바위를 깎아 만든 자연의 조각품",
                items: [
                    { name: "버섯바위와 삼릉석", examples: ["이집트 백사막", "볼리비아 고원", "타이완 예류", "알제리 타실리"], meta: "🌬️ 바람과 모래의 마찰 · 🏜️ 사막의 랜드마크", desc: "강한 모래바람이 바위의 아랫부분을 집중적으로 깎아 형성된 기묘한 형태." },
                    { name: "메사와 뷰트", examples: ["모뉴먼트 밸리", "그랜드 캐니언", "호주 아웃백", "나바호 국립공원"], meta: "🏛️ 탁자 모양 대지 · ⏳ 차별 침식의 결과", desc: "덮개암이 침식을 막아 탁자처럼 평평하게 남은 거대한 바위산과 기둥." },
                    { name: "타포니 (풍화혈)", examples: ["진안 마이산", "조슈아 트리", "그레이트 오션 로드", "울릉도"], meta: "🧂 염풍화 작용 · 🐝 벌집 모양 구멍", desc: "암석 틈의 염분 결정이 성장하며 표면을 파괴해 만든 기묘한 벌집 모양의 흔적." },
                    { name: "사막 포도 (Desert Pavement)", examples: ["모하비 사막", "사하라(레그)", "호주 기브슨 사막"], meta: "🌬️ 취식 작용(날림) · 🪨 자갈만 남은 땅", desc: "바람이 가벼운 모래는 모두 날려 보내고, 무거운 자갈과 암석만 남아 마치 도로를 포장한 것처럼 단단해진 지형." }
                ]
            },
            {
                title: "바람의 퇴적 (퇴적)", desc: "바람이 운반한 모래와 흙이 쌓여 만든 언덕",
                items: [
                    { name: "사구 (Sand Dunes)", examples: ["나미브 사막(소서스블레이)", "사하라(에르그)", "신두리 해안사구", "고비 사막"], meta: "🌙 바르한(초승달) · ⭐ 성상 사구(별 모양)", desc: "바람의 방향과 모래의 양에 따라 다양한 형태로 이동하며 쌓이는 모래 언덕." },
                    { name: "황토 고원 (Loess)", examples: ["<i data-flag=\"🇨🇳\">중국</i> 황투 고원", "유럽 평원", "미국 미시시피 유역"], meta: "🌪️ 바람에 날린 흙 · 🌾 비옥한 농경지", desc: "사막에서 날려온 미세한 먼지가 두껍게 쌓여 형성된, 문명의 터전이 된 땅." }
                ]
            },
            {
                title: "사막의 물 (건조 유수)", desc: "비가 올 때만 잠시 흐르는 물이 남긴 흔적",
                items: [
                    { name: "와디 (Wadi)", examples: ["<i data-flag=\"🇯🇴\">요르단</i> 페트라(입구)", "사하라 사막", "아라비아 반도", "이스라엘"], meta: "🚧 건천(乾川) · 🌊 일시적 홍수", desc: "평소에는 메말라 길로 쓰이지만, 폭우가 쏟아지면 급류가 흐르는 골짜기." },
                    { name: "플라야 (Playa)", examples: ["<i data-flag=\"🇧🇴\">볼리비아</i> 우유니", "<i data-flag=\"🇺🇸\">미국</i> 그레이트 솔트 호", "<i data-flag=\"🇹🇳\">튀니지</i> 쇼트"], meta: "🧂 소금 사막 · ☀️ 증발량 > 강수량", desc: "빗물이 고였다가 증발하면서 소금과 점토만 남은, 거울처럼 빛나는 평원." },
                    { name: "페디먼트 (산록완사면)", examples: ["<i data-flag=\"🇺🇸\">미국</i> 애리조나", "소노라 사막", "모하비 사막"], meta: "⛰️ 침식 지형 · 📉 완만한 경사", desc: "산지가 오랜 침식을 받아 뒤로 물러나면서 산기슭에 형성된, 얇은 퇴적층으로 덮인 완만한 암석 평원." },
                    { name: "선상지와 바하다", examples: ["<i data-flag=\"🇺🇸\">미국</i> 데스밸리", "타림 분지 가장자리", "안데스 산록"], meta: "📐 부채꼴 퇴적 · 🔗 복합 선상지", desc: "산지 입구에 토사가 부채꼴로 쌓인 선상지, 그리고 이것들이 연속적으로 이어져 형성된 복합 선상지인 바하다." },
                    { name: "오아시스", examples: ["이집트 시와", "중국 둔황(월아천)", "사하라의 눈", "팜 스프링스"], meta: "🌴 사막의 생명선 · 💧 지하수 용출", desc: "지하수나 용천수가 지표로 솟아나와, 메마른 사막 한가운데에 푸른 숲과 인간의 삶을 가능하게 한 기적의 장소." }
                ]
            }
        ]
    },
    "special-4": {
        title: "<span class=\"geo-badge\">카르스트</span>카르스트 지형",
        subtitle: "빗물과 지하수가 석회암을 용식시켜 빚은 신비",
        badge: "IV",
        theme: "#a29bfe",
        iconSVG: `<path d="M40,180 L60,100 L80,160 L100,80 L120,160 L140,100 L160,180" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/><path d="M100,100 L100,180" stroke="currentColor" stroke-width="15" opacity="0.2"/>`,
        criteria: [
            { icon: "💧", label: "주요 작용", text: "화학적 용식" },
            { icon: "🪨", label: "기반 암석", text: "석회암 (탄산칼슘)" },
            { icon: "🌡️", label: "촉진 조건", text: "고온 다습" }
        ],
        subCards: [
            {
                title: "지표의 용식: 물이 조각한 대지", desc: "빗물과 지표수가 깎아낸 절경.",
                items: [
                    { name: "라피에", examples: ["<i data-flag=\"🇸🇮\">슬로베니아</i> 카르스트 고원", "<i data-flag=\"🇩🇪\">독일</i> 쥐라 산맥", "알프스 고지대"], meta: "🗡️ 암석 표면의 홈 · 💧 빗물의 용식 작용", desc: "석회암 표면이 빗물에 녹아 날카롭게 파인 암석 홈이나 돌기둥 숲." },
                    { name: "돌리네, 우발라, 폴리에", examples: ["<i data-flag=\"🇲🇽\">멕시코</i> 세노테", "<i data-flag=\"🇭🇷\">크로아티아</i> 플리트비체", "발칸반도"], meta: "🕳️ 싱크홀 · 🏞️ 거대한 석회암 분지", desc: "작은 웅덩이에서 거대한 분지에 이르기까지." },
                    { name: "소택과 포노르", examples: ["<i data-flag=\"🇸🇮\">슬로베니아</i> 체르크니차 호수", "<i data-flag=\"🇺🇸\">미국</i> 켄터키", "다수의 카르스트 지역"], meta: "🌊 사라지는 강 · 💧 지하수계의 입구", desc: "흐르던 강이 갑자기 땅속으로 사라지는 지점(포노르)과 그 주변의 습지." },
                    { name: "탑 카르스트", examples: ["<i data-flag=\"🇨🇳\">중국</i> 구이린(계림)", "<i data-flag=\"🇻🇳\">베트남</i> 하롱베이", "<i data-flag=\"🇨🇺\">쿠바</i> 비냘레스"], meta: "🗼 가파른 석회암 봉우리 · 🌧️ 열대 습윤 기후", desc: "고온 다습한 환경에서 석회암이 강렬하게 녹아내려 형성된, 수직으로 솟은 거대한 바위 탑들의 숲." }
                ]
            },
            {
                title: "지하의 신비: 숨겨진 세계", desc: "지하로 스며든 물이 흐르며 깎아낸 공간",
                items: [
                    { name: "석회 동굴", examples: ["<i data-flag=\"🇻🇳\">베트남</i> 선동 동굴", "<i data-flag=\"🇺🇸\">미국</i> 맘모스 동굴", "<i data-flag=\"🇰🇷\">환선굴</i>"], meta: "🦇 지하 공간 · 💧 지하수의 통로", desc: "지하수가 석회암 지대 내부를 녹여 형성한 미로와 같은 거대 공간." },
                    { name: "스펠레오뎀 (동굴 생성물)", examples: ["<i data-flag=\"🇸🇮\">슬로베니아</i> 포스토이나", "<i data-flag=\"🇨🇳\">중국</i> 루디옌 동굴", "세계 각지 동굴"], meta: "💧 탄산칼슘의 재결정 · ⏳ 종유석/석순/석주", desc: "침전된 탄산칼슘이 영겁에 걸쳐 빚은 결정" },
                    { name: "지하수계", examples: ["<i data-flag=\"🇧🇭\">바레인</i> 식수원", "플로리다 대수층", "다수의 카르스트 지역"], meta: "🌊 땅속의 강 · 💧 중요한 식수원", desc: "지상에서 사라진 강이 땅속에서 복잡한 네트워크를 이루며 흐르는 모습." }
                ]
            },
            {
                title: "카르스트와 인간 생활", desc: "순응하거나, 극복하거나",
                items: [
                    { name: "테라 로사 (붉은 흙)", examples: ["지중해 연안", "<i data-flag=\"🇧🇷\">브라질</i> 커피 농장", "발칸 반도"], meta: "🔴 비옥한 잔류토 · 🍇 포도/올리브 재배", desc: "석회암이 녹고 남은 철분이 산화되어 형성된 붉고 비옥한 토양." },
                    { name: "석회화 단구", examples: ["<i data-flag=\"🇹🇷\">튀르키예</i> 파묵칼레", "<i data-flag=\"🇨🇳\">중국</i> 황룡", "<i data-flag=\"🇺🇸\">미국</i> 맘모스 핫 스프링스"], meta: "🛁 계단식 논 모양 · ♨️ 온천수 침전", desc: "탄산칼슘을 머금은 온천수가 흘러내리며 계단 모양으로 침전되어 만든 하얀 연못." },
                    { name: "카르스트 샘과 식수원", examples: ["<i data-flag=\"🇫🇷\">프랑스</i> 보클뤼즈 샘", "텍사스 힐 컨트리", "다수의 도시"], meta: "💧 깨끗한 식수 · ⚠️ 오염에 취약", desc: "지하를 흐르던 물이 다시 지표로 솟아나는 샘. 수많은 도시의 식수원." }
                ]
            }
        ]
    },
    "special-5": {
        title: "<span class=\"geo-badge\">화산</span>불의 숨결, 화산 지형",
        subtitle: "마그마가 뚫고 나와 빚어낸 뜨거운 대지",
        badge: "V",
        theme: "#e17055",
        iconSVG: `<path d="M100,20 L180,180 H20 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/><path d="M100,20 L100,80" stroke="currentColor" stroke-width="8" stroke-dasharray="10 5" opacity="0.6"/>`,
        criteria: [
            { icon: "🌋", label: "주요 작용", text: "마그마 분출" },
            { icon: "🔥", label: "에너지원", text: "지구 내부 열" },
            { icon: "🌍", label: "분포 지역", text: "판의 경계, 열점" }
        ],
        subCards: [
            {
                title: "분출의 중심, 화산체", desc: "용암의 성질이 결정하는 화산의 여러 형태",
                items: [
                    { name: "순상 화산", examples: ["<i data-flag=\"🇺🇸\">하와이</i> 마우나로아", "<i data-flag=\"🇰🇷\">제주도</i> 한라산", "갈라파고스 화산"], meta: "🌊 현무암질 용암 · 🛡️ 완만한 경사", desc: "묽은 용암이 멀리 퍼져 방패처럼 완만한 화산" },
                    { name: "성층 화산", examples: ["<i data-flag=\"🇯🇵\">일본</i> 후지산", "<i data-flag=\"🇵🇭\">필리핀</i> 마욘산", "<i data-flag=\"🇺🇸\">미국</i> 레이니어산"], meta: "🌋 안산암질 용암 · 🌋 폭발적 분화", desc: "폭발적 분출로 용암과 쇄설물이 층층이 쌓인 원뿔형 화산" },
                    { name: "분석구", examples: ["<i data-flag=\"🇰🇷\">제주도</i> 산굼부리", "<i data-flag=\"🇲🇽\">멕시코</i> 파리쿠틴", "아이슬란드 화산"], meta: "⚫ 스코리아(화산송이) 언덕 · 🌋 소규모 폭발", desc: "화산재와 분석(스코리아)이 분화구 주변에 쌓여 만들어진 작고 가파른 언덕 형태의 화산." },
                    { name: "용암 돔", examples: ["<i data-flag=\"🇯🇵\">일본</i> 운젠산", "<i data-flag=\"🇰🇷\">울릉도</i> 알봉", "<i data-flag=\"🇺🇸\">미국</i> 라센피크"], meta: "🍯 유문암질 용암 · 🥣 종(鐘) 모양", desc: "끈적끈적한 용암이 멀리 흐르지 못하고 화구 위에서 빵처럼 둥글게 굳어 형성된 지형." }
                ]
            },
            {
                title: "화산 분출물과 미지형", desc: "화산이 내뿜는 물질들과 그것이 만든 작은 지형들.",
                items: [
                    { name: "용암 대지", examples: ["<i data-flag=\"🇰🇷\">한반도</i> 개마고원", "<i data-flag=\"🇮🇳\">인도</i> 데칸고원", "미국 컬럼비아고원"], meta: "↔️ 열하(裂罅) 분출 · 🏞️ 거대한 용암 평원", desc: "갈라진 틈으로 용암이 대량으로 흘러나와 만든 평탄한 대지" },
                    { name: "주상절리", examples: ["<i data-flag=\"🇰🇷\">제주도</i> 대포해안", "<i data-flag=\"🇮🇪\">북아일랜드</i> 자이언츠 코즈웨이", "포항"], meta: "🧊 용암의 냉각 수축 · 🏛️ 다각형 돌기둥", desc: "두꺼운 용암이 빠르게 식으면서 수축하여 만들어진, 아름다운 육각형 기둥 모양의 암석." },
                    { name: "용암류 지형", examples: ["<i data-flag=\"🇺🇸\">하와이</i> 킬라우에아", "<i data-flag=\"🇮🇸\">아이슬란드</i>", "<i data-flag=\"🇰🇷\">제주도</i> 만장굴"], meta: "밧줄(파호이호이) · 클링커(아아) · 🚇 용암 동굴", desc: "용암의 종류와 냉각 속도에 따라 표면이 밧줄처럼 매끈하거나 거친 돌무더기 형태로 굳은 흔적." }
                ]
            },
            {
                title: "함몰과 침식, 그리고 남은 열기", desc: "격렬한 활동이 끝난 뒤, 무너지고 깎이며 남겨진 화산의 흔적들.",
                items: [
                    { name: "화구와 화구호", examples: ["<i data-flag=\"🇰🇷\">한라산</i> 백록담", "<i data-flag=\"🇯🇵\">일본</i> 자오산 오카마", "아소산 분화구"], meta: "🌋 단순 분화구 · 💧 물이 고인 호수", desc: "화산 폭발 후 화구가 막혀 물이 고인 호수. 함몰되면 칼데라로 발달." },
                    { name: "칼데라", examples: ["<i data-flag=\"🇰🇷\">백두산</i> 천지", "<i data-flag=\"🇺🇸\">미국</i> 크레이터 레이크", "<i data-flag=\"🇯🇵\">일본</i> 아소산"], meta: "💥 대폭발 후 함몰 · 💧 물이 고여 호수 형성", desc: "대규모 폭발로 인해 화산의 중심부가 무너져 내려 형성된 거대한 움푹 파인 지형." },
                    { name: "화산 넥", examples: ["<i data-flag=\"🇺🇸\">미국</i> 데빌스 타워", "<i data-flag=\"🇰🇷\">울릉도</i> 송곳산", "스코틀랜드"], meta: "🗿 단단한 화도(火道) · 🌬️ 차별 침식", desc: "주변의 부드러운 화산체는 모두 침식되고, 단단하게 굳은 화도(마그마 통로) 부분만 기둥처럼 남은 지형." },
                    { name: "온천과 간헐천", examples: ["<i data-flag=\"🇺🇸\">미국</i> 옐로스톤", "<i data-flag=\"🇮🇸\">아이슬란드</i>", "<i data-flag=\"🇳🇿\">뉴질랜드</i> 로토루아"], meta: "♨️ 풍부한 지열 · 💧 지하수의 순환", desc: "지하수가 지표 근처에 남은 마그마의 열에 의해 데워져 솟아오르는 뜨거운 물과 수증기." }
                ]
            }
        ]
    },
    "special-6": {
        title: "<span class=\"geo-badge\">해안</span>파도와 바람, 해안 지형",
        subtitle: "바다와 육지가 만나 깎고 쌓은 경계선",
        badge: "VI",
        theme: "#00cec9",
        iconSVG: `<path d="M20,100 Q60,60 100,100 T180,100" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/><path d="M20,140 Q60,100 100,140 T180,140" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/>`,
        criteria: [
            { icon: "🌊", label: "주요 작용", text: "파랑, 조류, 해수면 변동" },
            { icon: "🏖️", label: "지형 유형", text: "침식(암석) / 퇴적(모래)" },
            { icon: "⚓", label: "인간 생활", text: "항구, 관광, 간척" }
        ],
        subCards: [
            {
                title: "해안 침식 지형", desc: "파도가 육지를 파고들어 만든 절경",
                criteria: [
                    { icon: "🌊", label: "주요 작용", text: "파랑의 침식" },
                    { icon: "⛰️", label: "지형 특징", text: "해안선 후퇴" }
                ],
                items: [
                    { name: "해식애와 파식대", examples: ["채석강", "도버의 하얀 절벽", "12사도 바위", "태종대"], meta: "🌊 파도의 침식 · 🧱 해안 절벽", desc: "파도에 깎인 해안 절벽과 그 아래 평평한 바위 바닥" },
                    { name: "시스택 & 시아치", examples: ["촛대바위", "팡응아 만", "을왕리 선녀바위", "에트르타"], meta: "🗿 바위 기둥 · 🌉 자연 아치", desc: "육지에서 떨어져 나와 바다에 홀로 남은 바위 기둥과 아치" },
                    { name: "해안 단구", examples: ["정동진", "캘리포니아 해안", "무로토 곶"], meta: "📈 지반 융기 · 🏞️ 계단 지형", desc: "과거의 파식대가 지반 융기로 솟아올라 형성된 계단 모양의 땅" },
                    { name: "해식 동굴", examples: ["이탈리아 푸른 동굴", "제주도 산방산", "울릉도"], meta: "🕳️ 약한 암석 침식 · 🦇 해안 동굴", desc: "약한 암석 부분이 파도에 깎여 뚫린 바다의 동굴" }
                ]
            },
            {
                title: "해안 퇴적 지형", desc: "모래와 흙이 쌓여 육지를 넓힌 곳",
                criteria: [
                    { icon: "🏖️", label: "주요 작용", text: "연안류의 퇴적" },
                    { icon: "🐚", label: "구성 물질", text: "모래, 점토, 자갈" }
                ],
                items: [
                    { name: "사빈과 사구", examples: ["해운대", "신두리 해안사구", "골드코스트", "와이키키"], meta: "🏖️ 모래사장 · 🌬️ 모래 언덕", desc: "파도가 쌓은 모래사장과 바람이 만든 모래 언덕" },
                    { name: "갯벌과 염습지", examples: ["<i data-flag=\"🇰🇷\">순천만</i> 갈대밭", "와덴해", "아마존 하구", "한국 서해안"], meta: "🦀 생태계의 보고 · 🌿 염생 식물 군락", desc: "조수 간만의 차로 형성된 진흙 벌판과, 그 배후에 염생 식물이 자라나 형성된 생태적 습지." },
                    { name: "석호", examples: ["경포호", "베네치아 석호", "화진포", "뉴칼레도니아"], meta: "🌊 갇힌 바다 · 💧 기수호", desc: "모래톱(사주)이 바다를 막아 생긴 호수" },
                    { name: "사주와 육계도", examples: ["제주 성산일출봉", "프랑스 몽생미셸", "하코다테"], meta: "🔗 육지와 연결 · 🏝️ 섬이 된 육지", desc: "모래톱이 자라나 육지와 연결된 섬" }
                ]
            },
            {
                title: "특수 해안 및 생태 지형", desc: "기후와 지각 변동이 빚어낸 독특한 해안선",
                criteria: [
                    { icon: "🌡️", label: "형성 조건", text: "특정 기후대" },
                    { icon: "🐠", label: "생태 가치", text: "생물 다양성 보고" }
                ],
                items: [
                    { name: "산호초 해안", examples: ["그레이트 배리어 리프", "몰디브", "괌", "벨리즈"], meta: "🪸 석회질 지형 · 🐠 열대 바다", desc: "따뜻하고 얕은 바다에서 산호가 쌓여 만든 석회질 지형" },
                    { name: "맹그로브 해안", examples: ["순다르반스", "플로리다 에버글레이즈", "메콩 델타"], meta: "🌳 바다의 숲 · 🛡️ 해안 보호", desc: "열대 갯벌에 뿌리내려 해안 침식을 막는 숲" },
                    { name: "리아스식 해안", examples: ["한국 남해안", "스페인 리아스", "미국 체사피크 만"], meta: "🏞️ 복잡한 해안선 · 🌊 하천 침수", desc: "하천이 침식한 V자곡이 침수되어 형성된 복잡한 해안선" },
                    { name: "피오르 해안", examples: ["노르웨이 송네", "뉴질랜드 밀포드", "칠레 남부"], meta: "❄️ 빙하 침식 · 🏞️ U자곡 침수", desc: "빙하의 U자곡에 바닷물이 들어와 생긴 좁고 깊은 만" }
                ]
            }
        ]
    }
};

// [신규] 담수 시스템 데이터 (HTML/CSS 통합본)
const freshwaterData = {
    "hydro-1": {
        title: "흐름과 경계: 하천의 지정학",
        subtitle: "문명을 낳은 젖줄이자 국가를 가르는 정치적 물길",
        badge: "I",
        theme: "#1e3799",
        iconSVG: `<path d="M-20,100 Q40,40 100,100 T220,100" fill="none" stroke="currentColor" stroke-width="20" opacity="0.3"/><path d="M100,20 V180" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" opacity="0.5"/>`,
        criteria: [
            { icon: "🌊", label: "유형", text: "외래 하천 / 국제 하천" },
            { icon: "⚔️", label: "이슈", text: "수자원 분쟁 / 국경" },
            { icon: "🏛️", label: "역사", text: "4대 문명 발상지" }
        ],
        subCards: [
            {
                title: "문명의 젖줄, 외래 하천", desc: "습윤지에서 발원하여 메마른 사막을 적시는 생명수",
                items: [
                    { name: "나일강", examples: ["카이로", "아스완 댐", "백나일·청나일", "이집트 문명"], meta: "📏 6,650km · 💧 사막의 생명선", desc: "적도우림과 고원에서 시작해 사하라를 관통하며 이집트 문명을 낳은 세계 최장 하천." },
                    { name: "티그리스-유프라테스강", examples: ["바그다드", "메소포타미아", "비옥한 초승달", "튀르키예 발원"], meta: "🏛️ 메소포타미아 · ⚔️ 물 분쟁", desc: "인류 최초의 문명을 잉태했으나, 상류의 댐 건설로 수자원 갈등의 중심이 된 강." },
                    { name: "인더스강", examples: ["카라치", "펀자브(다섯 강)", "히말라야 발원", "파키스탄"], meta: "🌾 건조지 농업 · 🇵🇰 파키스탄의 젖줄", desc: "빙하 녹은 물이 사막을 적셔 거대한 곡창지대를 만든, 파키스탄의 생존이 걸린 강." },
                    { name: "콜로라도강", examples: ["그랜드 캐니언", "후버 댐", "라스베이거스", "미드호"], meta: "🏜️ 미 서부 개척 · ⚡ 전력과 식수", desc: "로키산맥의 눈 녹은 물이 사막을 흘러 캘리포니아의 농업과 라스베이거스의 불빛을 밝히는 강." }
                ]
            },
            {
                title: "경계와 통로, 국제 하천", desc: "국경을 넘어 흐르며 갈등과 협력의 무대가 되는 강",
                items: [
                    { name: "메콩강", examples: ["인도차이나 반도", "골든 트라이앵글", "델타(베트남)", "중국 댐"], meta: "🚩 6개국 경유 · 🍚 동남아의 쌀독", desc: "티베트에서 발원하여 동남아 5개국을 적시는 젖줄이자, 상류 댐 건설로 긴장이 고조되는 강." },
                    { name: "다뉴브강", examples: ["빈", "부다페스트", "베오그라드", "흑해", "라인-마인 운하"], meta: "🇪🇺 유럽 통합의 상징 · 🚢 10개국 관통", desc: "독일 흑림에서 흑해까지, 유럽 최다 국가를 거치며 동서 유럽을 하나로 잇는 물류 대동맥." },
                    { name: "리오그란데강", examples: ["미국-멕시코 국경", "엘패소", "이민자", "건조 기후"], meta: "🚧 자연 국경 · 🌵 건조지 농업", desc: "미국과 멕시코를 가르는 정치적 경계선이자, 사막 농업의 생명선." },
                    { name: "아무르강 (헤이룽강)", examples: ["중-러 국경", "하바롭스크", "타이가", "만주"], meta: "🇷🇺🇨🇳 대륙의 경계 · 🌲 동북아 생태", desc: "중국과 러시아의 국경을 흐르는 동북아시아 최대의 하천." }
                ]
            }
        ]
    },
    "hydro-2": {
        title: "대자연의 동맥: 야생의 강",
        subtitle: "열대우림과 대협곡을 흐르는 압도적인 물의 힘",
        badge: "II",
        theme: "#009432",
        iconSVG: `<path d="M40,160 C80,120 120,180 160,140" fill="none" stroke="currentColor" stroke-width="12" opacity="0.4" stroke-linecap="round"/><path d="M20,40 C60,80 140,20 180,60" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3" stroke-linecap="round"/>`,
        criteria: [
            { icon: "🌳", label: "배경", text: "열대우림 / 대협곡" },
            { icon: "🌊", label: "특징", text: "압도적 유량 / 낙차" },
            { icon: "🐊", label: "생태", text: "생물 다양성 보고" }
        ],
        subCards: [
            {
                title: "열대우림의 거인들", desc: "지구의 허파를 적시는 압도적 유량의 하천",
                items: [
                    { name: "아마존강", examples: ["마나우스", "열대우림", "분홍돌고래", "지구 유량의 20%"], meta: "🌊 세계 1위 유량 · 🌳 생물 다양성", desc: "바다보다 넓은 강. 전 세계 하천 유량의 20%를 차지하는 지구의 혈관." },
                    { name: "콩고강", examples: ["중앙아프리카", "보요마 폭포", "열대우림", "수력 발전 잠재력"], meta: "📉 세계 1위 수심 · ⚡ 거대 수력 자원", desc: "아마존에 이은 유량 2위. 깊고 빠른 물살로 막대한 수력 발전 잠재력을 지닌 적도의 강." },
                    { name: "오리노코강", examples: ["베네수엘라", "야노스 초원", "엔젤 폭포(지류)", "삼각주"], meta: "🐊 야생의 보고 · 🤠 야노스 습지", desc: "남미 북부의 열대 초원(야노스)을 적시며 카리브해로 흐르는 야생의 강." }
                ]
            },
            {
                title: "협곡과 빙하의 강", desc: "고산 빙하에서 발원하여 대지를 깎아내린 강",
                items: [
                    { name: "양쯔강 상류 (금사강)", examples: ["호도협", "삼협", "티베트 발원", "아시아 최장"], meta: "⛰️ 세계적 협곡 · 🐉 아시아 최장", desc: "티베트 빙하에서 시작되어 호도협과 삼협 등 깊은 협곡을 뚫고 흐르는 거룡." },
                    { name: "브라만푸트라강", examples: ["티베트(얄룽창포)", "대협곡", "인도 아삼", "방글라데시(자무나)"], meta: "🌀 세계 최대 협곡 · 🏞️ 빙하수", desc: "히말라야를 휘감아 돌며 세계에서 가장 깊은 협곡을 만드는 험준한 강." },
                    { name: "유콘강", examples: ["알래스카", "캐나다 유콘", "빙하 퇴적물", "골드러시"], meta: "❄️ 북극권 하천 · 🥇 골드러시의 무대", desc: "북미의 대자연을 가로지르는, 빙하가 녹은 옥빛 물과 연어의 고향." }
                ]
            },
            {
                title: "내륙의 델타와 습지", desc: "바다에 닿지 못하고 내륙에서 생명을 피워낸 오아시스",
                items: [
                    { name: "오카방고 델타", examples: ["보츠와나", "칼라하리 사막", "야생동물 낙원", "내륙 삼각주"], meta: "🦁 사막의 보석 · 🌿 세계 최대 내륙 델타", desc: "바다로 가지 못하고 칼라하리 사막 한가운데로 퍼져나가 거대한 생태계를 만든 기적의 습지." },
                    { name: "볼가강 하구", examples: ["카스피해", "철갑상어", "러시아", "연꽃 군락"], meta: "🌊 카스피해 유입 · 🐟 유럽 최장 하천", desc: "유럽 최장 하천이 내해인 카스피해와 만나 형성한 광활한 습지이자 철갑상어의 고향." },
                    { name: "나이저강 내륙 델타", examples: ["말리", "사헬 지대", "몹티", "진흙 모스크"], meta: "🏜️ 사헬의 오아시스 · 🌾 농업과 어업", desc: "사하라 사막 남단, 사헬 지대 한복판에 형성되어 서아프리카 문명을 지탱한 습지." }
                ]
            }
        ]
    },
    "hydro-3": {
        title: "하천과 대도시",
        subtitle: "강이 낳고 키운 거대 도시들의 입지적 특성",
        badge: "III",
        theme: "#6a89cc",
        iconSVG: `<rect x="40" y="40" width="30" height="30" fill="currentColor" opacity="0.4"/><rect x="130" y="120" width="30" height="30" fill="currentColor" opacity="0.4"/><path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="currentColor" stroke-width="15" opacity="0.5"/>`,
        criteria: [
            { icon: "🏙️", label: "기능", text: "항구, 방어, 용수" },
            { icon: "🚢", label: "교통", text: "내륙 수운 / 하구" },
            { icon: "🌉", label: "경관", text: "수변 공원 / 랜드마크" }
        ],
        subCards: [
            {
                title: "바다로 향하는 관문", desc: "강과 바다가 만나는 하구에 위치하여 대륙의 물동량을 책임지는 항구 도시.",
                items: [
                    { name: "로테르담 (라인강)", examples: ["유로포트", "라인강 하구", "유럽 물류 허브", "에라스무스 다리"], meta: "📏 라인강 수운 · 🚢 유럽의 관문", desc: "라인강을 통해 유럽 내륙 깊숙이 연결되는 대륙 최대의 물류 허브." },
                    { name: "상하이 (창장)", examples: ["와이탄", "푸동", "양산심수항", "황금 수로"], meta: "🌊 창장 하구 · 📦 세계 1위 컨테이너항", desc: "거대한 내륙 수운과 태평양 바닷길이 교차하는 동방의 결절점." },
                    { name: "뉴욕 (허드슨강)", examples: ["맨해튼", "이리 운하", "대서양 연안", "자유의 여신상"], meta: "🗽 신대륙의 관문 · 🚢 천혜의 항구", desc: "허드슨강이 만든 깊은 수심의 항구와 이리 운하를 통한 내륙 연결성으로 성장한 세계 수도." },
                    { name: "뉴올리언스 (미시시피강)", examples: ["멕시코만", "재즈", "곡물 수출", "프랑스 문화"], meta: "🌽 북미 곡창의 출구 · 🎷 문화의 용광로", desc: "미국 대평원의 막대한 농산물이 집결하여 세계로 나가는 멕시코만의 출구." }
                ]
            },
            {
                title: "내륙 수운의 결절점", desc: "강 중류나 지류가 합류하는 지점에 위치한 내륙 교통과 산업의 요충지.",
                items: [
                    { name: "우한 (창장+한수이)", examples: ["구성통구", "황학루", "중국 내륙 허브", "수륙 교통"], meta: "🇨🇳 구성을 잇는 통로 · 🚢 내륙 최대 항구", desc: "창장과 한수이가 만나는 지점에 위치하여 중국 내륙 교통망을 장악한 '동양의 시카고'." },
                    { name: "마나우스 (아마존)", examples: ["아마존 심장부", "고무 붐", "자유무역지대", "검은 강과 흰 강"], meta: "🌳 열대우림 항구 · 🏭 내륙 공업 지대", desc: "바다에서 1,500km 떨어진 열대우림 한가운데에 대형 선박이 들어오는 기적의 항구 도시." },
                    { name: "세인트루이스 (미시시피)", examples: ["미시시피+미주리", "서부의 관문", "아치", "수운 교차로"], meta: "🇺🇸 합류점의 도시 · 🤠 서부 개척의 관문", desc: "미시시피강과 미주리강이 합류하는 지점으로, 서부 개척 시대의 출발점이자 수운의 중심." },
                    { name: "뒤스부르크 (라인+루르)", examples: ["라인강", "루르 공업지대", "내륙항", "철강 산업"], meta: "🇩🇪 유럽 최대 내륙항 · 🏭 산업의 심장", desc: "라인강과 루르강이 만나는 곳에 위치한, 유럽 산업의 심장부 루르 공업지대의 물류 기지." }
                ]
            },
            {
                title: "강이 품은 역사와 수도", desc: "강을 방어선, 식수원, 또는 상징으로 삼아 성장한 정치와 문화의 중심지.",
                items: [
                    { name: "런던 (템스강)", examples: ["타워 브리지", "도크랜드", "수문(Barrier)", "해양 제국"], meta: "🇬🇧 대영제국의 심장 · 🌊 조수 간만 극복", desc: "밀물과 썰물이 드나드는 감조 하천을 이용해 내륙 깊숙이 항구를 건설한 해양 제국의 수도." },
                    { name: "파리 (센강)", examples: ["시테섬", "퐁뇌프", "강변 헌책방", "예술의 도시"], meta: "🇫🇷 역사의 발상지 · 🎨 낭만의 강변", desc: "센강의 하중도인 시테섬을 방어 거점으로 삼아 성장하여, 강변 전체가 유네스코 유산이 된 도시." },
                    { name: "카이로 (나일강)", examples: ["나일강 델타", "피라미드", "이슬람 구시가", "아프리카 최대"], meta: "🏜️ 사막과 델타의 접점 · 🏛️ 문명의 요람", desc: "길고 좁은 나일강 계곡이 넓은 삼각주(델타)로 퍼지는 꼭지점에 위치한 이집트의 영원한 수도." },
                    { name: "서울 (한강)", examples: ["배산임수", "수변 공원", "한반도의 중심", "기적의 강"], meta: "🇰🇷 분지와 대하천 · ⛰️ 천혜의 요새", desc: "산으로 둘러싸인 분지와 수량이 풍부한 대하천을 모두 갖춘, 한반도 지정학적 요충지." },
                    { name: "부다페스트 (다뉴브강)", examples: ["부다(언덕)와 페스트(평야)", "세 chain 다리", "동유럽의 파리"], meta: "🇭🇺 도나우의 진주 · 🌉 두 도시의 결합", desc: "다뉴브강을 사이에 두고 언덕 위의 요새(부다)와 평야의 상업 도시(페스트)가 하나로 합쳐진 도시." }
                ]
            }
        ]
    },
    "hydro-5": {
        title: "숨겨진 바다, 호수와 지하수",
        subtitle: "대륙 깊은 곳에 고립된 물과 사라지는 호수",
        badge: "V",
        theme: "#82ccdd",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.2"/><circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/>`,
        criteria: [
            { icon: "💧", label: "유형", text: "담수호 / 염호 / 지하수" },
            { icon: "📉", label: "이슈", text: "수위 저하 / 오염" },
            { icon: "🌾", label: "활용", text: "관개 농업 / 식수" }
        ],
        subCards: [
            {
                title: "담수와 지하수", desc: "문명을 키우고 생태계를 지탱하는 눈에 보이는 물.",
                items: [
                    { name: "오대호", examples: ["나이아가라 폭포", "시카고", "디트로이트", "토론토"], meta: "🗺️ 244,100km² · 💧 세계 담수의 21%", desc: "빙하가 파놓은 북미 대륙의 거대한 담수 시스템이자 내륙의 바다" },
                    { name: "바이칼호", examples: ["이르쿠츠크", "알혼섬", "앙가라강", "신비한 투명도"], meta: "🗺️ 31,722km² · 📉 수심 1,642m (1위)", desc: "시베리아의 푸른 눈, 세계에서 가장 깊고 오래된 호수" },
                    { name: "티티카카호", examples: ["푸노(페루)", "코파카바나(볼리비아)", "태양의 섬", "우로스 섬"], meta: "🗺️ 8,372km² · ⛰️ 해발 3,812m (세계 최고)", desc: "잉카의 탄생 신화가 깃든 가장 높은 안데스의 호수. 고산의 젖줄이자 볼리비아 해군의 심장." },
                    { name: "대찬정 분지", examples: ["호주 아웃백", "퀸즐랜드", "찬정", "양 목장"], meta: "🗺️ 170만km² (호주 1/5) · 💧 재생 가능한 지하수", desc: "척박한 아웃백의 목축을 가능케 한 산맥과 지하수의 축복" },
                    { name: "카나트 & 카레즈", examples: ["이란 고원", "투르판 분지", "아틀라스 산맥", "오만"], meta: "⛏️ 고대의 수로 기술 · 💧 중력 이용 관개", desc: "수십 km 밖 산맥의 지하수를 사막 한복판에 끌어와 도시를 일군 고대의 관개 수로" }
                ]
            },
            {
                title: "내해와 염호", desc: "바다로 흐르지 못하고 고립된 물",
                items: [
                    { name: "카스피해", examples: ["바쿠(아제르바이잔)", "볼가강 하구", "철갑상어(캐비어)", "유전"], meta: "🗺️ 371,000km² · 👑 세계 최대 내해", desc: "바다와 호수의 경계에 있는 거대한 물웅덩이이자 자원의 보고" },
                    { name: "사해", examples: ["요르단", "이스라엘", "소금 기둥", "머드팩"], meta: "📉 해발 -434m · 🧂 염도 34%", desc: "지구에서 가장 낮은 땅, 생명이 살 수 없는 소금 호수" },
                    { name: "아랄해", examples: ["모이낙(선박 묘지)", "보즈로즈데니야섬", "사막화", "환경 재앙"], meta: "⚠️ 면적 90% 감소 · 💀 환경 재앙", desc: "인간의 무리한 관개로 말라버린 비운의 바다" },
                    { name: "차드호", examples: ["엔자메나", "사헬 지대", "호수 축소", "아프리카"], meta: "🗺️ 1,350km² · 🌵 사막화 진행 중", desc: "기후 변화로 사라져가는 사헬 지대의 웅덩이" }
                ]
            },
            {
                title: "화석수 대수층", desc: "고대의 물을 간직한 사막 아래 잠든 바다",
                items: [
                    { name: "사하라 화석수", examples: ["리비아 대수로", "쿠프라 오아시스", "누비아 대수층", "사하라 농장"], meta: "🗺️ 200만km² · 💧 저수량 15만km³", desc: "사막 지하에 매장된 거대한 누비아 대수층과 리비아 대수로" },
                    { name: "오갈라라 대수층", examples: ["네브래스카(옥수수)", "캔자스(밀)", "하이 플레인스", "관개 농업"], meta: "🗺️ 450,000km² · 🌾 미국 대평원", desc: "미국 대평원(Great Plains)의 거대한 밀밭을 가능케 한 지하수" },
                    { name: "아라비아 대수층", examples: ["리야드", "사우디 원형 경작지", "페르시아만 연안 도시"], meta: "🗺️ 100만km² · 💧 사막 위의 녹색 혁명", desc: "아라비아의 사막 농업과 걸프만 도시 발전을 이끈 지하 저수지" }
                ]
            }
        ]
    },
    "hydro-8": {
        title: "하천과 인간 생활",
        subtitle: "문명을 낳고, 예술이 되며, 삶의 터전이 된 물줄기",
        badge: "VIII",
        theme: "#a55eea",
        iconSVG: `<path d="M100,20 L100,180 M20,100 H180" stroke="currentColor" stroke-width="8" opacity="0.2"/><circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/>`,
        criteria: [
            { icon: "🙏", label: "종교", text: "성지, 정화 의식" },
            { icon: "🎨", label: "문화", text: "예술, 축제, 여가" },
            { icon: "🏠", label: "생활", text: "수상 가옥, 식수" }
        ],
        subCards: [
            {
                title: "문명과 신화의 강", desc: "종교의 성지가 되거나, 거대 문명의 발상지가 된 강.",
                items: [
                    { name: "갠지스강", examples: ["바라나시", "리시케시", "하리드와르", "갠지스 돌고래"], meta: "🙏 힌두교의 성지 · 🌊 벵골만으로 유입", desc: "10억 힌두교도의 어머니 강, 삶과 죽음이 순환하는 신성한 물길." },
                    { name: "황허", examples: ["뤄양", "정저우", "시안(인근)", "황투 고원"], meta: "🏛️ 중화 문명의 요람 · 🌊 치수(治水)", desc: "황투 고원의 흙을 범람시켜 중화 문명을 잉태한, 치수가 곧 권력이었던 강." },
                    { name: "요르단강", examples: ["갈릴래아 호수", "사해", "예리코", "세례 터"], meta: "✝️ 크리스트교의 성지 · 💧 물 분쟁 핵심", desc: "예수가 세례받은 성지이자, 레반트 물 분쟁의 최전선." }
                ]
            },
            {
                title: "풍요와 산업의 강", desc: "농업, 에너지, 산업 등 특정 주제를 상징하는 강.",
                items: [
                    { name: "포강", examples: ["토리노", "밀라노(인근)", "롬바르디아 평원", "리소토"], meta: "🌾 이탈리아 곡창 · 🏞️ 알프스 발원", desc: "알프스 융빙수가 번영시킨 외딴 유럽의 벼농사와 미식의 고향." },
                    { name: "볼가강", examples: ["모스크바(운하연결)", "니즈니노브고로드", "카잔", "볼고그라드"], meta: "🇷🇺 러시아의 어머니 강 · 🚢 유럽 최장 수로", desc: "러시아의 심장부를 관통하는 역사, 문화, 산업의 대동맥." },
                    { name: "머리-달링강", examples: ["호주 아웃백", "와이너리", "애들레이드(하구)"], meta: "🍷 와인과 밀 · 💧 호주 농업의 생명선", desc: "건조한 호주 대륙 남동부를 적시며 와인과 밀을 생산하는 젖줄." }
                ]
            },
            {
                title: "도시의 휴식, 리버프론트", desc: "삭막한 도시민에게 쉼터와 문화를 제공하는 수변 공간.",
                items: [
                    { name: "한강 (서울)", examples: ["여의도 한강공원", "반포 무지개분수", "청계천(도시재생)", "치맥"], meta: "🇰🇷 거대한 둔치 · 🚴 천만 시민의 쉼터", desc: "세계적으로 드문 1km 강폭의 둔치가 시민의 일상 레저 공간이 된 독보적 사례." },
                    { name: "센강 (파리)", examples: ["파리 플라주(인공해변)", "바토무슈", "퐁뇌프", "강변 헌책방"], meta: "🇫🇷 낭만의 상징 · 🏖️ 도심 속 해변", desc: "강변을 따라 인공 해변과 예술이 흐르는, 파리의 낭만을 완성하는 공간." }
                ]
            },
            {
                title: "예술과 낭만의 강", desc: "수많은 예술가들에게 영감을 주어 작품으로 다시 태어난 강.",
                items: [
                    { name: "라인강", examples: ["로렐라이 언덕", "괴테", "바그너", "고성 가도"], meta: "🇩🇪 독일 문학의 고향 · 🏰 전설과 신화", desc: "로렐라이의 전설과 수많은 고성이 어우러져 독일 낭만주의의 배경이 된 강." },
                    { name: "다뉴브강", examples: ["요한 슈트라우스", "왈츠", "부다페스트 야경", "비포 선라이즈"], meta: "🎵 아름답고 푸른 도나우 · 🎻 음악의 강", desc: "왈츠의 선율을 타고 흐르며 중부 유럽의 우아함과 정취를 담아내는 강." }
                ]
            },
            {
                title: "물 위의 삶", desc: "땅이 아닌 물 위에서 나고 자라며 살아가는 사람들의 터전.",
                items: [
                    { name: "톤레삽 & 메콩강", examples: ["캄보디아", "수상 가옥", "플로팅 마켓", "어업"], meta: "🏠 수상 마을 · 🚣 물 위의 시장", desc: "호수의 수위 변화에 맞춰 이동하며 살아가는 동남아시아의 독특한 수상 문화." },
                    { name: "에야와디강", examples: ["미얀마", "만달레이", "바간", "수상 운송"], meta: "🇲🇲 미얀마의 혼 · 🚢 삶의 도로", desc: "도로보다 배가 더 중요한, 미얀마 사람들의 삶과 역사가 흐르는 대동맥." }
                ]
            }
        ]
    }
};

// [신규] 대양과 바다 데이터 (HTML/CSS 통합본)
const oceanData = {
    "hydro-6": {
        title: "해상 요충지와 운하",
        subtitle: "세계를 잇는 좁은 물길, 패권의 급소",
        badge: "VI",
        theme: "#0c2461",
        iconSVG: `<path d="M0,0 L80,0 L80,200 L0,200 Z" fill="currentColor" opacity="0.1"/><path d="M120,0 L200,0 L200,200 L120,200 Z" fill="currentColor" opacity="0.1"/><path d="M80,100 H120" stroke="currentColor" stroke-width="10" stroke-dasharray="5 5" opacity="0.5"/>`,
        criteria: [
            { icon: "🚢", label: "기능", text: "운송로 단축 / 병목" },
            { icon: "⚓", label: "전략", text: "해상 통제권 / 관문" },
            { icon: "💰", label: "경제", text: "물류비 절감 / 통행료" }
        ],
        subCards: [
            {
                title: "대륙을 뚫은 운하", desc: "지협을 열고 양쪽을 이은 인간의 의지",
                items: [
                    { name: "수에즈 운하", examples: ["포트사이드", "수에즈", "이스마일리아", "그레이트 비터 호수"], meta: "📏 193km · 🚢 수에즈막스 (20m)", desc: "아시아와 유럽을 가장 빠르게 잇는 세계 무역의 동맥" },
                    { name: "파나마 운하", examples: ["파나마시티", "콜론", "가툰 호수", "미라플로레스 갑문"], meta: "📏 82km · 🚢 네오파나막스 (15m)", desc: "태평양과 대서양을 연결하며 미주 대륙을 관통하는 길" },
                    { name: "킬 운하", examples: ["킬(Kiel)", "함부르크", "유틀란트 반도", "북해-발트해"], meta: "📏 98km · 🌊 북해-발트해", desc: "북해와 발트해를 연결하여 덴마크 우회 항로를 단축" }
                ]
            },
            {
                title: "해협: 세계 교역의 동맥", desc: "오늘날 세계 경제를 움직이는 바다의 길목",
                items: [
                    { name: "말라카 해협", examples: ["싱가포르", "말라카", "조호르바루", "바탐섬"], meta: "↔️ 최소폭 2.8km · 🚢 말라카막스 (25m)", desc: "세계 물동량 1위, 동아시아 에너지 안보의 목줄" },
                    { name: "호르무즈 해협", examples: ["반다르아바스", "무산담 반도", "두바이", "오만만"], meta: "↔️ 최소폭 39km · 🛢️ 오일 로드", desc: "전 세계 원유 수송의 핵심이자 페르시아만의 입구" },
                    { name: "지브롤터 해협", examples: ["영국령 지브롤터", "탕헤르(모로코)", "스페인령 세우타", "헤라클레스의 기둥"], meta: "↔️ 최소폭 14km · 🌊 대서양-지중해", desc: "대서양에서 지중해로 들어가는 헤라클레스의 기둥" },
                    { name: "보스포루스 해협", examples: ["이스탄불", "골든 혼", "마르마라해", "갈라타 다리"], meta: "↔️ 최소폭 700m · 🌊 흑해-지중해", desc: "흑해 경제권의 유일한 출구이자 아시아와 유럽의 경계" },
                    { name: "대한해협", examples: ["부산항", "쓰시마섬", "후쿠오카", "거제도"], meta: "↔️ 폭 200km · 🚢 동북아 물류", desc: "대륙에서 태평양으로 나아가는 동북아시아의 전략적 관문" },
                    { name: "도버 해협", examples: ["칼레", "도버", "영국해협", "채널 터널"], meta: "↔️ 최소폭 34km · 🚢 세계 최다 통항량", desc: "영국과 유럽 대륙을 잇는 세계에서 가장 붐비는 바닷길" }
                ]
            },
            {
                title: "해협: 문명과 탐험의 경계", desc: "역사와 미래의 지정학적 의미를 담은 상징적 해협",
                items: [
                    { name: "베링 해협", examples: ["알래스카", "축치반도", "북극 항로", "베링 육교"], meta: "↔️ 최소폭 85km · 🌊 태평양-북극해", desc: "인류가 신대륙으로 건너간 고대의 통로이자, 미래 북극 항로의 지정학적 요충지" },
                    { name: "드레이크 해협", examples: ["케이프 혼", "남극 반도", "파타고니아", "세계에서 가장 험한 바다"], meta: "↔️ 폭 800km · 🌊 대서양-태평양", desc: "대항해시대 탐험가들의 무대이자 세계에서 가장 넓고 험한 해협" }
                ]
            }
        ]
    },
    "hydro-7": {
        title: "문명을 가르고 이은 바다",
        subtitle: "대륙의 경계이자 문명 교류의 고속도로",
        badge: "VII",
        theme: "#3498db",
        iconSVG: `<path d="M-20,100 Q40,40 100,100 T220,100" fill="none" stroke="currentColor" stroke-width="20" opacity="0.3"/><path d="M-20,140 Q40,80 100,140 T220,140" fill="none" stroke="currentColor" stroke-width="15" opacity="0.2"/><path d="M-20,180 Q40,120 100,180 T220,180" fill="none" stroke="currentColor" stroke-width="10" opacity="0.1"/>`,
        criteria: [
            { icon: "🌊", label: "유형", text: "내해 / 지중해 / 대양" },
            { icon: "🚢", label: "기능", text: "교역로 / 자원 / 안보" },
            { icon: "🏛️", label: "역사", text: "문명 교류 / 대항해" }
        ],
        subCards: [
            {
                title: "문명의 요람, 닫힌 바다", desc: "육지에 둘러싸여 문명이 탄생하고 교류했던 내해(內海).",
                items: [
                    { name: "지중해", examples: ["로마", "아테네", "카르타고", "이스탄불", "베네치아"], meta: "🏛️ 서구 문명의 요람 · 🌊 대서양 ↔ 인도양(수에즈)", desc: "고대 제국들의 흥망성쇠가 펼쳐진 서양 문명의 중심 무대이자 세 대륙의 교차로." },
                    { name: "흑해", examples: ["이스탄불", "오데사", "크림반도", "소치", "흑토지대"], meta: "🔑 러시아의 부동항 · 🌾 유라시아의 곡창", desc: "유라시아 스텝의 곡물이 지중해로 나가는 유일한 출구이자 러시아 남진 정책의 숙원." },
                    { name: "발트해", examples: ["스톡홀름", "상트페테르부르크", "한자 동맹", "헬싱키"], meta: "🔑 북유럽의 내해 · 🚢 한자 동맹의 무대", desc: "바이킹과 한자 상인들이 누비던 북유럽의 내해이자 스웨덴과 러시아의 패권 각축장." },
                    { name: "황해 (서해)", examples: ["인천", "칭다오", "다롄", "산둥반도", "발해만"], meta: "🔑 한중 교류의 통로 · 🌊 얕은 대륙붕", desc: "황허의 흙으로 물든 바다. 고대부터 한반도와 중국 대륙을 이어온 문물 교류의 핵심 통로." }
                ]
            },
            {
                title: "패권과 자원의 바다", desc: "제국의 각축장이었거나, 현대의 자원과 항로를 둘러싼 경쟁의 중심.",
                items: [
                    { name: "카리브해", examples: ["쿠바", "자메이카", "해적", "플랜테이션", "파나마 운하"], meta: "🏛️ 아메리카의 지중해 · 💰 설탕과 노예무역", desc: "신대륙을 향한 유럽 제국들의 욕망이 충돌한 각축장이자 해적과 혁명의 바다." },
                    { name: "남중국해", examples: ["스프래틀리 군도", "싱가포르", "홍콩", "해상 실크로드"], meta: "🔑 아시아의 생명선 · 💥 지정학적 화약고", desc: "동아시아의 해상 물류가 통과하는 생명선이자, 오늘날 가장 첨예한 영유권 분쟁이 벌어지는 바다." },
                    { name: "북해", examples: ["런던", "오슬로", "로테르담", "북해 유전", "도거뱅크"], meta: "🛢️ 유럽의 에너지 보고 · 🐟 북대서양의 황금어장", desc: "한자동맹의 무역로에서 유럽의 에너지 심장으로 변모한, 풍요로운 자원의 바다." },
                    { name: "페르시아만", examples: ["두바이", "도하", "호르무즈 해협", "메소포타미아"], meta: "🛢️ 세계의 화약고 · 💧 담수화 플랜트", desc: "고대 메소포타미아 문명을 품었으며, 현대에는 전 세계 석유의 보고이자 지정학적 긴장의 중심." }
                ]
            },
            {
                title: "대륙과 대양의 교차로", desc: "대륙 깊숙이 들어와 내륙과 대양을 잇는 거대한 만(灣).",
                items: [
                    { name: "벵골만", examples: ["콜카타", "첸나이", "양곤", "몬순", "순다르반스"], meta: "🌊 몬순 무역의 중심 · 🌀 사이클론 발생지", desc: "인도와 동남아를 몬순으로 이어준, 거대한 삼각주를 품은 풍요와 재난의 만." },
                    { name: "멕시코만", examples: ["뉴올리언스", "휴스턴", "칸쿤", "걸프 스트림", "허리케인"], meta: "🌀 허리케인의 길목 · 🛢️ 북미의 유전", desc: "허리케인의 고향이자 미국 에너지 산업의 심장인 따뜻한 바다." },
                    { name: "아라비아해", examples: ["뭄바이", "카라치", "무스카트", "소말리아 해적"], meta: "🌊 인도양의 서쪽 관문 · ⛵ 다우선 무역", desc: "아라비아와 인도를 잇는 몬순 무역의 핵심. 현대 해상 안보의 주요 수역." },
                    { name: "홍해", examples: ["수에즈 운하", "제다", "시나이반도", "모세의 기적"], meta: "🔑 수에즈 운하의 길목 · 🌊 높은 염도와 산호초", desc: "고대 출애굽의 무대. 수에즈 운하로 이어지는 현대 무역의 동맥." }
                ]
            },
            {
                title: "대륙을 품은 5대양", desc: "각기 다른 역사와 성격을 지닌 거대한 물의 세계",
                items: [
                    { name: "태평양", examples: ["폴리네시아 트라이앵글", "불의 고리", "마리아나 해구", "미드웨이 환초", "갈라파고스 제도"], meta: "🗺️ 면적 1위 (약 1.8억 km²) · 📉 최대 수심 (마리아나 해구)", desc: "해양 민족의 무대이자 마지막 미지의 프론티어" },
                    { name: "대서양", examples: ["멕시코 만류", "카리브해", "대서양 삼각 무역", "아이슬란드", "아조레스 제도"], meta: "🗺️ 면적 2위 (약 1.06억 km²) · 🚢 세계 교역의 중심", desc: "유럽 기후의 근원, 대항해시대의 각축장" },
                    { name: "인도양", examples: ["아라비아해", "벵골만", "스와힐리 해안", "말라카 해협", "소코트라 군도"], meta: "🗺️ 면적 3위 (약 7,356만 km²) · 🌬️ 몬순의 바다", desc: "몬순 네트워크의 세계" },
                    { name: "북극해", examples: ["북극 항로", "그린란드", "베링 해협", "스발바르 제도", "야말반도"], meta: "🗺️ 면적 5위 (약 1,406만 km²) · ❄️ 얼어붙은 바다", desc: "이누이트의 터전이자 미래의 해상 노드" },
                    { name: "남극해", examples: ["남극 대륙", "드레이크 해협", "포효하는 40도", "남극 수렴대", "로스해"], meta: "🗺️ 면적 4위 (약 2,033만 km²) · 🌀 남극 순환류", desc: "태고의 비밀을 간직한 거칠고 차가운 바다" }
                ]
            }
        ]
    },
    "ocean-3": {
        title: "자연 어업: 잡는 어업의 세계",
        subtitle: "자연이 내어주는 선물을 거두는, 한류와 난류 어장의 보고",
        badge: "III",
        theme: "#3498db",
        iconSVG: `<path d="M50,100 C80,50 120,50 150,100 S180,150 150,150 S80,150 50,100" fill="currentColor" opacity="0.3"/><path d="M60,120 C90,70 130,70 160,120 S190,170 160,170 S90,170 60,120" fill="currentColor" opacity="0.2"/>`,
        criteria: [
            { icon: "🎣", label: "방식", text: "자연 어업 (채포)" },
            { icon: "🌊", label: "핵심", text: "어장 형성 원리" },
            { icon: "🌍", label: "영향", text: "글로벌 식량 공급" }
        ],
        subCards: [
            {
                title: "한류성 어장: 차가운 바다의 선물", desc: "플랑크톤이 풍부하여 세계 최대 어획량을 자랑하는 차가운 바다.",
                items: [
                    { name: "북서태평양 어장", examples: ["동해", "오호츠크해", "명태", "꽁치", "오징어", "세계 최대 어획량"], meta: "🌊 <a href=\"https://www.google.com/search?q=조경수역\" target=\"_blank\"><i class=\"term\">조경수역</i></a> · 🐟 한·난류 교차", desc: "쿠릴 한류와 쿠로시오 난류가 만나 세계 최대의 어획량을 자랑하는, 명태와 오징어의 본산." },
                    { name: "북동대서양 어장", examples: ["북해", "노르웨이해", "대구", "청어", "고등어", "유럽의 부엌"], meta: "🌊 북대서양 난류 · 🐟 피시 앤 칩스", desc: "북대서양 해류가 운반하는 영양분으로 대구와 청어가 풍부한 유럽의 전통적인 수산물 공급 기지." },
                    { name: "남동태평양 어장", examples: ["페루 연안", "칠레 연안", "멸치", "안초비", "정어리", "세계 최대 어분 생산"], meta: "🌊 <a href=\"https://www.google.com/search?q=용승\" target=\"_blank\"><i class=\"term\">용승 현상</i></a> · 🌽 축산업의 기반", desc: "페루 한류의 강력한 용승으로 플랑크톤이 폭발하여, 전 세계 사료로 쓰이는 멸치가 주로 잡히는 어장." }
                ]
            },
            {
                title: "난류성 어장: 따뜻한 바다의 다양성", desc: "다양한 어종이 서식하는 따뜻한 바다와 갯벌. 다품종 소량 생산.",
                items: [
                    { name: "새우 & 게 (갑각류)", examples: ["멕시코만", "동남아시아", "블랙타이거 새우", "킹크랩", "맹그로브 생태계"], meta: "🦐 열대 연안 생태계", desc: "영양이 풍부한 열대 연안에서 서식하며, 양식업으로도 중요한 대표 갑각류." },
                    { name: "오징어 & 문어 (두족류)", examples: ["동해", "지중해", "포클랜드 제도", "대왕오징어", "피문어", "전 세계 식문화"], meta: "🦑 글로벌 식재료", desc: "암초나 모래 지대에 서식하며 야간 조업으로 잡는, 세계인의 사랑을 받는 두족류." },
                    { name: "고등어 & 갈치 (회유어)", examples: ["제주도", "일본 근해", "쿠로시오 해류", "멕시코 만류", "대중 생선의 대표"], meta: "🐟 서민의 밥상", desc: "따뜻한 해류를 따라 이동하며 각국 서민들의 식탁을 책임지는 대중 어종." }
                ]
            },
            {
                title: "원양 어업과 국제 자원", desc: "국경 없는 대양을 누비며 고부가가치 어종을 잡는 첨단 어업.",
                items: [
                    { name: "참치: 대양의 유목민", examples: ["태평양", "대서양", "참다랑어", "황다랑어", "원양 주낙", "선망 어업"], meta: "🍣 스시 문화의 핵심 · 🛥️ 국제적 자원 관리", desc: "따뜻한 바다를 회유하는 참치를 쫓아 전 세계 대양을 누비는, 기술과 자본이 집약된 산업." },
                    { name: "크릴·이빨고기: 남극의 자원", examples: ["남극해", "크릴", "메로", "이빨고기", "미래 식량 자원"], meta: "🦐 남극 생태계 기반 · 💊 바이오 자원", desc: "남극 생태계의 근간이자 건강식품 원료로 주목받으며, 엄격한 국제 관리하에 조업이 이루어지는 어장." }
                ]
            }
        ]
    },
    "ocean-4": {
        title: "양식업과 바다의 규칙",
        subtitle: "자원 고갈에 맞서 바다를 관리하고 경작하는 인간의 노력",
        badge: "IV",
        theme: "#27ae60",
        iconSVG: `<rect x="20" y="20" width="160" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="8" opacity="0.2"/><path d="M50,80 H150 M50,120 H150" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "📈", label: "트렌드", text: "'잡는' → '기르는' 어업" },
            { icon: "⚖️", label: "규칙", text: "국제 협약 / EEZ" },
            { icon: "🤖", label: "미래", text: "스마트 양식 / AI 조업" },
            { icon: "🌍", label: "과제", text: "지속 가능성" }
        ],
        subCards: [
            {
                title: "양식업: 기르는 어업으로의 전환", desc: "자연산 어획량의 한계를 극복하고 안정적인 공급을 가능케 한 '바다의 농업 혁명'.",
                items: [
                    { name: "연어: 차가운 협만의 첨단 양식", examples: ["노르웨이", "칠레", "대서양 연어", "첨단 가두리 양식"], meta: "🇳🇴 첨단 양식 기술 · 💰 자본 집약적 산업", desc: "피오르 협만의 차가운 물과 자동화 기술이 결합된, 자본 집약적 첨단 양식업의 대표 주자." },
                    { name: "새우: 열대 연안의 대량 양식", examples: ["태국", "베트남", "에콰도르", "흰다리새우", "노동 집약적"], meta: "🦐 세계 최대 양식 품목 · 🌳 환경 파괴 논란", desc: "열대 연안의 넓은 갯벌을 활용한 대량 생산 방식. 맹그로브 숲 파괴라는 딜레마를 안고 있다." },
                    { name: "패류 & 해조류: 갯벌의 전통 양식", examples: ["한국 남해안", "프랑스", "굴", "전복", "김", "미역", "전통 방식"], meta: "🌏 세계 유일 김 양식 · 갯벌 생태계 활용", desc: "조수간만의 차가 큰 갯벌과 청정 해역의 특성을 활용한 전통 양식. 김은 한국이 독보적." }
                ]
            },
            {
                title: "해양 영토와 국제적 논쟁", desc: "바다를 둘러싼 국가 간의 보이지 않는 영토 전쟁과 문화적 충돌.",
                items: [
                    { name: "배타적 경제 수역 (EEZ)", examples: ["200해리 수역", "UN해양법협약", "해양 자원 주권"], meta: "📜 UN 해양법 협약 · 🌊 바다의 국경선", desc: "연안국이 수산 및 광물 자원에 대한 독점적 권리를 갖는 수역. 현대 해양 분쟁의 핵심 원인." },
                    { name: "고래 (포경 논쟁)", examples: ["일본", "노르웨이", "상업 포경", "조사 포경", "국제포경위원회(IWC)"], meta: "🚫 국제적 금지 · 🐳 문화 vs 생태", desc: "식용 문화를 지키려는 국가와 생태 보존을 외치는 국제 사회의 첨예한 대립이 계속되고 있다." },
                    { name: "상어 (샥스핀 문제)", examples: ["홍콩", "중국", "샥스핀", "해양 최상위 포식자"], meta: "🦈 생태계 조절자 · 🍽️ 고급 식문화의 비극", desc: "고급 요리 '샥스핀'을 위한 잔혹한 어업으로, 해양 생태계 최상위 포식자가 멸종 위기에 처했다." }
                ]
            }
        ]
    }
};

// [신규] 세계의 기후 데이터 (기후 전용 특수 구조)
const climateData = {
    "climate-e": {
        id: "climate-e", // ID 명시
        char: "E", // 뱃지 문자
        title: "한대 기후",
        subtitle: "나무가 자라지 못하는 영구 동토와 툰드라",
        theme: "#74b9ff",
        iconSVG: `<path d="M20,180 L50,120 L80,180 L110,100 L140,180" fill="none" stroke="currentColor" stroke-width="15" opacity="0.3"/>`,
        // 헤더의 분류 가이드 (2차, 3차)
        guides: {
            group2: [{char:"T", text:"툰드라"}, {char:"F", text:"빙설 기후"}],
            group3: [] // 3차 분류 없음
        },
        // 패널 상단 기준
        criteria: {
            koppen: "최난월 평균 10℃ 미만<br>수목의 생장 한계를 충족하지 못하는 극한의 기후",
            soilVeg: "툰드라(이끼류), 빙설(식생 없음), 툰드라토",
            mapImage: "images/map-e.webp"
        },
        // 식생 및 토양 카드 (2열)
        features: [
            {
                icon: "🏔️", title: "한대 기후의 식생", desc: "나무 없는 땅, 짧은 여름의 생명력",
                items: [
                    { name: "툰드라 식생", meta: "🌱 이끼류 · 🍄 지의류", desc: "나무가 자랄 수 없는 수목한계선 너머의 땅. 키 작은 식물들이 땅에 붙어 짧은 여름 동안만 성장함." },
                    { name: "빙설 기후의 식생", meta: "🚫 식생 없음 · 🔬 미생물 존재", desc: "영구적인 얼음과 눈으로 덮여 있어 고등 식생이 거의 존재하지 않음." }
                ]
            },
            {
                icon: "🧊", title: "한대 기후의 토양", desc: "영구동토층, 얼어붙은 대지",
                items: [
                    { name: "툰드라토", meta: "🧊 영구동토층 · 💧 활동층", desc: "땅속 깊은 곳이 1년 내내 얼어있는 영구동토층이 특징. 여름철 표층만 잠시 녹아 배수가 불량함." },
                    { name: "빙상 (Ice Sheet)", meta: "❄️ 대륙 빙하 · 🚫 토양 없음", desc: "토양이 발달할 수 없으며, 대륙 전체가 수백~수천 미터 두께의 얼음으로 덮여 있음." }
                ]
            }
        ],
        // 하위 기후 아코디언
        subClimates: [
            {
                code: "ET", name: "툰드라 기후", desc: "가장 따뜻한 달 0℃ ~ 10℃", graph: "images/ET.webp",
                items: [
                    { name: "북극해 연안 저지대", examples: ["누크", "시베리아 북부", "알래스카 북부 해안", "배핀섬"], desc: "여름에만 이끼가 자라는 순록의 땅" },
                    { name: "고산 툰드라 지대", examples: ["티베트 고원", "안데스 고산지대", "알프스 정상", "킬리만자로 정상"], desc: "고도가 만들어낸, 나무가 없는 산악 지대" }
                ]
            },
            {
                code: "EF", name: "빙설 기후", desc: "가장 따뜻한 달 0℃ 미만", graph: "images/EF.webp",
                items: [
                    { name: "남극 대륙", examples: ["남극점", "보스토크 기지", "맥머도 기지"], desc: "지구의 냉동고, 영원한 얼음의 대륙" },
                    { name: "그린란드 내륙 빙상", examples: ["서밋 캠프", "아이스미테"], desc: "북반구 최대의 얼음 덩어리" }
                ]
            }
        ]
    },
    "climate-d": {
        id: "climate-d",
        char: "D",
        title: "냉대 기후",
        subtitle: "매우 추운 겨울과 극한의 연교차",
        theme: "#0984e3",
        iconSVG: `<path d="M100,20 L140,180 H60 Z" fill="currentColor" opacity="0.4"/><path d="M50,80 L80,180 H20 Z" fill="currentColor" opacity="0.3"/><path d="M150,80 L180,180 H120 Z" fill="currentColor" opacity="0.3"/>`,
        guides: {
            group2: [{char:"f", text:"연중 습윤"}, {char:"w", text:"동계 건조"}, {char:"s", text:"하계 건조"}],
            group3: [{char:"a", text:"더운 여름"}, {char:"b", text:"온난 여름"}, {char:"c", text:"여름 서늘"}, {char:"d", text:"극한 겨울"}]
        },
        criteria: {
            koppen: "최한월 평균 -3℃ 미만, 최난월 10℃ 이상<br>눈 쌓인 대지도 견디는 강인한 침엽수의 터전",
            soilVeg: "침엽수림(타이가), 포드졸",
            mapImage: "images/map-d.webp"
        },
        features: [
            {
                icon: "🌲", title: "냉대 기후의 식생", desc: "혹한을 견디는 침엽수림의 바다",
                items: [
                    { name: "타이가 (Taiga)", meta: "🌲 전나무 · 🌲 가문비나무", desc: "길고 추운 겨울과 짧은 여름에 적응한, 뾰족한 잎을 가진 나무들의 숲. 세계 최대의 삼림 벨트." },
                    { name: "혼합림", meta: "🌲 소나무 · 🌳 자작나무", desc: "냉대와 온대의 점이 지대에 나타나는, 침엽수와 활엽수가 함께 자라는 숲." }
                ]
            },
            {
                icon: "⚪️", title: "냉대 기후의 토양", desc: "산성 침엽과 척박한 회색 땅",
                items: [
                    { name: "포드졸 (Podzol)", meta: "⚪️ 회백색 · 🧪 강한 산성", desc: "침엽수 낙엽이 썩으며 강한 산성 물질을 내뿜어, 토양의 철과 알루미늄을 씻어내 표백된 듯한 회백색 층을 만드는 척박한 토양." }
                ]
            }
        ],
        subClimates: [
            {
                code: "Df", name: "냉대 습윤 기후", desc: "연중 고른 강수, 긴 겨울", graph: "images/Df.webp",
                items: [
                    { name: "유라시아 타이가 지대", examples: ["모스크바", "상트페테르부르크", "스톡홀름", "헬싱키", "키이우"], desc: "광활한 침엽수림과 포드졸 토양" },
                    { name: "북미 오대호 및 캐나다 남부", examples: ["시카고", "토론토", "몬트리올", "보스턴", "미니애폴리스"], desc: "러스트 벨트와 캐나다의 핵심 거주지" },
                    { name: "일본 홋카이도 및 혼슈 북부", examples: ["삿포로", "아오모리", "아사히카와", "블라디보스토크"], desc: "폭설로 유명한 냉대 해양성 기후" }
                ]
            },
            {
                code: "Dw", name: "냉대 동계 건조 기후", desc: "춥고 건조한 겨울, 여름 강수 집중", graph: "images/Dw.webp",
                items: [
                    { name: "동북아시아 대륙성 기후대", examples: ["서울", "베이징", "평양", "선양", "다롄"], desc: "시베리아 고기압의 영향, 벼농사의 북방 한계선" },
                    { name: "시베리아 및 극동 러시아", examples: ["이르쿠츠크", "하바롭스크", "치타", "울란우데"], desc: "세계에서 가장 연교차가 큰 지역" }
                ]
            }
        ]
    },
    "climate-c": {
        id: "climate-c",
        char: "C",
        title: "온대 기후",
        subtitle: "역동적인 사계절이 꽃피운 문명과 농업의 요람",
        theme: "#00b894",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="15" opacity="0.2"/><path d="M100,20 V180 M20,100 H180" stroke="currentColor" stroke-width="15" opacity="0.2"/>`,
        guides: {
            group2: [{char:"s", text:"여름 건조"}, {char:"w", text:"겨울 건조"}, {char:"f", text:"연중 습윤"}],
            group3: [{char:"a", text:"더운 여름"}, {char:"b", text:"온난 여름"}, {char:"c", text:"여름 서늘"}]
        },
        criteria: {
            koppen: "최한월 평균 -3℃ ~ 18℃<br>눈이 쌓이지 않거나, 쌓여도 금방 녹는 기온",
            soilVeg: "낙엽활엽수림, 갈색 삼림토",
            mapImage: "images/map-c.webp"
        },
        features: [
            {
                icon: "🍂", title: "온대 기후의 식생", desc: "사계절이 빚어낸 총천연색 팔레트",
                items: [
                    { name: "낙엽활엽수림", meta: "🌳 참나무 · 🍁 단풍나무", desc: "겨울 추위에 대비해 잎을 떨어뜨리는 숲. 풍부한 낙엽층이 비옥한 토양을 만듦." },
                    { name: "경엽수림", meta: "🫒 올리브 · 🌳 코르크참나무", desc: "여름 건조를 견디기 위해 작고 단단한 잎을 가진 숲." },
                    { name: "온대우림", meta: "🌲 더글러스퍼 · 🌲 시트카가문비", desc: "연중 많은 비가 내리는 서안 해양성 기후 일부에 나타나는, 이끼와 양치류가 무성한 숲." }
                ]
            },
            {
                icon: "🟫", title: "온대 기후의 토양", desc: "문명을 키운 비옥한 땅",
                items: [
                    { name: "갈색 삼림토", meta: "", desc: "낙엽활엽수림 아래에서 발달하는, 유기물이 풍부하여 농경에 가장 유리한 비옥토." },
                    { name: "테라로사", meta: "", desc: "지중해 연안의 석회암이 풍화되어 형성된 붉은색의 점토질 토양. 포도, 올리브 재배에 적합." },
                    { name: "적색토 & 황색토", meta: "", desc: "온난 습윤 기후(Cfa) 지역에서 화학적 풍화가 활발하여 형성된 산성 토양." }
                ]
            }
        ],
        subClimates: [
            {
                code: "Cfa/Cwa", name: "온난 습윤 / 온대 하우", desc: "덥고 습한 여름, 대륙 동안", graph: "images/Cfa.webp",
                items: [
                    { name: "동아시아 계절풍 지대", examples: ["도쿄", "상하이", "서울", "홍콩", "타이베이"], desc: "벼농사에 최적화된 여름 몬순 기후" },
                    { name: "북미 남동부", examples: ["뉴욕", "워싱턴 D.C.", "애틀랜타", "올랜도", "휴스턴"], desc: "미국의 인구 밀집지이자 경제 중심지" },
                    { name: "남미 동부 팜파스", examples: ["부에노스아이레스", "몬테비데오", "상파울루", "포르투알레그레"], desc: "남미의 곡창지대이자 대도시권" },
                    { name: "호주 동부 해안", examples: ["시드니", "브리즈번", "골드코스트"], desc: "호주 인구의 대부분이 거주하는 지역" }
                ]
            },
            {
                code: "Cfb", name: "서안 해양성 기후", desc: "연중 온화하고 선선한 여름, 대륙 서안", graph: "images/Cfb.webp",
                items: [
                    { name: "서유럽 및 북유럽 남부", examples: ["런던", "파리", "암스테르담", "더블린", "코펜하겐"], desc: "난류의 영향으로 위도에 비해 온화함" },
                    { name: "북미 태평양 북서안", examples: ["시애틀", "밴쿠버", "포틀랜드", "빅토리아"], desc: "온대 우림과 쾌적한 기후의 도시들" },
                    { name: "남반구 해양성 기후대", examples: ["웰링턴", "멜버른", "호바트", "칠레 남부"], desc: "편서풍과 해양의 영향을 받는 남쪽 끝" }
                ]
            },
            {
                code: "Cs", name: "지중해성 기후", desc: "건조한 여름과 습윤한 겨울", graph: "images/Cs.webp",
                items: [
                    { name: "지중해 연안", examples: ["로마", "아테네", "바르셀로나", "리스본", "이스탄불"], desc: "올리브, 포도 등 수목 농업의 발상지" },
                    { name: "미국 캘리포니아", examples: ["로스앤젤레스", "샌프란시스코", "샌디에이고", "새크라멘토"], desc: "세계 IT 산업의 중심지이자 휴양지" },
                    { name: "남반구 지중해성 기후대", examples: ["케이프타운", "퍼스", "애들레이드", "산티아고"], desc: "신대륙 와인 산지로 유명한 지역들" }
                ]
            }
        ]
    },
    "climate-b": {
        id: "climate-b",
        char: "B",
        title: "건조 기후",
        subtitle: "강수량보다 증발량이 많은 목마른 땅",
        theme: "#fdcb6e",
        iconSVG: `<path d="M0,150 Q50,100 100,150 T200,150" fill="none" stroke="currentColor" stroke-width="10" opacity="0.4"/><circle cx="150" cy="50" r="20" fill="currentColor" opacity="0.6"/>`,
        guides: {
            group2: [{char:"W", text:"사막 기후"}, {char:"S", text:"스텝 기후"}],
            group3: [{char:"h", text:"아열대"}, {char:"k", text:"한랭"}]
        },
        criteria: {
            koppen: "연 강수량 < 증발량 (500mm 미만)<br>건조하여 나무가 자라지 못하는 무수목 기후",
            soilVeg: "사막 식생(선인장), 스텝(단초초원), 사막토",
            mapImage: "images/map-b.webp"
        },
        features: [
            {
                icon: "🌵", title: "건조 기후의 식생", desc: "물을 찾아 적응한 강인한 생명력",
                items: [
                    { name: "사막 식생", meta: "", desc: "잎을 가시로 바꾸거나(선인장), 뿌리를 깊게 내려 극한의 건조에 적응한 식물." },
                    { name: "스텝 식생", meta: "", desc: "반건조 지역에 나타나는 키 작은 풀들의 초원. 유라시아의 스텝, 북미의 프레리, 남미의 팜파스." }
                ]
            },
            {
                icon: "🏜️", title: "건조 기후의 토양", desc: "증발과 유기물이 빚어낸 두 얼굴의 땅",
                items: [
                    { name: "사막토", meta: "", desc: "강한 증발로 염분이 쌓여 형성된 척박한 토양. 관개 없이는 농업 불가." },
                    { name: "흑토 & 밤색토", meta: "", desc: "스텝 지역의 풀이 썩어 형성된 세계 최고 비옥토. 바람에 날려온 흙(뢰스)이 기반이 됨." }
                ]
            }
        ],
        subClimates: [
            {
                code: "BWh", name: "아열대 고온 사막", desc: "연평균 18℃ 이상, 저위도 사막", graph: "images/BWh.webp",
                items: [
                    { name: "아프리카/중동", examples: ["카이로", "리야드", "두바이", "바그다드", "사하라 사막"], desc: "세계에서 가장 크고 뜨거운 사막 벨트" },
                    { name: "아메리카/호주", examples: ["피닉스", "라스베이거스", "멕시칼리", "호주 아웃백"], desc: "신대륙의 대표적인 고온 건조 지대" }
                ]
            },
            {
                code: "BWk", name: "중위도 한랭 사막", desc: "연평균 18℃ 미만, 중위도 사막", graph: "images/BWk.webp",
                items: [
                    { name: "중앙아시아", examples: ["타클라마칸 사막", "고비 사막", "카라쿰 사막", "키질쿰 사막"], desc: "대륙 내부에 위치하여 극심한 연교차를 보이는 사막." },
                    { name: "한류성 사막", examples: ["<i data-flag=\"🇨🇱\">아타카마 사막</i>", "<i data-flag=\"🇳🇦\">나미브 사막</i>", "소노라 사막", "훔볼트 한류"], desc: "연중 맑은 날씨가 지속되는 가장 건조한 사막." },
                    { name: "지형성 사막", examples: ["<i data-flag=\"🇦🇷\">파타고니아 사막</i>", "그레이트베이슨 사막", "안데스 산맥 비그늘"], desc: "항상풍의 비그늘(Rain Shadow)에 위치하여 형성된 사막." }
                ]
            },
            {
                code: "BSh", name: "열대/아열대 스텝", desc: "연평균 18℃ 이상, 사바나 인접", graph: "images/BSh.webp",
                items: [
                    { name: "아프리카/인도", examples: ["사헬 지대", "칼라하리 사막 주변", "데칸 고원 서부"], desc: "사막과 사바나 사이의 점이 지대" },
                    { name: "호주/멕시코", examples: ["호주 대찬정 분지", "멕시코 북부", "텍사스 서부"], desc: "대륙 내부의 광활한 반건조 목축 지대" }
                ]
            },
            {
                code: "BSk", name: "중위도 온대 스텝", desc: "연평균 18℃ 미만, 온대 인접", graph: "images/BSk.webp",
                items: [
                    { name: "유라시아 대초원", examples: ["몽골 초원", "카자흐스탄", "우크라이나 흑토지대", "앙카라", "마드리드"], desc: "기마민족의 역사가 깃든 비옥한 흑토 지대" },
                    { name: "북미 프레리 & 그레이트플레인스", examples: ["덴버", "캘거리", "오클라호마시티"], desc: "북미 대륙의 광활한 곡창지대와 목축지" }
                ]
            }
        ]
    },
    "climate-a": {
        id: "climate-a",
        char: "A",
        title: "열대 기후",
        subtitle: "적도의 열기와 원시의 생명력",
        theme: "#d63031",
        iconSVG: `<path d="M100,20 Q150,100 100,180 Q50,100 100,20" fill="currentColor" opacity="0.3"/><path d="M100,20 L100,180" stroke="currentColor" stroke-width="5" opacity="0.5"/>`,
        guides: {
            group2: [{char:"f", text:"연중 습윤"}, {char:"m", text:"계절풍"}, {char:"w", text:"동계 건조"}],
            group3: []
        },
        criteria: {
            koppen: "최한월 평균 18℃ 이상<br>열대성 식물이 번성하는 환경",
            soilVeg: "열대우림(상록활엽수), 라테라이트토",
            mapImage: "images/map-a.webp"
        },
        features: [
            {
                icon: "🌿", title: "열대 기후의 식생", desc: "생명의 보고와 드넓은 초원",
                items: [
                    { name: "열대우림", meta: "", desc: "연중 푸른 다층 군락. 생물 다양성의 보고." },
                    { name: "사바나 초원", meta: "", desc: "건기와 우기가 뚜렷한 곳에 나타나는 키 큰 풀과 드문드문 선 나무." }
                ]
            },
            {
                icon: "🧱", title: "열대 기후의 토양", desc: "붉고 척박한 산화철 토양",
                items: [
                    { name: "라테라이트", meta: "", desc: "철과 알루미늄이 산화되어 붉게 변한 산성 토양. 양분이 빠르게 용탈되어 농업에 불리함." }
                ]
            }
        ],
        subClimates: [
            {
                code: "Af", name: "열대우림 기후", desc: "연중 건기 없음", graph: "images/Af.webp",
                items: [
                    { name: "동남아시아 도서", examples: ["싱가포르", "쿠알라룸푸르", "반다르스리브가완", "자야푸라"], desc: "세계에서 가장 광범위한 해양성 열대우림" },
                    { name: "아마존 분지", examples: ["마나우스", "이키토스", "레티시아", "벨렘"], desc: "지구의 허파로 불리는 세계 최대의 열대우림" },
                    { name: "콩고 분지", examples: ["킨샤사", "브라자빌", "키상가니", "음반다카"], desc: "아프리카 중앙부를 뒤덮은 거대한 밀림" }
                ]
            },
            {
                code: "Am", name: "열대 몬순 기후", desc: "짧은 건기와 폭발적 우기", graph: "images/Am.webp",
                items: [
                    { name: "아시아 몬순 해안", examples: ["뭄바이", "양곤", "다낭", "치타공", "코치"], desc: "계절풍의 영향을 가장 직접적으로 받는 지역" },
                    { name: "대서양 몬순 지대", examples: ["마이애미", "코나크리", "몬로비아", "카이엔"], desc: "아프리카와 아메리카 대륙의 몬순 지역" }
                ]
            },
            {
                code: "Aw", name: "사바나 기후", desc: "뚜렷한 건기와 우기", graph: "images/Aw.webp",
                items: [
                    { name: "아프리카 사바나", examples: ["나이로비", "라고스", "다르에스살람", "아부자", "루사카"], desc: "'동물의 왕국'으로 상징되는 상징적 초원" },
                    { name: "남미 사바나", examples: ["브라질리아", "카라카스", "쿠이아바", "고이아니아"], desc: "브라질 고원의 세하두와 베네수엘라의 야노스" },
                    { name: "아시아-호주 사바나", examples: ["방콕", "호치민", "다윈", "비엔티안", "프놈펜"], desc: "인도차이나 반도와 호주 북부의 열대 초원" }
                ]
            }
        ]
    },
    "climate-s": {
        id: "climate-s",
        char: "H",
        title: "고산 기후",
        subtitle: "고도가 빚어낸 독특한 기후, 하늘과 가장 가까운 문명",
        theme: "#9c88ff",
        iconSVG: `<path d="M20,180 L60,100 L100,140 L140,80 L180,180" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="140" cy="80" r="15" fill="currentColor" opacity="0.4"/>`,
        guides: {
            group2: [],
            group3: []
        },
        criteria: {
            koppen: "주변 저지대보다 현저히 낮은 기온. 위도별 기후 구분을 무시하는 수직적 기후 변화.",
            soilVeg: "연교차보다 훨씬 큰 일교차. 고도에 따른 식생의 수직 분포.",
            mapImage: "images/map-h.webp"
        },
        features: [], // 고산 기후는 식생/토양 카드가 없음
        subClimates: [
            {
                code: "H", name: "열대 고산 기후", desc: "연중 봄처럼 온화한 상춘 기후", graph: "images/H_1.webp",
                items: [
                    { name: "안데스 고산 도시", examples: ["보고타", "키토", "라파스", "쿠스코"], desc: "잉카와 같은 고대 문명이 번성했던, 인간 거주에 최적화된 기후." },
                    { name: "멕시코 및 중앙아메리카 고원", examples: ["멕시코시티", "과테말라시티", "케찰테낭고"], desc: "아즈텍 문명의 심장부이자 오늘날 인구가 밀집한 수도권." },
                    { name: "아프리카 고원", examples: ["아디스아바바", "나이로비", "안타나나리보"], desc: "커피의 원산지이자 아프리카 대륙의 인구 밀집 지대." }
                ]
            },
            {
                code: "H", name: "중위도 고산 기후", desc: "뚜렷한 계절 변화와 혹독한 겨울", graph: "images/H_2.webp",
                items: [
                    { name: "티베트 고원 및 히말라야", examples: ["라싸", "카트만두", "팀푸", "파미르 고원"], desc: "유라시아 대륙의 기후를 좌우하는 거대한 고원이자 아시아 강의 발원지." },
                    { name: "알프스 및 로키 산맥", examples: ["체르마트(스위스)", "아스펜(미국)", "밴프(캐나다)"], desc: "빙하 지형과 아름다운 경관으로 세계적인 관광 및 동계 스포츠의 중심지." }
                ]
            }
        ]
    },
    "climate-x": {
        id: "climate-x",
        char: "?",
        title: "특수 기후",
        subtitle: "표준적 분류에서 벗어난, 특별한 지형이 빚어낸 미기후",
        theme: "#8e82a2",
        iconSVG: `<path d="M50 50 L150 150 M50 150 L150 50" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/>`,
        guides: {
            group2: [],
            group3: []
        },
        criteria: {
            koppen: "위도보다는 해발고도, 지형(비그늘), 해류의 영향을 강하게 받음.",
            soilVeg: "주변 기후대와 확연히 구분되는 독자적인 생태계 형성.",
            mapImage: null // 지도 없음
        },
        features: [],
        /* --- 위 코드를 아래 코드로 통째로 교체하세요 --- */
        subClimates: [
            {
                code: "Ds", name: "고지 지중해성 기후", desc: "여름은 건조하고 겨울은 혹독한 산악 기후", graph: "images/Ds.webp",
                items: [
                    { name: "대륙 서안 고지대", examples: ["시에라네바다 산맥", "캐스케이드 산맥"], desc: "건조한 여름과 혹독한 겨울이 공존하는 태평양 습기가 막힌 산맥의 비그늘." },
                    { name: "서아시아 산악", examples: ["아나톨리아 고원", "힌두쿠시 산맥"], desc: "대륙 깊숙한 고원이 빚어낸, 여름은 건조하고 겨울은 혹독하게 추운 기후." }
                ]
            },
            {
                code: "As", name: "열대 하계 건조 기후", desc: "우기와 건기가 뒤바뀐 열대의 이단아", graph: "images/As.webp",
                items: [
                    { name: "지형성 비그늘", examples: ["하와이 일부", "베트남 중부 해안"], desc: "여름 몬순이 산맥에 막혀, 겨울 대신 여름에 건기가 찾아오는 열대." },
                    { name: "해안 지역", examples: ["브라질 북동부 (레시페, 나탈)"], desc: "열대 수렴대의 계절적 이동으로 인해, 가장 더운 여름에 오히려 비가 적게 내리는 해안." }
                ]
            },
            {
                code: "Cfc", name: "아극 해양성 기후", desc: "극지방 앞에서 바다가 붙잡은 마지막 온기", graph: "images/Cfc.webp",
                items: [
                    { name: "북대서양 고위도", examples: ["아이슬란드", "페로 제도", "노르웨이 해안"], desc: "북대서양 난류의 영향으로 위도를 거스르는 온화한 겨울을 가진 바다의 땅." },
                    { name: "태평양/남반구", examples: ["알류샨 열도", "푼타아레나스(칠레)"], desc: "대양의 영향으로 겨울이 얼지 않는, 연교차가 매우 작은 해양성 기후." }
                ]
            }
        ]
    }
};

// [신규] 세계의 인구 데이터 (HTML/CSS 통합본)
const populationData = {
    "population-1": {
        title: "세계 인구의 분포",
        subtitle: "에쿠메네와 아네쿠메네",
        badge: "I",
        theme: "#3498db",
        iconSVG: `<path d="M100,20 C150,20 180,50 180,100 C180,150 150,180 100,180 C50,180 20,150 20,100 C20,50 50,20 100,20 Z" fill="none" stroke="currentColor" stroke-width="8" opacity="0.2"/><circle cx="100" cy="100" r="40" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "📈", label: "총 인구", text: "약 80억 명" },
            { icon: "🌏", label: "밀집 지역", text: "북반구 중위도" },
            { icon: "🏙️", label: "거주 형태", text: "도시 집중 심화" }
        ],
        subCards: [
            {
                title: "인구 밀집 지역", desc: "생명의 오아시스",
                items: [
                    { name: "대하천의 범람원 및 삼각주", examples: ["나일강", "인더스강", "황허", "메콩강"], meta: "💧 주기적 범람 · 🏛️ 고대 문명의 요람", desc: "주기적인 범람이 가져다 준 비옥한 고대 문명의 요람." },
                    { name: "몬순 아시아의 평야", examples: ["인도 갠지스 평원", "중국 화북 평야", "동남아시아"], meta: " monsoon 아시아 계절풍 · 🍚 벼농사 문화권", desc: "계절풍이 가져오는 막대한 강수량으로 벼농사가 발달한 세계 최대의 인구 부양지." },
                    { name: "서유럽 및 북미 동안의 해안 평야", examples: ["서유럽 평원", "북미 메갈로폴리스", "북아프리카 해안"], meta: " Cfb 서안해양성 기후 · 🏭 산업 혁명의 중심", desc: "온화한 기후와 편리한 해상 교통을 바탕으로 산업화 시대의 중심지가 된 지역." },
                    { name: "화산회토 지역", examples: ["인도네시아 자와섬", "필리핀 루손섬", "이탈리아 베수비오"], meta: "🌋 비옥한 화산재 · 🌿 높은 토지 생산성", desc: "화산 활동이 만든 비옥한 토양 덕분에 위험을 감수하고도 인구가 밀집한 곳." },
                    { name: "거대 도시권 (Megalopolis)", examples: ["일본 도카이도", "중국 창장 삼각주", "인도 델리-뭄바이"], meta: "🌐 정치·경제·문화 중심 · 🔗 교통망 결합", desc: "정치, 경제, 문화의 중심 기능이 고도로 집적되어 주변 지역의 인구를 흡수하는 거대 도시군." }
                ]
            },
            {
                title: "인구 희박 지역", desc: "대자연을 극복해나가는 인류의 최전선",
                items: [
                    { name: "사막 기후", examples: ["사하라 사막", "고비 사막", "호주 아웃백", "아타카마 사막"], meta: "🏜️ 연 강수량 250mm 미만 · 🐫 유목과 오아시스", desc: "오아시스와 대상의 땅." },
                    { name: "열대우림 기후", examples: ["아마존 분지", "콩고 분지", "보르네오섬"], meta: "🧱 라테라이트 · 🔥 화전 농업", desc: "고온다습한 환경과 울창한 식생, 척박한 토양으로 인해 농업이 어려운 지역." },
                    { name: "냉대 및 한대 기후", examples: ["시베리아", "캐나다 북부", "그린란드"], meta: "❄️ 영구동토층 · 🌲 타이가와 툰드라", desc: "혹독한 추위와 영구동토층으로 인해 식생 형성이 제한되는 극한지." },
                    { name: "고산 기후", examples: ["히말라야 산맥", "티베트 고원", "안데스 고산"], meta: "⛰️ 저산소·저기온 ·  llama 고산 목축", desc: "낮은 기온과 희박한 산소, 험준한 지형으로 인해 인간 거주가 어려운 세계의 지붕." }
                ]
            },
            {
                title: "척박지 속의 인간 거주지", desc: "주변의 극한 환경 때문에 상대적으로 인구가 집중된 특수한 지역들.",
                items: [
                    { name: "사막의 해안선과 오아시스", examples: ["마그레브", "페루 해안 사막", "사마르칸트", "둔황", "카이로"], meta: "💧 물을 향한 집중 · 🏜️ 점과 선의 거주", desc: "물을 찾아 모여든 사람들이 형성한 점과 선 형태의 거주지." },
                    { name: "고원의 안식처", examples: ["보고타", "키토", "멕시코시티", "아디스아바바"], meta: "🌿 상춘 기후 · ⛰️ 저위도 고산", desc: "찌는 듯한 열대 저지대 대신 쾌적한 고산 분지에 형성된 인구 밀집지." },
                    { name: "동토의 부동항과 자원 도시", examples: ["무르만스크", "노릴스크", "옐로나이프", "트롬쇠"], meta: "⚓ 전략적 입지 · ❄️ 혹한 속 도시", desc: "부동항과 지하자원을 찾아 형성된 혹한에 고립된 인간 거주지." },
                    { name: "밀림 속의 강변 도시", examples: ["마나우스", "이키토스", "포트하커트", "킨샤사"], meta: "🚢 강이 곧 길 · 🌳 밀림 속 교통로", desc: "유일한 교통로이자 교역로인 강을 따라 발달한 밀림 속의 도시." }
                ]
            }
        ]
    },
    "population-2": {
        title: "세계의 인구 이동",
        subtitle: "각자의 뜻을 품에 안고 경계를 넘는 사람들",
        badge: "II",
        theme: "#2ecc71",
        iconSVG: `<path d="M20,100 H180 M140,60 L180,100 L140,140" stroke="currentColor" stroke-width="10" stroke-linecap="round" opacity="0.4"/>`,
        criteria: [
            { icon: "✈️", label: "유형", text: "자발적 / 강제적" },
            { icon: "🌍", label: "방향", text: "남반구 ➔ 북반구" },
            { icon: "🏙️", label: "경향", text: "이촌향도 (도시화)" }
        ],
        subCards: [
            {
                title: "경제적 이동", desc: "더 나은 삶과 부를 찾아서 떠난 자발적 이동",
                items: [
                    { name: "미국-멕시코 국경", examples: ["리오그란데강", "국경 장벽", "마킬라도라"], meta: "🌎 남 ➔ 북 이동 · 🚧 물리적/제도적 장벽", desc: "세계에서 가장 큰 소득 격차를 사이에 둔, 희망과 절망이 교차하는 거대한 장벽." },
                    { name: "걸프만과 남아시아", examples: ["UAE 두바이", "카타르 도하", "사우디 리야드"], meta: "✈️ 임시 노동 이주 · 💰 오일머니와 송금 경제", desc: "오일머니가 세운 사막의 마천루를 짓기 위해 남아시아에서 유입된 거대한 노동력." },
                    { name: "동남아와 동아시아", examples: ["한국·일본", "싱가포르·대만"], meta: "📉 저출산·고령화 · 🏭 산업 연수생", desc: "고령화로 노동력이 부족해진 동아시아의 공장과 농촌으로 향하는 산업의 사다리." },
                    { name: "두뇌 유출 (Brain Drain)", examples: ["인도/중국 ➔ 실리콘밸리", "아프리카 의료인력 ➔ 유럽"], meta: "🧠 고급 인력 유출 · 🎓 선진국으로의 집중", desc: "개발도상국의 핵심 인재가 더 나은 기회를 찾아 선진국으로 떠나는 현상." }
                ]
            },
            {
                title: "정치·종교적 이동", desc: "전쟁과 박해를 피해 떠나는 비자발적 이동",
                items: [
                    { name: "팔레스타인", examples: ["가자 지구", "요르단강 서안", "디아스포라"], meta: "🕊️ 끝나지 않는 분쟁 · ⛺️ 세대를 잇는 난민촌", desc: "이스라엘 건국 이후 70년 넘게 이어지는, 고향을 잃은 사람들의 끝나지 않는 비극." },
                    { name: "아랍의 봄과 시리아", examples: ["시리아 내전", "IS", "지중해 난민선"], meta: "💥 독재와 내전 · 🌊 유럽 난민 위기", desc: "민주화의 열망이 내전으로 번지며 수백만 명의 난민을 낳고 유럽을 뒤흔든 비극." },
                    { name: "아프리카의 눈물", examples: ["르완다 학살", "남수단 내전", "소말리아"], meta: "🇬🇳 인위적 국경선 · ⚔️ 부족 갈등과 학살", desc: "식민 유산인 인위적 국경선 안에서 부족 갈등과 내전으로 신음하는 대륙." },
                    { name: "우크라이나 전쟁", examples: ["러시아의 침공", "폴란드 국경", "유럽의 연대"], meta: "🇷🇺 강대국의 침공 · 🇪🇺 유럽 내부 난민", desc: "21세기 유럽의 심장에서 발발한 전쟁이 수백만 명의 피난 행렬을 만들어내다." },
                    { name: "로힝야족 사태", examples: ["미얀마 라카인주", "방글라데시 콕스바자르"], meta: "🚫 무국적 소수민족 · 🏕️ 세계 최대 난민촌", desc: "종교와 민족 박해를 피해 국경을 넘은, 세상 어디에도 속하지 못하는 사람들." },
                    { name: "베네수엘라 탈출", examples: ["콜롬비아 국경", "페루 리마", "경제 난민"], meta: "📉 경제 파탄 · 🌎 남미 대륙의 위기", desc: "극심한 경제난과 정치 혼란을 피해 수백만 명이 조국을 등진 21세기 최대의 이주 사태." }
                ]
            },
            {
                title: "환경 난민", desc: "기후 변화가 낳은 새로운 형태의 이주",
                items: [
                    { name: "가라앉는 섬들", examples: ["투발루", "몰디브", "키리바시"], meta: "🌊 해수면 상승 · 🏝️ 기후 정의", desc: "해수면 상승으로 국토 전체가 물에 잠길 위기에 처한 작은 섬나라들의 절규." },
                    { name: "사라지는 바다와 숲", examples: ["아랄해", "차드호", "사헬 지대"], meta: "🏜️ 사막화 · 💧 수자원 고갈", desc: "인간의 탐욕과 기후 변화로 호수가 사막으로 변하고 삶의 터전을 잃은 사람들." },
                    { name: "미래를 위한 이주", examples: ["인도네시아 수도 이전", "자카르타 지반 침하"], meta: " sinking sinking city · 🏗️ 계획적 이전", desc: "지반 침하와 해수면 상승으로 가라앉는 수도를 포기하고 새로운 터전을 찾는 국가적 결단." },
                    { name: "나우루의 비극", examples: ["인광석 채굴", "황폐화된 국토"], meta: "⛏️ 자원 고갈 · 📉 국가 파탄", desc: "과도한 자원 채굴로 국토가 황폐해지고 국가 경제가 파탄 나 이주를 고려하게 된 섬나라." }
                ]
            }
        ]
    },
    "population-3": {
        title: "인구의 변천",
        subtitle: "인구 구조의 변화가 가져오는 기회와 위기",
        badge: "III",
        theme: "#9b59b6",
        iconSVG: `<path d="M20,180 L60,100 L100,140 L140,60 L180,180" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="140" cy="60" r="15" fill="currentColor" opacity="0.4"/>`,
        // [특수 구조] 이미지와 4열 그리드 설명이 포함된 criteria
        criteria: {
            isSpecial: true, // 렌더링 시 특수 처리 신호
            buttonText: "📊 인구변천모형 보기",
            image: "images_human/population_transition.webp",
            items: [
                { icon: "🔺", label: "1-2단계 (다산감사)", text: "폭발적 인구 증가" },
                { icon: "🔔", label: "3단계 (감산소사)", text: "성장 둔화, 인구 배당금" },
                { icon: "⏳", label: "4단계 (소산소사)", text: "인구 정체, 고령화" },
                { icon: "⌛️", label: "5단계 (감소)", text: "인구 감소 본격화" }
            ]
        },
        subCards: [
            {
                title: "2-3단계: 인구 폭발과 인구 배당금", desc: "의료 발전으로 사망률은 급감했으나 출생률은 여전히 높아 인구가 폭발적으로 증가하는 시기.",
                items: [
                    { name: "폭발적 성장 단계 (2단계)", examples: ["나이지리아", "콩고민주공화국", "아프가니스탄"], meta: "📈 높은 출생률 · 📉 급감하는 사망률", desc: "의료 보급 초기 단계로, 사망률만 급격히 감소하여 인구가 폭발적으로 증가하는 국가들." },
                    { name: "인구배당효과 (3단계)", examples: ["인도", "베트남", "브라질"], meta: "💰 풍부한 생산 인구 · 🚀 경제 성장 잠재력", desc: "생산가능인구가 부양인구보다 많아 경제 성장에 가속도가 붙는 황금기를 맞이한 국가들." },
                    { name: "인구 함정과 도시화 문제", examples: ["라고스 (나이지리아)", "뭄바이 (인도)", "킨샤사 (콩고)", "파벨라"], meta: "🏙️ 급격한 이촌향도 · 🏚️ 슬럼 형성", desc: "늘어나는 인구를 감당할 일자리와 도시 기반 시설이 부족하여 거대 슬럼이 형성되는 위기." }
                ]
            },
            {
                title: "4-5단계: 인구 절벽과 축소 사회", desc: "낮은 출생률과 기대수명 증가로 인구가 정체하거나 감소하며 사회 전체가 늙어가는 시기.",
                items: [
                    { name: "인구 정체 및 감소 단계 (4-5단계)", examples: ["일본", "독일", "한국", "이탈리아"], meta: "📉 낮은 출생률 · ⏳ 초고령 사회", desc: "세계에서 가장 빠른 속도로 고령화가 진행되며 인구 감소를 눈앞에 둔 국가들." },
                    { name: "고령화의 그늘", examples: ["노동력 부족", "사회 활력 저하", "재정 압박"], meta: "💸 연금 고갈 · 👨‍⚕️ 의료비 부담", desc: "생산가능인구 감소와 노년 부양비 급증으로 국가 재정과 사회 전체의 활력이 떨어지는 현상." },
                    { name: "축소 사회의 공간 문제", examples: ["일본의 한계마을", "이탈리아의 1유로 집", "한국의 인구소멸지역"], meta: "🏘️ 지방 소멸 · 🏠 빈집 문제", desc: "젊은 층의 도시 유출과 인구 감소로 공동체가 붕괴되고 소멸 위기에 처한 지역들." },
                    { name: "이민 사회로의 전환", examples: ["독일 (튀르키예계)", "프랑스 (북아프리카계)", "캐나다 (이민 확대)"], meta: "🌍 다문화 사회 · 💼 노동력 확보", desc: "부족한 노동력을 메우고 사회 활력을 유지하기 위해 이민을 적극적으로 받아들이며 겪는 기회와 갈등." }
                ]
            }
        ]
    },
    "population-4": {
        title: "국가의 체질: 인구 구성",
        subtitle: "연령과 성별, 한 사회의 잠재력과 약점을 말하다",
        badge: "IV",
        theme: "#7f8c8d",
        iconSVG: `<rect x="60" y="40" width="80" height="120" fill="currentColor" opacity="0.2"/><path d="M60,100 H140" stroke="currentColor" stroke-width="4" opacity="0.4"/>`,
        criteria: [
            { icon: "📊", label: "구조", text: "피라미드 / 종형 / 방추형" },
            { icon: "⚖️", label: "성비", text: "남초 / 여초" },
            { icon: "👴", label: "부양비", text: "생산가능인구 부담" }
        ],
        subCards: [
            {
                title: "인구 피라미드", desc: "국가의 인구 구조를 시각화한 도표.",
                items: [
                    { name: "피라미드형", examples: ["나이지리아", "콩고민주공화국", "아프가니스탄"], meta: "📈 고출생·고사망 · 🌍 저개발국형", desc: "높은 출생률로 인해 밑변이 넓고 위로 갈수록 급격히 좁아지는 모양. 인구의 폭발적 성장을 의미한다." },
                    { name: "종형", examples: ["미국", "프랑스", "호주", "아르헨티나"], meta: "📊 안정적 인구 · 🌎 개발도상국/선진국형", desc: "출생률이 감소하여 유소년층의 비중이 줄고 전체적으로 완만한 종 모양을 띠는 구조. 인구 성장이 둔화되거나 정체된다." },
                    { name: "방추형/항아리형", examples: ["일본", "독일", "이탈리아", "대한민국"], meta: "📉 저출생·저사망 · ⏳ 선진국 고령화형", desc: "극심한 저출산으로 인해 밑변이 좁아지고 허리가 두꺼워지는 모양. 인구 감소와 초고령 사회를 예고한다." },
                    { name: "별형/도시형", examples: ["서울", "두바이", "싱가포르"], meta: "💼 생산인구 유입 · 🏙️ 대도시/산업도시형", desc: "외부로부터의 인구 유입으로 인해 허리 부분인 청장년층이 불룩하게 튀어나온 별 모양의 특수한 구조." }
                ]
            },
            {
                title: "연령 구조에 따른 사회 현상", desc: "기회이자 위기가 되는 연령 구조",
                items: [
                    { name: "젊은 피의 역동: 인구배당효과", examples: ["대한민국 (1980년대)", "대만 (1980년대)", "베트남", "인도"], meta: "💰 풍부한 생산 인구 · 🚀 경제 성장 잠재력", desc: "젊고 풍부한 노동력이 '한강의 기적'과 같은 압축 성장을 이끌어낸 역사적 사례와 현재 진행형인 국가들." },
                    { name: "'인구 폭탄'과 사회 불안", examples: ["튀니지", "이집트", "나이지리아", "예멘", "아랍의 봄"], meta: "💥 청년 실업과 불만 · 🔥 혁명과 내전의 도화선", desc: "일자리를 찾지 못한 과잉 청년 인구가 사회 불안 요인으로 작용하는 현상." },
                    { name: "고령화와 저출산", examples: ["일본", "독일", "이탈리아", "미국"], meta: "📉 저출산·고령화 · ⏳ 축소 사회의 위기", desc: "낮은 출생률과 기대수명 증가로 연금 고갈, 노동력 부족 등 사회 전체가 활력을 잃어가는 현상." },
                    { name: "개발도상국의 저출산", examples: ["중국", "태국", "브라질"], meta: "⚡️ 소득 정체와 출산율 급락 · 🤔 중진국 함정의 덫", desc: "'늙기 전에 부자가 될 기회'를 놓칠 위기에 처한, 21세기 개발도상국들이 직면한 새로운 딜레마." }
                ]
            },
            {
                title: "성비 불균형", desc: "전쟁, 이주, 인위적 선택이 초래한 남초/여초 현상과 그 사회적 파장.",
                items: [
                    { name: "전쟁으로 인한 여초 현상", examples: ["러시아", "독일", "파라과이", "우크라이나"], meta: "👩‍👩‍👧‍👦 극심한 여초 ·  🪦 전쟁 미망인", desc: "전쟁으로 인한 남성 사망으로 극심한 여초 현상이 발생하는 경우." },
                    { name: "선택적 출산으로 인한 남초 현상", examples: ["중국", "펀자브", "하리아나"], meta: " ⚖️ 불균형 성비 · 💍 잉여 남성", desc: "남아선호사상으로 인한 인위적인 성비 불균형(남초) 현상." },
                    { name: "노동력이 만든 남초 도시", examples: ["두바이", "카타르", "사우디아라비아의 산업 도시"], meta: "👷‍♂️ 이주 노동력 · 🏙️ 극단적 남초", desc: "건설업 등 남성 해외 노동력이 대거 유입되어 발생하는 극단적인 남초." }
                ]
            }
        ]
    },
    "population-5": {
        title: "국가의 초상: 민족 구성",
        subtitle: "단일, 용광로, 모자이크, 그리고 분열",
        badge: "V",
        theme: "#e67e22",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.2"/><path d="M100,20 V180 M20,100 H180" stroke="currentColor" stroke-width="2" opacity="0.3"/>`,
        criteria: [
            { icon: "🤝", label: "통합 방식", text: "동화 vs 공존" },
            { icon: "🏛️", label: "국가 이념", text: "민족주의 vs 다문화주의" },
            { icon: "💥", label: "갈등 수준", text: "잠재 vs 표출" }
        ],
        subCards: [
            {
                title: "단일 민족의 신화", desc: "민족적 자부심과 배타성의 양면성",
                criteria: [
                    { icon: "🤝", label: "통합 방식", text: "동질성 강조" },
                    { icon: "🏛️", label: "국가 이념", text: "민족주의" }
                ],
                items: [
                    { name: "배타적 단일 민족 국가", examples: ["한국", "일본", "폴란드", "헝가리"], desc: "외부의 침략에 맞서며 형성된 강력한 민족적 동질감과 문화적 자부심." },
                    { name: "아프리카의 뿔", examples: ["에티오피아", "암하라", "티그라이", "소말리아"], desc: "외부적으로는 단일 민족으로 보이지만, 내부적으로는 지역과 씨족에 따라 분열된 정체성." },
                    { name: "아이슬란드", examples: ["아이슬란드", "노르드인", "루터교","바이킹"], desc: "거친 바다로 둘러싸인 섬에서 천 년 넘게 보존한 순수한 정체성" }
                ]
            },
            {
                title: "민족과 문화의 용광로", desc: "다양한 민족을 하나의 정체성으로 녹여내는 국가",
                criteria: [
                    { icon: "🤝", label: "통합 방식", text: "동화주의" },
                    { icon: "🏛️", label: "국가 이념", text: "시민 민족주의" }
                ],
                items: [
                    { name: "중국과 중화민족주의", examples: ["중국", "티베트", "신장 위구르", "동화 정책", "표준어 보급"], desc: "한족을 중심으로 55개 소수민족을 '중화민족'이라는 거대한 용광로에 녹여내려는 시도." },
                    { name: "아타튀르크와 튀르키예 공화국", examples: ["튀르키예", "아타튀르크"], desc: "종교와 정치를 분리하고 문자와 법률을 표준화해 시민 정체성을 확립." },
                    { name: "프랑스 공화국", examples: ["프랑스", "공화주의", "자유 평등 박애"], desc: "마르세유의 농부를 프랑스인으로 만든 대대적인 국민 국가 형성." },
                    { name: "브라질", examples: ["메스티소", "물라토", "브라질", "삼보"], desc: "유럽, 아프리카, 원주민의 피가 섞인 혼혈 자체를 국가 정체성의 근간으로 삼으려는 시도." }
                ]
            },
            {
                title: "모자이크 사회", desc: "각자의 색을 유지하며 공존하는 이민자의 나라",
                criteria: [
                    { icon: "🤝", label: "통합 방식", text: "다문화 공존" },
                    { icon: "🏛️", label: "국가 이념", text: "다문화주의" }
                ],
                items: [
                    { name: "이민자 사회", examples: ["미국", "캐나다", "호주", "샐러드 볼"], desc: "다양한 문화가 정체성을 유지하며 조화를 이루는 이민자 사회." },
                    { name: "싱가포르", examples: ["중국", "말레이", "인도"], desc: "국가 차원에서 각 민족의 비율과 거주지를 관리하며 통합을 유지하는 도시 국가." },
                    { name: "유럽의 복수 언어 지역", examples: ["스위스", "벨기에", "플랑드르","왈로니아"], desc: "여러 언어 집단이 하나의 국가를 이루며 공존(스위스)하거나 갈등(벨기에)하는 유럽의 실험장." }
                ]
            },
            {
                title: "통합에 실패한 갈등 지역", desc: "국민국가 형성 실패와 내전의 비극",
                criteria: [
                    { icon: "💥", label: "갈등 표출", text: "내전/분쟁" },
                    { icon: "🛡️", label: "원인", text: "국민국가 형성 실패" }
                ],
                items: [
                    { name: "사하라 이남 아프리카", examples: ["나이지리아 (비아프라 전쟁)", "콩고민주공화국", "수단 내전", "소말리아"], meta: "🇬🇳 식민 유산 · ⚔️ 부족주의", desc: "유럽 열강이 그은 부족 경계를 무시한 국경선이 야기한 수많은 부족 갈등" },
                    { name: "구 유고 연방", examples: ["구 유고슬라비아", "보스니아 내전", "코소보 사태"], meta: "💥 민족 청소 · ✝️☪️ 종교 갈등", desc: "사회주의 붕괴 후 억눌렸던 갈등이 폭발해 '인종 청소'의 비극으로 이어진 유럽의 화약고" },
                    { name: "인도-파키스탄 분리", examples: ["인도", "파키스탄", "인더스강", "카슈미르 분쟁"], meta: "🇬🇧 식민 유산 · ☪️🕉️ 종교적 분리", desc: "하나의 문명권이 종교를 경계로 분단되며 천만 명 이상의 난민을 낳은 비극의 현장." },
                    { name: "제국의 무덤: 문명의 파쇄대", examples: ["아프가니스탄", "이라크", "시리아"], meta: "🪦 제국의 무덤 · 💥 강대국의 각축장", desc: "강대국들의 이해관계가 충돌하며 끊임없는 외세 개입과 내전으로 신음하는 지정학적 화약고." }
                ]
            }
        ]
    }
};

// [신규] 농업과 목축업 데이터 (HTML/CSS 통합본)
const agricultureData = {
    "agri-1": {
        title: "식량 작물: 문명의 주식",
        subtitle: "인류의 폭발적 성장을 이끈 세 위대한 곡물",
        badge: "I",
        theme: "#4CAF50",
        iconSVG: `<path d="M100,20 C150,20 180,50 180,100 C180,150 150,180 100,180 C50,180 20,150 20,100 C20,50 50,20 100,20 Z" fill="none" stroke="currentColor" stroke-width="8" opacity="0.2"/><path d="M100,20 V180 M20,100 H180" stroke="currentColor" stroke-width="2" opacity="0.3"/><path d="M60,60 C80,80 120,80 140,60" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        subCards: [
            {
                title: "쌀 (Rice)", desc: "몬순 아시아의 거대한 인구를 부양하는 문명의 주춧돌",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "고온 다습" },
                    { icon: "🗺️", label: "재배지 유형", text: "충적 평야, 삼각주" },
                    { icon: "📊", label: "부양력", text: "최상" },
                    { icon: "🍚", label: "대표 음식", text: "밥, 쌀국수, 스시" }
                ],
                items: [
                    { name: "동아시아 몬순", examples: ["<i data-flag=\"🇰🇷\">대한민국</i> 호남평야", "<i data-flag=\"🇯🇵\">일본</i> 간토평야", "<i data-flag=\"🇨🇳\">중국</i> 양쯔강 유역"], meta: "🍚 자포니카 · 🌧️ 여름 몬순", desc: "고대 중앙집권국을 탄생시킨 온대 계절풍 지역의 벼농사." },
                    { name: "동남 및 남부 아시아", examples: ["<i data-flag=\"🇻🇳\">베트남</i> 메콩 델타", "<i data-flag=\"🇮🇳\">인도</i> 벵골 델타", "<i data-flag=\"🇹🇭\">태국</i> 짜오프라야"], meta: "🌾 인디카 · 🚢 쌀 수출", desc: "열대의 향신료와 함께 인구를 부양하는 인디카의 본산." },
                    { name: "지중해 및 기타 지역", examples: ["<i data-flag=\"🇮🇹\">이탈리아</i> 포강 유역", "<i data-flag=\"🇺🇸\">미국</i> 루이지애나", "<i data-flag=\"🇪🇸\">스페인</i> 발렌시아"], meta: "🥘 리소토/파에야 · 🚜 기계화", desc: "수온이 높은 강이나 습지에서 꽃핀 유럽과 신대륙의 벼농사." }
                ]
            },
            {
                title: "밀 (Wheat)", desc: "가장 활발히 거래되는 세계인의 주식",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "서늘 건조" },
                    { icon: "🗺️", label: "재배지 유형", text: "온대 초원, 흑토 지대" },
                    { icon: "📊", label: "부양력", text: "보통 (가공성 우수)" },
                    { icon: "🍚", label: "대표 음식", text: "빵, 파스타, 맥주" }
                ],
                items: [
                    { name: "북미 밀 벨트", examples: ["<i data-flag=\"🇺🇸\">미국</i> 그레이트플레인스", "<i data-flag=\"🇨🇦\">캐나다</i> 앨버타", "<i data-flag=\"🇺🇸\">미국</i> 캔자스"], meta: "🚜 기업적 농업 · 🚢 세계 최대 수출", desc: "기계를 이용한 대규모 기업적 농업의 상징. 세계 곡물 시장의 핵심 공급원." },
                    { name: "유럽-유라시아 밀 벨트", examples: ["<i data-flag=\"🇺🇦\">우크라이나</i> 흑토지대", "<i data-flag=\"🇷🇺\">러시아</i> 볼가강", "<i data-flag=\"🇫🇷\">프랑스</i> 파리 분지"], meta: "⚫ 체르노젬(흑토) · 🍞 유럽의 빵바구니", desc: "흑토(체르노젬)가 펼쳐진 대초원에서 자라는 유럽 문명의 주식." },
                    { name: "남반구 및 건조 지역", examples: ["<i data-flag=\"🇦🇷\">아르헨티나</i> 팜파스", "<i data-flag=\"🇦🇺\">호주</i> 서부 고원", "<i data-flag=\"🇨🇳\">중국</i> 화북 평원"], meta: "🏜️ 건조 농법 · 🐑 반농반목", desc: "반건조 스텝 기후에서 재배되는 건조 밀." }
                ]
            },
            {
                title: "옥수수 (Corn/Maize)", desc: "아메리카 문명의 근간부터, 사료와 바이오 연료까지",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "고온 다습 (적응력 넓음)" },
                    { icon: "🗺️", label: "재배지 유형", text: "비옥한 평원" },
                    { icon: "📊", label: "부양력", text: "높음 (주로 사료용)" },
                    { icon: "🍚", label: "대표 음식", text: "토르티야, 팝콘, 고량주" }
                ],
                items: [
                    { name: "북미 콘 벨트", examples: ["<i data-flag=\"🇺🇸\">미국</i> 아이오와주", "<i data-flag=\"🇺🇸\">미국</i> 일리노이주", "<i data-flag=\"🇨🇳\">중국</i> 동북 삼성"], meta: "🌽 세계 최대 생산 · ⛽ 바이오 에탄올", desc: "사료, 에탄올, 가공식품 등 산업적으로 가장 활용되는 북미의 곡창." },
                    { name: "라틴 아메리카", examples: ["<i data-flag=\"🇲🇽\">멕시코</i> 멕시코 고원", "<i data-flag=\"🇧🇷\">브라질</i> 고원", "<i data-flag=\"🇦🇷\">아르헨티나</i>"], meta: "🌮 주식(토르티야) · 🏛️ 마야/아즈텍", desc: "고대 아즈텍과 마야 문명의 근간. 멕시코 고원의 주식." }
                ]
            },
            {
                title: "한랭지 및 기타 곡물", desc: "밀 대신 식탁에 오른 한랭 지역의 주식",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "밀보다 한랭한 곳" },
                    { icon: "🗺️", label: "재배지 유형", text: "고위도 농경지, 산간 황토" },
                    { icon: "📊", label: "부양력", text: "낮음 (주로 사료 및 가공용)" },
                    { icon: "🍚", label: "대표 음식", text: "맥주, 위스키, 호밀빵" }
                ],
                items: [
                    { name: "보리 (Barley)", examples: ["<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇦🇺\">호주</i>", "<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇨🇦\">캐나다</i>"], meta: "🍺 맥주와 위스키 · 🌾 강한 적응력", desc: "염분에 강하고 내건성, 내한성이 우수한 최초의 작물." },
                    { name: "호밀 (Rye)", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇵🇱\">폴란드</i>", "<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇧🇾\">벨라루스</i>"], meta: "🍞 흑빵의 원료 · ❄️ 척박지 적응", desc: "빙하가 뒤덮었던 척박한 동부 유럽에서 밀을 대신한 식량." },
                    { name: "귀리 (Oats)", examples: ["<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇬🇧\">영국</i>(스코틀랜드)", "<i data-flag=\"🇫🇮\">핀란드</i>"], meta: "🥣 오트밀(슈퍼푸드) · 🐎 말 사료", desc: "오늘날 건강식으로 각광받는 한랭 습윤 기후의 사료 곡물." }
                ]
            },
            {
                title: "두류", desc: "밭에서 나는 고기. 식용유 및 사료 산업의 핵심.",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "고온 다습 (옥수수와 비슷)" },
                    { icon: "🗺️", label: "재배지 유형", text: "비옥한 평원, 윤작 필수" },
                    { icon: "📊", label: "특징", text: "식용유, 사료의 압도적 원료" },
                    { icon: "🍚", label: "대표 음식", text: "두부, 간장, 콩기름" }
                ],
                items: [
                    { name: "대두 (Soybean)", examples: ["<i data-flag=\"🇺🇸\">미국</i> 콘벨트 남부", "<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇦🇷\">아르헨티나</i>", "<i data-flag=\"🇨🇳\">중국</i>"], meta: "🛢️ 식용유 · 🐖 가축 사료", desc: "세계 육류 생산을 지탱하는 사료의 핵심. 미주 대륙에서 대규모로 재배." },
                    { name: "기타 두류 (Pulses/Lentils)", examples: ["<i data-flag=\"🇮🇳\">인도</i>", "<i data-flag=\"🇹🇷\">튀르키예</i>", "<i data-flag=\"🇪🇸\">스페인</i>", "<i data-flag=\"🇺🇸\">미국</i> 워싱턴"], meta: "🍛 채식 단백질 · 🏜️ 건조지 적응", desc: "렌틸콩, 병아리콩 등 건조 지역의 주요 단백질 공급원." }
                ]
            }
        ]
    },
    "agri-2": {
        title: "구황 작물: 생존의 뿌리",
        subtitle: "척박한 땅에서 인류를 기근에서 구원한 작물들",
        badge: "II",
        theme: "#795548",
        iconSVG: `<path d="M100,50 L50,150 L150,150 Z" fill="currentColor" opacity="0.4"/><circle cx="100" cy="150" r="10" fill="currentColor" opacity="0.6"/>`,
        subCards: [
            {
                title: "감자 & 고구마", desc: "구대륙을 굶주림에서 구원한 신대륙의 선물",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "서늘~고온 (넓은 적응력)" },
                    { icon: "🗺️", label: "재배지 유형", text: "산간 비탈, 구릉지" },
                    { icon: "💪", label: "생존력", text: "척박지 적응력 최상" },
                    { icon: "🍲", label: "대표 음식", text: "피시 앤 칩스, 군고구마" }
                ],
                items: [
                    { name: "안데스 산맥 (감자의 원산지)", examples: ["페루", "볼리비아", "잉카 문명"], meta: "⛰️ 고산 적응 · 🧬 유전자원의 보고", desc: "잉카 문명의 주식. 품종만 수천에 이르는 유전자원의 보고." },
                    { name: "유럽 북부 평원 (제2의 빵)", examples: ["독일", "폴란드", "아일랜드"], meta: "🥖 제2의 빵 · 🥔 아일랜드 대기근", desc: "척박한 땅에서 밀을 대신하여 유럽의 인구를 부양한 작물." },
                    { name: "동아시아 구릉지 (고구마)", examples: ["중국 황토고원", "한국 산간 지역"], meta: "🍠 구황 작물의 대명사 · 🏞️ 척박지 적응", desc: "척박한 산간 지대와 황토 고원에서 인구를 부양한 구황 작물." },
                    { name: "아프리카 고원 (고구마)", examples: ["케냐 고원", "우간다", "르완다"], meta: "🌍 식량 안보 기여 · ☀️ 내건성 작물", desc: "가뭄에 강해 아프리카 식량 안보에 기여하는 핵심 작물" }
                ]
            },
            {
                title: "카사바 & 얌", desc: "척박한 열대를 지탱한 강인한 덩이식물",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "열대 기후 (가뭄에 강함)" },
                    { icon: "🗺️", label: "재배지 유형", text: "척박한 열대 토양" },
                    { icon: "💪", label: "생존력", text: "열대의 주된 녹말 공급원" },
                    { icon: "🍲", label: "대표 음식", text: "푸푸, 타피오카 펄" }
                ],
                items: [
                    { name: "열대 아프리카 (생존의 뿌리)", examples: ["나이지리아", "콩고민주공화국", "푸푸"], meta: "💪 생존력 최강 · 🌍 수억 명의 주식", desc: "가장 척박한 라테라이트에서도 양분을 모아 수억 명을 먹여 살리는 주식" },
                    { name: "동남아시아 (산업용 원료)", examples: ["태국", "인도네시아", "베트남"], meta: "🏭 타피오카 전분 · 🥤 버블티 펄", desc: "타피오카 전분 추출을 목표로 길러지는 상품 작물" },
                    { name: "남미 아마존 (원산지의 유산)", examples: ["브라질", "파라과이", "원주민 주식"], meta: "🌎 카사바의 고향 · 🏹 전통 식문화", desc: "오늘날에도 원주민이 주식으로 삼는 카사바의 원산지" }
                ]
            },
            {
                title: "수수 (Sorghum)", desc: "가장 고온건조한 땅에서 자라나는 식량",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "고온 건조" },
                    { icon: "🌍", label: "기원", text: "아프리카 사헬" },
                    { icon: "💪", label: "특징", text: "내건성 최강" },
                    { icon: "🍲", label: "용도", text: "주식 / 사료 / 바이오에탄올" }
                ],
                items: [
                    { name: "아프리카 사헬 지대", examples: ["수단·에티오피아", "인제라·납작빵", "생존의 곡물"], meta: "🌍 아프리카의 주식 · 🏜️ 사막화 저지선", desc: "사하라 수억 인구의 생존을 책임지는 식량 보루" },
                    { name: "미국 대평원 (사료용)", examples: ["캔자스·텍사스", "가축 사료·에탄올", "기업적 재배"], meta: "🌽 옥수수 대체재 · 🏭 산업용 곡물", desc: "대평원 건조 지역에서 바이오에탄올과 가축 사료로 거듭나는 곡물" }
                ]
            },
            {
                title: "기장 & 조 (Millet)", desc: "척박한 황토와 고원 지대에 뿌리내린 고대 중국과 인도의 곡식",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "냉량 건조" },
                    { icon: "🌍", label: "기원", text: "중앙아시아 / 황허" },
                    { icon: "💪", label: "특징", text: "짧은 생육 기간" },
                    { icon: "🍲", label: "용도", text: "잡곡밥 / 술 / 새 모이" }
                ],
                items: [
                    { name: "인도 데칸 고원", examples: ["인도(최대 생산국)", "로티·도사", "다양성의 보고"], meta: "🇮🇳 잡곡의 천국 · 🌾 다양한 품종", desc: "몬순의 변덕이 심한 데칸 고원의 가뭄을 대비하던 작물" },
                    { name: "중국 황토 고원", examples: ["황허 중류", "오곡(五穀)의 으뜸", "고량주"], meta: "🇨🇳 신석기 작물 · 🍜 북방의 주식", desc: "쌀과 밀 이전 황허 문명을 낳고 북방 민족을 먹여 살린 고대의 주식" }
                ]
            },
            {
                title: "퀴노아 & 메밀", desc: "각자가 처한 특수 환경에서 살아남아 적응한 강인한 생존 작물",
                criteria: [
                    { icon: "🌱", label: "생육 조건", text: "고산 / 한랭" },
                    { icon: "🌍", label: "기원", text: "안데스 / 유라시아" },
                    { icon: "💪", label: "특징", text: "글루텐 프리" },
                    { icon: "🍲", label: "용도", text: "슈퍼푸드 / 막국수" }
                ],
                items: [
                    { name: "퀴노아 (안데스의 황금)", examples: ["페루·볼리비아", "잉카의 주식", "슈퍼푸드"], meta: "⛰️ 고산 적응 작물 · 🍚 완벽한 영양", desc: "척박한 안데스 고산지의 잉카 문명을 지탱한 어머니 곡물" },
                    { name: "메밀 (한랭지의 구원투수)", examples: ["러시아·히말라야·한국", "소바·막국수·카샤", "척박지 작물"], meta: "❄️ 짧은 생육 기간 · 🍜 면 요리의 별미", desc: "다른 작물이 실패한 한랭지에서도 수확이 가능한 구황 작물." }
                ]
            }
        ]
    },
    // [수정] agri-3: "기호 작물"로 재탄생
        "agri-3": {
            title: "기호 작물: 오감과 중독",
            subtitle: "세계를 깨우고 움직이는 감각의 지배자",
            badge: "III",
            theme: "#6F4E37", // 새로운 테마 색상 (커피색)
            iconSVG: `<path d="M50,150 Q20,150 20,120 V80 H80 V120 Q80,150 50,150 Z" fill="currentColor" opacity="0.3"/><path d="M120,60 Q160,20 160,100 Q120,180 80,100 Q80,20 120,60 Z" fill="currentColor" opacity="0.2"/>`,
            subCards: [
                {
                    title: "커피 (Coffee)", desc: "세계인을 깨운 고원의 선물",
                    criteria: [
                        { icon: "🌱", label: "생육 조건", text: "열대 고산" },
                        { icon: "🗺️", label: "재배지 유형", text: "화산토 비탈" },
                        { icon: "🏭", label: "활용처", text: "기호 음료" },
                        { icon: "🏛️", label: "역사", text: "카페 문화, 제국주의" }
                    ],
                    items: [
                        { name: "안데스 북부 고산", examples: ["<i data-flag=\"🇨🇴\">콜롬비아</i>", "<i data-flag=\"🇬🇹\">과테말라</i>", "수세식(Washed)"], meta: "☕ 고품질 아라비카 · ⛰️ 급경사 수작업", desc: "고산 기후가 키운, 향기롭고 부드러운 '마일드 커피'의 표준." },
                        { name: "브라질 고원", examples: ["<i data-flag=\"🇧🇷\">브라질</i> 미나스제라이스", "세하두", "산토스 항"], meta: "🌎 세계 1위 생산 · 🚜 대규모 기계화", desc: "광활한 고원의 기계화 농법으로 세계 커피의 1/3을 생산하는 커피 공장." },
                        { name: "동아프리카 고원", examples: ["<i data-flag=\"🇪🇹\">에티오피아</i>(예가체프)", "<i data-flag=\"🇰🇪\">케냐</i>(AA)", "아라비카 기원"], meta: "🌍 커피의 고향 · 🍒 독보적 산미", desc: "커피의 고향. 꽃향기와 강렬한 산미로 사랑받는 프리미엄 원두 산지." },
                        { name: "베트남 중부 고원", examples: ["<i data-flag=\"🇻🇳\">베트남</i>(부온마투옷)", "G7/연유커피", "로부스타"], meta: "🥤 인스턴트 원료 · 🥈 세계 2위 생산", desc: "전 세계 인스턴트 커피 시장을 장악한 로부스타의 신흥 강자." },
                        { name: "인도네시아 화산섬", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>(자바)", "수마트라 만델링", "코피 루왁"], meta: "🌋 비옥한 화산토 · 🐆 코피 루왁", desc: "비옥한 화산토에서 자란 묵직한 바디감의 커피와 희귀한 루왁의 산지." }
                    ]
                },
                {
                    title: "차 (Tea)", desc: "영국을 매료시킨 동아시아의 찻잎",
                    criteria: [
                        { icon: "🌱", label: "생육 조건", text: "아열대" },
                        { icon: "🗺️", label: "재배지 유형", text: "배수 좋은 구릉지" },
                        { icon: "🏭", label: "활용처", text: "기호 음료" },
                        { icon: "🏛️", label: "역사", text: "아편 전쟁, 보스턴 차 사건" }
                    ],
                    items: [
                        { name: "중국 및 동아시아", examples: ["<i data-flag=\"🇨🇳\">중국</i> 윈난/푸젠", "<i data-flag=\"🇯🇵\">일본</i> 시즈오카", "<i data-flag=\"🇰🇷\">한국</i> 보성"], meta: "🍵 차의 기원 · 🌿 녹차/우롱차/보이차", desc: "가장 다양한 제다법이 발달한 차의 본산." },
                        { name: "다르질링", examples: ["<i data-flag=\"🇮🇳\">인도</i> 다르질링", "히말라야 산맥"], meta: "☕ 홍차의 샴페인 · 🏔️ 고산 테루아", desc: "히말라야 고산 기후가 빚어낸 프리미엄 차." },
                        { name: "아삼", examples: ["<i data-flag=\"🇮🇳\">인도</i> 아삼", "브라마푸트라강 유역"], meta: "🥛 밀크티 베이스 · 🇮🇳 생산량 50%", desc: "인도 생산량 절반을 차지하는 고온다습한 저지대." },
                        { name: "실론 (스리랑카)", examples: ["<i data-flag=\"🇱🇰\">스리랑카</i>", "누와라엘리야", "우바", "딤불라"], meta: "🇱🇰 홍차 브랜드 · 🌿 고도별 향미", desc: "커피 대신 번성한 영국 식민지의 특산품." },
                        { name: "케냐 및 기타 지역", examples: ["<i data-flag=\"🇰🇪\">케냐</i>", "<i data-flag=\"🇹🇷\">튀르키예</i>", "<i data-flag=\"🇻🇳\">베트남</i>", "<i data-flag=\"🇦🇷\">아르헨티나</i>"], meta: "⚙️ CTC 공법 · 👜 티백 원료", desc: "CTC 공법으로 티백용 홍차를 대량 생산하는 신흥 강자들." }
                    ]
                },
                {
                    title: "카카오 (Cacao)", desc: "달콤함 뒤에 감추어진 쌉싸름한 진실",
                    criteria: [
                        { icon: "🌱", label: "생육 조건", text: "열대우림" },
                        { icon: "🗺️", label: "재배지 유형", text: "우림 하층 그늘" },
                        { icon: "🏭", label: "활용처", text: "초콜릿" },
                        { icon: "🏛️", label: "역사", text: "아즈텍 화폐, 플랜테이션" }
                    ],
                    items: [
                        { name: "서아프리카", examples: ["<i data-flag=\"🇨🇮\">코트디부아르</i>", "<i data-flag=\"🇬🇭\">가나</i>", "<i data-flag=\"🇳🇬\">나이지리아</i>"], meta: "🍫 세계 생산 60% · ⚠️ 아동 노동", desc: "세계 카카오 생산량의 60% 이상을 차지하는 벌크 카카오의 핵심 지역." },
                        { name: "라틴 아메리카", examples: ["<i data-flag=\"🇪🇨\">에콰도르</i>", "<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇵🇪\">페루</i>", "<i data-flag=\"🇨🇴\">콜롬비아</i>"], meta: "🌎 카카오의 고향 · ✨ 파인 플레이버", desc: "카카오가 처음 발견된 곳. 독특한 향미를 지닌 고품질 원두의 산지." },
                        { name: "아시아", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇲🇾\">말레이시아</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🌏 신흥 생산 허브 · 🌴 플랜테이션", desc: "고무, 팜유와 함께 플랜테이션으로 재배되며 생산량이 급증한 신흥 강자." }
                    ]
                },
                {
                    title: "담배 (Tobacco)", desc: "아메리카가 선사한 중독",
                    criteria: [
                        { icon: "🌱", label: "생육 조건", text: "온대~아열대" },
                        { icon: "🗺️", label: "재배지 유형", text: "배수 좋은 양지" },
                        { icon: "🏭", label: "활용처", text: "궐련" },
                        { icon: "🏛️", label: "역사", text: "신대륙 교환, 식민지 경제" }
                    ],
                    items: [
                        { name: "중국", examples: ["<i data-flag=\"🇨🇳\">중국</i>(윈난/허난)", "훙타 그룹", "중화 담배"], meta: "🚬 세계 생산/소비 40% · 🏢 국영 독점", desc: "전 세계 담배의 생산과 소비를 장악한, 거대한 국영 내수 시장." },
                        { name: "인도 및 브라질", examples: ["<i data-flag=\"🇮🇳\">인도</i>(안드라프라데시)", "<i data-flag=\"🇧🇷\">브라질</i>(히우그란지두술)"], meta: "🇧🇷🇮🇳 세계 2, 3위 생산 · 📉 저가 담배잎", desc: "세계 시장에 막대한 양의 담뱃잎을 공급하는 신흥 수출 허브." },
                        { name: "미국", examples: ["<i data-flag=\"🇺🇸\">미국</i>(버지니아/캐롤라이나)", "말보로", "필립 모리스"], meta: "🍂 버지니아/버얼리 · 🏛️ 식민지 경제 기틀", desc: "담배의 원산지이자 역사적 중심지. '버지니아' 품종의 고향." },
                        { name: "짐바브웨 및 말라위", examples: ["<i data-flag=\"🇿🇼\">짐바브웨</i>", "<i data-flag=\"🇲🇼\">말라위</i>", "<i data-flag=\"🇹🇿\">탄자니아</i>"], meta: "🌍 아프리카의 현금 · 💸 외화벌이 주력", desc: "국가 경제를 담배 수출에 의존하는 아프리카의 핵심 생산 기지." }
                    ]
                }
            ]
        },
        // [신규] "agri-industrial" 카드: "상품 작물"
        "agri-industrial": {
            title: "상품 작물: 제국의 부",
            subtitle: "자본과 권력의 원천이 된 욕망의 작물들",
            badge: "III+", // 순서 유지를 위해 + 기호 사용
            theme: "#FF9800", // 기존 agri-3의 테마색 계승
            iconSVG: `<path d="M100,20 Q180,100 100,180 Q20,100 100,20 Z" fill="currentColor" opacity="0.4"/><path d="M100,40 Q160,100 100,160 Q40,100 100,40 Z" fill="currentColor" opacity="0.3"/>`,
            subCards: [
                {
                    title: "목화 (Cotton)", desc: "산업혁명과 노예제를 지탱한 불편한 동력",
                    criteria: [
                        { icon: "🌱", label: "생육 조건", text: "고온 건조 (개화기 햇빛)" },
                        { icon: "🗺️", label: "재배지 유형", text: "배수 좋은 건조지" },
                        { icon: "🏭", label: "활용처", text: "면섬유, 면실유" },
                        { icon: "🏛️", label: "역사", text: "산업혁명, 노예제" }
                    ],
                    items: [
                        { name: "북미 선벨트", examples: ["<i data-flag=\"🇺🇸\">미국</i> 텍사스", "<i data-flag=\"🇺🇸\">미국</i> 미시시피", "조지아"], meta: "🏭 산업혁명 원료 · ⛓️ 흑인 노예", desc: "면직물 시대를 열어 산업혁명을 촉발하고 노예제를 정당화했던 역사적 재배지." },
                        { name: "타림분지 (신장 위구르)", examples: ["<i data-flag=\"🇨🇳\">중국</i> 신장", "기계화 수확", "병단(생산건설병단)"], meta: "🏭 중국 생산의 90% · ☀️ 풍부한 일조량", desc: "관개 시설로 건조 기후를 극복한 거대 오아시스 농업 지대." },
                        { name: "중앙아시아 (우즈베키스탄)", examples: ["<i data-flag=\"🇺🇿\">우즈베키스탄</i>", "아무다리야강", "백색 황금"], meta: "🌊 아랄해의 비극 · 🚜 국가 주도 단작", desc: "외래 하천을 끌어다 쓴 대가로 아랄해를 말라버리게 한 구소련의 유산." },
                        { name: "인더스강 유역 (파키스탄)", examples: ["<i data-flag=\"🇵🇰\">파키스탄</i> 펀자브", "인더스 문명", "관개 수로"], meta: "🏛️ 목화의 고향 · 💧 세계 최대 관개망", desc: "최초로 면직물을 사용한 문명의 발상지이자 오늘날 파키스탄 경제의 생명선." },
                        { name: "데칸고원 (인도)", examples: ["<i data-flag=\"🇮🇳\">인도</i>(마하라슈트라)", "뭄바이", "레구르 토양"], meta: "🌋 흑색 면화토 · 🌧️ 몬순 의존", desc: "화산토 '레구르'와 계절성 강수가 키운 세계 최대 면적의 목화밭." }
                    ]
                },
                {
                    title: "사탕수수 (Sugar Cane)", desc: "근대사를 움직인 하얀 황금",
                    criteria: [
                        { icon: "🌱", label: "생육 조건", text: "고온 다습" },
                        { icon: "🗺️", label: "재배지 유형", text: "열대 평야" },
                        { icon: "🏭", label: "활용처", text: "설탕, 럼주, 바이오에탄올" },
                        { icon: "🏛️", label: "역사", text: "플랜테이션, 노예 무역" }
                    ],
                    items: [
                        { name: "중남미 및 카리브", examples: ["<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇨🇺\">쿠바</i>", "<i data-flag=\"🇲🇽\">멕시코</i>"], meta: "🍬 설탕의 제국 · ⛽ 바이오 에탄올", desc: "전 세계인의 식탁을 장악한 설탕의 원료. 제국주의 플랜테이션의 상징." },
                        { name: "인도 (기원과 거대한 내수 시장)", examples: ["<i data-flag=\"🇮🇳\">인도</i> 우타르프라데시", "<i data-flag=\"🇵🇰\">파키스탄</i>", "갠지스 평원"], meta: "🌏 설탕의 기원 · 👨‍👩‍👧‍👦 거대한 내수", desc: "설탕의 기원지이자, 거대한 내수 시장을 기반으로 한 세계 2위 생산국." },
                        { name: "태국 및 동남아시아 (수출 허브)", examples: ["<i data-flag=\"🇹🇭\">태국</i>", "<i data-flag=\"🇵🇭\">필리핀</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🚢 아시아의 수출 허브 · 🌴 열대 플랜테이션", desc: "열대 몬순 기후를 바탕으로 한 아시아의 핵심 수출 기지." },
                        { name: "중국과 호주 (기계화 생산)", examples: ["<i data-flag=\"🇨🇳\">중국</i>(광시/윈난)", "<i data-flag=\"🇦🇺\">호주</i>(퀸즐랜드)"], meta: "🚜 대규모 기계화 · 🌏 양 극단의 생산지", desc: "거대 내수 시장을 위한 중국 남부와, 효율을 극대화한 호주의 기업적 생산." }
                    ]
                },
                {
                title: "고무 (Rubber)", desc: "아마존의 눈물에서 자동차의 동맥으로",
                criteria: [
                        { icon: "🌱", label: "생육 조건", text: "열대우림 기후" },
                        { icon: "🗺️", label: "재배지 유형", text: "고온 다습한 저지대" },
                        { icon: "🏭", label: "활용처", text: "타이어, 라텍스" },
                        { icon: "🏛️", label: "역사", text: "제국주의, 산업혁명" }
                    ],
                items: [
                        { name: "동남아시아 플랜테이션 벨트", examples: ["<i data-flag=\"🇹🇭\">태국</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇻🇳\">베트남</i>", "<i data-flag=\"🇲🇾\">말레이시아</i>"], meta: "🌴 세계 생산 70% · 🚗 타이어 원료", desc: "아마존에서 옮겨온 씨앗으로 전 세계 천연고무 공급을 책임지는 핵심 생산 벨트." },
                        { name: "중국 윈난 및 하이난", examples: ["<i data-flag=\"🇨🇳\">중국</i> 윈난성", "하이난성", "국영 농장"], meta: "🇨🇳 전략 물자 · 🏞️ 재배 북방한계선", desc: "국가 안보를 위해 재배 북방한계선까지 밀어 올린 중국의 전략적 생산 기지." },
                        { name: "서아프리카 (신흥 생산지)", examples: ["<i data-flag=\"🇨🇮\">코트디부아르</i>", "<i data-flag=\"🇱🇷\">라이베리아</i>", "파이어스톤 농장"], meta: "🌍 신흥 생산 허브 · 🏭 다국적 기업", desc: "동남아시아를 대체할 새로운 생산 거점으로 다국적 기업의 투자가 집중되는 지역." },
                        { name: "아마존 (기원지)", examples: ["<i data-flag=\"🇧🇷\">브라질</i> 마나우스", "고무 붐", "포드랜디아"], meta: "🌎 원산지 · 📉 역사 속의 생산지", desc: "고무의 원산지. 과거 '고무 붐'의 영광을 뒤로하고 현재는 생산량이 미미한 역사적 장소." }
                    ]
                },
                {
                title: "팜유 (Palm Oil)", desc: "가장 효율적인, 그러나 가장 논쟁적인 기름",
                criteria: [
                        { icon: "🌱", label: "생육 조건", text: "열대우림 기후" },
                        { icon: "🗺️", label: "재배지 유형", text: "고온 다습한 저습지" },
                        { icon: "🏭", label: "활용처", text: "식용유, 화장품, 바이오디젤" },
                        { icon: "🏛️", label: "역사", text: "플랜테이션, 환경 문제" }
                    ],
                items: [
                        { name: "인도네시아 (압도적 1위)", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>(수마트라/보르네오)", "세계 생산 60%"], meta: "🇮🇩 세계 1위 생산 · 🔥 산림 파괴", desc: "수마트라와 보르네오섬의 열대우림을 개간하여 세계 팜유 시장을 지배하는 압도적 생산국." },
                        { name: "말레이시아 (전통의 강자)", examples: ["<i data-flag=\"🇲🇾\">말레이시아</i>(보르네오/말레이 반도)", "RSPO 인증"], meta: "🇲🇾 세계 2위 생산 · ✅ 지속가능성 인증", desc: "인도네시아와 함께 시장을 양분하는 전통적인 생산 강국. 지속가능성 인증(RSPO)을 선도." },
                        { name: "태국 (후발주자)", examples: ["<i data-flag=\"🇹🇭\">태국</i> 남부", "소규모 농장"], meta: "🇹🇭 세계 3위 생산 · 🍚 쌀 대체 작물", desc: "쌀 대신 고수익 작물로 팜을 선택한 농가가 늘어나며 세계 3위 생산국으로 부상." },
                        { name: "라틴 아메리카 (대안 생산지)", examples: ["<i data-flag=\"🇨🇴\">콜롬비아</i>", "<i data-flag=\"🇬🇹\">과테말라</i>", "<i data-flag=\"🇭🇳\">온두라스</i>"], meta: "🌎 신흥 생산 허브 · 🌿 대안적 입지", desc: "아시아의 환경 이슈를 피해 새로운 대안으로 떠오르고 있는 남미의 생산 클러스터." },
                        { name: "서아프리카 (기원지)", examples: ["<i data-flag=\"🇳🇬\">나이지리아</i>", "<i data-flag=\"🇬🇭\">가나</i>", "전통적 생산"], meta: "🌍 팜유의 고향 · 🥣 지역 소비 중심", desc: "팜유의 원산지. 대규모 플랜테이션보다는 지역 소비를 위한 전통적 방식으로 생산." }
                    ]
                },
                {
                title: "향신료 (Spices)", desc: "고대부터 황금만큼 귀하게 여겨졌으며, 대항해시대를 열게 한 열대의 보물",
                criteria: [
                        { icon: "🌱", label: "생육 조건", text: "열대 몬순 / 다습한 해양성" },
                        { icon: "🗺️", label: "재배지 유형", text: "고온 다습한 도서 및 해안" },
                        { icon: "🏭", label: "활용처", text: "음식, 의약품, 향수" },
                        { icon: "🏛️", label: "역사", text: "대항해시대, 향신료 무역" }
                    ],
                items: [
                        { name: "후추 (Pepper)", examples: ["<i data-flag=\"🇮🇳\">인도</i> 케랄라", "<i data-flag=\"🇻🇳\">베트남</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>"], meta: "🌶️ 검은 금 · 🚢 대항해시대의 원인", desc: "'검은 금'이라 불린, 인류 역사상 가장 중요한 교역 상품 중 하나." },
                        { name: "정향 & 육두구 (Clove & Nutmeg)", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i> 몰루카 제도", "잔지바르", "<i data-flag=\"🇲🇾\">말레이시아</i>"], meta: "🏝️ 향신료 제도 · ⚔️ 독점 전쟁", desc: "몰루카 제도가 유일한 원산지. 유럽 열강의 피비린내 나는 독점 경쟁을 촉발." },
                        { name: "계피 & 강황 (Cinnamon & Turmeric)", examples: ["<i data-flag=\"🇱🇰\">스리랑카</i>", "<i data-flag=\"🇮🇳\">인도</i>", "마다가스카르"], meta: "🍛 카레의 원료 · 💊 약용 작물", desc: "인도 문화와 의약품의 필수 요소. 고대부터 교역된 향의 상징." }
                    ]
                }
            ]
        },
    "agri-8": {
        title: "과수와 첨단 원예",
        subtitle: "기후를 극복한 기술과 미식의 세계",
        badge: "VIII",
        theme: "#8e44ad",
        iconSVG: `<circle cx="60" cy="60" r="20" fill="currentColor" opacity="0.3"/><circle cx="90" cy="90" r="20" fill="currentColor" opacity="0.4"/><circle cx="120" cy="60" r="20" fill="currentColor" opacity="0.3"/><path d="M90,90 L90,150" stroke="currentColor" stroke-width="6" opacity="0.5"/>`,
        criteria: [
            { icon: "🍇", label: "지중해성", text: "포도, 올리브, 감귤" },
            { icon: "🍒", label: "온대성", text: "사과, 베리류" },
            { icon: "✈️", label: "물류 혁신", text: "콜드체인, 항공" },
            { icon: "🏠", label: "재배 방식", text: "수목 농업, 스마트팜" }
        ],
        subCards: [
            {
                title: "지중해의 태양: 수목 농업", desc: "여름의 고온 건조함을 견디기 위해 깊은 뿌리와 두꺼운 껍질을 가진 나무를 기르는 지혜.",
                items: [
                    { name: "포도와 와인 (신의 물방울)", examples: ["<i data-flag=\"🇫🇷\">프랑스</i> 보르도", "<i data-flag=\"🇨🇱\">칠레</i>(신대륙)", "캘리포니아 나파밸리"], meta: "🍷 테루아의 미학 · 🌍 구대륙 vs 신대륙", desc: "로마군과 수도원이 퍼뜨린 포도나무, 대항해시대를 거쳐 신대륙의 명품으로 거듭나다." },
                    { name: "올리브 (액체 황금)", examples: ["<i data-flag=\"🇪🇸\">스페인</i> 안달루시아", "<i data-flag=\"🇮🇹\">이탈리아</i> 토스카나", "<i data-flag=\"🇬🇷\">그리스</i>"], meta: "🫒 지중해 식단의 핵심 · 🌿 평화와 풍요", desc: "척박한 석회암 토양과 여름 가뭄을 견디며 지중해 문명을 살찌운 기름." },
                    { name: "감귤류와 코르크 (태양의 선물)", examples: ["<i data-flag=\"🇪🇸\">스페인</i> 발렌시아", "플로리다 오렌지", "<i data-flag=\"🇵🇹\">포르투갈</i>(코르크)"], meta: "🍊 비타민 C의 보고 · 🍾 코르크참나무", desc: "대항해시대 괴혈병을 막아준 오렌지와, 와인 병을 지키는 포르투갈의 껍질." }
                ]
            },
            {
                title: "온대 과수와 계절의 역전", desc: "저장 기술과 항공 물류로 시간과 거리의 한계를 넘은 과일들.",
                items: [
                    { name: "사과와 배: 저장의 미학", examples: ["<i data-flag=\"🇨🇳\">중국</i>(세계 1위)", "<i data-flag=\"🇺🇸\">미국</i> 워싱턴", "CA 저장고"], meta: "🍎 1년을 가는 신선함 · ❄️ CA 저장 기술", desc: "가을에 수확해 다음 해 여름까지 식탁에 오르는 과일." },
                    { name: "체리와 포도: 계절의 역전", examples: ["<i data-flag=\"🇨🇱\">칠레</i>(체리)", "<i data-flag=\"🇳🇿\">뉴질랜드</i>(키위)", "콜드체인"], meta: "🔄 북반구의 겨울 = 남반구의 여름 · 🚢 냉동 컨테이너", desc: "남반구의 여름에 수확되어, 북반구 겨울의 식탁에 오르는 과일" },
                    { name: "베리류: 신속한 항공 물류", examples: ["<i data-flag=\"🇺🇸\">미국</i>(블루베리)", "<i data-flag=\"🇪🇸\">스페인</i>(딸기)", "항공 운송"], meta: "✈️ 항공 물류의 수혜 · 🍓 껍질 없는 과일", desc: "껍질이 얇아 쉽게 상하는 과일을 하늘길과 스마트팜으로 극복" }
                ]
            },
            {
                title: "유리 온실의 제국: 스마트팜과 화훼", desc: "자연환경의 제약을 기술로 극복하고, 도심 속에서 식량을 생산하는 미래 농업.",
                items: [
                    { name: "네덜란드: 유리 온실의 기적", examples: ["<i data-flag=\"🇳🇱\">네덜란드</i>", "푸드 밸리", "파프리카", "화훼 경매장"], meta: "🌷 세계 2위 농업 수출국 · 🏠 첨단 유리 온실", desc: "척박한 땅과 부족한 일조량을 첨단 온실 기술로 극복한 농업 혁신의 성지." },
                    { name: "적도의 화훼: 영원한 봄", examples: ["<i data-flag=\"🇰🇪\">케냐</i>(장미)", "<i data-flag=\"🇨🇴\">콜롬비아</i>(카네이션)", "나이바샤 호수"], meta: "🌹 상춘 기후(안데스/아프리카) · ✈️ 항공 수출", desc: "1년 내내 봄 같은 고산 기후에서 키운 꽃을 전 세계로 당일 배송." },
                    { name: "수직 농장: 도심의 식량 혁명", examples: ["<i data-flag=\"🇸🇬\">싱가포르</i>", "<i data-flag=\"🇦🇪\">UAE</i>", "식물 공장", "수직 농장"], meta: "🏙️ 도심 속 농업 · 💡 LED와 수경 재배", desc: "흙 대신 LED와 물만으로 빌딩 숲에서 식량을 생산하는 미래의 농업." }
                ]
            }
        ]
    },
    "agri-9": {
        title: "현대 농업의 그림자",
        subtitle: "다국적 기업, 슈퍼푸드 열풍, 그리고 금지된 작물",
        badge: "IX",
        theme: "#2d3436",
        iconSVG: `<path d="M100,20 L180,180 H20 Z" fill="none" stroke="currentColor" stroke-width="15" opacity="0.3"/><path d="M100,60 V130" stroke="currentColor" stroke-width="12" opacity="0.5"/><circle cx="100" cy="155" r="8" fill="currentColor" opacity="0.5"/>`,
        criteria: [
            { icon: "🏢", label: "주체", text: "다국적 기업" },
            { icon: "🥑", label: "이슈", text: "환경/카르텔" },
            { icon: "💊", label: "금지 작물", text: "양귀비/코카" },
            { icon: "⚠️", label: "영향", text: "단일 경작 폐해" }
        ],
        subCards: [
            {
                title: "바나나 공화국: 다국적 기업의 그늘", desc: "거대 자본이 주도하는 단일 경작 시스템이 초래한 정치적 종속과 생태적 위기.",
                items: [
                    { name: "중앙아메리카 지협", examples: ["<i data-flag=\"🇬🇹\">과테말라</i>", "<i data-flag=\"🇭🇳\">온두라스</i>", "유나이티드 프루트", "바나나 전쟁"], meta: "🏢 국가 위의 기업 · 🍌 바나나 공화국의 기원", desc: "거대 자본이 기간 시설을 독점하고 정치까지 좌우한 기형적 경제 구조의 상징." },
                    { name: "남미 안데스 해안", examples: ["<i data-flag=\"🇪🇨\">에콰도르</i>(세계 1위)", "구아야킬", "카르텔 개입"], meta: "🚢 세계 최대 수출항 · 💰 압도적 물량의 자본", desc: "저렴한 노동력으로 시장을 장악했으나 자본의 논리에 따른 환경 파괴와 범죄가 얽힌 현장." },
                    { name: "동남아시아 및 카리브", examples: ["<i data-flag=\"🇵🇭\">필리핀</i> 민다나오", "파나마병(TR4)", "캐번디시"], meta: "🧬 복제된 단일 품종 · 🦠 전염병에 취약한 생태", desc: "효율을 위해 단일 품종만 심어 전염병에 산업 전체가 멸종 위기에 처한 현장." }
                ]
            },
            {
                title: "슈퍼푸드의 역설: 웰빙의 대가", desc: "선진국의 건강 열풍이 산지에서 부르는 범죄와 가뭄, 그리고 식량 주권의 붕괴.",
                items: [
                    { name: "아보카도: 피의 숲", examples: ["<i data-flag=\"🇲🇽\">멕시코</i> 미초아칸", "초록 황금", "카르텔", "산림 파괴"], meta: "🥑 마약 카르텔의 자금줄 · ⚔️ 산림 무단 개간", desc: "고수익을 노린 카르텔의 개입으로 범죄와 산림 파괴가 얼룩진 현장." },
                    { name: "아몬드: 목마른 견과", examples: ["<i data-flag=\"🇺🇸\">미국</i> 캘리포니아", "물 발자국", "지하수 침하", "가뭄"], meta: "💧 지하수 과다 소모 · 🏜️ 생태적 불균형", desc: "한 알의 아몬드를 위해 가뭄 속에서도 지하수를 고갈시키는 생태적 모순." },
                    { name: "퀴노아: 사라진 주식", examples: ["<i data-flag=\"🇧🇴\">볼리비아</i>", "<i data-flag=\"🇵🇪\">페루</i>", "안데스의 선물", "식량 주권"], meta: "🌾 가격 폭등의 역설 · 🚫 현지 식량 위기", desc: "선진국 열풍에 가격이 폭등하여 정작 현지인이 주식을 못 사 먹게 된 역설." }
                ]
            },
            {
                title: "음지의 농업: 금지된 욕망", desc: "공권력이 미치지 못하는 험지와 빈곤이 빚어낸 거대 지하 경제.",
                items: [
                    { name: "양귀비: 황금의 초승달", examples: ["<i data-flag=\"🇦🇫\">아프가니스탄</i>", "<i data-flag=\"🇲🇲\">미얀마</i>", "황금의 삼각지대", "아편"], meta: "💊 분쟁 지역의 생존 작물 · ⚔️ 전쟁 자금줄", desc: "정치적 혼란과 빈곤 속에서 유일한 수익원이 되어버린 지하 경제의 꽃." },
                    { name: "코카: 안데스의 유산과 족쇄", examples: ["<i data-flag=\"🇨🇴\">콜롬비아</i>", "<i data-flag=\"🇵🇪\">페루</i>", "안데스의 고산 지대", "카르텔"], meta: "🌿 전통 식물에서 마약으로 · 🚫 국가 시스템 위협", desc: "원주민의 고산 적응을 돕던 전통 식물이 거대 자본과 결합해 마약으로 변모한 현장." },
                    { name: "대마: 리프 산맥의 요새", examples: ["<i data-flag=\"🇲🇦\">모로코</i> 리프 산맥", "지중해 지하 경제", "험준한 산악 지형"], meta: "🏔️ 공권력이 미치지 못하는 산지 · 🏺 유럽의 공급원", desc: "험준한 지형을 요새 삼아 유럽 최대의 지하 시장을 먹여 살리는 대마 재배지." }
                ]
            }
        ]
    }
};

// [신규] 가축과 목축업 데이터 (농업에서 분리됨)
const livestockData = {
    "agri-4": {
        title: "농경의 엔진, 소",
        subtitle: "쟁기를 끄는 노동력에서 미식의 정점까지",
        badge: "IV",
        theme: "#8e44ad",
        iconSVG: `<path d="M40,60 Q100,10 160,60" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" opacity="0.4"/><path d="M60,60 L60,140 Q100,180 140,140 L140,60" fill="currentColor" opacity="0.2"/><circle cx="70" cy="90" r="8" fill="currentColor" opacity="0.6"/><circle cx="130" cy="90" r="8" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "📊", label: "사육 규모", text: "약 15억 마리" },
            { icon: "🌏", label: "최대 사육", text: "<i data-flag=\"🇮🇳\">인도</i> (종교적 이유)" },
            { icon: "🥩", label: "최대 수출", text: "<i data-flag=\"🇧🇷\">브라질</i> (세계 1위)" },
            { icon: "🌽", label: "연관 자원", text: "옥수수, 대두 (사료)" }
        ],
        subCards: [
            {
                title: "남미의 방목과 육식 문화", desc: "끝없는 초원 팜파스와 세하두에서 방목된, 아사도와 슈하스코의 주인공.",
                items: [
                    { name: "아르헨티나 팜파스", examples: ["가우초", "아사도(통구이)", "탱고와 고기"], meta: "🤠 가우초 문화 · 🥩 세계적 육류 소비", desc: "온대 초원에서 방목된 소를 통째로 굽는 아사도 문화의 본산." },
                    { name: "브라질 세하두", examples: ["슈하스코", "넬로르(혹소)", "세계 1위 수출"], meta: "🇧🇷 세계 1위 수출 · 🐂 넬로르 품종", desc: "열대 사바나를 개간하여 세계 최대의 쇠고기 수출국으로 등극." },
                    { name: "오리노코 야노스", examples: ["<i data-flag=\"🇨🇴\">콜롬비아</i>", "<i data-flag=\"🇻🇪\">베네수엘라</i>", "야네로(Llanero)"], meta: "🤠 야네로 · 🌿 열대 초원 방목", desc: "남미 북부 열대 초원을 누비는 카우보이 '야네로'의 거친 방목 문화." },
                    { name: "우루과이", examples: ["<i data-flag=\"🇺🇾\">우루과이</i>", "인구보다 많은 소(4배)", "소비량 1위"], meta: "🇺🇾 인구 대비 최다 · 🥩 육식 국가", desc: "국토 전체가 목초지인, 세계에서 소 사육 밀도가 가장 높은 나라." }
                ]
            },
            {
                title: "북미와 오세아니아의 기업적 목축", desc: "곡물 비육 시스템(Feedlot)과 냉동선 기술이 결합된 대규모 산업.",
                items: [
                    { name: "북미 대평원 (미국 & 캐나다)", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 앨버타", "<i data-flag=\"🇺🇸\">미국</i> 텍사스", "네브래스카 (비육장)"], meta: "🌽 국경을 넘나드는 '콘-비육' 시스템", desc: "캐나다의 서늘한 초지에서 송아지를 낳고, 미국의 옥수수 지대에서 살찌우는 국경 분업 시스템." },
                    { name: "호주 (아웃백)", examples: ["퀸즐랜드", "대찬정 분지", "다윈 (수출항)"], meta: "🏜️ 붉은 땅의 대규모 기업 방목", desc: "광활한 아웃백에서 거칠게 방목해, 다윈항을 통해 아시아로 생우를 수출하는 기업형 목축." },
                    { name: "뉴질랜드", examples: ["와이카토 (북섬)", "캔터베리 (남섬)", "타라나키"], meta: "🌿 1년 내내 푸른 초지, 청정 방목", desc: "온화한 기후 덕에 1년 내내 옥수수 대신 '푸른 풀'만 먹여 키우는(Grass-fed) 프리미엄 목축." }
                ]
            },
            {
                title: "유럽의 낙농업과 혼합농업", desc: "서늘하고 습윤한 기후를 활용해 고기보다 우유와 치즈 생산에 특화.",
                items: [
                    { name: "북해 연안 낙농 벨트", examples: ["<i data-flag=\"🇳🇱\">네덜란드</i>(치즈)", "<i data-flag=\"🇩🇰\">덴마크</i>(협동조합)", "<i data-flag=\"🇮🇪\">아일랜드</i>"], meta: "🧀 치즈와 버터 · 🤝 협동조합", desc: "서안해양성 기후의 풍부한 목초를 기반으로 발달한 집약적 낙농업과 협동조합." },
                    { name: "중부 유럽 혼합 농업", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇫🇷\">프랑스</i>", "<i data-flag=\"🇵🇱\">폴란드</i>"], meta: "🌾 사료 작물 재배 · 🔄 지력 유지", desc: "식량 및 사료 작물 재배와 가축 사육을 결합하여 지력을 유지하는 유럽의 전통 농법." },
                    { name: "알프스 산지 이목", examples: ["<i data-flag=\"🇨🇭\">스위스</i>", "<i data-flag=\"🇦🇹\">오스트리아</i>", "알프스 산맥"], meta: "🏔️ 수직적 이동 · 🔔 요들송", desc: "여름에는 서늘한 고산 초지로, 겨울에는 골짜기로 이동하며 최고급 치즈를 생산." }
                ]
            },
            {
                title: "아시아와 아프리카의 전통", desc: "고기가 아닌 노동력(역우)과 신앙의 대상, 혹은 유목민의 재산.",
                items: [
                    { name: "인도 (신앙과 유제품)", examples: ["<i data-flag=\"🇮🇳\">인도</i> 구자라트", "갠지스강", "물소(버팔로)"], meta: "🐮 암소 숭배와 백색 혁명", desc: "신성시되어 보호되는 암소, 우유와 노동력을 공급하는 물소의 이중 구조." },
                    { name: "아프리카 사헬 (유목)", examples: ["사헬 지대", "세렝게티", "남수단"], meta: "💰 걸어다니는 은행, 상가 소", desc: "척박한 사헬의 부와 명예의 지표. 혼수부터 배상금까지 두루 쓰이는 화폐." },
                    { name: "동아시아 (농경)", examples: ["<i data-flag=\"🇨🇳\">중국</i> 농촌", "<i data-flag=\"🇰🇷\">한국</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🚜 논밭을 가는 든든한 일꾼", desc: "몬순 아시아의 벼농사를 지탱하던 핵심 노동력(역우)에서, 현대의 프리미엄 미식으로 전환." }
                ]
            }
        ]
    },
    "agri-5": {
        title: "습윤 기후의 단백질, 돼지",
        subtitle: "정착 농경민의 식탁을 책임지는 잡식성 가축",
        badge: "V",
        theme: "#e84393",
        iconSVG: `<ellipse cx="100" cy="110" rx="70" ry="50" fill="currentColor" opacity="0.2"/><circle cx="100" cy="110" r="25" fill="none" stroke="currentColor" stroke-width="8" opacity="0.4"/><circle cx="90" cy="110" r="4" fill="currentColor" opacity="0.6"/><circle cx="110" cy="110" r="4" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "📊", label: "사육 규모", text: "약 9.5억 마리" },
            { icon: "🌏", label: "최대 사육", text: "<i data-flag=\"🇨🇳\">중국</i> (세계 절반)" },
            { icon: "🕌", label: "사육 공백", text: "서남아시아 (종교 금기)" },
            { icon: "🌽", label: "연관 자원", text: "옥수수 (주 사료)" }
        ],
        subCards: [
            {
                title: "동아시아의 식문화", desc: "쌀농사 부산물과 잔반 처리에 용이하여, 정착 농경 사회의 핵심 단백질원으로 등극.",
                items: [
                    { name: "중국 (압도적 규모)", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "동파육", "만두", "훠궈", "차슈"], meta: "🇨🇳 세계 1위 소비 · 🥢 다양한 요리", desc: "전 세계 돼지의 50%가 모인 돼지고기 식문화의 본산" },
                    { name: "한국 & 일본 (미식과 수입)", examples: ["<i data-flag=\"🇰🇷\">한국</i>(삼겹살)", "<i data-flag=\"🇯🇵\">일본</i>(돈카츠)", "라멘", "제주 흑돼지"], meta: "🥓 삼겹살/돈카츠 · 📦 사료 수입", desc: "사료를 수입하여 부위별로 음미하는 프리미엄 소비 시장" },
                    { name: "베트남 & 필리핀 (쌀과 전통)", examples: ["<i data-flag=\"🇻🇳\">베트남</i>(분짜)", "<i data-flag=\"🇵🇭\">필리핀</i>(레촌)", "반미", "아도보"], meta: "🇻🇳 분짜/레촌 · 🍚 쌀농사 부산물", desc: "쌀농사 부산물을 사료로 꽃피운, 유럽 영향을 받은 독자적인 식문화." }
                ]
            },
            {
                title: "유럽의 혼합농업과 육가공", desc: "숲의 도토리나 낙농 부산물을 먹여 키우며, 저장성을 높인 햄과 소시지 문화 발달.",
                items: [
                    { name: "지중해 연안 (건조 숙성)", examples: ["<i data-flag=\"🇪🇸\">스페인</i>(하몽)", "<i data-flag=\"🇮🇹\">이탈리아</i>(프로슈토)", "살라미", "초리소"], meta: "🍖 하몽/프로슈토 · 🌳 도토리 사육", desc: "건조한 여름에 소금에 절여 말리는 저장 기술과 도토리 사육의 전통." },
                    { name: "중북부 유럽 (훈연 가공)", examples: ["<i data-flag=\"🇩🇪\">독일</i>(부어스트)", "<i data-flag=\"🇩🇰\">덴마크</i>(베이컨)", "소시지", "혼합 농업"], meta: "🌭 소시지/베이컨 · 🔥 훈연법", desc: "습한 환경의 부패 방지를 위한 훈연법, 낙농업 부산물 및 감자를 사료로 삼는 혼합 농업." },
                    { name: "동유럽 (품종과 전통)", examples: ["<i data-flag=\"🇭🇺\">헝가리</i>(망갈리차)", "<i data-flag=\"🇵🇱\">폴란드</i>(킬바사)", "라드", "굴라쉬"], meta: "🐑 망갈리차 · 🧈 라드(지방)", desc: "대륙의 혹독한 추위에 적응한 털북숭이 돼지와 고열량 지방(라드) 저장식의 전통." }
                ]
            },
            {
                title: "북미의 기업적 양돈", desc: "옥수수밭 옆에 돼지우리를 짓는 '콘-호그(Corn-Hog) 시스템'의 본산.",
                items: [
                    { name: "미 중서부 콘벨트", examples: ["<i data-flag=\"🇺🇸\">미국</i> 아이오와", "일리노이", "미네소타", "비육장"], meta: "🌽 콘-호그 시스템 · 🏭 공장형 사육", desc: "옥수수와 돼지가 결합된, 전통적이고 효율적인 콘-호그(Corn-Hog) 시스템." },
                    { name: "미국 남동부", examples: ["<i data-flag=\"🇺🇸\">미국</i> 노스캐롤라이나", "스미스필드", "수직 계열화"], meta: "🏢 기업화 · 🚢 수출 기지", desc: "사료부터 도축, 가공, 유통까지 거대 기업이 통합 관리하는 공장형 양돈 산업의 모델." },
                    { name: "캐나다 중서부", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 매니토바", "퀘벡", "온타리오", "청정돈육"], meta: "❄️ 청정 환경 · 🥓 베이컨 수출", desc: "서늘한 기후를 바탕으로 번영한 북반구의 청정 수출 기지." }
                ]
            },
            {
                title: "종교적 금기의 공간", desc: "건조한 기후에 부적합한 생태와 율법(할랄/코셔)의 결합으로 사육이 전무한 지역.",
                items: [
                    { name: "이슬람 문화권", examples: ["서아시아", "북아프리카", "파키스탄"], meta: "🚫 할랄(Haram) · 🏜️ 건조 기후 부적합", desc: "건조한 환경에 부적합하고 율법으로 엄격히 금지되어 사육이 전무함." },
                    { name: "유대교 문화권", examples: ["이스라엘 (엄격한 코셔 규정)"], meta: "🚫 코셔(Kosher) · 📜 구약성서", desc: "엄격한 코셔 규정으로 인해 돼지고기 소비를 금기시함." }
                ]
            }
        ]
    },
    "agri-6": {
        title: "건조 유목의 동반자, 양",
        subtitle: "풀이 드문 곳에서 털과 고기를 내어주는 가축",
        badge: "VI",
        theme: "#f1c40f",
        iconSVG: `<path d="M50,100 C50,60 90,40 150,60 C180,70 190,100 180,130 C160,160 120,170 80,150 C50,130 50,100 50,100 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><path d="M50,100 Q30,80 40,60 Q60,40 80,60" fill="none" stroke="currentColor" stroke-width="8" opacity="0.5"/>`,
        criteria: [
            { icon: "📊", label: "사육 규모", text: "약 12억 마리" },
            { icon: "🌏", label: "최대 사육", text: "<i data-flag=\"🇨🇳\">중국</i> (전 세계 1/4)" },
            { icon: "🧶", label: "최대 수출", text: "<i data-flag=\"🇦🇺\">호주</i>(양모), <i data-flag=\"🇳🇿\">뉴질랜드</i>(고기)" },
            { icon: "🌵", label: "생육 환경", text: "건조(B) 및 고산 기후" }
        ],
        subCards: [
            {
                title: "신대륙의 기업적 목축", desc: "냉동선과 철도가 만든 건조 대초원의 세계적인 양 목장",
                items: [
                    { name: "호주 (건조와 양모)", examples: ["<i data-flag=\"🇦🇺\">호주</i> 대찬정 분지", "메리노(양모)", "아웃백"], meta: "🧶 메리노의 고향 · 🏜️ 대찬정 분지(지하수)", desc: "고온 건조한 환경을 메리노 품종과 대찬정으로 극복한 양모 제국" },
                    { name: "뉴질랜드 (습윤과 양고기)", examples: ["<i data-flag=\"🇳🇿\">뉴질랜드</i> 캔터베리", "냉동선", "북섬(젖소)/남섬(양)"], meta: "🚢 냉동선 혁명 · 🍖 세계 최대 양고기 수출", desc: "영국인의 식탁에 양고기를 올린 냉동선 혁명의 중심" },
                    { name: "아르헨티나 파타고니아", examples: ["<i data-flag=\"🇦🇷\">아르헨티나</i> 남부", "안데스 비그늘", "에스탄시아"], meta: "🌬️ 거센 편서풍 · ⛰️ 안데스 비그늘(Rain Shadow)", desc: "비그늘 사막에서 이루어지는 에스탄시아 기업적 방목" }
                ]
            },
            {
                title: "구대륙의 유목과 이목", desc: "광야와 산줄기를 누비던 유목민의 삶의 발자취.",
                items: [
                    { name: "건조 아시아", examples: ["<i data-flag=\"🇲🇳\">몽골</i> 초원", "<i data-flag=\"🇨🇳\">중국</i> 내몽골", "게르", "유제품"], meta: "⛺ 유목민의 의식주 자급자족", desc: "풀을 찾아 이동하는 유목민의 의식주를 책임지는 핵심 자산." },
                    { name: "이슬람 문화권", examples: ["<i data-flag=\"🇮🇷\">이란</i>", "<i data-flag=\"🇹🇷\">튀르키예</i>", "할랄 푸드", "양탄자"], meta: "☪️ 할랄 식문화 · 🧶 양탄자 벨트", desc: "돼지고기 금기로 인해 가장 선호되는 육류이자 양탄자의 원료." },
                    { name: "지중해 및 알프스", examples: ["<i data-flag=\"🇨🇭\">스위스</i>", "<i data-flag=\"🇪🇸\">스페인</i>", "<i data-flag=\"🇬🇷\">그리스</i>(페타)", "이목"], meta: "🏔️ 수직적 이동(이목) · 🧀 양유 치즈", desc: "계절에 따라 산지와 평지를 오가며 풀을 먹이는 이목 행태." }
                ]
            },
            {
                title: "양모로 번영한 제국", desc: "양털로 축적한 부가 산업혁명의 불씨가 되기까지.",
                items: [
                    { name: "영국 (엔클로저와 산업화)", examples: ["<i data-flag=\"🇬🇧\">영국</i> 요크셔", "엔클로저 운동", "모직물 공업"], meta: "🏭 엔클로저 운동 · 🧥 산업혁명의 씨앗", desc: "양에게 쫓겨난 농민이 산업혁명의 도시 노동자가 되다." },
                    { name: "스페인 (메스타와 메리노)", examples: ["<i data-flag=\"🇪🇸\">스페인</i> 카스티야", "메스타(양목 조합)", "메리노 독점"], meta: "👑 왕실의 메리노 독점 · 💰 스페인 제국의 돈줄", desc: "스페인 왕실 국부의 원천. 반출한 자는 사형으로 다스리다." },
                    { name: "이탈리아 (피렌체의 금융)", examples: ["<i data-flag=\"🇮🇹\">이탈리아</i> 피렌체", "메디치 가문", "아르노강(염색)"], meta: "🎨 르네상스의 자금줄 · 🏦 모직물 가공업", desc: "거친 양털을 최고급 원단으로 가공해 쌓은 부로 르네상스와 금융을 꽃피우다." }
                ]
            }
        ]
    },
    "agri-7": {
        title: "가축화된 인류의 동반자들",
        subtitle: "극한 환경 적응과 보편적 단백질",
        badge: "VII",
        theme: "#636e72",
        iconSVG: `<path d="M40,100 L60,60 L80,100 M120,100 L140,60 L160,100" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><path d="M20,140 Q100,180 180,140" fill="none" stroke="currentColor" stroke-width="6" opacity="0.3"/>`,
        criteria: [
            { icon: "📊", label: "주요 가축", text: "닭(330억), 염소, 낙타 등" },
            { icon: "🌍", label: "분포 특징", text: "전 지구적(닭) vs 국지적(낙타/순록)" },
            { icon: "🧶", label: "핵심 기능", text: "운송(상인/유목민), 털, 알" },
            { icon: "🌵", label: "생존 능력", text: "극한 기후 적응력 최상" }
        ],
        subCards: [
            {
                title: "역사를 바꾼 기동력, 말", desc: "증기기관 이전까지 인류의 이동과 전쟁, 무역을 책임지며 세계사의 지도를 바꾼 가축.",
                items: [
                    { name: "정복과 제국: 유라시아 대초원", examples: ["<i data-flag=\"🇲🇳\">몽골</i>", "칭기즈 칸", "실크로드", "기마 민족"], meta: "🐎 제국의 엔진 · 🏹 기마 군단", desc: "가장 거대한 육상 제국을 건설하고 동서를 연결한 다리" },
                    { name: "재도입과 변화: 북미 대평원", examples: ["<i data-flag=\"🇺🇸\">미국</i> 서부", "머스탱", "카우보이", "코만치족"], meta: "🤠 서부 개척 · 🔄 콜럼버스의 교환", desc: "신대륙에 이식되어 역사를 바꾼 말." },
                    { name: "혈통과 개량: 아라비아 및 유럽", examples: ["<i data-flag=\"🇸🇦\">사우디</i>(아라비아종)", "<i data-flag=\"🇬🇧\">영국</i>(서러브레드)", "승마"], meta: "🧬 품종 개량 · 🏇 속도와 혈통", desc: "오늘날 스포츠와 레저 산업의 표준을 정립한 말 육종." }
                ]
            },
            {
                title: "극한 환경의 적응자", desc: "사막, 툰드라, 고원 등 인간이 살기 힘든 곳에서 이동 수단이자 생존의 동반자가 되어준 동물들.",
                items: [
                    { name: "낙타 (건조 기후)", examples: ["북아프리카(단봉)", "중앙아시아(쌍봉)", "대상 무역(Caravan)"], meta: "🐪 사막의 배 · 📦 문명 교류의 선박", desc: "열사의 사막과 혹한의 스텝을 횡단하며 동서 문명을 연결한 사막의 배." },
                    { name: "순록 (한대 기후)", examples: ["<i data-flag=\"🇫🇮\">핀란드</i> 사미족", "시베리아 네네츠족", "툰드라"], meta: "❄️ 툰드라의 생명선 · 🛷 의식주의 전부", desc: "이끼를 찾아 이동하는 동토의 유목민에게 이동 수단과 가죽, 고기를 모두 내어주는 존재." },
                    { name: "야크 & 라마 (고산 기후)", examples: ["티베트(야크)", "안데스(라마/알파카)", "버터차", "인디오"], meta: "🏔️ 고산 문명의 동반자 · 🧶 털과 운송", desc: "산소가 희박한 고지대에서 짐을 나르고 추위를 막아주며 고산 문명을 지탱한 든든한 조력자." }
                ]
            },
            {
                title: "가장 보편적인 소형 가축", desc: "좁은 공간과 적은 자본으로도 사육이 가능하여, 전 인류의 식탁을 책임지는 단백질원.",
                items: [
                    { name: "닭 (Chicken)", examples: ["<i data-flag=\"🇺🇸\">미국</i>(브로일러)", "전 세계(치킨/달걀)", "KFC"], meta: "🍗 종교적 금기 없음 · 🥚 가장 효율적인 단백질", desc: "힌두교도도 무슬림도 먹을 수 있는, 인류 역사상 가장 성공적으로 확산된 범지구적 가축." },
                    { name: "염소 (Goat)", examples: ["<i data-flag=\"🇮🇳\">인도</i>", "<i data-flag=\"🇳🇬\">나이지리아</i>", "<i data-flag=\"🇸🇩\">수단</i>", "유목민"], meta: "🐐 빈자의 암소 · 🏜️ 건조지 적응", desc: "소가 살 수 없는 척박한 건조지나 산악 지대에서, 가난한 사람들에게 젖과 고기를 내어주는 생존 자산." },
                    { name: "오리 (Duck)", examples: ["<i data-flag=\"🇨🇳\">중국</i>(베이징덕)", "<i data-flag=\"🇻🇳\">베트남</i>", "논농사(오리농법)"], meta: "🦆 벼농사의 동반자 · 🌊 수생 환경 적응", desc: "몬순 아시아의 물 많은 논과 습지에서 벼농사와 공생하며 발달한 물 위의 가축." },
                    { name: "거위 (Goose)", examples: ["프랑스 남서부", "푸아그라·콩피", "고급 식재료"], meta: "🇫🇷 미식 문화 ·  foie gras", desc: "닭보다 오래된 가금류, 오늘날 미식의 대상." },
                    { name: "기니피그 (Cuy)", examples: ["안데스 고산지대", "쿠이(Cuy) 요리", "잉카의 단백질원"], meta: "⛰️ 고산 가축 · 🇵🇪 전통 식문화", desc: "감자와 함께 잉카 문명을 이끈 작지만 중요한 전통 단백질" }
                ]
            }
        ]
    },
};

// [신규] 지하 자원 데이터 (HTML/CSS 통합본)
const resourcesData = {
    "resources-1": {
        title: "화석 에너지: 문명의 검은 심장",
        subtitle: "산업 혁명을 이끌고 현대 지정학을 결정하는 지하의 동력원",
        badge: "I",
        theme: "#D35400",
        iconSVG: `<path d="M100,20 C150,20 180,50 180,100 C180,150 150,180 100,180 C50,180 20,150 20,100 C20,50 50,20 100,20 Z" fill="currentColor" opacity="0.2"/><path d="M100,40 V160 M40,100 H160" stroke="currentColor" stroke-width="4" opacity="0.3"/>`,
        criteria: [
            { icon: "⏳", label: "형성 시기", text: "고생대 (주)" },
            { icon: "⚙️", label: "핵심 용도", text: "화력 발전<br>제철 (코크스)" },
            { icon: "🔥", label: "분류", text: "무연탄, 역청탄<br>갈탄" },
            { icon: "🌐", label: "주요 교역", text: "해상 운송<br>(아시아 중심)" }
        ],
        subCards: [
            {
                title: "석탄 (Coal)", desc: "산업 혁명의 시초. 중국과 인도 등에서 여전히 주요 발전원.",
                criteria: [
                    { icon: "⏳", label: "형성 시기", text: "고생대 (주)" },
                    { icon: "⚙️", label: "핵심 용도", text: "화력 발전<br>제철 (코크스)" },
                    { icon: "🔥", label: "분류", text: "무연탄, 역청탄<br>갈탄" },
                    { icon: "🌐", label: "주요 교역", text: "해상 운송<br>(아시아 중심)" }
                ],
                items: [
                    { name: "북미 전통 탄전", examples: ["<i data-flag=\"🇺🇸\">미국</i> 애팔래치아", "<i data-flag=\"🇺🇸\">미국</i> 와이오밍", "<i data-flag=\"🇨🇦\">캐나다</i>"], meta: "🏭 러스트 벨트 · 🚂 철도 운송", desc: "미국 동부의 전통 탄전과 서부의 역청탄 산지." },
                    { name: "유럽 전통 탄전", examples: ["<i data-flag=\"🇩🇪\">독일</i> 루르", "<i data-flag=\"🇵🇱\">폴란드</i> 실레지아", "<i data-flag=\"🇬🇧\">영국</i> 미들랜즈"], meta: "⚒️ 라인강의 기적 · 📉 탈석탄 추세", desc: "산업 혁명을 이끈 유럽의 역사적 탄전 지대." },
                    { name: "유라시아 내륙 탄전", examples: ["<i data-flag=\"🇷🇺\">러시아</i> 쿠즈네츠크", "<i data-flag=\"🇰🇿\">카자흐스탄</i>", "<i data-flag=\"🇺🇦\">우크라이나</i> 돈바스"], meta: "❄️ 시베리아 횡단철도 · 🏭 중화학 공업", desc: "러시아와 중앙아시아의 거대한 내륙 탄전." },
                    { name: "동아시아 탄전", examples: ["<i data-flag=\"🇨🇳\">중국</i> 산시성", "<i data-flag=\"🇨🇳\">중국</i> 네이멍구", "<i data-flag=\"🇮🇳\">인도</i>"], meta: "🇨🇳 세계 최대 생산 · 🌫️ 스모그 원인", desc: "중국의 압도적인 생산량을 자랑하는 내수 중심 탄전." },
                    { name: "남반구 및 동남아 탄전", examples: ["<i data-flag=\"🇦🇺\">호주</i>", "<i data-flag=\"🇿🇦\">남아공</i> 드라켄즈버그", "<i data-flag=\"🇮🇩\">인도네시아</i> 칼리만탄"], meta: "🚢 주요 수출국 · ⛏️ 노천 채굴", desc: "수출을 목적으로 개발된 호주, 남아공, 인도네시아의 대규모 탄전." },
                    { name: "주요 수출국", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇦🇺\">호주</i>"], meta: "🌏 아시아 시장 공급", desc: "노천 채굴로 생산한 유연탄을 아시아 시장에 공급." },
                    { name: "주요 수입국", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇮🇳\">인도</i>", "<i data-flag=\"🇯🇵\">일본</i>"], meta: "⚡ 화력 발전 수요", desc: "자국 생산만으로는 감당 못 하는 막대한 수요를 가진 국가들." }
                ]
            },
            {
                title: "석유 (Oil)", desc: "'검은 황금'. 중동과 러시아가 세계 패권을 쥐는 핵심 자원.",
                criteria: [
                    { icon: "⏳", label: "형성 시기", text: "신생대 (주)" },
                    { icon: "⚙️", label: "핵심 용도", text: "수송 연료<br>석유 화학 원료" },
                    { icon: "🚢", label: "운송 형태", text: "해상 (유조선)<br>파이프라인" },
                    { icon: "💥", label: "지정학", text: "중동 의존<br>운송로 분쟁" }
                ],
                items: [
                    { name: "페르시아만 핵심", examples: ["<i data-flag=\"🇸🇦\">사우디아라비아</i>", "<i data-flag=\"🇮🇶\">이라크</i>", "<i data-flag=\"🇮🇷\">이란</i>"], meta: "🛢️ 세계 최대 매장 · 🕌 OPEC 맹주", desc: "세계 석유 매장량의 절반 이상을 차지하는 중동의 심장부." },
                    { name: "북미 유전", examples: ["<i data-flag=\"🇺🇸\">미국</i> 텍사스", "<i data-flag=\"🇺🇸\">미국</i> 알래스카", "<i data-flag=\"🇨🇦\">캐나다</i> 오일샌드"], meta: "🦅 셰일 혁명 · ❄️ 오일샌드", desc: "텍사스, 알래스카 등 미국 에너지 자립의 핵심 유전 및 셰일 오일." },
                    { name: "유라시아 내륙 및 카스피해", examples: ["<i data-flag=\"🇷🇺\">러시아</i> 서시베리아", "<i data-flag=\"🇰🇿\">카자흐스탄</i>", "<i data-flag=\"🇦🇿\">아제르바이잔</i>"], meta: "🇷🇺 에너지 패권 · 🌊 카스피해", desc: "러시아의 경제를 지탱하는 서시베리아 및 카스피해 연안 유전." },
                    { name: "아프리카 서부 및 북부", examples: ["<i data-flag=\"🇳🇬\">나이지리아</i>", "<i data-flag=\"🇦🇴\">앙골라</i>", "<i data-flag=\"🇩🇿\">알제리</i>"], meta: "🌍 기니만 유전 · 🚢 유럽 수출", desc: "나이지리아, 앙골라 등 기니만 연안과 북아프리카의 주요 유전." },
                    { name: "남미 유전지대", examples: ["<i data-flag=\"🇻🇪\">베네수엘라</i> 오리노코", "<i data-flag=\"🇧🇷\">브라질</i> 심해", "<i data-flag=\"🇨🇴\">콜롬비아</i>"], meta: "🛢️ 초중질유 · 🌊 심해 유전", desc: "베네수엘라, 브라질 등 남미의 거대한 유전 지대." },
                    { name: "기타 해양 유전", examples: ["<i data-flag=\"🇳🇴\">노르웨이</i> 북해", "<i data-flag=\"🇺🇸\">미국</i> 멕시코만", "<i data-flag=\"🇲🇾\">말레이시아</i>"], meta: "⚓ 해양 플랜트 · 🌊 브렌트유", desc: "북해, 멕시코만 등 해양 시추 기술이 발달한 지역." },
                    { name: "주요 수출국", examples: ["<i data-flag=\"🇸🇦\">사우디아라비아</i>", "<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇺🇸\">미국</i>"], meta: "💰 오일 머니 · ⚖️ OPEC+", desc: "OPEC+와 비OPEC이 경쟁하는 글로벌 공급망." },
                    { name: "주요 수입국", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇮🇳\">인도</i>"], meta: "🏭 산업 수요 · 🚗 수송 연료", desc: "세계 경제의 엔진을 돌리기 위해 막대한 원유를 수입하는 국가들." }
                ]
            },
            {
                title: "천연가스 (Natural Gas)", desc: "석유보다 깨끗한 에너지원. 파이프라인과 LNG 운송이 중요.",
                criteria: [
                    { icon: "⏳", label: "형성 시기", text: "신생대 (주)" },
                    { icon: "⚙️", label: "핵심 용도", text: "화력 발전, 난방<br>화학 원료" },
                    { icon: "🚢", label: "운송 형태", text: "LNG (액화)<br>파이프라인" },
                    { icon: "💥", label: "지정학", text: "파이프라인 의존<br>러시아/중동 집중" }
                ],
                items: [
                    { name: "러시아 및 중동 거대 가스전", examples: ["<i data-flag=\"🇷🇺\">러시아</i> 야말 반도", "<i data-flag=\"🇶🇦\">카타르</i>", "<i data-flag=\"🇮🇷\">이란</i> 파르스 가스전"], meta: "❄️ 야말 프로젝트 · 🚢 LNG 수출", desc: "세계 천연가스 공급을 좌우하는 핵심 지역." },
                    { name: "북미 셰일가스 혁명", examples: ["<i data-flag=\"🇺🇸\">미국</i> 셰일가스", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇦🇺\">호주</i>"], meta: "🦅 에너지 자립 · 📉 가격 하락", desc: "셰일 혁명으로 미국을 에너지 수출국으로 변모시킨 비전통 자원." },
                    { name: "아프리카 및 동남아시아", examples: ["<i data-flag=\"🇳🇬\">나이지리아</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇲🇿\">모잠비크</i>"], meta: "🚢 LNG 개발 · 🌍 신흥 공급처", desc: "최근 개발이 활발한 아프리카 및 동남아시아의 가스전." },
                    { name: "기타 지역", examples: ["<i data-flag=\"🇳🇱\">네덜란드</i> 흐로닝언", "<i data-flag=\"🇧🇴\">볼리비아</i>", "<i data-flag=\"🇨🇳\">중국</i>"], meta: "🇪🇺 유럽 가스전 · ⛰️ 남미 가스", desc: "유럽, 남미 등 기타 주요 가스 매장 지역." },
                    { name: "파이프라인(PNG) 네트워크", examples: ["노르트스트림(러시아➔유럽)", "파워 오브 시베리아"], meta: "🔗 대륙 연결 · ⚔️ 에너지 안보", desc: "대륙을 관통하며 정치적 갈등과 협력이 교차하는 관(管)." },
                    { name: "해상 LNG 네트워크", examples: ["카타르/미국(수출)", "한/중/일(수입)"], meta: "❄️ -162℃ 액화 · 🚢 특수 선박", desc: "영하 162도로 얼려 바다를 건너는 첨단 기술 무역망." }
                ]
            }
        ]
    },
    "resources-2": {
        title: "철과 비철 금속",
        subtitle: "산업의 뼈대를 이루는 기초 금속 자원",
        badge: "II",
        theme: "#8D6E63",
        iconSVG: `<path d="M100,20 L180,180 H20 Z" fill="currentColor" opacity="0.2"/><path d="M100,50 V150" stroke="currentColor" stroke-width="4" opacity="0.3"/>`,
        criteria: [
            { icon: "📜", label: "지질 환경", text: "순상지<br>고기 조산대" },
            { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>(대규모)" },
            { icon: "🏭", label: "제련 입지", text: "임해 지역<br>소비지 인근" },
            { icon: "⚙️", label: "핵심 용도", text: "건축, 자동차<br>선박 (철강)" }
        ],
        subCards: [
            {
                title: "철광석 (Iron Ore)", desc: "철기 시대부터 이어져온 현대 문명의 근간이자 산업의 쌀",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "순상지<br>고기 조산대" },
                    { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>(대규모)" },
                    { icon: "🏭", label: "제련 입지", text: "임해 지역<br>소비지 인근" },
                    { icon: "⚙️", label: "핵심 용도", text: "건축, 자동차<br>선박 (철강)" }
                ],
                items: [
                    { name: "호주 필바라 벨트", examples: ["<i data-flag=\"🇦🇺\">호주</i> 필바라", "<i data-flag=\"🇦🇺\">호주</i> 미드웨스트", "헤들랜드항"], meta: "🔴 적철광 · 🚢 중국 수출", desc: "세계 최대의 철광석 수출 지역. 고품위 적철광의 보고." },
                    { name: "브라질 미나스제라이스", examples: ["<i data-flag=\"🇧🇷\">브라질</i> 카라자스", "이타비라", "발레(Vale)"], meta: "🇧🇷 세계 최대 노천광 · 🛤️ 철도 운송", desc: "아마존 개발과 연결된 세계 최대 규모의 노천 광산." },
                    { name: "북미 (캐나다 순상지)", examples: ["<i data-flag=\"🇺🇸\">미국</i> 메사비", "<i data-flag=\"🇨🇦\">캐나다</i> 셰퍼빌", "오대호 수운"], meta: "🛡️ 순상지 · 🚢 오대호 공업", desc: "미국 오대호 공업 지역의 성장을 이끈 전통적인 철광석 산지." },
                    { name: "유럽 (스웨덴·우크라이나)", examples: ["<i data-flag=\"🇸🇪\">스웨덴</i> 키루나", "<i data-flag=\"🇺🇦\">우크라이나</i> 크리보이 로그"], meta: "❄️ 고품위 자철광 · 🏭 유럽 공급", desc: "북유럽의 고품질 자철광과 동유럽 흑토 지대의 거대 광산." },
                    { name: "러시아 및 중국", examples: ["<i data-flag=\"🇷🇺\">러시아</i> 쿠르스크", "<i data-flag=\"🇨🇳\">중국</i> 안산", "만주"], meta: "🇷🇺 세계 최대 매장 · 🇨🇳 내수 소비", desc: "세계 최대 매장량을 자랑하는 러시아와 거대 내수의 중국 광산." }
                ]
            },
            {
                title: "구리 및 합금 금속", desc: "철기 이전의 문명의 기초. 전기 문명의 혈관",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "해양판 섭입대<br>화성암 광상" },
                    { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>지하 채굴" },
                    { icon: "🏭", label: "제련 입지", text: "대규모 전력<br>필요 (수력 발전)" },
                    { icon: "⚙️", label: "핵심 용도", text: "전선, 합금<br>전기차 배터리" }
                ],
                items: [
                    { name: "안데스 구리 벨트", examples: ["<i data-flag=\"🇨🇱\">칠레</i> 추키카마타", "<i data-flag=\"🇵🇪\">페루</i>", "<i data-flag=\"🇲🇽\">멕시코</i>"], meta: "🇨🇱 세계 1위 생산 · ⛰️ 반암 동광상", desc: "환태평양 조산대의 활동으로 형성된 세계 최대의 구리 매장지." },
                    { name: "아프리카 코퍼벨트", examples: ["<i data-flag=\"🇨🇩\">콩고민주공화국</i>", "<i data-flag=\"🇿🇲\">잠비아</i>", "코발트 부산물"], meta: "🌍 구리+코발트 · 🔋 배터리 원료", desc: "구리와 함께 배터리 핵심 원료인 코발트가 쏟아져 나오는 지대." },
                    { name: "북미 (로키 산맥)", examples: ["<i data-flag=\"🇺🇸\">미국</i> 애리조나", "<i data-flag=\"🇺🇸\">미국</i> 유타(빙엄)", "<i data-flag=\"🇨🇦\">캐나다</i>"], meta: "🏜️ 노천 광산 · 🇺🇸 서부 개척", desc: "세계적인 규모의 노천 구리 광산이 밀집한 미국 서남부 지역." },
                    { name: "아시아 및 오세아니아", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i> 그라스버그", "<i data-flag=\"🇦🇺\">호주</i> 올림픽댐", "<i data-flag=\"🇲🇳\">몽골</i> 오유톨고이"], meta: "🌋 불의 고리 · 🥇 금/은 부산물", desc: "불의 고리에 위치한 인도네시아의 금·구리 광산과 호주의 복합 광산." }
                ]
            },
            {
                title: "알루미늄 원료 (보크사이트)", desc: "경량화 핵심 소재, 하늘을 나는 금속",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "저위도<br>화학적 풍화 (라테라이트)" },
                    { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>(표토 제거)" },
                    { icon: "🏭", label: "제련 입지", text: "전력 풍부 지역<br>(수력, 지열)" },
                    { icon: "⚙️", label: "핵심 용도", text: "경량 소재<br>항공, 운송" }
                ],
                items: [
                    { name: "기니 및 서아프리카", examples: ["<i data-flag=\"🇬🇳\">기니</i>", "<i data-flag=\"🇬🇭\">가나</i>", "<i data-flag=\"🇸🇱\">시에라리온</i>"], meta: "🇬🇳 세계 최대 매장 · 🧱 라테라이트", desc: "세계 최대의 보크사이트 매장량을 자랑하는 서아프리카의 핵심 생산지." },
                    { name: "오세아니아 및 아시아", examples: ["<i data-flag=\"🇦🇺\">호주</i> 웨이파", "<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇮🇳\">인도</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🇦🇺 주요 생산국 · 🌏 아시아 수요", desc: "호주 북부, 베트남 등 열대 및 아열대 기후 지역의 주요 생산국." },
                    { name: "카리브해 및 남미", examples: ["<i data-flag=\"🇯🇲\">자메이카</i>", "<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇬🇾\">가이아나</i>"], meta: "🌴 열대 기후 · 🚢 미국 수출", desc: "자메이카, 브라질 등 카리브해와 남미의 전통적인 열대 생산지." },
                    { name: "알루미늄 제련 거점", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 퀘벡 (수력)", "<i data-flag=\"🇷🇺\">러시아</i> 시베리아", "<i data-flag=\"🇮🇸\">아이슬란드</i> (지열)"], meta: "⚡ 전력 지향 입지 · 🏭 제련소", desc: "보크사이트가 아닌, 막대한 전력을 이용해 알루미늄을 제련하는 주요 지역." }
                ]
            }
        ]
    },
    "resources-3": {
        title: "부와 권력의 상징, 귀금속",
        subtitle: "역사적으로 화폐와 장식의 역할을 해온 희소 자원",
        badge: "III",
        theme: "#FFD700",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1"/><path d="M100,20 L180,100 L100,180 L20,100 Z" fill="currentColor" opacity="0.2"/>`,
        criteria: [
            { icon: "📜", label: "지질 환경", text: "화성암<br>변성암 (석영맥)" },
            { icon: "⛏️", label: "채굴 방식", text: "지하 채굴<br>사금 채취" },
            { icon: "💰", label: "역사적 가치", text: "화폐, 금본위제<br>안전자산" },
            { icon: "⚙️", label: "핵심 용도", text: "보석, 전자제품<br>치과 재료" }
        ],
        subCards: [
            {
                title: "금 (Gold)", desc: "변치 않는 가치와 욕망의 상징",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "화성암<br>변성암 (석영맥)" },
                    { icon: "⛏️", label: "채굴 방식", text: "지하 채굴<br>사금 채취" },
                    { icon: "💰", label: "역사적 가치", text: "화폐, 금본위제<br>안전자산" },
                    { icon: "⚙️", label: "핵심 용도", text: "보석, 전자제품<br>치과 재료" }
                ],
                items: [
                    { name: "남아프리카 및 호주", examples: ["<i data-flag=\"🇿🇦\">남아공</i> 비트바테르스란트", "<i data-flag=\"🇦🇺\">호주</i> 칼굴리", "<i data-flag=\"🇨🇳\">중국</i>"], meta: "🇿🇦 세계 최대 금광 · ⛏️ 심부 채굴", desc: "세계 최대 금광 지대였던 비트바테르스란트 등 아프리카의 전통적인 금 생산지." },
                    { name: "호주 및 오세아니아", examples: ["<i data-flag=\"🇦🇺\">호주</i> 칼굴리", "<i data-flag=\"🇦🇺\">호주</i> 퍼스", "<i data-flag=\"🇵🇬\">파푸아뉴기니</i>"], meta: "🤠 골드러시 · 🏜️ 건조지 광산", desc: "19세기 골드러시의 무대. 오늘날 호주 경제를 지탱하는 주요 광산 지대." },
                    { name: "중국 및 아시아 내륙", examples: ["<i data-flag=\"🇨🇳\">중국</i> 산둥성", "<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇺🇿\">우즈베키스탄</i>"], meta: "🇨🇳 세계 1위 생산 · 🌏 아시아 금광", desc: "세계 최대 금 생산국인 중국과 중앙아시아의 주요 금광 지대." },
                    { name: "북미 및 러시아", examples: ["<i data-flag=\"🇺🇸\">미국</i> 네바다", "<i data-flag=\"🇷🇺\">러시아</i> 콜리마", "<i data-flag=\"🇨🇦\">캐나다</i> 유콘"], meta: "🇺🇸 서부 개척 · ❄️ 시베리아 금", desc: "캘리포니아 골드러시의 역사적 유산과 러시아 시베리아의 광대한 금광." }
                ]
            },
            {
                title: "은 (Silver)", desc: "신대륙에서 채굴돼 세계 경제를 뒤흔든 국제 화폐",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "화성암<br>퇴적암 (구리 연관)" },
                    { icon: "⛏️", label: "채굴 방식", text: "지하 채굴<br>구리 부산물" },
                    { icon: "💰", label: "역사적 가치", text: "은본위제<br>스페인 제국의 부" },
                    { icon: "⚙️", label: "핵심 용도", text: "산업용 (태양광)<br>사진, 보석" }
                ],
                items: [
                    { name: "멕시코 핵심 생산지", examples: ["<i data-flag=\"🇲🇽\">멕시코</i> 사카테카스", "<i data-flag=\"🇲🇽\">멕시코</i> 치와와", "<i data-flag=\"🇲🇽\">멕시코</i> 두랑고"], meta: "🇲🇽 세계 1위 생산 · 🏛️ 식민지 유산", desc: "세계 최대 은 생산국. 식민지 시대부터 오늘날까지 은광업의 중심." },
                    { name: "안데스 은광 벨트", examples: ["<i data-flag=\"🇵🇪\">페루</i>", "<i data-flag=\"🇧🇴\">볼리비아</i> 포토시", "<i data-flag=\"🇨🇱\">칠레</i>"], meta: "⛰️ 포토시 은광 · 🇪🇸 스페인 제국", desc: "페루 포토시 등 스페인 식민 제국의 부를 책임졌던 안데스 산맥 지역." },
                    { name: "북미 및 기타 지역", examples: ["<i data-flag=\"🇺🇸\">미국</i> 네바다", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇦🇺\">호주</i>"], meta: "🇺🇸 콤스톡 광맥 · ⛏️ 현대적 채굴", desc: "미국 네바다, 캐나다 등 북미의 전통적인 은광 지역." },
                    { name: "아시아 및 유라시아", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>"], meta: "🌏 주요 생산국 · 🏭 산업 수요", desc: "호주, 중국 등 아시아와 오세아니아의 주요 은 생산지." }
                ]
            },
            {
                title: "다이아몬드 (Diamond)", desc: "보석과 산업용으로 이용되는 가장 단단한 욕망의 결정체",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "킴벌라이트<br>파이프 (화성암)" },
                    { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>충적 채굴" },
                    { icon: "💰", label: "역사적 가치", text: "보석 시장 독점<br>'피의 다이아몬드'" },
                    { icon: "⚙️", label: "핵심 용도", text: "보석, 공업용<br>절삭 공구" }
                ],
                items: [
                    { name: "남아프리카 전통 광산", examples: ["<i data-flag=\"🇿🇦\">남아공</i> 킴벌리", "<i data-flag=\"🇧🇼\">보츠와나</i>", "<i data-flag=\"🇦🇴\">앙골라</i>"], meta: "💎 킴벌리 프로세스 · 🌍 아프리카", desc: "킴벌리 광산 등 역사적으로 다이아몬드 시장을 지배했던 아프리카의 전통적인 산지." },
                    { name: "서아프리카 분쟁 지역", examples: ["<i data-flag=\"🇸🇱\">시에라리온</i>", "<i data-flag=\"🇱🇷\">라이베리아</i>", "<i data-flag=\"🇨🇮\">코트디부아르</i>"], meta: "🩸 피의 다이아몬드 · ⚔️ 내전 자금", desc: "내전과 인권 유린의 비극적인 역사를 가진 '피의 다이아몬드' 산지." },
                    { name: "러시아 시베리아", examples: ["<i data-flag=\"🇷🇺\">러시아</i> 사하 공화국", "<i data-flag=\"🇷🇺\">러시아</i> 미르니", "<i data-flag=\"🇷🇺\">러시아</i> 아르항겔스크"], meta: "❄️ 영구동토층 · 🇷🇺 세계 최대 매장", desc: "사하 공화국 등 러시아 북부의 영구 동토층에 위치한 거대 다이아몬드 광산." },
                    { name: "북미 및 기타 지역", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 노스웨스트 준주", "<i data-flag=\"🇦🇺\">호주</i> 아가일", "<i data-flag=\"🇮🇳\">인도</i>"], meta: "🇨🇦 윤리적 다이아 · 💗 핑크 다이아", desc: "캐나다 북부, 호주 등 최근 개발된 북미 및 오세아니아의 다이아몬드 산지." }
                ]
            }
        ]
    },
    "resources-4": {
        title: "미래 기술의 열쇠, 전략 광물",
        subtitle: "4차 산업혁명 시대의 핵심. 첨단 기술의 필수 원료",
        badge: "IV",
        theme: "#00B894",
        iconSVG: `<path d="M50,50 L150,50 L150,150 L50,150 Z" fill="currentColor" opacity="0.2"/><path d="M60,60 L140,60 L140,140 L60,140 Z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "📜", label: "지질 환경", text: "화성암<br>퇴적암 (점토)" },
            { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>화학적 추출" },
            { icon: "🔋", label: "기술 의존도", text: "영구자석<br>첨단 전자제품" },
            { icon: "💥", label: "지정학", text: "중국의 독점<br>공급망 리스크" }
        ],
        subCards: [
            {
                title: "희토류 (Rare Earth)", desc: "전자제품, 영구자석 등에 필수적으로 들어가는 독점적 광물.",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "화성암<br>퇴적암 (점토)" },
                    { icon: "⛏️", label: "채굴 방식", text: "노천 채굴<br>화학적 추출" },
                    { icon: "🔋", label: "기술 의존도", text: "영구자석<br>첨단 전자제품" },
                    { icon: "💥", label: "지정학", text: "중국의 독점<br>공급망 리스크" }
                ],
                items: [
                    { name: "중국 내몽골 (경희토)", examples: ["<i data-flag=\"🇨🇳\">중국</i> 바얀 오보", "<i data-flag=\"🇨🇳\">중국</i> 내몽골", "<i data-flag=\"🇨🇳\">중국</i> 쓰촨성"], meta: "🇨🇳 세계 최대 매장 · 🏭 바얀 오보", desc: "세계 최대 경희토(Light Rare Earth) 매장지. 바얀 오보 등 대규모 광산." },
                    { name: "중국 남부 (중희토)", examples: ["<i data-flag=\"🇨🇳\">중국</i> 장시성", "<i data-flag=\"🇨🇳\">중국</i> 광둥성", "<i data-flag=\"🇨🇳\">중국</i> 푸젠성"], meta: "⚖️ 전략적 가치 · 📱 첨단 산업 필수", desc: "중희토(Heavy Rare Earth) 산지. 독점적 지위를 가지며 지정학적 가치가 높음." },
                    { name: "북미 및 그린란드", examples: ["<i data-flag=\"🇺🇸\">미국</i> 마운틴 패스", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇬🇱\">그린란드</i>"], meta: "🇺🇸 공급망 다각화 · ⛰️ 재개발", desc: "미국 마운틴 패스 등 중국 외 지역에서 공급망 다각화를 위해 재개발 중인 광산." },
                    { name: "호주 및 동남아시아", examples: ["<i data-flag=\"🇦🇺\">호주</i>", "<i data-flag=\"🇲🇾\">말레이시아</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🇦🇺 라이나스(Lynas) · 🌏 비중국 공급", desc: "호주 라이나스 등 주요 생산 기업이 위치하며, 아시아의 공급망을 보조." }
                ]
            },
            {
                title: "리튬 (Lithium)", desc: "'하얀 황금'. 전기차와 모바일 기기의 배터리 핵심 원료.",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "염수호<br>화성암 (광석)" },
                    { icon: "⛏️", label: "채굴 방식", text: "염수 증발<br>광산 채굴" },
                    { icon: "🔋", label: "기술 의존도", text: "전기차 배터리<br>에너지 저장 장치 (ESS)" },
                    { icon: "💥", label: "지정학", text: "남미 염호<br>개발 경쟁" }
                ],
                items: [
                    { name: "남미 리튬 트라이앵글", examples: ["<i data-flag=\"🇨🇱\">칠레</i> 아타카마", "<i data-flag=\"🇧🇴\">볼리비아</i> 우유니", "<i data-flag=\"🇦🇷\">아르헨티나</i>"], meta: "🧂 염호 증발법 · 🌎 세계 매장 50%", desc: "세계 매장량의 50%가 밀집한 볼리비아, 칠레, 아르헨티나 국경 지대의 거대 염호." },
                    { name: "호주 및 기타 광산", examples: ["<i data-flag=\"🇦🇺\">호주</i> 웨스턴 오스트레일리아", "<i data-flag=\"🇨🇳\">중국</i> 쓰촨성", "<i data-flag=\"🇨🇦\">캐나다</i>"], meta: "⛏️ 스포듀민(광석) · 🏭 정제 기술", desc: "호주 등 광산 채굴 방식을 사용하는 주요 리튬 생산지." },
                    { name: "리튬의 미래 시장", examples: ["<i data-flag=\"🇺🇸\">미국</i> 네바다", "<i data-flag=\"🇿🇼\">짐바브웨</i>", "<i data-flag=\"🇵🇹\">포르투갈</i>"], meta: "🔋 배터리 수요 폭증 · 🌍 신규 개발", desc: "리튬 수요 폭증에 따라 새로운 염호 및 광산 개발이 추진되는 지역." }
                ]
            },
            {
                title: "코발트 (Cobalt)", desc: "공급망 리스크가 가장 높은, 배터리의 양극재.",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "퇴적암<br>구리/니켈 연관" },
                    { icon: "⛏️", label: "채굴 방식", text: "광산 채굴<br>부산물 추출" },
                    { icon: "🔋", label: "기술 의존도", text: "배터리 안정성<br>초합금 (항공)" },
                    { icon: "💥", label: "지정학", text: "콩고 집중<br>분쟁 광물 이슈" }
                ],
                items: [
                    { name: "콩고민주공화국 핵심 광산", examples: ["<i data-flag=\"🇨🇩\">콩고민주공화국</i> 루알라바", "<i data-flag=\"🇨🇩\">콩고민주공화국</i> 카탕가", "<i data-flag=\"🇨🇩\">콩고민주공화국</i> 콜웨지"], meta: "🇨🇩 세계 생산 70% · ⚠️ 아동 노동", desc: "세계 코발트 생산량의 70% 이상을 차지하는 압도적인 매장지." },
                    { name: "아프리카 코퍼벨트 주변", examples: ["<i data-flag=\"🇿🇲\">잠비아</i>", "<i data-flag=\"🇿🇦\">남아공</i>", "<i data-flag=\"🇹🇿\">탄자니아</i>"], meta: "⛏️ 구리 부산물 · 🌍 아프리카 자원", desc: "콩고와 인접한 잠비아 등 아프리카의 다른 주요 생산국." },
                    { name: "기타 지역 및 재활용", examples: ["<i data-flag=\"🇦🇺\">호주</i>", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇨🇳\">중국</i>"], meta: "♻️ 배터리 리사이클링 · 🌏 공급망 다변화", desc: "호주, 캐나다 등 아프리카 외 지역의 코발트 생산지 및 재활용 시장." }
                ]
            },
            {
                title: "우라늄 (Uranium)", desc: "지정학적 중요성이 매우 높은 원자력 발전의 연료.",
                criteria: [
                    { icon: "📜", label: "지질 환경", text: "퇴적암<br>화성암 (화강암)" },
                    { icon: "⛏️", label: "채굴 방식", text: "지하 채굴<br>용액 채굴" },
                    { icon: "🔋", label: "기술 의존도", text: "원자력 발전<br>핵무기" },
                    { icon: "💥", label: "지정학", text: "핵확산 위험<br>공급 안정성" }
                ],
                items: [
                    { name: "중앙아시아 생산 벨트", examples: ["<i data-flag=\"🇰🇿\">카자흐스탄</i>", "<i data-flag=\"🇺🇿\">우즈베키스탄</i>", "<i data-flag=\"🇰🇬\">키르기스스탄</i>"], meta: "🇰🇿 세계 1위 생산 · ☢️ 원자력 연료", desc: "세계 최대 우라늄 생산국인 카자흐스탄을 중심으로 하는 중앙아시아의 핵심 공급지." },
                    { name: "북미 및 호주", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 사스카추완", "<i data-flag=\"🇦🇺\">호주</i> 올림픽 댐", "<i data-flag=\"🇺🇸\">미국</i> 와이오밍"], meta: "🇨🇦 고품위 광석 · 🇦🇺 매장량 1위", desc: "캐나다와 호주의 거대 우라늄 광산. 서방 세계의 주요 공급원." },
                    { name: "아프리카 및 기타 지역", examples: ["<i data-flag=\"🇳🇦\">나미비아</i>", "<i data-flag=\"🇳🇪\">니제르</i>", "<i data-flag=\"🇨🇳\">중국</i>"], meta: "🌍 아프리카 광산 · 🇨🇳 해외 개발", desc: "나미비아, 니제르 등 아프리카와 유럽의 주요 우라늄 산지." }
                ]
            }
        ]
    },
    "resources-5": {
        title: "비금속 광물",
        subtitle: "도시를 짓고 식량을 키우는 대지의 선물",
        badge: "V",
        theme: "#95a5a6",
        iconSVG: `<path d="M20,180 L60,100 L100,140 L140,60 L180,180" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><rect x="80" y="120" width="40" height="60" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🏗️", label: "건축 자재", text: "석회석, 대리석" },
            { icon: "🌾", label: "비료 원료", text: "인광석, 칼륨" },
            { icon: "🧂", label: "화학 원료", text: "소금, 유황" },
            { icon: "💾", label: "첨단 소재", text: "규사, 흑연" }
        ],
        subCards: [
            {
                title: "석회석 및 대리석", desc: "건축물의 몸통과 피부를 구성하는 원료 광물",
                items: [
                    { name: "아시아 및 북미 (석회석)", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇮🇳\">인도</i>", "<i data-flag=\"🇺🇸\">미국</i>", "카르스트 지형"], meta: "🏗️ 시멘트의 원료 · ⛰️ 지산지소(地産地消)", desc: "광활한 대륙 내부의 고생대 카르스트 지형에서 대규모로 채굴되어 도시 건설의 핵심 재료가 됨." },
                    { name: "지중해 조산대 (대리석)", examples: ["<i data-flag=\"🇮🇹\">이탈리아</i> 카라라", "<i data-flag=\"🇹🇷\">튀르키예</i>", "<i data-flag=\"🇬🇷\">그리스</i>"], meta: "🎨 변성암의 예술 · 🏛️ 고대 건축", desc: "알프스-히말라야 조산대의 열과 압력으로 석회암이 변성되어 탄생한 최고급 대리석 산지." }
                ]
            },
            {
                title: "식량 안보의 열쇠: 비료", desc: "특정 국가에 편중된 매장량으로 '자원 무기화'의 대상이 되는 농업의 필수품",
                items: [
                    { name: "북아프리카 (인광석)", examples: ["<i data-flag=\"🇲🇦\">모로코</i>(서사하라)", "<i data-flag=\"🇹🇳\">튀니지</i>", "테티스해 퇴적층"], meta: "🌾 비료의 3요소(P) · 🇲🇦 전 세계 70% 독점", desc: "고대 테티스해의 퇴적층이 융기한 곳. 식량 생산의 목줄을 쥔 '인(P)의 사우디아라비아'." },
                    { name: "북반구 내륙 분지 (칼륨)", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 서스캐처원", "<i data-flag=\"🇷🇺\">러시아</i> 우랄", "<i data-flag=\"🇧🇾\">벨라루스</i>"], meta: "🌿 비료의 3요소(K) · 🌊 고대 증발암", desc: "고대 바다가 갇혀 증발한 거대한 내륙 분지 지하 깊은 곳에 매장된 식물 성장의 필수 영양소." }
                ]
            },
            {
                title: "화학 공업의 어머니: 소금", desc: "지질(암염)과 기후(천일염)가 만든 두 가지 생산 방식과 화학 산업의 기초",
                items: [
                    { name: "북미 및 유럽 (암염)", examples: ["<i data-flag=\"🇺🇸\">미국</i> 텍사스", "<i data-flag=\"🇩🇪\">독일</i>", "소금 돔(Salt Dome)"], meta: "⛏️ 지하 채굴 · 🏭 화학 단지 직결", desc: "지하 깊은 곳의 거대한 소금 돔을 채굴하여 인근 화학 공업 단지에 원료(염소, 소다회)로 공급." },
                    { name: "건조 기후 해안 (천일염)", examples: ["<i data-flag=\"🇲🇽\">멕시코</i> 바하칼리포니아", "<i data-flag=\"🇦🇺\">호주</i> 서부", "염전"], meta: "☀️ 태양과 바람 · 🌊 대규모 증발", desc: "강렬한 태양과 건조한 바람, 넓은 갯벌을 이용해 바닷물을 증발시키는 대규모 염전 지대." }
                ]
            },
            {
                title: "첨단 산업의 소재", desc: "흔한 모래와 탄소가 기술을 만나 반도체와 배터리로 재탄생하다",
                items: [
                    { name: "북미 및 오세아니아 (규사)", examples: ["<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇦🇺\">호주</i>", "고순도 석영", "반도체 웨이퍼"], meta: "💎 유리의 원료 · 💾 반도체의 기원", desc: "불순물이 없는 고순도 석영 모래. 유리 산업을 넘어 반도체 웨이퍼의 핵심 원료가 됨." },
                    { name: "동아시아 및 아프리카 (흑연)", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇲🇿\">모잠비크</i>", "<i data-flag=\"🇲🇬\">마다가스카르</i>"], meta: "🔋 배터리 음극재 · 🇨🇳 공급망 장악", desc: "연필심 재료에서 전기차 배터리의 핵심 소재(음극재)로 신분이 상승한 전략 광물." }
                ]
            }
        ]
    }
};

// [신규] 에너지와 발전 데이터 (HTML/CSS 통합본)
const energyData = {
    "energy-1": {
        title: "화력 발전",
        subtitle: "탄소의 시대, 여전히 세계를 움직이는 기저 전력",
        badge: "I",
        theme: "#e67e22",
        iconSVG: `<path d="M60,180 V100 L100,60 L140,100 V180 H60 Z" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><path d="M100,60 V20" stroke="currentColor" stroke-width="6" opacity="0.5"/><path d="M80,40 Q100,10 120,40" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🔥", label: "연료", text: "화석 연료" },
            { icon: "🏭", label: "입지", text: "대소비지 인근" },
            { icon: "👍", label: "장점", text: "안정적 기저 전력" },
            { icon: "👎", label: "단점", text: "탄소 배출 / 미세먼지" }
        ],
        subCards: [
            {
                title: "석탄 발전 (Coal Power)", desc: "가장 저렴한 기저 전력이자 대기 오염의 주범",
                items: [
                    { name: "아시아의 거인들 (소비)", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇮🇳\">인도</i>", "스모그", "경제 성장"], meta: "📈 압도적 소비량 · 🏭 세계의 공장", desc: "경제 성장을 위해 스모그를 감수하고 화력 발전을 가동하는 거대 소비국." },
                    { name: "선진국의 딜레마", examples: ["<i data-flag=\"🇩🇪\">독일</i>(갈탄)", "<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇵🇱\">폴란드</i>", "탈석탄"], meta: "🛑 단계적 폐지 · ⚡ 에너지 안보", desc: "기후 위기 대응을 위해 탈석탄을 추진하지만, 에너지 안보 문제로 완전히 놓지 못하는 딜레마." }
                ]
            },
            {
                title: "천연가스 발전 (Gas Power)", desc: "석탄보다 깨끗하고 효율적인 가교(Bridge) 에너지",
                items: [
                    { name: "복합 화력 발전", examples: ["가스터빈+증기터빈", "높은 효율", "신속한 가동"], meta: "🔥 효율 60% 이상 · ⏱️ 피크 부하 대응", desc: "가스를 태워 터빈을 돌리고 그 폐열로 한 번 더 전기를 만드는 고효율 방식. 가동이 빨라 전력 수급 조절에 유리." },
                    { name: "가스 발전 중심국", examples: ["<i data-flag=\"🇮🇷\">이란</i>", "<i data-flag=\"🇮🇹\">이탈리아</i>", "<i data-flag=\"🇲🇽\">멕시코</i>", "<i data-flag=\"🇷🇺\">러시아</i>"], meta: "⚡ 전력의 50% 이상 · 🌿 탈석탄 대안", desc: "풍부한 매장량이나 정책적 선택으로 국가 전력의 주축을 가스로 삼은 나라들." }
                ]
            },
            {
                title: "석유 발전 (Oil Power)", desc: "비용이 높지만 특수한 환경에서 필요한 전력",
                items: [
                    { name: "중동 산유국", examples: ["<i data-flag=\"🇸🇦\">사우디아라비아</i>", "<i data-flag=\"🇰🇼\">쿠웨이트</i>", "담수화 플랜트"], meta: "💧 전력+담수화 · 🏜️ 사막의 생존", desc: "넘쳐나는 석유를 태워 전기를 만들고, 그 폐열로 바닷물을 끓여 민물을 만드는(담수화) 사막의 생존 방식." }
                ]
            }
        ]
    },
    "energy-2": {
        title: "원자력 발전",
        subtitle: "통제된 태양, 고밀도 에너지의 양면성",
        badge: "II",
        theme: "#8e44ad",
        iconSVG: `<circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.6"/><ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="currentColor" stroke-width="4" opacity="0.4" transform="rotate(0 100 100)"/><ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="currentColor" stroke-width="4" opacity="0.4" transform="rotate(60 100 100)"/><ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="currentColor" stroke-width="4" opacity="0.4" transform="rotate(120 100 100)"/>`,
        criteria: [
            { icon: "☢️", label: "연료", text: "우라늄" },
            { icon: "🌊", label: "입지", text: "냉각수 필수 (하천/해안)" },
            { icon: "👍", label: "장점", text: "초고밀도 에너지" },
            { icon: "👎", label: "단점", text: "방사성 폐기물" }
        ],
        subCards: [
            {
                title: "서구의 개척자들과 강대국들", desc: "원자력 시대를 열고 기술 표준을 선도해 온 전통의 강자들",
                items: [
                    { name: "미국", examples: ["스리마일섬", "셰일가스 경쟁", "SMR 개발"], meta: "🇺🇸 세계 1위 발전량 · 💧 하천+해안 복합", desc: "세계 최다 원자로를 보유한 원자력의 종주국이자 차세대 기술 주도." },
                    { name: "프랑스", examples: ["전력 수출", "원자력 굴기", "론강·루아르강"], meta: "🇫🇷 압도적 의존도 · 💧 내륙 하천 입지", desc: "전력의 70%를 원전에 의존하는 '원자력 굴기'의 상징." },
                    { name: "캐나다", examples: ["CANDU(중수로)", "우라늄 생산", "온타리오호"], meta: "🇨🇦 CANDU 기술 · 💧 빙하호 냉각", desc: "독자적인 중수로(CANDU) 기술을 보유한 우라늄 생산 대국." }
                ]
            },
            {
                title: "유라시아의 축", desc: "구소련의 유산을 바탕으로 세계 원전 시장에 영향력을 행사하는 러시아 중심 클러스터",
                items: [
                    { name: "러시아", examples: ["로사톰(Rosatom)", "원스톱 패키지", "볼가강"], meta: "🇷🇺 원전 패권 · 💧 내륙 하천 입지", desc: "국영기업 로사톰을 통해 원전 건설부터 운영까지 패키지로 수출하는 패권 국가." },
                    { name: "동유럽 & 중앙아시아", examples: ["<i data-flag=\"🇺🇦\">우크라이나</i> 자포리자", "<i data-flag=\"🇧🇾\">벨라루스</i>", "<i data-flag=\"🇰🇿\">카자흐스탄</i>"], meta: "⛓️ 기술 종속 · 💧 내륙 중심", desc: "우크라이나, 벨라루스 등 구소련 시절부터 러시아 기술에 깊이 의존하고 있는 국가들." }
                ]
            },
            {
                title: "동아시아의 격전지", desc: "세계 원자력 산업의 미래가 걸린, 가장 역동적이고 치열한 경쟁의 무대",
                items: [
                    { name: "중국", examples: ["압도적 건설 속도", "다야완", "스모그 대안"], meta: "🇨🇳 차세대 패권 · 🌊 해안 집중 입지", desc: "전 세계 신규 원전의 절반 이상을 건설하며 차세대 패권을 노리는 도전자." },
                    { name: "대한민국", examples: ["K-방산 연계", "UAE 수출", "고리·월성"], meta: "🇰🇷 세계 최고 이용률 · 🌊 해안 밀집 입지", desc: "높은 기술력과 운영 능력을 바탕으로 원전 수출을 노리는 강소국." },
                    { name: "일본", examples: ["후쿠시마의 교훈", "재가동 딜레마", "지진 위험"], meta: "🇯🇵 사회적 딜레마 · 🌊 해안 집중 입지", desc: "후쿠시마 사고 이후 원전 재가동을 둘러싼 깊은 사회적 딜레마에 빠진 기술 강국." },
                    { name: "인도", examples: ["토륨 원자로", "에너지 자립", "인구 부양"], meta: "🇮🇳 잠재적 강자 · 💧 하천+해안 복합", desc: "독자적인 토륨 원자로 기술로 에너지 자립을 꿈꾸는 잠룡." }
                ]
            },
            {
                title: "원자력의 그림자", desc: "인류가 직면한 재앙의 기억과 영원히 해결해야 할 숙제",
                items: [
                    { name: "재앙의 기억", examples: ["<i data-flag=\"🇺🇦\">우크라이나</i> 체르노빌", "<i data-flag=\"🇯🇵\">일본</i> 후쿠시마", "출입 금지 구역"], meta: "☢️ 7등급 사고 · 🏚️ 유령 도시", desc: "인류 역사에 각인된 비극의 공간." },
                    { name: "영원한 골칫거리 (폐기물)", examples: ["<i data-flag=\"🇫🇮\">핀란드</i> 온칼로", "고준위 방폐장", "지하 처분"], meta: "⏳ 10만 년의 격리 · 🕳️ 심층 처분장", desc: "고준위 방사성 폐기물을 영구 처분하기 위한 인류의 사투." }
                ]
            }
        ]
    },
    "energy-3": {
        title: "수력 발전",
        subtitle: "중력을 에너지로, 물을 지배하는 자",
        badge: "III",
        theme: "#3498db",
        iconSVG: `<path d="M20,100 Q60,140 100,100 T180,100" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><path d="M100,20 V180" stroke="currentColor" stroke-width="15" opacity="0.2"/><rect x="80" y="60" width="40" height="80" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "💧", label: "동력", text: "물의 위치 에너지" },
            { icon: "🏞️", label: "입지", text: "급경사 / 대하천" },
            { icon: "👍", label: "장점", text: "반영구적 / 저비용" },
            { icon: "👎", label: "단점", text: "댐 건설 / 생태계 파괴" }
        ],
        subCards: [
            {
                title: "국가의 상징이 된 거대 댐", desc: "20세기 국가의 명운을 걸고 건설한 기념비적 토목 사업",
                items: [
                    { name: "싼샤 댐 (중국)", examples: ["양쯔강", "이창시", "삼협", "수몰 지구"], meta: "🇨🇳 대륙의 스케일 · ⚡ 홍수 조절", desc: "양쯔강의 홍수를 막고 세계 최대 전력을 생산하는, 대륙 스케일의 토목 공사." },
                    { name: "이타이푸 댐 (남미)", examples: ["파라나강", "포스두이과수", "브라질-파라과이 국경"], meta: "🇧🇷🇵🇾 국경의 에너지 · 💡 파라과이 전력 90%", desc: "두 나라가 공유하며 남미 대륙에 에너지를 공급하는 거대한 국경의 댐." },
                    { name: "후버 댐 (미국)", examples: ["콜로라도강", "미드호", "라스베이거스", "대공황"], meta: "🇺🇸 서부 개척 상징 · 🏜️ 사막의 젖줄", desc: "대공황 시절, 콜로라도강을 막아 사막에 라스베이거스를 탄생시킨 서부 개척의 상징." },
                    { name: "아스완 하이 댐 (이집트)", examples: ["나일강", "나세르 호수", "고대 유적 수몰"], meta: "🇪🇬 나일강 통제 · 🏛️ 현대 이집트 초석", desc: "나일강의 불규칙한 범람을 통제하여 현대 이집트의 농업과 전력을 책임진 국가적 사업." }
                ]
            },
            {
                title: "지정학과 미래의 댐", desc: "현재와 미래의 물 분쟁을 야기하거나, 대륙의 에너지 지도를 바꿀 잠재력을 지닌 댐",
                items: [
                    { name: "그랜드 르네상스 댐 (에티오피아)", examples: ["청나일강", "아프리카의 뿔", "수자원 분쟁"], meta: "🇪🇹 나일강의 패권 · ⚔️ 물 분쟁 화약고", desc: "나일강 상류에 건설되어 하류 국가(이집트, 수단)와 첨예한 물 분쟁을 일으키고 있는 댐." },
                    { name: "잉가 댐 (콩고)", examples: ["콩고강", "리빙스턴 폭포", "아프리카의 미래"], meta: "🇨🇩 잠자는 거인 · 🌍 아프리카 대륙 전력", desc: "완공 시 아프리카 대륙 전체의 에너지 지도를 바꿀 수 있는, 세계 최대 잠재력의 댐." },
                    { name: "메콩강 댐들 (중국/라오스)", examples: ["란창강", "동남아의 젖줄", "생태계 파괴"], meta: "🇨🇳 상류의 무기 · 🏞️ 생태계 위협", desc: "중국이 상류에 건설한 댐들이 하류 동남아 국가들의 생태계와 수자원에 막대한 영향을 미치는 현장." },
                    { name: "벨루몬치 댐 (브라질)", examples: ["아마존강", "싱구강", "유로 변경식", "환경 파괴"], meta: "🇧🇷 논쟁적 댐 · 🌳 열대우림 파괴", desc: "아마존 열대우림 파괴라는 거대한 환경 논란 속에서 건설된, 세계에서 가장 논쟁적인 댐 중 하나." }
                ]
            },
            {
                title: "지형의 축복 (Geography of Hydro)", desc: "빙하와 산악 지형을 이용해 청정 에너지를 얻는 나라들",
                items: [
                    { name: "노르웨이 (피오르)", examples: ["송네피오르", "빙하호", "베르겐", "전기차 천국"], meta: "🇳🇴 유럽의 배터리 · 🏔️ 빙하 지형 활용", desc: "가파른 피오르 지형의 낙차를 이용해 국가 전력의 거의 전부를 물에서 얻는 청정 에너지 국가." },
                    { name: "캐나다 퀘벡 (순상지)", examples: ["로렌시아 고원", "제임스만 프로젝트", "알루미늄 제련"], meta: "🇨🇦 풍부한 수자원 · 🏭 전력 다소비 산업", desc: "광활한 순상지의 물을 이용해 저렴한 전기를 생산, 알루미늄 제련 등 전력 다소비 산업을 유치." },
                    { name: "알프스 산맥", examples: ["<i data-flag=\"🇨🇭\">스위스</i>", "<i data-flag=\"🇦🇹\">오스트리아</i>", "그랑 디상스 댐"], meta: "🏔️ 유럽의 급수탑 · 💧 융빙수 발전", desc: "빙하가 녹은 물과 거대한 낙차를 이용한 유럽의 청정 에너지 보고." }
                ]
            },
            {
                title: "양수 발전 (Pumped Storage)", desc: "남는 전기로 물을 퍼 올렸다가 필요할 때 쓰는 거대한 물 배터리",
                items: [
                    { name: "일본", examples: ["<i data-flag=\"🇯🇵\">일본</i>", "간나가와 발전소", "오쿠타타라기 발전소"], meta: "🇯🇵 세계 최대 규모 · 🔋 원전 잉여 전력", desc: "원자력 발전의 잉여 전력을 저장하기 위해 발달한 세계 최대 규모의 양수 발전 국가." },
                    { name: "유럽 (알프스)", examples: ["<i data-flag=\"🇨🇭\">스위스</i>", "낭 드 드랑스", "오스트리아 알프스"], meta: "🇪🇺 유럽의 거대 배터리 · 🏞️ 산악 지형 활용", desc: "스위스 등 알프스 국가들이 주변국의 전력망을 안정시키는 역할." },
                    { name: "대한민국", examples: ["<i data-flag=\"🇰🇷\">한국</i>", "무주 양수발전소", "청평 양수발전소"], meta: "🇰🇷 산지 지형 활용 · ⚡ 피크 부하 대응", desc: "국토의 70%가 산지인 특성을 활용하여 전력 피크 타임에 대응하는 핵심 설비." }
                ]
            }
        ]
    },
    "energy-4": {
        title: "재생 에너지",
        subtitle: "자연의 순환, 지속 가능한 미래의 동력",
        badge: "IV",
        theme: "#2ecc71",
        iconSVG: `<path d="M100,20 L130,80 H160 L110,120 L130,180 L100,140 L70,180 L90,120 L40,80 H70 Z" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/><circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.2"/>`,
        criteria: [
            { icon: "☀️", label: "태양광", text: "일사량, 반도체" },
            { icon: "🌬️", label: "풍력", text: "바람의 길목" },
            { icon: "🌋", label: "지열", text: "판의 경계" },
            { icon: "🌊", label: "조력", text: "조수 간만의 차" }
        ],
        subCards: [
            {
                title: "태양광 (Solar PV)", desc: "반도체 기술로 빛을 전기로 바꾸는 가장 보편적인 재생 에너지",
                criteria: [
                    { icon: "☀️", label: "입지", text: "풍부한 일사량" },
                    { icon: "🛰️", label: "기술", text: "반도체 기술" }
                ],
                items: [
                    { name: "중국 (제조와 보급)", examples: ["고비 사막", "텅거얼리 사막", "닝샤"], meta: "🇨🇳 압도적 1위 · 🏭 전 세계 패널 공급", desc: "전 세계 태양광 패널 공급망을 장악하고 사막에 거대 발전 단지를 건설하는 태양광 제국." },
                    { name: "미국 (사막과 시장)", examples: ["모하비 사막", "이반파 발전소", "캘리포니아"], meta: "🇺🇸 거대 시장 · 🏜️ 사막 발전소", desc: "캘리포니아의 법규와 남서부 사막의 강렬한 햇빛을 바탕으로 성장하는 거대 시장." },
                    { name: "인도 (떠오르는 거인)", examples: ["바들라 솔라 파크", "라자스탄 사막", "구자라트"], meta: "🇮🇳 떠오르는 거인 · ☀️ 바들라 솔라 파크", desc: "중국에 이어 가장 빠르게 태양광 발전 용량이 증가하는 국가." },
                    { name: "독일 (에너지 전환)", examples: ["바이에른 솔라파크", "아우토반 방음벽", "가정용 태양광"], meta: "🇩🇪 에너지 전환 · 🏠 지붕 위 발전소", desc: "일조량이 적음에도 정책과 시민 참여로 태양광을 일상화한 에너지 전환(Energiewende)의 선두주자." }
                ]
            },
            {
                title: "태양열 (Solar Thermal)", desc: "사막의 강렬한 직사광선을 거울로 모아 터빈을 돌리는 기술",
                criteria: [
                    { icon: "🏜️", label: "입지", text: "사막 (직사광선)" },
                    { icon: "🔥", label: "기술", text: "집광(集光) 기술" }
                ],
                items: [
                    { name: "스페인 (기술의 발상지)", examples: ["헤마솔라르 발전소", "안달루시아", "세비야"], meta: "🇪🇸 기술의 발상지 · 🗼 타워형 기술", desc: "'타워형' 기술이 최초로 상용화된 태양열 발전의 기술적 선구자." },
                    { name: "미국 서부 (사막의 타워)", examples: ["크레센트 듄스", "모하비 사막", "네바다"], meta: "🇺🇸 모하비 사막 · ☀️ 거울 집광", desc: "구름 없는 사막 한가운데 거대한 타워를 세우고 수십만 개의 거울이 빛을 쏘아 올리는 장관." },
                    { name: "모로코 (밤에도 빛나는 태양)", examples: ["누르 발전소", "와르자자트", "사하라 사막"], meta: "🇲🇦 24시간 발전 · 🌙 용융염 저장", desc: "사하라의 태양열을 용융염에 저장, 밤에도 전기를 생산하여 유럽으로 보내는 야심 찬 프로젝트." }
                ]
            },
            {
                title: "풍력 (Wind Power)", desc: "바람의 길목에 서서 대기의 흐름을 전기로 바꾸다",
                criteria: [
                    { icon: "🌬️", label: "입지", text: "바람의 길목" },
                    { icon: "⚙️", label: "기술", text: "터빈 기술" }
                ],
                items: [
                    { name: "북해 연안 (해상 풍력)", examples: ["<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇩🇰\">덴마크</i>", "도거뱅크", "혼시 프로젝트"], meta: "🌊 바다 위 풍차 · 🌬️ 질 좋은 편서풍", desc: "수심이 얕고 바람이 강한 북해에 거대 터빈을 꽂아 '유럽의 배터리'를 만드는 해상 풍력의 메카." },
                    { name: "중국 (압도적 1위)", examples: ["내몽골 초원", "간쑤성", "광둥성 해상풍력"], meta: "🇨🇳 압도적 1위 · 🏞️ 초원+해상", desc: "내몽골의 광활한 초원부터 동부 해안의 해상 풍력까지, 전 세계 발전 용량의 1/3을 차지." },
                    { name: "미국 그레이트플레인스 (육상 풍력)", examples: ["텍사스", "아이오와", "윈드 벨트", "토네이도 앨리"], meta: "🌪️ 바람의 회랑 · 🤠 석유와 바람의 공존", desc: "장애물 없는 대평원을 달리는 바람을 이용해, 석유의 주산지 텍사스가 풍력의 중심지로 변모." },
                    { name: "브라질 북동부 (무역풍)", examples: ["<i data-flag=\"🇧🇷\">브라질</i> 북동부", "세아라주", "히우그란지두노르치주"], meta: "🇧🇷 신흥 강국 · 💨 강력한 무역풍", desc: "대서양에서 불어오는 일정하고 강한 무역풍을 이용하여 국가 전력의 상당 부분을 풍력으로 대체." }
                ]
            },
            {
                title: "지열 (Geothermal)", desc: "발밑에서 끓어오르는 지구 내부의 열기",
                criteria: [
                    { icon: "🌋", label: "입지", text: "판의 경계" },
                    { icon: "♨️", label: "자원", text: "지구 내부 에너지" }
                ],
                items: [
                    { name: "아이슬란드", examples: ["레이캬비크", "블루라군", "대서양 중앙 해령"], meta: "🇮🇸 불과 얼음의 땅 · ♨️ 난방/전력 자립", desc: "화산 활동이 활발한 지형적 특혜를 입어, 난방과 전력의 대부분을 땅속 열기로 해결하는 청정 국가." },
                    { name: "인도네시아", examples: ["자와섬", "수마트라섬", "살락산 지열발전소"], meta: "🇮🇩 세계 2위 · 🌋 화산 에너지", desc: "수많은 화산이 늘어선 '불의 고리'의 심장부로서, 세계 2위의 지열 발전 국가." },
                    { name: "미국 캘리포니아", examples: ["게이저스 발전소", "산안드레아스 단층", "불의 고리"], meta: "🇺🇸 세계 최대 단지 · 🏞️ 게이저스 발전소", desc: "'불의 고리'에 위치한 세계 최대 규모의 지열 발전 단지 '게이저스' 운영." },
                    { name: "케냐 (동아프리카 지구대)", examples: ["올카리아 발전소", "나이바샤 호수", "리프트 밸리"], meta: "🇰🇪 아프리카 선두 · 🌍 동아프리카 지구대", desc: "땅이 갈라지는 '동아프리카 지구대'의 지질학적 특성을 에너지로 전환한 아프리카의 선두주자." },
                    { name: "뉴질랜드 & 필리핀", examples: ["<i data-flag=\"🇳🇿\">뉴질랜드</i> 타우포", "<i data-flag=\"🇵🇭\">필리핀</i> 루손섬"], meta: "🇳🇿🇵🇭 불의 고리 · ⚡️ 환태평양 자원", desc: "'불의 고리'에 위치하여 화산 에너지를 적극적으로 활용하는 국가들." }
                ]
            },
            {
                title: "조력 및 조류 (Ocean Energy)", desc: "달이 당기는 힘과 바다의 흐름을 이용하다",
                criteria: [
                    { icon: "🌕", label: "원인", text: "달의 인력" },
                    { icon: "🌊", label: "입지", text: "특수 해안 지형" }
                ],
                items: [
                    { name: "캐나다 (펀디 만)", examples: ["펀디만", "노바스코샤", "아나폴리스 로열"], meta: "🇨🇦 세계 최대 조차 · 🌊 펀디만", desc: "전 세계에서 조수 간만의 차가 가장 큰 곳(최대 16m)으로, 조력 발전의 교과서적인 입지." },
                    { name: "대한민국 (시화호)", examples: ["시화호 조력발전소", "경기만", "인천만"], meta: "🇰🇷 세계 최대 규모 · 🏗️ 방조제 활용", desc: "서해안의 큰 조수 간만의 차를 이용하여 방조제 수문을 열고 닫으며 전기를 만드는 세계 최대 조력 발전소." },
                    { name: "프랑스 (랑스강)", examples: ["랑스 조력발전소", "브르타뉴", "생말로"], meta: "🇫🇷 세계 최초 · 🏞️ 하구 활용", desc: "1966년 완공된 세계 최초의 조력 발전소로, 강 하구의 조수 차를 이용하는 기술적 선구자." },
                    { name: "영국 (스코틀랜드)", examples: ["스코틀랜드", "오크니 제도", "펜틀랜드 퍼스"], meta: "🇬🇧 차세대 기술 · 🔬 실험의 메카", desc: "파도의 힘(파력)과 빠른 조류의 흐름(조류)을 이용하는 차세대 해양 에너지 연구의 메카." }
                ]
            }
        ]
    },
    "energy-5": {
        title: "미래 및 대체 에너지",
        subtitle: "인류의 다음 도전을 이끄는 동력원",
        badge: "V",
        theme: "#4b6584",
        iconSVG: `<path d="M100,20 L180,100 L100,180 L20,100 Z" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "🌱", label: "바이오", text: "식물, 폐기물" },
            { icon: "💧", label: "수소", text: "그린/블루 수소" },
            { icon: "♻️", label: "순환", text: "폐기물 에너지" },
            { icon: "🚀", label: "미래", text: "핵융합" }
        ],
        subCards: [
            {
                title: "바이오 연료: 식물에서 짜내는 에너지", desc: "'탄소 중립'의 희망과 '식량 vs 연료'의 딜레마",
                criteria: [
                    { icon: "🌱", label: "원료", text: "옥수수, 사탕수수, 팜유" },
                    { icon: "⚖️", label: "쟁점", text: "식량과의 경쟁, 산림 파괴" }
                ],
                items: [
                    { name: "미국 (옥수수 에탄올)", examples: ["콘 벨트", "아이오와", "차량용 연료"], meta: "🌽 옥수수 기반 · 🇺🇸 농업 보조금", desc: "콘 벨트의 막대한 옥수수를 차량용 연료로 전환. 농업 보조금과 정치적 논쟁의 중심." },
                    { name: "브라질 (사탕수수 에탄올)", examples: ["상파울루주", "플렉스 연료", "고효율"], meta: "🌿 사탕수수 기반 · 🇧🇷 에너지 자립", desc: "사탕수수를 발효시켜 미국보다 효율적으로 에탄올을 생산. 대부분의 차량이 바이오연료를 사용." },
                    { name: "동남아시아 (바이오디젤)", examples: ["말레이시아", "인도네시아", "팜유"], meta: "🌴 팜유 기반 ·  deforestation", desc: "팜유와 대두유를 기반으로 바이오디젤을 생산하나, 열대우림 파괴라는 심각한 환경 문제를 야기." }
                ]
            },
            {
                title: "폐기물 에너지: 쓰레기를 자원으로", desc: "국토가 좁고 자원이 부족한 국가들의 필연적 선택",
                criteria: [
                    { icon: "♻️", label: "자원", text: "생활 폐기물, 매립가스" },
                    { icon: "🎯", label: "목표", text: "매립지 최소화, 순환 경제" }
                ],
                items: [
                    { name: "유럽 (선진 모델)", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇸🇪\">스웨덴</i>", "<i data-flag=\"🇩🇰\">덴마크</i>", "지역 난방"], meta: "🔥 열병합 발전 · 🇪🇺 순환 경제", desc: "쓰레기를 태운 열로 지역 난방까지 해결하는 열병합 발전의 선두주자." },
                    { name: "일본 & 싱가포르 (섬나라의 생존법)", examples: ["도쿄 23구", "<i data-flag=\"🇸🇬\">싱가포르</i>", "매립지 최소화"], meta: "🏝️ 공간의 한계 · ♻️ 에너지 회수", desc: "매립 공간이 절대적으로 부족하여, 소각 기술을 극도로 발전시켜 쓰레기의 부피를 최소화하고 에너지를 회수." },
                    { name: "대한민국 (매립가스 발전)", examples: ["수도권 매립지", "메탄가스(LFG)", "자원 재활용"], meta: "🇰🇷 거대 매립지 활용 · 💨 LFG 포집", desc: "거대 매립지에서 발생하는 메탄가스를 포집하여 발전하는 자원 재활용 모델." }
                ]
            },
            {
                title: "수소 경제: 궁극의 청정 에너지", desc: "생산 방식(그린/블루)에 따라 미래 에너지 패권이 갈릴 차세대 동력원",
                criteria: [
                    { icon: "💡", label: "생산 방식", text: "그린(재생), 블루(가스)" },
                    { icon: "課題", label: "핵심 과제", text: "생산 단가, 저장·운송" }
                ],
                items: [
                    { name: "유럽 (그린수소 선도)", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "북해 풍력", "전기분해"], meta: "💚 그린수소 · 🌬️ 풍력 연계", desc: "북해의 해상풍력 잉여 전력을 이용해 물을 전기분해하여 '그린수소'를 생산하는 프로젝트 주도." },
                    { name: "호주 & 칠레 (그린수소 수출)", examples: ["필바라(호주)", "아타카마(칠레)", "태양광"], meta: "☀️ 태양광 연계 · 🚢 미래의 수출품", desc: "광활한 사막의 태양광과 풍력을 이용해 그린수소를 대량 생산하여 아시아로 수출하려는 미래의 '수소 부국'." },
                    { name: "중동 (블루/그린수소 병행)", examples: ["<i data-flag=\"🇸🇦\">사우디아라비아</i>", "<i data-flag=\"🇦🇪\">UAE</i>", "네옴시티"], meta: "💙 블루수소 · 🏜️ 탈석유 대비", desc: "기존 가스 인프라를 활용한 '블루수소'와 사막의 태양광 '그린수소'를 동시에 추진하며 '탈석유' 시대를 대비." },
                    { name: "한국 & 일본 (수소 도입/활용)", examples: ["울산(한국)", "고베(일본)", "수소차/연료전지"], meta: "🚗 활용 기술 선도 · 🏗️ 인프라 구축", desc: "에너지 수입 의존도가 높은 국가들. 해외에서 수소를 수입하고, 수소차·연료전지 등 활용 기술을 선도." }
                ]
            }
        ]
    }
};

// [신규] 공업 데이터 (HTML/CSS 통합본)
const industryData = {
    "industry-1": {
        title: "기간 산업: 철강과 기계",
        subtitle: "산업화 시대를 열고 현대 문명의 뼈대를 세운 기초 제조 산업",
        badge: "I",
        theme: "#404E88",
        iconSVG: `<rect x="20" y="20" width="160" height="160" fill="currentColor" opacity="0.1"/><path d="M40,180 L160,180 V160 H40 Z M100,160 V40 M40,160 H160" stroke="currentColor" stroke-width="6" opacity="0.4" stroke-linecap="round"/>`,
        criteria: [
            { icon: "⛏️", label: "주요 원료", text: "철광석, 코크스 / 보크사이트" },
            { icon: "🏭", label: "생산 방식", text: "용광로 제철 / 전기분해" },
            { icon: "🚩", label: "주요 입지", text: "임해 지역, 수력 발전지" },
            { icon: "⚙️", label: "활용", text: "건축, 자동차, 알루미늄" }
        ],
        subCards: [
            {
                title: "철강 및 비철금속", desc: "국가 경제의 근간이 되는 기초 소재 산업. 자원 산지에서 임해 지역으로, 다시 친환경으로 진화하는 중",
                criteria: [
                    { icon: "⛏️", label: "주요 원료", text: "철광석, 코크스 / 보크사이트" },
                    { icon: "🏭", label: "생산 방식", text: "용광로 제철 / 전기분해" },
                    { icon: "🚩", label: "주요 입지", text: "임해 지역, 수력 발전지" },
                    { icon: "⚙️", label: "활용", text: "건축, 자동차, 알루미늄" }
                ],
                items: [
                    { name: "유럽 및 북미 전통 거점", examples: ["<i data-flag=\"🇩🇪\">독일</i> 루르", "<i data-flag=\"🇺🇸\">미국</i> 피츠버그", "<i data-flag=\"🇨🇳\">중국</i> 안산"], meta: "⚒️ 원료 지향 입지 · 📉 산업 구조 고도화", desc: "원료 산지에 입지하여 산업화를 이끌었으나, 현재는 고부가가치 특수강으로 전환한 지역." },
                    { name: "한·일 임해 제철소", examples: ["<i data-flag=\"🇰🇷\">대한민국</i> 포항·광양", "<i data-flag=\"🇯🇵\">일본</i> 세토내해"], meta: "🚢 적환지 지향 입지 · 🏭 세계적 효율성", desc: "압도적인 생산 효율을 달성하여 세계 철강 산업의 중심이 된 바닷가." },
                    { name: "중국 거대 제철 단지", examples: ["<i data-flag=\"🇨🇳\">중국</i> 허베이성(탕산)", "<i data-flag=\"🇨🇳\">중국</i> 상하이(바오산)"], meta: "🇨🇳 세계 생산 50% · 🌫️ 환경 규제 강화", desc: "전 세계 철강의 절반 이상을 생산하는 압도적 물량의 용광로." },
                    { name: "보크사이트 및 알루미늄", examples: ["<i data-flag=\"🇨🇦\">캐나다</i> 퀘벡", "<i data-flag=\"🇮🇸\">아이슬란드</i>", "<i data-flag=\"🇳🇴\">노르웨이</i>"], meta: "⚡ 동력 지향 입지 · 🏭 제련소", desc: "'전기 먹는 하마'를 위해 발전소 인근에 형성된 비철금속 단지." }
                ]
            },
            {
                title: "자동차 산업", desc: "20세기 대량 생산 체제를 상징하며, 세계 경제의 주요 동력원",
                criteria: [
                    { icon: "🚗", label: "특징", text: "대규모 조립 산업, 부품 연계" },
                    { icon: "🛠️", label: "생산 방식", text: "컨베이어 시스템 (포드주의)" },
                    { icon: "🚩", label: "주요 입지", text: "대도시 근교, 노동력 집중지" },
                    { icon: "📈", label: "동향", text: "전기차, 자율주행으로 전환" }
                ],
                items: [
                    { name: "미국 및 동아시아 선진 제조", examples: ["<i data-flag=\"🇺🇸\">미국</i> 디트로이트", "<i data-flag=\"🇯🇵\">일본</i> 도요타시", "<i data-flag=\"🇰🇷\">대한민국</i> 울산"], meta: "🏭 포디즘의 본산 · 🚢 수출 주도", desc: "디트로이트, 도요타시, 울산 등 대량 생산의 거점." },
                    { name: "유럽의 프리미엄 브랜드", examples: ["<i data-flag=\"🇩🇪\">독일</i> 뮌헨", "<i data-flag=\"🇮🇹\">이탈리아</i> 토리노", "<i data-flag=\"🇩🇪\">독일</i> 슈투트가르트"], meta: "🏎️ 고성능/럭셔리 · 🎨 디자인 중심", desc: "누구나 탈 수 없는 고성능/럭셔리 카의 본산." },
                    { name: "신흥국 거대 생산 기지", examples: ["<i data-flag=\"🇨🇳\">중국</i> 상하이", "<i data-flag=\"🇮🇳\">인도</i> 첸나이", "<i data-flag=\"🇲🇽\">멕시코</i> 몬테레이"], meta: "👥 저렴한 노동력 · 🌏 거대 내수 시장", desc: "저렴한 비용과 거대 시장을 둔 생산 허브." },
                    { name: "유럽 니어쇼어링 허브", examples: ["폴란드·헝가리", "튀르키예", "독일 배후 기지"], meta: "🇪🇺 유럽판 마킬라도라 · 🏭 공급망 내재화", desc: "독일 등 서유럽 기업들이 인건비 절감과 신속한 공급을 위해 EU 단일 시장 내 동유럽이나 인접국으로 생산 기지를 이전한 형태." },
                    { name: "전기차와 미래 모빌리티", examples: ["<i data-flag=\"🇺🇸\">미국</i> 캘리포니아(테슬라)", "<i data-flag=\"🇨🇳\">중국</i> 허페이(NIO)", "<i data-flag=\"🇨🇳\">중국</i> 선전(BYD)"], meta: "🔋 배터리/SW 중심 · 🤖 자율주행", desc: "IT 기술과 결합하여 '달리는 컴퓨터'로 재정의한 전기차 혁명의 발상지." }
                ]
            },
            {
                title: "정밀 기계 및 로봇", desc: "공작기계와 산업용 로봇 등 다른 산업의 생산성을 결정하는 핵심 기반",
                criteria: [
                    { icon: "🤖", label: "주요 제품", text: "산업용 로봇, 공작기계" },
                    { icon: "⚙️", label: "특징", text: "고도의 정밀도, 기술 집약적" },
                    { icon: "🚩", label: "주요 입지", text: "첨단 산업 인근, 연구 단지" },
                    { icon: "🛡️", label: "군수 공업", text: "독일(크루프), 한국(창원) 등" }
                ],
                items: [
                    { name: "일본 산업용 로봇", examples: ["<i data-flag=\"🇯🇵\">일본</i> 나고야", "<i data-flag=\"🇯🇵\">일본</i> 후쿠오카", "화낙(Fanuc)"], meta: "🤖 세계 점유율 1위 · 🏭 공장 자동화", desc: "화낙(Fanuc), 야스카와 등 세계 공장의 자동화를 책임지는 로봇 제국." },
                    { name: "독일 및 스위스 정밀 기계", examples: ["<i data-flag=\"🇩🇪\">독일</i> 바덴뷔르템베르크", "<i data-flag=\"🇨🇭\">스위스</i>", "공작기계"], meta: "🔬 마이스터 정신 · ⚙️ 히든 챔피언", desc: "시계부터 공작기계까지, 장인 정신으로 빚어낸 초정밀 공학의 본산." },
                    { name: "한국 및 대만 기계 부품", examples: ["<i data-flag=\"🇰🇷\">대한민국</i> 창원", "<i data-flag=\"🇹🇼\">대만</i> 타이중", "방위산업"], meta: "🔩 소부장 강국 · 🛡️ K-방산", desc: "IT와 중공업을 뒷받침하는 핵심 부품 및 장비 생산의 허브." }
                ]
            },
            {
                title: "조선 및 중장비", desc: "대규모 운송 수단 및 토목 건설에 필요한 대형 장치 산업",
                criteria: [
                    { icon: "🚢", label: "특징", text: "대형 크레인, 대단위 부지 필수" },
                    { icon: "⚙️", label: "주요 제품", text: "컨테이너선, 굴삭기, 해양플랜트" },
                    { icon: "🚩", label: "주요 입지", text: "임해 지역 (수심 깊고 넓은 평지)" },
                    { icon: "🌐", label: "동향", text: "아시아 중심의 생산력 집중" }
                ],
                items: [
                    { name: "동아시아 거대 조선소", examples: ["<i data-flag=\"🇰🇷\">대한민국</i> 울산", "<i data-flag=\"🇨🇳\">중국</i> 상하이", "<i data-flag=\"🇯🇵\">일본</i> 나가사키"], meta: "🚢 LNG선/컨테이너선 · 🌏 세계 M/S 90%", desc: "세계 상선 시장을 90% 이상 장악한 핵심 생산 기지." },
                    { name: "북미 및 유럽 중장비", examples: ["<i data-flag=\"🇺🇸\">미국</i> 일리노이 (캐터필러)", "<i data-flag=\"🇯🇵\">일본</i> 코마쓰", "<i data-flag=\"🇩🇪\">독일</i> 뮌헨"], meta: "🚜 건설/광산 기계 · 🏗️ 인프라 구축", desc: "캐터필러, 코마쓰 등 건설/광산 기계의 본산." },
                    { name: "유럽 특수 선박 시장", examples: ["<i data-flag=\"🇫🇮\">핀란드</i> 투르쿠", "<i data-flag=\"🇮🇹\">이탈리아</i> 베네치아", "<i data-flag=\"🇩🇪\">독일</i> 함부르크"], meta: "🛳️ 크루즈/요트 · 💎 고부가가치", desc: "크루즈선, 요트, 특수 선박 등 틈새 고부가가치 시장에 집중." }
                ]
            },
            {
                title: "항공우주 산업", desc: "하늘과 우주를 향한 인류의 도전이자 최첨단 기술의 총아",
                criteria: [
                    { icon: "✈️", label: "특징", text: "최고 난이도 기술, 국가 전략 산업" },
                    { icon: "🚀", label: "주요 제품", text: "여객기, 로켓, 인공위성" },
                    { icon: "🚩", label: "주요 입지", text: "광활한 부지, 맑은 날씨, 적도 인근" },
                    { icon: "🌌", label: "동향", text: "민간 우주 개발 (New Space)" }
                ],
                items: [
                    { name: "항공기 제조 클러스터", examples: ["<i data-flag=\"🇺🇸\">미국</i> 시애틀(보잉)", "<i data-flag=\"🇫🇷\">프랑스</i> 툴루즈(에어버스)"], meta: "✈️ 항공 산업 양대 산맥", desc: "수만 개의 부품이 조립되는 거대한 공장과 연구소가 집적된 항공 산업의 양대 산맥." },
                    { name: "우주 산업의 사령탑", examples: ["<i data-flag=\"🇺🇸\">미국</i> 휴스턴(NASA)", "<i data-flag=\"🇷🇺\">러시아</i> 모스크바(코롤료프)"], meta: "🚀 우주 관제 센터", desc: "\"휴스턴, 문제가 생겼다\", 유인 우주 비행 관제 센터와 우주 비행사 훈련의 본산." },
                    { name: "적도의 우주항", examples: ["<i data-flag=\"🇬🇫\">프랑스령 기아나</i> 쿠루", "<i data-flag=\"🇺🇸\">미국</i> 플로리다(케네디 센터)"], meta: "🌍 적도 인접 발사 기지", desc: "지구 자전력을 최대화할 수 있는 적도의 유럽우주국(ESA)의 핵심 발사 기지." }
                ]
            }
        ]
    },
    "industry-2": {
        title: "노동 및 소재 산업",
        subtitle: "세계의 공장, 저임금과 원료를 찾아 이동하는 생산 사슬",
        badge: "II",
        theme: "#B53471",
        iconSVG: `<path d="M40,160 L40,40 L100,80 L160,40 L160,160" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3" stroke-linejoin="round"/><path d="M40,100 H160" stroke="currentColor" stroke-width="6" opacity="0.2"/><circle cx="100" cy="130" r="15" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🧵", label: "경공업", text: "의류, 신발, 조립" },
            { icon: "📦", label: "입지 요인", text: "저렴한 노동력" },
            { icon: "🏭", label: "가공업", text: "식품, 제지, 가구" }
        ],
        subCards: [
            {
                title: "섬유·의류·신발", desc: "패스트 패션과 브랜드를 만드는 세계의 옷장",
                items: [
                    { name: "방글라데시", examples: ["다카(방글라데시)", "SPA 의류 봉제", "H&M / Zara"], meta: "👕 세계 2위 의류 수출 · 📉 최저 임금", desc: "가장 저렴한 인건비를 바탕으로 전 세계 SPA 브랜드의 의류를 생산하는 거대 봉제 기지." },
                    { name: "베트남", examples: ["호치민(베트남)", "나이키·아디다스 신발", "화승 / 태광실업"], meta: "👟 신발 생산 허브 · 🇻🇳 포스트 차이나", desc: "나이키, 아디다스 등 글로벌 스포츠 브랜드의 핵심 생산 기지이자 고기능성 의류 허브." },
                    { name: "중국 (광저우/이우)", examples: ["광저우(중국)", "원단 및 부자재", "Shein (패스트패션)"], meta: "🏭 섬유 공급망 장악 · 🇨🇳 세계의 공장", desc: "단순 봉제에서 벗어나 원단과 부자재를 전 세계에 공급하며 패스트 패션을 주도." },
                    { name: "튀르키예", examples: ["이스탄불(튀르키예)", "데님·정장", "Hugo Boss / Diesel"], meta: "🇪🇺 유럽의 옷장 · 🚛 신속한 물류", desc: "지리적 이점을 활용해 유럽 시장에 유행하는 패션을 가장 빠르게 공급하는 생산 기지." },
                    { name: "이탈리아", examples: ["토스카나(이탈리아)", "명품 가죽·핸드백", "Gucci / Prada"], meta: "🎨 장인 정신 · 👜 고부가가치 가죽", desc: "노동 집약적 산업에 디자인과 장인 정신을 더해 명품 가죽 산업으로 특화." },
                    { name: "에티오피아", examples: ["아와사(에티오피아)", "저가 의류 봉제", "중국 자본 투자"], meta: "🌍 아프리카의 별 · 📉 차세대 저임금", desc: "가장 저렴한 인건비를 찾아 중국 자본이 대거 유입되고 있는 아프리카의 신흥 공장." }
                ]
            },
            {
                title: "전자 조립 (Electronics)", desc: "수만 개의 부품을 조립하는 현대판 경공업",
                items: [
                    { name: "중국 (정저우/선전)", examples: ["정저우(중국)", "아이폰 조립", "Foxconn (홍하이)"], meta: "📱 아이폰 시티 · 🏭 압도적 공급망", desc: "부품 조달부터 최종 조립까지 완벽한 생태계를 갖춘 세계 최대의 전자제품 생산 기지." },
                    { name: "베트남 (박닌/타이응웬)", examples: ["박닌(베트남)", "갤럭시 스마트폰", "Samsung Electronics"], meta: "📈 삼성의 왕국 · 🌏 차세대 거점", desc: "삼성전자 등 글로벌 기업들이 중국을 대체하여 선택한 세계 최대의 스마트폰 생산 허브." },
                    { name: "멕시코 (마킬라도라)", examples: ["티후아나(멕시코)", "TV 및 가전", "Samsung / LG"], meta: "🇺🇸 미국 시장 전초기지 · 🚛 육상 물류", desc: "미국 국경 인근 보세 구역에서 TV와 가전제품을 조립하여 무관세로 수출하는 기지." },
                    { name: "인도 (첸나이/노이다)", examples: ["첸나이(인도)", "스마트폰 조립", "Pegatron / Xiaomi"], meta: "🇮🇳 Make in India · 👥 거대 내수 시장", desc: "거대한 내수 시장과 정부의 제조업 육성 정책으로 급성장하는 전자 조립 기지." },
                    { name: "말레이시아 (페낭)", examples: ["페낭(말레이시아)", "반도체 패키징", "Intel / AMD"], meta: "💾 동남아의 실리콘밸리 · ⚙️ 후공정", desc: "반도체 후공정(패키징) 및 전자 부품 조립 분야에서 오랜 역사를 가진 첨단 기지." }
                ]
            },
            {
                title: "식품 및 자원 가공", desc: "원료 산지에서 부가가치를 더하는 가공 산업",
                items: [
                    { name: "태국", examples: ["촌부리(태국)", "참치 통조림·과일", "Thai Union (세계 1위)"], meta: "🐟 세계의 부엌 · 🍍 열대 과일 가공", desc: "풍부한 농수산 자원을 바탕으로 통조림, 냉동식품 등을 가공하여 전 세계로 수출." },
                    { name: "미국 (중서부)", examples: ["아이오와(미국)", "시리얼·사료·시럽", "Cargill / Kellogg"], meta: "🌽 곡물 가공 메카 · 🏭 바이오 에탄올", desc: "콘벨트의 막대한 곡물을 시리얼, 사료, 시럽, 에탄올로 가공하는 거대 산업 단지." },
                    { name: "스위스", examples: ["브베(스위스)", "초콜릿·커피 가공", "Nestlé (네슬레)"], meta: "🍫 기술 가공의 정점 · ☕ 브랜드 파워", desc: "원료 한 톨 나지 않지만 기술과 브랜드로 세계 시장을 제패한 기호 식품 가공의 본산." },
                    { name: "인도네시아", examples: ["수마트라(인도네시아)", "펄프·제지", "APP (Asia Pulp & Paper)"], meta: "🌲 열대우림 자원 · 📄 펄프/제지", desc: "열대우림의 풍부한 목재 자원을 바탕으로 세계적인 펄프 및 제지 산업 단지 형성." },
                    { name: "베트남 (빈즈엉)", examples: ["빈즈엉(베트남)", "가구 제조", "IKEA Suppliers"], meta: "🪑 가구 수출 대국 · 🌲 목재 가공", desc: "중국을 대체하여 이케아 등 글로벌 가구 브랜드의 목재 가공 및 생산 기지로 부상." }
                ]
            }
        ]
    },
    "industry-3": {
        title: "화학 산업: 정유와 재료",
        subtitle: "석유를 가공하여 모든 것을 만드는 기초 화학 산업",
        badge: "III",
        theme: "#D6A32F",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1"/><circle cx="100" cy="100" r="50" fill="currentColor" opacity="0.2"/><path d="M100,20 V60 M100,140 V180 M20,100 H60 M140,100 H180" stroke="currentColor" stroke-width="8" opacity="0.3"/>`,
        criteria: [
            { icon: "🧪", label: "산업 유형", text: "장치/지식 산업" },
            { icon: "🛢️", label: "주요 원료", text: "원유, 가스, 광물" },
            { icon: "🧬", label: "가치 사슬", text: "기초 소재 ~ 신약" }
        ],
        subCards: [
            {
                title: "석유화학 (Petrochemicals)", desc: "나프타나 가스를 분해하여 문명의 기초 소재를 만드는 대규모 장치 산업",
                criteria: [
                    { icon: "🛢️", label: "원료", text: "나프타, 천연가스" },
                    { icon: "🚩", label: "입지", text: "임해 지역, 가스전" },
                    { icon: "🏭", label: "특징", text: "대규모 장치 산업" },
                    { icon: "🧶", label: "용도", text: "플라스틱, 섬유" }
                ],
                items: [
                    { name: "사우디아라비아", examples: ["주베일(사우디)", "에틸렌·기초유분", "SABIC"], meta: "🏜️ 사막의 산업도시 · 🛢️ 가스 기반 경쟁력", desc: "사막 위에 건설된 세계 최대 규모의 석유화학 산업단지." },
                    { name: "미국 (멕시코만)", examples: ["텍사스·루이지애나", "셰일 기반 화학제품", "ExxonMobil / Dow"], meta: "🦅 셰일 혁명 · 📉 원가 경쟁력 회복", desc: "셰일 혁명으로 부활하여 다시금 세계 화학 산업의 중심으로 부상한 멕시코만 연안." },
                    { name: "대한민국", examples: ["여수·울산", "합성수지·고무", "LG Chem / Lotte"], meta: "🚢 수출 주도형 · 🏭 수직 계열화", desc: "대규모 임해 단지를 통해 수입한 원유로 고부가가치를 창출하는 자원 빈국의 기적." },
                    { name: "독일", examples: ["루트비히스하펜", "종합 화학 단지", "BASF (바스프)"], meta: "🇩🇪 페어분트(Verbund) · 🔬 기술의 본산", desc: "생산 시설과 에너지, 물류가 거미줄처럼 연결된 '페어분트'의 발상지이자 최대 화학 단지." },
                    { name: "중국", examples: ["다롄·닝보", "PTA·폴리에스터", "Hengli (헝리 석유화학)"], meta: "🇨🇳 자급자족 전략 · 👕 섬유 산업 연계", desc: "세계 최대의 의류 및 제조업 시장을 뒷받침하기 위해 민간 주도로 급성장한 거대 석유화학 기지." }
                ]
            },
            {
                title: "정밀화학 및 제약", desc: "기초 화학물을 원료로 생명을 구하는 약과 아름다움을 만드는 고부가가치 산업",
                criteria: [
                    { icon: "💡", label: "핵심", text: "R&D 및 특허" },
                    { icon: "🧠", label: "특징", text: "지식 집약적" },
                    { icon: "💎", label: "가치", text: "초고부가가치" },
                    { icon: "💊", label: "제품", text: "의약품, 화장품" }
                ],
                items: [
                    { name: "스위스", examples: ["바젤(스위스)", "항암제·면역치료제", "Novartis / Roche"], meta: "🇨🇭 라인강 클러스터 · 💊 빅파마 본산", desc: "라인강의 염료 공업에서 시작하여 세계 최고의 제약 및 생명공학 허브로 거듭난 도시." },
                    { name: "미국 (바이오)", examples: ["보스턴·뉴저지", "바이오 의약품·백신", "Pfizer / Moderna"], meta: "🧬 바이오 클러스터 · 🎓 산학 연계", desc: "세계 최고의 대학과 벤처 자본이 결합하여 세계를 선도하는 혁신 클러스터." },
                    { name: "독일", examples: ["레버쿠젠", "아스피린·의약품", "Bayer (바이엘)"], meta: "💊 아스피린의 고향 · 🔬 전통의 강호", desc: "아스피린을 탄생시킨 화학 제국의 본산, 전통적 정밀 화학과 현대 의약품 산업의 강자." },
                    { name: "인도", examples: ["하이데라바드", "제네릭(복제약)·백신", "Dr. Reddy's / Serum Inst."], meta: "🇮🇳 세계의 약국 · 💉 백신 허브", desc: "저렴하고 우수한 제네릭 의약품과 백신을 전 세계 개발도상국에 공급하는 '세계의 약국'." },
                    { name: "프랑스", examples: ["파리·그라스", "화장품·향수 원료", "L'Oréal / LVMH"], meta: "🇫🇷 뷰티 밸리 · 🌸 럭셔리 화학", desc: "화학 기술을 화장품과 향수의 예술로 승화시킨 글로벌 뷰티 산업의 심장." }
                ]
            },
            {
                title: "정유 산업 (Oil Refining)", desc: "원유를 수입하여 휘발유, 경유 등으로 정제하는 에너지 가공 산업",
                criteria: [
                    { icon: "⚙️", label: "기능", text: "원유 정제" },
                    { icon: "⚓", label: "입지", text: "소비지, 중계지" },
                    { icon: "🏗️", label: "특징", text: "규모의 경제" },
                    { icon: "⛽", label: "산출", text: "휘발유, 경유" }
                ],
                items: [
                    { name: "싱가포르", examples: ["주롱 섬", "아시아 오일 허브", "Shell / ExxonMobil"], meta: "⚓ 벙커링 허브 · 🌏 중계 정제", desc: "아시아와 중동의 길목에서 원유를 정제하고 선박 연료를 공급하는 아시아 최대의 오일 허브." },
                    { name: "인도", examples: ["잠나가르", "단일 규모 세계 최대", "Reliance Industries"], meta: "🏭 단일 공장 최대 · 🚢 수출 지향", desc: "인도 거대 내수와 수출을 모두 지향하는 단일 시설 최대 규모의 정유 단지." },
                    { name: "네덜란드", examples: ["로테르담", "유럽의 에너지 관문", "Royal Dutch Shell"], meta: "🇪🇺 ARA 클러스터 · 🚢 라인강 수운", desc: "원유를 정제하여 내륙에 펌프질하는 라인강 하구의 에너지 심장" },
                    { name: "미국", examples: ["휴스턴", "에너지의 수도", "Phillips 66 / Valero"], meta: "🤠 정유 공장 밀집 · 🌪️ 허리케인 리스크", desc: "멕시코만 연안에 밀집한 명실상부한 세계 에너지 산업의 수도." },
                    { name: "대한민국", examples: ["울산·온산", "석유제품 수출", "SK Energy / S-Oil"], meta: "🇰🇷 국가 주력 수출품 · 🏗️ 규모의 경제", desc: "주력 수출품인 석유 화학 제품 생산을 위한 세계적 규모의 기반 산업." }
                ]
            },
            {
                title: "기능성 화학 및 신소재", desc: "특수한 목적을 위해 설계된 화학의 최전선",
                criteria: [
                    { icon: "🔋", label: "에너지", text: "배터리 소재" },
                    { icon: "🌾", label: "농업", text: "비료, 작물보호" },
                    { icon: "♻️", label: "환경", text: "생분해성" },
                    { icon: "🧪", label: "특성", text: "고기능성" }
                ],
                items: [
                    { name: "한·중·일 (배터리 소재)", examples: ["포항·청주(한국)", "양극재·전해질", "EcoPro / CATL"], meta: "⚡ 이차전지 핵심 · 🚗 전기차 밸류체인", desc: "전기차의 심장인 배터리의 핵심 소재를 생산하는 동아시아 클러스터." },
                    { name: "모로코 & 북미 (비료)", examples: ["사하라(모로코)", "인산염·비료", "OCP Group / Mosaic"], meta: "🌾 식량 안보 · ⛏️ 광물 기반 화학", desc: "세계 인구를 먹여 살리는 비료를 공급하는 농화학 기지" },
                    { name: "미국 & 독일 (농생명)", examples: ["세인트루이스(미국)", "종자·작물보호제", "Bayer (몬산토 인수)"], meta: "🧬 유전자 공학 · 🌱 그린 바이오", desc: "화학과 생명 공학을 융합하여 슈퍼 식물과 농약을 개발하는 농업 혁명의 산실" },
                    { name: "유럽 & 북미 (친환경)", examples: ["네덜란드·미국", "바이오 플라스틱", "NatureWorks / Avantium"], meta: "♻️ 탄소 중립 · 🌽 식물성 원료", desc: "생물 소재로 썩는 플라스틱을 만드는 화이트 바이오 산업" }
                ]
            }
        ]
    },
    "industry-4": {
        title: "첨단 산업: IT와 하이테크",
        subtitle: "모래를 뇌로 바꾸고 코드로 세계를 연결하는 지식 기반 산업",
        badge: "IV",
        theme: "#2D98DA",
        iconSVG: `<path d="M100,50 L150,150 L50,150 Z M100,50 C120,30 140,50 150,70" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4" stroke-linecap="round"/><circle cx="100" cy="110" r="20" fill="currentColor" opacity="0.3"/><path d="M60,150 V180 M140,150 V180 M100,150 V180" stroke="currentColor" stroke-width="4" opacity="0.3"/>`,
        criteria: [
            { icon: "💾", label: "하드웨어", text: "반도체, 디스플레이" },
            { icon: "☁️", label: "소프트웨어", text: "플랫폼, AI, 클라우드" },
            { icon: "🔬", label: "핵심", text: "R&D, 지적재산권" }
        ],
        subCards: [
            {
                title: "반도체 (Semiconductors)", desc: "산업의 쌀이자 21세기 패권의 방패",
                criteria: [
                    { icon: "💰", label: "특징", text: "자본 집약적" },
                    { icon: "📏", label: "단위", text: "나노미터(nm)" },
                    { icon: "🛡️", label: "위상", text: "산업의 쌀" },
                    { icon: "🔄", label: "흐름", text: "실리콘 사이클" }
                ],
                items: [
                    { name: "미국 (설계와 원천 기술)", examples: ["실리콘밸리·애리조나", "팹리스·EDA(설계툴)", "NVIDIA / Intel"], meta: "🧠 두뇌 설계 · 🇺🇸 기술 패권", desc: "반도체의 설계도와 원천 기술을 독점하며, 제조 회귀(Reshoring)를 통해 공급망 안보를 강화하는 패권국." },
                    { name: "대만 (제조의 심장)", examples: ["신주·타이난", "파운드리(위탁생산)", "TSMC (세계 1위)"], meta: "🏭 실리콘 방패 · 📉 초미세 공정 독주", desc: "전 세계 첨단 칩 생산을 도맡아, 지정학적 위기 속에서도 국가 안보를 지키는 '실리콘 방패'를 구축." },
                    { name: "대한민국 (메모리 초격차)", examples: ["용인·화성·평택", "DRAM·NAND(메모리)", "Samsung / SK Hynix"], meta: "💾 데이터 저장소 · 🏗️ 세계 최대 클러스터", desc: "세계 데이터 저장 용량의 절반 이상을 책임지며, 메모리 분야에서 압도적인 초격차를 유지하는 반도체 강국." },
                    { name: "네덜란드 & 일본 (슈퍼 을)", examples: ["벨트호벤(ASML)", "도쿄·규슈(소재/장비)", "EUV 노광장비"], meta: "🔬 대체 불가 기술 · ⛓️ 공급망의 병목", desc: "미세 공정에 필수적인 노광 장비(ASML)와 고순도 소재(일본)를 독점하여 전체 공급망의 목줄을 쥔 '슈퍼 을'." },
                    { name: "중국 (거대한 도전자)", examples: ["상하이·우한", "레거시 공정·메모리", "SMIC / YMTC"], meta: "🇨🇳 반도체 굴기 · 🚫 기술 제재 돌파", desc: "미국의 제재 속에서도 막대한 자본과 내수 시장을 바탕으로 레거시(구형) 공정부터 기술 자립을 시도하는 도전자." }
                ]
            },
            {
                title: "소프트웨어 & 플랫폼", desc: "국경 없는 디지털 영토를 지배하는 무형의 권력",
                criteria: [
                    { icon: "☁️", label: "기반", text: "클라우드/네트워크" },
                    { icon: "♾️", label: "특징", text: "무한 복제/확장" },
                    { icon: "👑", label: "구조", text: "승자 독식" },
                    { icon: "🤖", label: "미래", text: "인공지능(AI)" }
                ],
                items: [
                    { name: "미국 (빅테크 제국)", examples: ["실리콘밸리·시애틀", "OS·검색·SNS·AI", "Google / Microsoft"], meta: "🇺🇸 디지털 패권 · ☁️ 글로벌 표준", desc: "전 세계의 OS, 검색, SNS를 장악하고 AI 기술을 선도하며 디지털 세계의 표준을 만드는 제국." },
                    { name: "중국 (독자 생태계)", examples: ["베이징·항저우", "이커머스·슈퍼앱", "Alibaba / Tencent"], meta: "🇨🇳 만리방화벽 · 📱 내수 중심 슈퍼앱", desc: "만리방화벽 내부의 거대한 내수 시장을 바탕으로, 메신저 하나로 모든 생활이 가능한 독자적 생태계 구축." },
                    { name: "인도 (IT의 심장)", examples: ["방갈로르·하이데라바드", "SI·아웃소싱·스타트업", "Infosys / Tata"], meta: "🇮🇳 세계의 백오피스 · 🦄 유니콘 산실", desc: "글로벌 기업의 IT 시스템을 관리하는 백오피스에서 시작하여, 이제는 수많은 유니콘 기업을 배출하는 혁신 허브." },
                    { name: "유럽 (특화 유니콘)", examples: ["런던·스톡홀름·탈린", "핀테크·스트리밍", "Spotify / Revolut"], meta: "🇪🇺 강소 소프트웨어 · 🎵 틈새 시장 장악", desc: "미국의 플랫폼 독점 속에서도 핀테크, 음원 스트리밍 등 특화된 분야에서 글로벌 표준을 만든 강소 기업들." },
                    { name: "이스라엘 (창업 국가)", examples: ["텔아비브(실리콘 와디)", "사이버 보안·AI", "Check Point / Mobileye"], meta: "🛡️ 군사 기술 민간화 · 💡 엑시트(Exit) 전략", desc: "군사 정보 부대의 엘리트 기술을 민간으로 이전하여 사이버 보안과 자율주행 등 딥테크 분야를 선도." }
                ]
            },
            {
                title: "디스플레이 & 전자 부품", desc: "디지털 세상과 인간을 연결하는 인터페이스",
                criteria: [
                    { icon: "📺", label: "제품", text: "패널, 센서, 렌즈" },
                    { icon: "⚔️", label: "구도", text: "한·중·일 삼국지" },
                    { icon: "🔬", label: "기술", text: "초정밀/소형화" },
                    { icon: "📱", label: "용도", text: "스마트폰/전장" }
                ],
                items: [
                    { name: "대한민국 (디스플레이 종주국)", examples: ["파주·아산", "OLED·차세대 패널", "LG Display / Samsung"], meta: "🇰🇷 압도적 기술력 · ✨ 자발광 디스플레이", desc: "LCD 시장을 중국에 넘겨준 뒤, 기술 난이도가 높은 OLED 분야에서 독보적인 초격차를 유지하는 디스플레이 강국." },
                    { name: "중국 (물량과 추격)", examples: ["허페이·선전", "LCD·OLED 추격", "BOE / CSOT"], meta: "🇨🇳 정부 보조금 · 📉 가격 경쟁력", desc: "정부의 막대한 보조금을 등에 업고 LCD 시장을 평정한 뒤, OLED 시장까지 무섭게 추격하는 거대한 물량 공세." },
                    { name: "일본 (소재·부품의 장인)", examples: ["교토·오사카", "MLCC·이미지센서", "Murata / Sony"], meta: "🇯🇵 대체 불가 부품 · 📸 초정밀 센서", desc: "전자기기의 쌀이라 불리는 MLCC와 카메라의 눈인 이미지 센서 등, 완제품보다 더 중요한 핵심 부품을 독점." },
                    { name: "대만 (IT 하드웨어 생태계)", examples: ["타오위안·타이중", "광학 렌즈·메인보드", "Largan / Foxconn"], meta: "🇹🇼 정밀 광학 · 💻 PC/모바일 뼈대", desc: "스마트폰 카메라 렌즈부터 PC 메인보드까지, 전 세계 IT 기기의 뼈대와 눈을 공급하는 탄탄한 부품 생태계." }
                ]
            }
        ]
    },
    "industry-5": {
        title: "고가치 제조업: 정밀과 감성",
        subtitle: "장인 정신과 첨단 기술로 물질을 예술과 안보로 승화하다",
        badge: "V",
        theme: "#6c5ce7",
        iconSVG: `<rect x="50" y="50" width="100" height="100" fill="currentColor" opacity="0.1"/><path d="M100,50 L100,150 M50,100 H150" stroke="currentColor" stroke-width="4" opacity="0.3"/><circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "💎", label: "명품", text: "브랜드, 헤리티지" },
            { icon: "🔭", label: "정밀", text: "광학, 의료기기" },
            { icon: "🛡️", label: "방산", text: "국가 안보, 항공" }
        ],
        subCards: [
            {
                title: "명품 및 패션", desc: "장인 정신과 브랜드 헤리티지로 물질을 예술의 경지로 끌어올린 제조업의 정점",
                items: [
                    { name: "프랑스 (절대적 럭셔리)", examples: ["파리(프랑스)", "오트 쿠튀르·가죽", "LVMH / Hermès"], meta: "🇫🇷 패션의 제국 · 👑 왕실 납품 전통", desc: "루이 14세 시절부터 이어진 왕실 납품 전통을 현대적 비즈니스 모델로 완성한 명품 산업의 절대 군주." },
                    { name: "이탈리아 (장인과 디자인)", examples: ["밀라노·피렌체", "가죽 공예·수트", "Gucci / Prada"], meta: "🇮🇹 마에스트로 · 🎨 디자인과 소재", desc: "르네상스의 예술적 감각과 가문 대대로 내려오는 가죽 장인들의 기술이 결합하여 탄생한 디자인 강국." },
                    { name: "스위스 (시간의 예술)", examples: ["제네바·쥐라 산맥", "기계식 시계", "Rolex / Patek Philippe"], meta: "🇨🇭 초정밀 공학 · ⏳ 영원한 가치", desc: "춥고 긴 겨울 동안 산속에 고립되어 부품 하나하나를 깎아 만들던 정밀 공업이 세계 최고의 시계 산업으로 진화." },
                    { name: "영국 (전통과 클래식)", examples: ["런던(새빌 로)", "맞춤 정장(Bespoke)", "Burberry / Dunhill"], meta: "🇬🇧 신사의 품격 · 🧥 클래식의 원형", desc: "'신사의 나라'라는 이미지와 함께 트렌치코트, 맞춤 정장 등 남성 패션의 클래식한 원형을 제시." }
                ]
            },
            {
                title: "정밀 광학 및 의료 기기", desc: "빛을 제어하는 광학 기술과 생명을 다루는 의공학이 결합된 초정밀 산업",
                items: [
                    { name: "독일 (광학의 본산)", examples: ["예나·오버코헨", "렌즈·현미경·내시경", "Zeiss / Leica"], meta: "🇩🇪 광학의 아버지 · 🔭 기초 과학의 힘", desc: "19세기부터 축적된 광학 이론과 유리 가공 기술을 바탕으로 세계 최고의 렌즈와 현미경을 생산하는 광학의 종주국." },
                    { name: "일본 (영상과 내시경)", examples: ["도쿄·교토", "내시경·카메라·MRI", "Olympus / Canon"], meta: "🇯🇵 소화기 내시경 독점 · 📸 이미징 기술", desc: "카메라 기술을 의료 기기에 접목하여 전 세계 소화기 내시경 시장을 사실상 독점하고 있는 정밀 기기의 강자." },
                    { name: "미국 (첨단 의료 장비)", examples: ["보스턴·미네소타", "MRI·CT·수술 로봇", "GE Healthcare / Intuitive"], meta: "🇺🇸 의료 혁신 · 🤖 다빈치 로봇", desc: "막대한 의료비 지출과 R&D 투자를 바탕으로 MRI, CT, 수술 로봇 등 고가 첨단 의료 장비 시장을 선도." },
                    { name: "네덜란드 (헬스케어 거인)", examples: ["아인트호벤", "영상 진단·헬스케어", "Philips (필립스)"], meta: "🇳🇱 가전에서 의료로 · 🏥 헬스케어 전환", desc: "조명과 가전 회사에서 출발하여 과감한 사업 재편을 통해 세계적인 헬스케어 전문 기업으로 변신한 혁신 사례." }
                ]
            },
            {
                title: "방위 산업 (Defense)", desc: "국가 안보를 지키는 창과 방패. 기계 공학의 정점이자 최첨단 과학 기술의 집약체",
                items: [
                    { name: "미국 (압도적 패권)", examples: ["워싱턴 D.C.·텍사스", "전투기·미사일·항모", "Lockheed Martin / RTX"], meta: "🇺🇸 세계 최강 · 🛸 외계인 고문 기술", desc: "전 세계 국방비의 40%를 쓰며, 스텔스기와 미사일 방어 체계 등 타의 추종을 불허하는 압도적 기술력을 보유." },
                    { name: "러시아 (전통의 강호)", examples: ["모스크바·우랄", "전투기·방공망·전차", "Sukhoi / Almaz-Antey"], meta: "🇷🇺 가성비와 내구성 · 🚀 미사일 강국", desc: "구소련의 유산을 계승하여 서방 무기 체계에 대항하는 강력하고 거친 무기들을 독자적으로 개발 및 수출." },
                    { name: "프랑스 (독자 노선)", examples: ["파리·보르도", "라팔 전투기·잠수함", "Dassault / Thales"], meta: "🇫🇷 자주 국방의 상징 · ✈️ 항공 우주 강국", desc: "미국과 러시아 사이에서 독자적인 무기 체계와 항공 우주 기술을 유지하며 제3세계에 대안을 제시하는 유럽의 맹주." },
                    { name: "대한민국 (K-방산)", examples: ["창원·사천", "자주포·전차·경공격기", "Hanwha / KAI"], meta: "🇰🇷 신속한 납기 · 🏭 대량 생산 능력", desc: "휴전 국가의 특수성을 바탕으로 서방 표준 무기를 신속하고 저렴하게 대량 생산하여 세계 방산 시장의 신흥 강자로 부상." }
                ]
            }
        ]
    }
};

// [신규] 도시 데이터 (HTML/CSS 통합본)
const cityData = {
    "city-1": {
        title: "<span class=\"geo-badge\">계층</span>글로벌 세계 도시",
        subtitle: "세계를 지휘하고 연결하는 문명의 사령탑",
        badge: "I",
        theme: "#3c40c6",
        iconSVG: `<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "🌐", label: "핵심 기능", text: "자본/정보의 결절" },
            { icon: "📈", label: "영향력", text: "초국경적 지배력" },
            { icon: "✈️", label: "연결성", text: "허브 공항/항만" }
        ],
        subCards: [
            {
                title: "최상위 지휘 본부", desc: "세계 경제와 자본을 지휘하는 3대 핵심 도시",
                items: [
                    { name: "뉴욕", examples: ["월스트리트·브로드웨이", "세계 금융·문화 수도", "UN 본부"], meta: "🇺🇸 자본과 예술의 심장 · 🏛️ 제국의 수도", desc: "세계 금융을 지배하는 월스트리트와 문화의 정점 브로드웨이가 공존하는 명실상부한 세계의 수도." },
                    { name: "런던", examples: ["더 시티·웨스트엔드", "금융·뮤지컬·축구", "GMT 표준시"], meta: "🇬🇧 전통과 현대의 조화 · 💷 외환 시장 1위", desc: "세계 외환 시장을 움직이는 '더 시티'와 팝 컬처의 발신지가 템스강을 사이에 두고 공존하는 도시." },
                    { name: "도쿄", examples: ["마루노우치·아키하바라", "거대 자본·서브컬처", "세계 최대 광역권"], meta: "🇯🇵 경제와 매력의 공존 · 🏙️ 3,700만 메가시티", desc: "세계적인 금융 지구와 독보적인 서브컬처 성지가 결합된, 인류 역사상 가장 거대한 광역 도시권." }
                ]
            },
            {
                title: "국제 금융 및 비즈니스 허브", desc: "자본의 흐름을 중개하고 다국적 기업이 집결하는 지역 거점",
                items: [
                    { name: "홍콩", examples: ["센트럴", "아시아 금융 허브", "중국과 세계의 관문"], meta: "🇭🇰 동양의 진주 · 🌉 슈퍼 커넥터", desc: "중국과 세계를 잇는 금융의 관문이자, 자유로운 자본 이동이 보장되는 아시아의 월스트리트." },
                    { name: "상하이", examples: ["푸동(루자쭈이)", "중국 금융 중심", "상하이 타워"], meta: "🇨🇳 아시아의 용 · 📈 폭발적 성장", desc: "황푸강 건너편 늪지대에서 아시아의 금융 중심지로 솟아오른, 중국 경제 성장의 상징." },
                    { name: "프랑크푸르트", examples: ["뱅크비어텔", "유럽중앙은행(ECB)", "유로화의 심장"], meta: "🇪🇺 유럽의 맨해튼 · 💶 유로존 통화 정책", desc: "브렉시트 이후 유럽 대륙의 금융 패권을 쥐고 있는, 유로화와 유럽 경제의 심장부." },
                    { name: "취리히", examples: ["반호프거리", "프라이빗 뱅킹(PB)", "비밀주의"], meta: "🇨🇭 부의 안식처 · 🔒 절대적 신용", desc: "알프스의 요새 속에 전 세계의 부를 안전하게 보관하는 프라이빗 뱅킹의 본산." }
                ]
            },
            {
                title: "글로벌 대중문화의 수도", desc: "영화, 음악, 패션 등 소프트 파워를 전 세계로 송출하는 발신지",
                items: [
                    { name: "할리우드 (로스앤젤레스)", examples: ["할리우드", "영화·엔터테인먼트", "Disney / Netflix"], meta: "🇺🇸 꿈의 공장 · 🎥 글로벌 표준", desc: "전 세계인의 무의식을 지배하는 영화와 엔터테인먼트 산업의 절대적 표준이자 꿈의 공장." },
                    { name: "강남·홍대 (서울)", examples: ["강남·홍대", "K-POP·드라마", "HYBE / CJ ENM"], meta: "🇰🇷 트렌드 세터 · ✨ 역동적 팬덤", desc: "아시아를 넘어 전 세계 주류 문화를 위협하며 가장 역동적인 팬덤을 만들어내는 문화 용광로." },
                    { name: "아키하바라 (도쿄)", examples: ["아키하바라", "애니메이션·게임·굿즈", "Nintendo / Shueisha"], meta: "🇯🇵 서브컬처의 성지 · 👾 마니아 문화(Otaku)", desc: "주류 문화와는 다른 결의 애니메이션과 게임으로 전 세계 마니아층을 열광시키는 독보적인 서브컬처 제국." },
                    { name: "볼리우드 (뭄바이)", examples: ["볼리우드(뭄바이)", "마살라 영화·음악", "14억 내수 시장"], meta: "🇮🇳 인도의 꿈 · 💃 압도적 생산량", desc: "할리우드보다 많은 영화를 제작하며 14억 인구의 희로애락을 책임지는 거대한 영화 제국." },
                    { name: "소칼로·폴랑코 (멕시코시티)", examples: ["소칼로·폴랑코", "텔레노벨라·라틴팝", "Televisa / 스페인어권"], meta: "🇲🇽 스페인어권 중심 · 📺 드라마 수출 강국", desc: "전 세계로 수출되는 드라마 '텔레노벨라'와 라틴 팝을 생산하며 5억 스페인어권 대중문화를 선도하는 거대 도시." },
                    { name: "샹젤리제·마레 (파리)", examples: ["샹젤리제·마레", "패션·미식·예술", "LVMH / Michelin Guide"], meta: "🇫🇷 라이프스타일 산업 · ✨ 취향의 기준점", desc: "단순한 의식주를 넘어 패션, 미식, 예술 등 인간의 취향을 정의하고 이를 고부가가치 산업으로 만든 감성의 수도." },
                    { name: "웨스트엔드·소호 (런던)", examples: ["웨스트엔드·소호", "팝 음악·뮤지컬·IP", "BBC / Harry Potter"], meta: "🇬🇧 팝의 종주국 · 🎭 공연 예술의 중심", desc: "비틀즈부터 해리포터까지, 시대를 초월하는 IP를 창조하고 세계 대중음악과 공연 예술의 흐름을 주도하는 문화 발전소." }
                ]
            },
            {
                title: "국제 정치와 외교의 수도", desc: "국제기구와 외교 공관이 밀집하여 세계의 규칙을 정하는 곳",
                items: [
                    { name: "워싱턴 D.C.", examples: ["백악관", "펜타곤", "IMF", "세계은행"], meta: "🇺🇸 세계 권력의 정점 · 🏛️ 국제 질서 설계", desc: "백악관과 펜타곤, 국제 금융 기구가 밀집하여 전 세계의 질서와 안보를 설계하는 권력의 정점." },
                    { name: "브뤼셀", examples: ["EU 본부", "NATO 본부", "그랑플라스"], meta: "🇪🇺 유럽 통합의 상징 · 🛡️ 서방 안보 동맹", desc: "EU와 NATO 본부가 위치하여 유럽의 정치적 통합과 서방 세계의 안보를 조율하는 행정 수도." },
                    { name: "제네바", examples: ["UN 유럽 본부", "적십자", "WHO", "레만호"], meta: "🇨🇭 인도주의 성지 · 🕊️ 분쟁의 중재자", desc: "전쟁과 갈등 속에서도 인권과 평화를 논의하는 중립과 인도주의의 성지." }
                ]
            },
            {
                title: "물류와 교통의 결절점", desc: "사람과 화물이 교차하는 거대 공항과 항만 도시",
                items: [
                    { name: "싱가포르", examples: ["창이 공항·항만", "말라카 해협", "세계 1위 환적항"], meta: "🇸🇬 아시아의 허브 · 🚢 동서양의 길목", desc: "동서양 바닷길의 길목을 장악하여 사람과 화물, 자본이 교차하는 세계 최고의 물류 허브." },
                    { name: "두바이", examples: ["에미레이트 항공", "제벨 알리 항", "사막의 기적"], meta: "🇦🇪 중동의 허브 · ✈️ 항공/해운 연결", desc: "유럽-아시아-아프리카의 정중앙에서 항공과 해운을 잇는, 사막 위에 세워진 기적의 도시." },
                    { name: "로테르담", examples: ["유로포트", "라인강 하구", "유럽의 관문"], meta: "🇳🇱 라인강 수운 · 🏭 배후 산업 단지", desc: "라인강 수운과 북해를 연결하여 유럽 내륙으로 통하는 거대한 관문이자 에너지 클러스터." },
                    { name: "인천 & 부산", examples: ["인천국제공항", "부산항", "환적 허브", "동북아 허브"], meta: "🇰🇷 동북아의 날개와 닻 · 📦 세계적 물류 경쟁력", desc: "세계 최고 수준의 공항과 항만으로 태평양과 유라시아 대륙을 잇는 동북아시아의 물류 심장." }
                ]
            }
        ]
    },
    "city-2": {
        title: "<span class=\"geo-badge\">구조</span>도시의 내외부 체계",
        subtitle: "도심에서 메갈로폴리스까지, 유기적으로 연결된 공간",
        badge: "II",
        theme: "#0fb9b1",
        iconSVG: `<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "🏙️", label: "내부 구조", text: "동심원/선형/다핵" },
            { icon: "🚗", label: "교외화", text: "스프롤 현상" },
            { icon: "🔗", label: "광역화", text: "메갈로폴리스" }
        ],
        subCards: [
            {
                title: "도심 (CBD): 도시의 심장", desc: "접근성과 지대가 가장 높아 마천루가 밀집하고, 도시의 역사와 경제를 상징하는 공간",
                items: [
                    { name: "맨해튼 미드타운", examples: ["엠파이어 스테이트", "타임스퀘어", "브로드웨이", "센트럴파크"], meta: "🇺🇸 마천루의 숲 · 💰 세계 최고 지대", desc: "화강암 암반 위에 솟아오른 마천루의 숲이자 자본주의의 심장" },
                    { name: "더 시티 (런던)", examples: ["세인트 폴 대성당", "잉글랜드 은행", "로이드 빌딩"], meta: "🇬🇧 역사적 중심 · 🏦 금융 특화", desc: "로마의 성벽 안에서 시작되어 세계 금융을 지배하는 1평방마일" },
                    { name: "마루노우치 (도쿄)", examples: ["도쿄역", "황궁", "미쓰비시 본사", "오테마치"], meta: "🇯🇵 경제 사령탑 · 🏢 본사 집중", desc: "황궁의 해자를 마주하며 일본 주식회사를 이끄는 경제 사령탑" }
                ]
            },
            {
                title: "부도심: 새로운 성장 거점", desc: "도심의 과밀을 해소하고 기능을 분담하기 위해 교통 요지나 계획 지구에 형성된 제2의 핵",
                items: [
                    { name: "강남 (서울)", examples: ["테헤란로", "삼성동 코엑스", "가로수길", "압구정"], meta: "🇰🇷 계획 도시 · ✨ 글로벌 트렌드", desc: "한강의 구하도에서 글로벌 서울의 문화 중심으로" },
                    { name: "라데팡스 (파리)", examples: ["신개선문", "CNIT", "지하 교통망"], meta: "🇫🇷 역사 보존 · 🏢 초현대식 업무", desc: "파리의 스카이라인을 지키기 위해 외곽에 세운 21세기의 개선문" },
                    { name: "카나리 워프 (런던)", examples: ["원 카나다 스퀘어", "도크랜드 경전철", "HSBC 본사"], meta: "🇬🇧 도시 재생 · 🏗️ 수변 재개발", desc: "템스강의 쇠락한 부두에서 유럽 금융의 허브로 부활한 불사조" },
                    { name: "푸동 (상하이)", examples: ["동방명주", "상하이 타워", "루자쭈이"], meta: "🇨🇳 개혁 개방 · 🐉 금융 허브", desc: "황푸강 건너편 늪지대에서 아시아의 금융 중심지로 솟아오른 용" }
                ]
            },
            {
                title: "교외화와 에지 시티", desc: "도시가 팽창하며 주거지가 확산되고, 교외가 자족 기능을 갖추는 과정",
                items: [
                    { name: "오렌지 카운티", examples: ["오렌지 카운티", "고속도로망", "저밀도 주택"], meta: "🇺🇸 자동차 의존 · 🏡 스프롤 현상", desc: "고속도로를 따라 끝없이 펼쳐진 저밀도 주거지의 바다" },
                    { name: "에지 시티 (타이슨스)", examples: ["쇼핑몰", "오피스 파크", "워싱턴 D.C. 교외"], meta: "🇺🇸 교외의 중심화 · 🛍️ 직주근접", desc: "워싱턴의 베드타운에서 쇼핑몰과 오피스가 결합된 자족 도시로" },
                    { name: "판교 테크노밸리", examples: ["NC소프트", "카카오", "네이버", "신분당선"], meta: "🇰🇷 한국형 에지시티 · 💻 IT 클러스터", desc: "서울의 위성도시에서 한국의 실리콘밸리로 진화한 혁신 클러스터" }
                ]
            },
            {
                title: "메갈로폴리스", desc: "거대 도시들이 교통망으로 연결되어 하나의 유기체처럼 기능하는 거대 도시군",
                items: [
                    { name: "보스워시 (BosWash)", examples: ["보스턴", "뉴욕", "필라델피아", "워싱턴 D.C."], meta: "🇺🇸 세계 최초 · 🚄 암트랙 연결", desc: "보스턴에서 워싱턴까지, 밤에도 불이 꺼지지 않는 거대한 빛의 띠" },
                    { name: "도카이도 (일본)", examples: ["도쿄", "요코하마", "나고야", "오사카", "고베"], meta: "🇯🇵 산업 대동맥 · 🚄 신칸센", desc: "신칸센이 실어 나르는 인구와 산업, 일본 열도의 척추" },
                    { name: "블루 바나나 (유럽)", examples: ["런던", "암스테르담", "프랑크푸르트", "밀라노"], meta: "🇪🇺 유럽의 척추 · 🍌 인구/산업 밀집", desc: "런던에서 밀라노까지, 유럽의 부와 인구가 집중된 푸른 회랑" }
                ]
            }
        ]
    },
    "city-3": {
        title: "<span class=\"geo-badge\">사회</span>도시와 인간",
        subtitle: "번영의 그늘, 불평등과 공간의 정치학",
        badge: "III",
        theme: "#ff5e57",
        iconSVG: `<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "☕", label: "계층 변화", text: "젠트리피케이션" },
            { icon: "🏚️", label: "주거 빈곤", text: "슬럼과 게토" },
            { icon: "⚖️", label: "국토 불균형", text: "종주 도시화" }
        ],
        subCards: [
            {
                title: "젠트리피케이션", desc: "낙후된 지역에 자본과 중산층이 유입되면서 원주민이 밀려나는 도시의 역설",
                items: [
                    { name: "파리 몽마르트르", examples: ["오스만 파리 개조", "인상파", "보헤미안"], meta: "🇫🇷 원형적 사례 · 🎨 예술가 이주", desc: "19세기 파리 대개조로 도심에서 밀려난 예술가들이 언덕 위에 피워낸 보헤미안의 성지" },
                    { name: "브루클린 윌리엄스버그", examples: ["힙스터", "임대료 폭등", "예술가 아지트"], meta: "🇺🇸 교과서적 사례 · 💰 자본 유입", desc: "가난한 예술가의 아지트에서 힙스터와 거대 자본의 성지로 변모한 젠트리피케이션의 교과서" },
                    { name: "런던 쇼디치", examples: ["테크 시티", "도시 재생", "갤러리"], meta: "🇬🇧 산업 유산 재생 · 🏭 공장 변신", desc: "런던 동부의 낙후된 공장 지대가 스타트업과 갤러리의 거리로 부활하며 지가가 폭등한 현장" },
                    { name: "서울 성수동", examples: ["붉은 벽돌 공장", "팝업 스토어", "수제화 거리"], meta: "🇰🇷 한국형 젠트리피케이션 · ✨ 핫플레이스", desc: "낡은 공장과 수제화 거리가 팝업 스토어와 명품 브랜드의 격전지로 변한 한국형 젠트리피케이션" },
                    { name: "뉴욕 하이라인 파크", examples: ["공중 정원", "하이라인 효과", "첼시"], meta: "🇺🇸 녹색 젠트리피케이션 · 🌿 공원 조성", desc: "버려진 철도를 공원으로 재생했으나, 주변 집값을 폭등시켜 원주민을 내몬 녹색 개발의 역설" },
                    { name: "베네치아", examples: ["투어리스티피케이션", "오버투어리즘", "인구 유출"], meta: "🇮🇹 관광의 습격 · 🚫 정주권 침해", desc: "몰려드는 관광객에 밀려 주민이 떠나고 도시 전체가 테마파크화 된 물의 도시" }
                ]
            },
            {
                title: "슬럼 (Slum): 도시의 그림자", desc: "급격한 이촌향도로 도시 기반 시설이 인구를 감당하지 못해 형성된 거대 빈민가",
                items: [
                    { name: "다라비 (Dharavi)", examples: ["뭄바이", "슬럼독 밀리어네어", "재활용 산업"], meta: "🇮🇳 아시아 최대 슬럼 · ♻️ 재활용 경제", desc: "뭄바이의 심장부에서 100만 명이 거주하며 거대한 재활용 경제를 돌리는 삶의 터전" },
                    { name: "파벨라 (Favela)", examples: ["리우데자네이루", "산동네", "빈부 격차"], meta: "🇧🇷 산동네 빈민가 · 🔫 마약과 삼바", desc: "리우의 화려한 해변 뒤편, 가파른 언덕을 뒤덮은 무허가 벽돌집들의 붉은 바다" },
                    { name: "키베라 (Kibera)", examples: ["나이로비", "양철 지붕", "절대 빈곤"], meta: "🇰🇪 아프리카 최대 · 🏚️ 양철 지붕", desc: "나이로비 외곽에 끝없이 펼쳐진 녹슨 양철 지붕의 물결이자 아프리카 도시화의 그늘" },
                    { name: "톤도 (Tondo)", examples: ["마닐라", "스모키 마운틴", "쓰레기 매립지"], meta: "🇵🇭 스모키 마운틴 · 🗑️ 쓰레기 매립지", desc: "쓰레기 매립지 위에 형성된 마을. 빈곤과 오염 속에서도 끈질기게 이어지는 삶의 현장" }
                ]
            },
            {
                title: "게토 (Ghetto): 격리된 섬", desc: "특정 인종이나 계층이 사회적 차별과 정책에 의해 분리되어 거주하는 지역",
                items: [
                    { name: "할렘 (Harlem)", examples: ["뉴욕", "흑인 문화", "재즈", "소울"], meta: "🇺🇸 흑인 문화 수도 · 🎷 재즈와 소울", desc: "20세기 흑인 문화의 르네상스를 꽃피운 곳이자, 인종 차별과 빈곤이 응축되었던 상징적 공간" },
                    { name: "방리유 (Banlieue)", examples: ["파리 외곽", "이민자", "소외", "갈등"], meta: "🇫🇷 이민자 거주구 · 🚧 소외와 갈등", desc: "화려한 파리의 외곽에 격리된 이민자들의 거주지. 빛이 닿지 않는 소외와 갈등의 공간" },
                    { name: "베네치아 게토", examples: ["유대인 격리", "게토의 어원", "역사적 장소"], meta: "🇮🇹 게토의 어원 · ✡️ 유대인 격리", desc: "16세기 유대인을 격리하기 위해 만든 세계 최초의 게토. '게토'라는 단어의 기원이 된 역사적 장소" },
                    { name: "구룡성채", examples: ["홍콩", "무법 지대", "고밀도", "사이버펑크"], meta: "🇭🇰 무법 지대 · 🏙️ 초고밀도 미로", desc: "영국과 중국의 주권이 닿지 않는 틈새에서 자생적으로 성장했던 전설적인 무정부 도시" }
                ]
            },
            {
                title: "과도시화와 종주 도시", desc: "국토의 불균형 발전과 급격한 인구 유입으로 거대해진 개발도상국의 메가시티",
                items: [
                    { name: "방콕 (Bangkok)", examples: ["태국", "종주 도시화", "교통 체증"], meta: "🇹🇭 종주 도시화 1위 · 🏙️ 압도적 집중", desc: "가장 극단적인 종주 도시의 사례" },
                    { name: "멕시코시티", examples: ["멕시코", "분지 지형", "스모그", "지반 침하"], meta: "🇲🇽 고원 위의 거인 · 🌫️ 스모그와 침하", desc: "스모그와 지반 침하에 신음하는 호수 분지에 지어진 라틴 아메리카의 심장" },
                    { name: "카이로 (Cairo)", examples: ["이집트", "나일강", "인구 과밀", "죽은 자들의 도시"], meta: "🇪🇬 나일강의 과밀 · 🏜️ 사막 속 인구 폭발", desc: "사막의 낙원을 찾아 모인 이들이 공동묘지까지 거주하는 밀집구역" },
                    { name: "라고스 (Lagos)", examples: ["나이지리아", "가도시화", "인구 폭발"], meta: "🇳🇬 아프리카 최대 · 📈 폭발적 성장", desc: "산업 기반 없이 인구만 폭증하는 가도시화의 전형이 된 메가시티" },
                    { name: "자카르타 (Jakarta)", examples: ["인도네시아", "지반 침하", "수도 이전"], meta: "🇮🇩 가라앉는 수도 · 🌊 수도 이전 결정", desc: "기후변화와 지하수 고갈로 지반이 침하되어 이전하게 된 비운의 수도" }
                ]
            }
        ]
    },
    "city-4": {
        title: "<span class=\"geo-badge\">산업</span>글로벌 산업 클러스터",
        subtitle: "자원과 운송, 지식이 빚어낸 세계의 생산 거점",
        badge: "IV",
        theme: "#6c5ce7",
        iconSVG: `<path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "⛏️", label: "전통 입지", text: "원료 산지 지향" },
            { icon: "🚢", label: "임해 입지", text: "적환지 지향" },
            { icon: "💡", label: "첨단 입지", text: "지식/환경 지향" }
        ],
        subCards: [
            {
                title: "전통적 공업 지대", desc: "석탄과 철광석 산지를 중심으로 산업혁명을 이끌었으나, 현재는 쇠퇴하거나 재구조화 중인 지역",
                items: [
                    { name: "루르 공업지대", examples: ["에센", "뒤스부르크", "졸페라인 탄광"], meta: "🇩🇪 라인강의 기적 · 🏭 산업 유산 관광", desc: "문화와 친환경 산업으로 변신 중인 옛 유럽의 최대 공업 지대" },
                    { name: "맨체스터 & 리버풀", examples: ["면방직 공업", "산업혁명 박물관", "도시 재생"], meta: "🇬🇧 산업혁명 발상지 · 🏗️ 도시 재생", desc: "산업혁명의 발상지. 면방직 공업의 중심에서 현대적 도시 재생의 모델로" },
                    { name: "러스트 벨트", examples: ["피츠버그(철강)", "디트로이트(자동차)", "클리블랜드"], meta: "🇺🇸 제조업의 영광 · 📉 탈공업화", desc: "미국 제조업의 영광과 쇠락을 상징하는 오대호 연안" },
                    { name: "빌바오 (스페인)", examples: ["구겐하임 미술관", "철강 도시", "바스크"], meta: "🇪🇸 빌바오 효과 · 🎨 문화 도시", desc: "쇠퇴한 철강 도시에서 구겐하임 미술관을 유치하여 문화 도시로 부활한 현장" }
                ]
            },
            {
                title: "신흥 임해 공업 지역", desc: "원료 수입과 제품 수출에 유리한 해안가에 대규모 장치 산업이 집적된 곳",
                items: [
                    { name: "태평양 벨트 (일본)", examples: ["도쿄-요코하마", "나고야", "오사카-고베"], meta: "🇯🇵 세계 최대 공업지대 · 🚢 임해 입지", desc: "도쿄-나고야-오사카를 잇는 세계 최대의 임해 공업 지대" },
                    { name: "울산 & 포항 (한국)", examples: ["현대자동차", "현대중공업", "POSCO", "석유화학단지"], meta: "🇰🇷 중화학 공업 · 🏭 집적 이익", desc: "갯벌과 어촌을 메워 세계적인 자동차, 조선, 제철 단지를 건설한 기적의 현장" },
                    { name: "유로포트 (네덜란드)", examples: ["로테르담", "정유 공장", "석유 화학"], meta: "🇳🇱 유럽의 관문 · 🛢️ 석유 화학", desc: "라인강 하구 로테르담에 위치한 유럽 최대의 정유 및 화학 콤비나트" },
                    { name: "미들즈브러 (영국)", examples: ["북해 유전", "티사이드", "화학 단지"], meta: "🇬🇧 산업 구조 전환 · 🧪 석유 화학", desc: "북해 유전을 바탕으로 쇠락하던 철강 도시에서 석유 화학 단지로 변모" }
                ]
            },
            {
                title: "첨단 산업 클러스터", desc: "대학, 연구소, 쾌적한 환경이 결합되어 지식과 혁신을 창출하는 미래 산업의 요람",
                items: [
                    { name: "실리콘밸리 (미국)", examples: ["스탠퍼드 대학", "애플", "구글", "산타클라라"], meta: "🇺🇸 혁신의 대명사 · 💻 IT/벤처", desc: "스탠퍼드 대학과 벤처 자본이 만나 IT 혁명을 주도한 전 세계 혁신의 대명사" },
                    { name: "소피아 앙티폴리스", examples: ["니스 인근", "지중해성 기후", "과학 기술 단지"], meta: "🇫🇷 유럽의 실리콘밸리 · ☀️ 쾌적한 환경", desc: "쾌적한 지중해에 조성된 유럽 최초, 최대의 과학 기술 단지" },
                    { name: "제3이탈리아", examples: ["볼로냐", "피렌체", "장인 정신", "명품 산업"], meta: "🇮🇹 유연적 전문화 · 👗 디자인/패션", desc: "중소기업들의 장인 정신 네트워크가 구축한 명품과 디자인 산업" },
                    { name: "중관춘 (중국)", examples: ["베이징 대학", "칭화 대학", "레노버", "샤오미"], meta: "🇨🇳 중국의 실리콘밸리 · 🎓 산학 연계", desc: "베이징의 명문대와 결합한 '중국의 실리콘밸리'" },
                    { name: "시스타 사이언스 시티", examples: ["스톡홀름", "에릭슨", "무선 통신", "ICT"], meta: "🇸🇪 무선 통신 허브 · 📡 산학연 협력", desc: "에릭슨과 산학연이 협력하여 무선 통신 기술을 선도하는 북유럽의 실리콘밸리" }
                ]
            }
        ]
    },
    "city-5": {
        title: "<span class=\"geo-badge\">가치</span>도시의 정체성과 미래",
        subtitle: "인류의 유산을 품고 지속 가능한 삶을 그리는 도시들",
        badge: "V",
        theme: "#009432",
        iconSVG: `<path d="M100,20 L180,180 H20 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.2"/><circle cx="100" cy="100" r="40" fill="currentColor" opacity="0.3"/><path d="M100,20 V180" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "🏛️", label: "유산", text: "역사, 예술, 종교" },
            { icon: "🌿", label: "환경", text: "탄소 중립, 생태" },
            { icon: "🔮", label: "미래", text: "계획 도시, 스마트" }
        ],
        subCards: [
            {
                title: "역사와 예술의 성지", desc: "도시 전체가 박물관이자 인류 문명의 살아있는 유산",
                items: [
                    { name: "파리", examples: ["에펠탑", "루브르 박물관", "샹젤리제", "패션 위크"], meta: "🇫🇷 예술의 수도 · 👗 패션과 미식", desc: "예술, 패션, 미식으로 전 세계인을 매혹하는 영원한 문화의 수도." },
                    { name: "로마", examples: ["바티칸", "콜로세움", "트레비 분수", "가톨릭 본산"], meta: "🏛️ 서양 문명의 뿌리 · ✝️ 가톨릭의 심장", desc: "가톨릭의 본산 바티칸과 고대 제국의 유산이 공존하는 역사 도시." },
                    { name: "예루살렘", examples: ["통곡의 벽", "성묘 교회", "바위 돔", "3대 종교 성지"], meta: "✡️✝️☪️ 3대 종교 성지 · 🔥 갈등과 공존", desc: "유대교, 기독교, 이슬람교가 교차하는 인류 영성의 가장 뜨거운 지점." },
                    { name: "교토", examples: ["금각사·기요미즈데라", "천년 고도", "전통과 정원"], meta: "🇯🇵 일본의 마음 · 🌸 가장 일본다운 도시", desc: "1,000년 넘게 일본의 수도였던 곳으로, 수많은 사찰과 정원이 보존되어 일본의 전통 미학을 가장 잘 보여주는 도시." },
                    { name: "베네치아", examples: ["산마르코 광장", "운하와 곤돌라", "가면 축제"], meta: "🇮🇹 물의 도시 · 🎭 아드리아해의 여왕", desc: "갯벌 위에 나무 말뚝을 박아 건설한 기적의 도시. 자동차 없는 운하의 미로가 빚어내는 독보적인 낭만." }
                ]
            },
            {
                title: "지속 가능한 생태 도시", desc: "기후 위기 시대, 탄소 중립과 친환경 삶을 실천하는 선구자",
                items: [
                    { name: "코펜하겐", examples: ["자전거 도로", "탄소 중립 2025", "풍력 발전"], meta: "🇩🇰 자전거 천국 · 🌿 탄소 중립 선도", desc: "자동차보다 자전거가 우대받는, 탄소 중립을 선도하는 녹색 수도." },
                    { name: "프라이부르크", examples: ["보봉 지구", "태양광 패널", "차 없는 거리", "흑림"], meta: "🇩🇪 태양의 도시 · 🚫 원전 거부", desc: "시민의 힘으로 원전을 거부하고 태양광과 숲을 선택한 환경 수도." },
                    { name: "쿠리치바", examples: ["굴절 버스(BRT)", "지혜의 등대", "생태 혁명"], meta: "🇧🇷 BRT의 발상지 · 🌎 제3세계 모델", desc: "지하철 대신 땅 위의 버스(BRT)를 창안하여 저비용 고효율 혁명을 이룬 모델." }
                ]
            },
            {
                title: "계획 도시와 신수도", desc: "황무지에 이상적인 도시를 건설하려는 국가적 프로젝트와 실험",
                items: [
                    { name: "브라질리아", examples: ["비행기 모양 설계", "내륙 개발", "오스카 니마이어"], meta: "🇧🇷 모더니즘의 걸작 · ✈️ 제트기 형상", desc: "해안에 집중된 인구를 내륙으로 분산하기 위해 황무지에 건설된, 20세기 모더니즘 건축의 거대한 야외 박물관." },
                    { name: "캔버라", examples: ["인공 호수", "방사형 도로", "전원 도시"], meta: "🇦🇺 타협의 산물 · 🌳 숲 속의 수도", desc: "시드니와 멜버른의 수도 경쟁 끝에 탄생한 타협점. 철저한 계획하에 자연과 도시가 완벽하게 조화된 전원 도시." },
                    { name: "세종특별자치시", examples: ["정부세종청사", "행정 중심", "국가 균형 발전"], meta: "🇰🇷 행정 수도의 꿈 · ⚖️ 국토 균형", desc: "수도권 과밀 해소와 국가 균형 발전을 위해 충청권에 건설된, 대한민국 행정의 새로운 심장." },
                    { name: "네옴시티 (더 라인)", examples: ["사막 직선 도시", "170km 유리벽", "미래 기술 집약"], meta: "🇸🇦 사막의 SF · 🤖 포스트 오일", desc: "석유 의존 경제에서 벗어나기 위해 사막 한복판에 건설 중인, 거울 벽으로 둘러싸인 170km 직선형 미래 도시." }
                ]
            }
        ]
    }
};

// [신규] 민족과 언어 데이터 (HTML/CSS 통합본)
const languageData = {
    "lang-1": {
        title: "유럽의 인도유럽어족",
        subtitle: "서구 문명의 뿌리이자 세계를 연결한 언어들",
        badge: "I",
        theme: "#3c40c6",
        iconSVG: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "👥", label: "화자 수", text: "약 32억 명" },
            { icon: "📝", label: "주요 문자", text: "라틴, 키릴" },
            { icon: "🌍", label: "확산", text: "식민지 개척" }
        ],
        subCards: [
            {
                title: "게르만어파", desc: "상업과 이동의 언어, 현대 세계의 공용어",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "게르만족" },
                    { icon: "📝", label: "문자 체계", text: "라틴 문자" }
                ],
                items: [
                    { name: "영어", examples: ["<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇦🇺\">호주</i>", "링구아 프랑카"], meta: "🗣️ 14.5억 명 · 🗺️ 67개국 공식어", desc: "대영제국의 확장과 미국의 부상으로 확립된 현대 세계의 공용어." },
                    { name: "독일어", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇦🇹\">오스트리아</i>", "<i data-flag=\"🇨🇭\">스위스</i>", "철학/과학"], meta: "🗣️ 1.3억 명 · 🗺️ 6개국 공식어", desc: "중부 유럽의 경제와 학문을 주도해 온 철학과 과학의 언어." },
                    { name: "네덜란드어", examples: ["<i data-flag=\"🇳🇱\">네덜란드</i>", "<i data-flag=\"🇧🇪\">벨기에</i>", "<i data-flag=\"🇿🇦\">아프리칸스어</i>", "수리남"], meta: "🗣️ 2,500만 명 · 🚢 해양 제국", desc: "영어와 독일어의 가교이자 대항해시대 상업 제국의 언어. 아프리칸스어의 모체." }
                ]
            },
            {
                title: "로망스어파", desc: "로마 제국의 유산, 라틴어의 직계 후손들",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "라틴족" },
                    { icon: "📝", label: "문자 체계", text: "라틴 문자" }
                ],
                items: [
                    { name: "스페인어", examples: ["<i data-flag=\"🇪🇸\">스페인</i>", "<i data-flag=\"🇲🇽\">멕시코</i>", "<i data-flag=\"🇦🇷\">아르헨티나</i>", "<i data-flag=\"🇨🇴\">콜롬비아</i>"], meta: "🗣️ 5.5억 명 · 🗺️ 20개국 공식어", desc: "대항해시대를 통해 라틴아메리카 전역으로 확산된 제2의 국제어." },
                    { name: "프랑스어", examples: ["<i data-flag=\"🇫🇷\">프랑스</i>", "<i data-flag=\"🇨🇦\">퀘벡</i>", "<i data-flag=\"🇨🇩\">콩고</i>", "외교 언어"], meta: "🗣️ 3억 명 · 🗺️ 29개국 공식어", desc: "과거 유럽 외교의 표준어이자 아프리카 구 프랑스령의 공용어." },
                    { name: "포르투갈어", examples: ["<i data-flag=\"🇵🇹\">포르투갈</i>", "<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇦🇴\">앙골라</i>"], meta: "🗣️ 2.6억 명 · 🗺️ 9개국 공식어", desc: "남반구에서 가장 많이 사용되는 언어이자 브라질의 국어." },
                    { name: "이탈리아어", examples: ["<i data-flag=\"🇮🇹\">이탈리아</i>", "<i data-flag=\"🇨🇭\">스위스</i>", "오페라", "르네상스"], meta: "🗣️ 6,800만 명 · 🎨 예술/음악", desc: "로마 라틴어의 직계 후손. 르네상스를 꽃피운 예술과 음악의 언어." }
                ]
            },
            {
                title: "슬라브어파", desc: "동유럽과 러시아, 정교회와 키릴 문자의 세계",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "슬라브족" },
                    { icon: "📝", label: "문자 체계", text: "키릴/라틴 문자" }
                ],
                items: [
                    { name: "러시아어", examples: ["<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇰🇿\">카자흐스탄</i>", "<i data-flag=\"🇧🇾\">벨라루스</i>", "구소련"], meta: "🗣️ 2.6억 명 · 🗺️ UN 공용어", desc: "유라시아 대륙 북부를 지배하는 구소련권의 링구아 프랑카." },
                    { name: "서슬라브어군", examples: ["<i data-flag=\"🇵🇱\">폴란드어</i>", "<i data-flag=\"🇨🇿\">체코어</i>", "라틴 문자 사용"], meta: "🗣️ 5천만 명 · 📝 라틴 문자", desc: "가톨릭 문화권에 속하여 키릴 대신 라틴 문자를 사용하는 동유럽 언어들." }
                ]
            }
        ]
    },
    "lang-2": {
        title: "아시아의 인도유럽어와 드라비다어",
        subtitle: "아리아인의 이동과 인도의 거대한 언어 모자이크",
        badge: "II",
        theme: "#3c40c6",
        iconSVG: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "👥", label: "화자 수", text: "약 15억 명" },
            { icon: "📝", label: "주요 문자", text: "데바나가리, 아랍" },
            { icon: "🕉️", label: "문화", text: "힌두, 이슬람" }
        ],
        subCards: [
            {
                title: "인도아리아어군", desc: "산스크리트어의 후예들, 북인도의 언어",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "인도아리아인" },
                    { icon: "📝", label: "문자 체계", text: "데바나가리 등" }
                ],
                items: [
                    { name: "힌디어", examples: ["<i data-flag=\"🇮🇳\">인도</i> 북부", "발리우드", "데바나가리", "공용어"], meta: "🗣️ 6억 명 · 📝 데바나가리", desc: "인도 연방의 제1 공용어이자 북인도의 중심 언어." },
                    { name: "산스크리트어", examples: ["힌두교 경전", "불교 경전", "고전어", "범어(梵語)"], meta: "🗣️ 고전어 · 🕉️ 힌두/불교 경전", desc: "인도 문명의 라틴어. 힌두교 경전과 불교의 언어이자 수많은 어휘의 어원." },
                    { name: "벵골어", examples: ["<i data-flag=\"🇧🇩\">방글라데시</i>", "서벵골주", "타고르", "언어 운동"], meta: "🗣️ 2.7억 명 · 🗺️ 세계 6위", desc: "방글라데시의 국어이자 인도 서벵골주에서 쓰이는, 문학적 전통이 강한 언어." },
                    { name: "우르두어", examples: ["<i data-flag=\"🇵🇰\">파키스탄</i>", "무굴 제국", "아랍 문자", "시문학"], meta: "🗣️ 2.3억 명 · 📝 아랍 문자", desc: "힌디어와 구어체는 같으나 아랍 문자로 표기하는 파키스탄의 국어." }
                ]
            },
            {
                title: "이란어군", desc: "페르시아 문명의 계승자들",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "이란 민족" },
                    { icon: "📝", label: "문자 체계", text: "아랍/키릴 문자" }
                ],
                items: [
                    { name: "페르시아어 (Farsi)", examples: ["<i data-flag=\"🇮🇷\">이란</i>", "<i data-flag=\"🇦🇫\">아프가니스탄</i>(다리어)", "<i data-flag=\"🇹🇯\">타지키스탄</i>"], meta: "🗣️ 1.1억 명 · 📝 아랍 문자", desc: "고대 페르시아 제국부터 이어진 유서 깊은 서아시아의 문화어." },
                    { name: "쿠르드어", examples: ["<i data-flag=\"🇹🇷\">튀르키예</i>", "<i data-flag=\"🇮🇶\">이라크</i>", "<i data-flag=\"🇸🇾\">시리아</i>", "나라 없는 민족"], meta: "🗣️ 3천만 명 · 🏔️ 산악 민족", desc: "국가 없이 중동 4개국 산악 지대에 걸쳐 거주하는 쿠르드족의 언어." }
                ]
            },
            {
                title: "드라비다어족", desc: "아리아인 이전, 남인도의 토착 언어",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "드라비다인" },
                    { icon: "📝", label: "문자 체계", text: "타밀 문자 등" }
                ],
                items: [
                    { name: "타밀어", examples: ["<i data-flag=\"🇮🇳\">인도</i> 타밀나두", "<i data-flag=\"🇱🇰\">스리랑카</i>", "<i data-flag=\"🇸🇬\">싱가포르</i>"], meta: "🗣️ 8,500만 명 · 🏛️ 고전 언어", desc: "세계에서 가장 오래된 고전 언어 중 하나로, 남인도 문화의 자부심." },
                    { name: "텔루구어", examples: ["<i data-flag=\"🇮🇳\">인도</i> 안드라프라데시", "발리우드", "IT 인력"], meta: "🗣️ 9,600만 명 · 🇮🇳 화자수 3위", desc: "힌디어, 벵골어 다음으로 인도에서 가장 많이 쓰이는 드라비다어의 대표." }
                ]
            }
        ]
    },
    "lang-3": {
        title: "동아시아와 동남아시아",
        subtitle: "단음절과 성조, 벼농사 문화권의 언어들",
        badge: "III",
        theme: "#d63031",
        iconSVG: `<path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "👥", label: "화자 수", text: "약 16억 명" },
            { icon: "🎵", label: "주요 특징", text: "성조, 고립어(문법)" },
            { icon: "🌾", label: "기반", text: "농경 정착 문화" }
        ],
        subCards: [
            {
                title: "중국티베트어족", desc: "동아시아 대륙을 지배하는 거대 어족",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "한족, 티베트족" },
                    { icon: "📝", label: "문자 체계", text: "한자, 티베트 문자" }
                ],
                items: [
                    { name: "중국어 (Mandarin)", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇹🇼\">대만</i>", "<i data-flag=\"🇸🇬\">싱가포르</i>", "간체/번체"], meta: "🗣️ 11억 명 · 🎵 4성조 (SVO)", desc: "세계 최다 모국어 화자를 보유한 언어. 한자를 기반으로 하는 동아시아 문명의 중심." },
                    { name: "광동어 (Yue)", examples: ["<i data-flag=\"🇭🇰\">홍콩</i>", "<i data-flag=\"🇲🇴\">마카오</i>", "광둥성", "화교 사회"], meta: "🗣️ 8,500만 명 · 🎵 6~9성조", desc: "중국 남부와 해외 화교 사회에서 쓰이는, 고대 중국어의 특징을 간직한 언어." },
                    { name: "티베트·버마어", examples: ["<i data-flag=\"🇲🇲\">미얀마</i>(버마어)", "티베트", "<i data-flag=\"🇧🇹\">부탄</i>(종카어)"], meta: "🗣️ 4,300만 명 · 📝 고유 문자", desc: "히말라야 산맥과 인도차이나 서부 고원 지대에서 사용되는 불교 문화권 언어." }
                ]
            },
            {
                title: "오스트로아시아어족", desc: "동남아시아의 가장 오래된 쌀 문명",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "비엣족, 크메르족" },
                    { icon: "📝", label: "문자 체계", text: "로마/크메르 문자" }
                ],
                items: [
                    { name: "베트남어", examples: ["<i data-flag=\"🇻🇳\">베트남</i>", "쯔놈(과거)", "로마자(현재)", "6성조"], meta: "🗣️ 8,500만 명 · 📝 로마자 (SVO)", desc: "한자 문화권의 영향을 받았으나 독자적인 성조를 가진 몬-크메르계 언어." },
                    { name: "크메르어 (캄보디아)", examples: ["<i data-flag=\"🇰🇭\">캄보디아</i>", "앙코르와트", "성조 없음"], meta: "🗣️ 1,600만 명 · 📝 크메르 문자", desc: "앙코르 문명을 이룩한 언어. 주변 언어들과 달리 성조가 없는 것이 특징." }
                ]
            },
            {
                title: "태크라다이어족", desc: "중국 남부에서 내려온 타이족의 언어",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "타이족" },
                    { icon: "📝", label: "문자 체계", text: "타이/라오 문자" }
                ],
                items: [
                    { name: "태국어 & 라오스어", examples: ["<i data-flag=\"🇹🇭\">태국</i>", "<i data-flag=\"🇱🇦\">라오스</i>", "팔리-산스크리트 차용"], meta: "🗣️ 9,000만 명 · 🎵 5성조", desc: "불교와 인도 문화의 영향을 받아 독자적인 문자를 사용하는 상호 의사소통 가능한 언어." }
                ]
            }
        ]
    },
    "lang-4": {
        title: "아프로-아시아 & 아프리카",
        subtitle: "인류의 고향, 사막의 경전부터 정글의 북소리까지",
        badge: "IV",
        theme: "#e17055",
        iconSVG: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "👥", label: "화자 수", text: "약 10억 명+" },
            { icon: "📝", label: "주요 문자", text: "아랍, 라틴" },
            { icon: "🌍", label: "다양성", text: "대륙 전체 포괄" }
        ],
        subCards: [
            {
                title: "셈어파 (아프로-아시아)", desc: "사막에서 태어난 유일신교의 언어들",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "아랍인, 유대인" },
                    { icon: "📝", label: "문자 체계", text: "아랍/히브리 문자" }
                ],
                items: [
                    { name: "아랍어", examples: ["<i data-flag=\"🇪🇬\">이집트</i>", "<i data-flag=\"🇸🇦\">사우디</i>", "이슬람 경전", "UN 공용어"], meta: "🗣️ 3.1억 명 · 🗺️ 22개국 공식어", desc: "이슬람과 함께 북아프리카와 중동을 하나로 묶는 코란의 언어." },
                    { name: "히브리어", examples: ["<i data-flag=\"🇮🇱\">이스라엘</i>", "유대교", "언어 부활"], meta: "🗣️ 900만 명 · ✡️ 언어 부활", desc: "2천 년간 경전 속에만 존재하다가 기적적으로 부활하여 일상어가 된 언어." },
                    { name: "암하라어", examples: ["<i data-flag=\"🇪🇹\">에티오피아</i>", "솔로몬 왕조", "유일한 아프리카 고유 문자"], meta: "🗣️ 5,700만 명 · 📝 게즈 문자", desc: "식민 지배를 받지 않은 에티오피아의 고유 문자를 사용하는 언어." }
                ]
            },
            {
                title: "니제르-콩고어족", desc: "사하라 이남을 뒤덮은 반투의 확장",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "반투족" },
                    { icon: "📝", label: "문자 체계", text: "라틴 문자" }
                ],
                items: [
                    { name: "스와힐리어", examples: ["<i data-flag=\"🇹🇿\">탄자니아</i>", "<i data-flag=\"🇰🇪\">케냐</i>", "<i data-flag=\"🇨🇩\">콩고</i>", "링구아 프랑카"], meta: "🗣️ 1.5억 명 · 🌍 아프리카 연합", desc: "동아프리카의 무역어. 부족 간의 소통을 돕는 아프리카 최대 공용어." },
                    { name: "요루바어 & 이보어", examples: ["<i data-flag=\"🇳🇬\">나이지리아</i>", "서아프리카"], meta: "🗣️ 8,000만 명 · 🗺️ 서아프리카", desc: "아프리카 최대 인구 대국 나이지리아의 주요 민족 언어들." },
                    { name: "줄루어", examples: ["<i data-flag=\"🇿🇦\">남아프리카공화국</i>", "전사 문화"], meta: "🗣️ 1,200만 명 · 🇿🇦 최다 화자", desc: "남아프리카공화국에서 가장 많이 쓰이는 토착 언어." }
                ]
            },
            {
                title: "기타 아프리카 언어", desc: "대륙의 다양성을 보여주는 독자적 그룹",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "베르베르족, 코이산족" },
                    { icon: "📝", label: "문자 체계", text: "티피나그, 라틴 문자" }
                ],
                items: [
                    { name: "베르베르어", examples: ["<i data-flag=\"🇲🇦\">모로코</i>", "<i data-flag=\"🇩🇿\">알제리</i>", "사하라 사막", "투아레그족"], meta: "🏔️ 북아프리카 원주민 · 📝 티피나그 문자", desc: "아랍화 이전부터 북아프리카에 존재했던 유목민의 언어." },
                    { name: "코이산어족", examples: ["<i data-flag=\"🇳🇦\">나미비아</i>", "<i data-flag=\"🇧🇼\">보츠와나</i>", "클릭음(흡착음)"], meta: "🗣️ 소수 · 🎵 클릭음 (Click)", desc: "혀를 차는 독특한 '클릭음(흡착음)'을 가진 인류 언어의 원형." }
                ]
            }
        ]
    },
    "lang-5": {
        title: "유목과 해양의 확산",
        subtitle: "초원을 달리고 바다를 건너 퍼져나간 교착어의 세계",
        badge: "V",
        theme: "#00b894",
        iconSVG: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "👥", label: "화자 수", text: "약 5.5억 명" },
            { icon: "🔗", label: "문법 특징", text: "교착어, 모음조화" },
            { icon: "🏇", label: "확산 방식", text: "기마 이동, 항해" }
        ],
        subCards: [
            {
                title: "튀르크어족", desc: "초원을 넘어 아나톨리아까지 뻗은 돌궐의 후예",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "튀르크족" },
                    { icon: "📝", label: "문자 체계", text: "라틴/키릴/아랍" }
                ],
                items: [
                    { name: "튀르키예어", examples: ["<i data-flag=\"🇹🇷\">튀르키예</i>", "오스만 제국", "로마자 도입"], meta: "🗣️ 8,500만 명 · 📝 로마자 (SOV)", desc: "가장 많은 화자를 보유한 튀르크어. 아타튀르크의 개혁으로 로마자를 사용." },
                    { name: "중앙아시아 튀르크어", examples: ["<i data-flag=\"🇺🇿\">우즈베키스탄</i>(우즈벡어)", "<i data-flag=\"🇰🇿\">카자흐스탄</i>(카자흐어)", "<i data-flag=\"🇦🇿\">아제르바이잔</i>"], meta: "🗣️ 7,000만 명 · 📝 키릴/로마자", desc: "실크로드를 지배했던 기마민족의 언어. 러시아어의 영향이 남아있음." },
                    { name: "위구르어", examples: ["<i data-flag=\"🇨🇳\">신장 위구르</i>", "아랍 문자", "이슬람"], meta: "🗣️ 1,100만 명 · 📝 아랍 문자", desc: "중국 영토 내에서 고유한 문자와 이슬람 문화를 지키고 있는 튀르크계 언어." }
                ]
            },
            {
                title: "몽골어족", desc: "세계 제국을 건설했던 칸의 언어",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "몽골족" },
                    { icon: "📝", label: "문자 체계", text: "키릴/몽골 문자" }
                ],
                items: [
                    { name: "몽골어", examples: ["<i data-flag=\"🇲🇳\">몽골</i>", "<i data-flag=\"🇨🇳\">내몽골</i>", "키릴 문자", "몽골 문자"], meta: "🗣️ 600만 명 · 📝 키릴 (SOV)", desc: "칭기즈 칸의 유산. 몽골국에서는 키릴 문자를, 중국 내몽골에서는 전통 문자를 사용." }
                ]
            },
            {
                title: "오스트로네시아어족", desc: "마다가스카르에서 하와이까지, 인류 최대의 해상 확산",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "말레이인, 폴리네시아인" },
                    { icon: "📝", label: "문자 체계", text: "로마 문자" }
                ],
                items: [
                    { name: "인도네시아어 (마인어)", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇲🇾\">말레이시아</i>", "단순한 문법"], meta: "🗣️ 3억 명 · 🇮🇩 유일한 공용어", desc: "수천 개의 섬과 민족을 하나로 묶은, 배우기 쉬운 해상 무역어이자 민족주의의 상징." },
                    { name: "타갈로그어 (필리핀)", examples: ["<i data-flag=\"🇵🇭\">필리핀</i>", "영어 혼용", "스페인어 영향"], meta: "🗣️ 8,000만 명 · 📝 로마자", desc: "필리핀의 국어(필리피노)의 기반이 되는 언어. 스페인어와 영어 어휘가 많이 섞임." },
                    { name: "폴리네시아 언어들", examples: ["<i data-flag=\"🇳🇿\">마오리어</i>", "하와이어", "<i data-flag=\"🇲🇬\">마다가스카르어</i>"], meta: "🏝️ 태평양 전역 · ⛵ 항해술", desc: "태평양의 섬들과 아프리카 옆 마다가스카르까지 퍼져나간 해양 민족의 언어." }
                ]
            }
        ]
    },
    "lang-6": {
        title: "고립어와 신대륙",
        subtitle: "독자적으로 진화했거나, 문명에 의해 사라져가는 언어의 섬들",
        badge: "VI",
        theme: "#6c5ce7",
        iconSVG: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "🏝️", label: "특징", text: "계통 불명, 독자성" },
            { icon: "🧬", label: "문법", text: "교착어 다수" },
            { icon: "🛡️", label: "현황", text: "보존 노력 필요" }
        ],
        subCards: [
            {
                title: "동아시아 고립어", desc: "거대 어족 사이에서 독자적인 문법을 지켜낸 언어들",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "한민족, 야마토 민족" },
                    { icon: "📝", label: "문자 체계", text: "한글, 가나/한자" }
                ],
                items: [
                    { name: "한국어", examples: ["<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇰🇵\">북한</i>", "한글", "교착어"], meta: "🗣️ 8,200만 명 · 📝 한글 (SOV)", desc: "과학적인 문자체계를 가진 독자적인 언어" },
                    { name: "일본어", examples: ["<i data-flag=\"🇯🇵\">일본</i>", "히라가나/가타카나", "류큐어(오키나와)"], meta: "🗣️ 1.25억 명 · 📝 가나+한자 (SOV)", desc: "한국어와 문법적으로 유사하나 음운적으로 다른 특징을 지닌 독자적 언어." }
                ]
            },
            {
                title: "유럽 및 서아시아 고립어", desc: "인도유럽어족의 바다 속에 남은 고대의 섬",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "바스크인, 조지아인" },
                    { icon: "📝", label: "문자 체계", text: "라틴/조지아 문자" }
                ],
                items: [
                    { name: "바스크어", examples: ["<i data-flag=\"🇪🇸\">스페인</i> 북부", "<i data-flag=\"🇫🇷\">프랑스</i> 남부", "유럽 최고(最古)의 언어"], meta: "🗣️ 75만 명 · 🛡️ 인도유럽어 이전", desc: "인도유럽어족이 들어오기 전부터 존재했던 유럽의 미스터리한 토착어." },
                    { name: "조지아어 (카르트벨리)", examples: ["<i data-flag=\"🇬🇪\">조지아</i>", "캅카스 산맥", "고유 문자"], meta: "🗣️ 370만 명 · 📝 조지아 문자", desc: "캅카스 산맥에 고립되어 독자적인 문자와 복잡한 문법을 지켜온 언어." }
                ]
            },
            {
                title: "아메리카 원주민 언어", desc: "식민 지배 속에서도 살아남은 신대륙의 말",
                criteria: [
                    { icon: "👥", label: "주요 민족", text: "케추아족, 나바호족" },
                    { icon: "📝", label: "문자 체계", text: "라틴 문자 (차용)" }
                ],
                items: [
                    { name: "케추아어 (잉카)", examples: ["<i data-flag=\"🇵🇪\">페루</i>", "<i data-flag=\"🇧🇴\">볼리비아</i>", "안데스 산맥", "잉카 제국"], meta: "🗣️ 800만 명 · ☀️ 잉카 제국", desc: "안데스 고산 지대에서 여전히 살아 숨 쉬는 잉카 제국의 공용어." },
                    { name: "과라니어", examples: ["<i data-flag=\"🇵🇾\">파라과이</i>", "이중 언어 국가", "남미 유일"], meta: "🗣️ 650만 명 · 🗺️ 파라과이 공용어", desc: "원주민은 물론 메스티소까지 사용하는 남미 유일의 원주민 공용어." },
                    { name: "나바호어", examples: ["<i data-flag=\"🇺🇸\">미국</i> 애리조나", "코드 토커(Code Talker)", "북미 최대"], meta: "🗣️ 17만 명 · 🏹 암호 통신병", desc: "2차 대전 당시 암호로 쓰였을 만큼 난해하고 독창적인 북미 최대 원주민 언어." }
                ]
            }
        ]
    }
};

// [신규] 종교 데이터 (HTML/CSS 통합본)
const religionData = {
    "religion-1": {
        title: "유대교",
        subtitle: "아브라함 계통 종교의 원류, 계약과 율법의 종교",
        badge: "I",
        theme: "#5D729A",
        iconSVG: `<path d="M12,2 L22,20 L2,20 L12,2 M12,22 L2,4 L22,4 L12,22" fill="currentColor" />`,
        criteria: [
            { icon: "🌍", label: "종교 유형", text: "<a href=\"https://www.google.com/search?q=민족종교\" target=\"_blank\"><i class=\"term\">민족 종교</i></a>" },
            { icon: "✨", label: "신격 존재", text: "야훼 (유일신)" },
            { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=아브라함\" target=\"_blank\"><i class=\"term\">아브라함</i></a>, <a href=\"https://www.google.com/search?q=모세\" target=\"_blank\"><i class=\"term\">모세</i></a>" },
            { icon: "📍", label: "주요 성지", text: "예루살렘 (통곡의 벽)" }
        ],
        subCards: [
            {
                title: "디아스포라의 궤적", desc: "전 세계로 흩어진 유대인의 이동과 지역별 정착",
                items: [
                    { name: "아슈케나지 (동유럽계)", examples: ["<i data-flag=\"🇺🇸\">미국</i> 뉴욕", "<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇵🇱\">폴란드</i>", "이디시어"], meta: "🗣️ 이디시어 · 🕍 주류 유대인", desc: "라인강과 동유럽에서 기원하여 현재 미국과 이스라엘 인구의 주축을 이루는 그룹." },
                    { name: "세파르디 (지중해계)", examples: ["<i data-flag=\"🇪🇸\">스페인</i>", "<i data-flag=\"🇲🇦\">모로코</i>", "<i data-flag=\"🇹🇷\">튀르키예</i>", "라디노어"], meta: "🗣️ 라디노어 · 🌊 지중해 확산", desc: "이베리아 반도에서 추방되어 지중해와 북아프리카 연안으로 퍼져나간 그룹." }
                ]
            },
            {
                title: "시오니즘과 공간의 재구성", desc: "약속의 땅으로 돌아와 황무지를 국가로 만든 과정",
                items: [
                    { name: "키부츠 (집단 농장)", examples: ["네게브 사막", "갈릴래아", "관개 농업", "공동체 생활"], meta: "🌾 사막 개척 · 🤝 사회주의 공동체", desc: "사막과 늪지대를 개척하기 위해 만든 이스라엘 고유의 사회주의적 농업 공동체." },
                    { name: "텔아비브 (현대 도시)", examples: ["지중해 연안", "바우하우스(화이트 시티)", "스타트업", "세속주의"], meta: "🏙️ 경제 수도 · 💡 혁신과 세속", desc: "모래 언덕 위에 세워진, 종교적 색채보다 현대성과 혁신이 넘치는 경제 수도." }
                ]
            },
            {
                title: "성지와 분쟁의 지리학", desc: "좁은 공간에 중첩된 성스러움과 배타성",
                items: [
                    { name: "예루살렘 (구시가지)", examples: ["통곡의 벽", "성전산", "유대인 지구", "종교의 교차로"], meta: "🕍 제1성지 · ⚔️ 공존과 긴장", desc: "유대교 최고의 성지이자, 기독교 및 이슬람교 구역과 맞닿은 긴장의 공간." },
                    { name: "정착촌 (West Bank)", examples: ["요르단강 서안", "헤브론", "장벽", "영토 분쟁"], meta: "🚧 불법 정착 · 💥 갈등의 핵심", desc: "성경 속의 땅(유대/사마리아)을 수복한다는 명분으로 팔레스타인 지역에 건설된 거주지." }
                ]
            }
        ]
    },
    "religion-2": {
        title: "크리스트교",
        subtitle: "유대교 세계관을 넘어서 세계로 향한 예수의 사랑과 구원",
        badge: "II",
        theme: "#D62828",
        iconSVG: `<path d="M11 2v7H4v4h7v9h4v-9h7V9h-7V2z" fill="currentColor"/>`,
        criteria: [
            { icon: "🌍", label: "종교 유형", text: "<a href=\"https://www.google.com/search?q=보편종교\" target=\"_blank\"><i class=\"term\">보편 종교</i></a>" },
            { icon: "✨", label: "신격 존재", text: "삼위일체 하느님" },
            { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=예수\" target=\"_blank\"><i class=\"term\">예수 그리스도</i></a>" },
            { icon: "📍", label: "주요 성지", text: "예루살렘, 로마(바티칸)" }
        ],
        subCards: [
            {
                title: "로마 가톨릭", desc: "베드로의 후계자, 교황을 중심으로 한 보편 교회",
                items: [
                    { name: "남유럽 및 프랑스", examples: ["<i data-flag=\"🇮🇹\">이탈리아</i>", "<i data-flag=\"🇪🇸\">스페인</i>", "<i data-flag=\"🇵🇹\">포르투갈</i>", "<i data-flag=\"🇫🇷\">프랑스</i>", "<i data-flag=\"🇵🇱\">폴란드</i>"], meta: "🇻🇦 교황청 · 🏛️ 라틴 문화권", desc: "로마 제국의 유산 위에 세워진 가톨릭의 심장부" },
                    { name: "라틴 아메리카", examples: ["<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇲🇽\">멕시코</i>", "<i data-flag=\"🇦🇷\">아르헨티나</i>", "<i data-flag=\"🇨🇴\">콜롬비아</i>"], meta: "🌎 최대 신자 수 · ✝️ 식민 유산", desc: "세계 최대의 가톨릭 인구 밀집지" },
                    { name: "필리핀 및 동티모르", examples: ["<i data-flag=\"🇵🇭\">필리핀</i>", "<i data-flag=\"🇹🇱\">동티모르</i>"], meta: "🌏 아시아 유일 · ✝️ 가톨릭 국가", desc: "아시아에서 가톨릭이 지배적인 두 국가" }
                ]
            },
            {
                title: "동방 정교회", desc: "콘스탄티노플의 영광, 비잔티움 제국의 영적 유산",
                items: [
                    { name: "발칸 반도 및 그리스", examples: ["<i data-flag=\"🇬🇷\">그리스</i>", "<i data-flag=\"🇷🇸\">세르비아</i>", "<i data-flag=\"🇷🇴\">루마니아</i>", "<i data-flag=\"🇧🇬\">불가리아</i>"], meta: "☦️ 비잔티움 계승 · 🏛️ 성화(이콘)", desc: "비잔티움 제국의 직계 후손들" },
                    { name: "러시아 및 동슬라브권", examples: ["<i data-flag=\"🇷🇺\">러시아</i>", "<i data-flag=\"🇺🇦\">우크라이나</i>", "<i data-flag=\"🇧🇾\">벨라루스</i>"], meta: "🏰 제3의 로마 · ❄️ 슬라브 정교", desc: "'제3의 로마'를 자처한 최대 정교회 세력" }
                ]
            },
            {
                title: "개신교", desc: "\"성서로 돌아가라\", 종교개혁으로 탄생한 다양한 교파",
                items: [
                    { name: "북서유럽", examples: ["<i data-flag=\"🇩🇪\">독일</i>", "<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇳🇱\">네덜란드</i>", "<i data-flag=\"🇸🇪\">스웨덴</i>"], meta: "📜 종교개혁 · 🔨 루터/칼뱅", desc: "종교개혁의 발상지이자 역사적 중심지" },
                    { name: "북미 및 오세아니아", examples: ["<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇦🇺\">호주</i>", "<i data-flag=\"🇳🇿\">뉴질랜드</i>"], meta: "🚢 청교도 정신 · ⛪ 다양한 교파", desc: "청교도 이주민들이 건설한 현대 개신교의 중심" }
                ]
            },
            {
                title: "제3세계의 신흥 기독교", desc: "토착 문화와 결합하여 폭발적으로 성장하는 새로운 신앙의 중심",
                items: [
                    { name: "사하라 이남 아프리카", examples: ["<i data-flag=\"🇳🇬\">나이지리아</i>", "<i data-flag=\"🇪🇹\">에티오피아</i>", "<i data-flag=\"🇨🇩\">콩고민주공화국</i>", "<i data-flag=\"🇰🇪\">케냐</i>"], meta: "🔥 오순절 운동 · 🌍 남반구 기독교", desc: "오순절 운동이 전통 신앙과 결합한 기독교의 새 심장" },
                    { name: "라틴 아메리카의 복음주의", examples: ["<i data-flag=\"🇧🇷\">브라질</i>", "<i data-flag=\"🇬🇹\">과테말라</i>", "<i data-flag=\"🇭🇳\">온두라스</i>"], meta: "📈 개신교 급성장 · 🎸 열정적 예배", desc: "가톨릭의 아성에 도전하며 급성장하는 세력" },
                    { name: "아시아의 독립 교회", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇵🇭\">필리핀</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>"], meta: "⛪ 자생적 성장 · 🙏 새벽 기도", desc: "서구 교파와 무관하게 자생적으로 성장하는 교회" }
                ]
            }
        ]
    },
    "religion-3": {
        title: "이슬람교",
        subtitle: "사막의 계시에서 시작된 복종, 최후의 아브라함 계통 종교",
        badge: "III",
        theme: "#0096C7",
        iconSVG: `<path d="M12 2C10.34 2 8.78 2.42 7.4 3.15C8.47 3.05 9.55 3 10.64 3C15.6 3 19.64 7.04 19.64 12C19.64 16.96 15.6 21 10.64 21C9.55 21 8.47 20.95 7.4 20.85C8.78 21.58 10.34 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.44 5.84C7.44 5.84 7.44 5.84 7.44 5.84C5.07 7.34 3.5 9.98 3.5 13C3.5 17.97 7.53 22 12.5 22C13.28 22 14.04 21.9 14.77 21.71C10.8 21.1 7.74 17.82 7.46 13.78C7.45 13.71 7.44 13.65 7.44 13.58C7.36 10.9 8.25 8.39 9.96 6.41C9.08 6.04 8.23 5.85 7.44 5.84ZM15 11.5L16.5 14.5L19.5 15L17.5 17.5L18 20.5L15 19L12 20.5L12.5 17.5L10.5 15L13.5 14.5L15 11.5Z" fill="currentColor"/>`,
        criteria: [
            { icon: "🌍", label: "종교 유형", text: "<a href=\"https://www.google.com/search?q=보편종교\" target=\"_blank\"><i class=\"term\">보편 종교</i></a>" },
            { icon: "✨", label: "신격 존재", text: "알라 (유일신)" },
            { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=무함마드\" target=\"_blank\"><i class=\"term\">무함마드</i></a>" },
            { icon: "📍", label: "주요 성지", text: "메카, 메디나, 예루살렘" }
        ],
        subCards: [
            {
                title: "수니파", desc: "예언자의 전통(순나)을 따르는 이슬람의 대다수",
                items: [
                    { name: "아랍 핵심부", examples: ["<i data-flag=\"🇸🇦\">사우디아라비아</i>", "<i data-flag=\"🇪🇬\">이집트</i>", "<i data-flag=\"🇯🇴\">요르단</i>", "<i data-flag=\"🇦🇪\">UAE</i>"], meta: "🕋 메카/메디나 · 🕌 종주국", desc: "이슬람의 발상지이자 수니파의 정신적 중심" },
                    { name: "비아랍권 수니 벨트", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇵🇰\">파키스탄</i>", "<i data-flag=\"🇹🇷\">튀르키예</i>", "<i data-flag=\"🇳🇬\">나이지리아</i>"], meta: "👥 최대 인구 · 🌏 광범위한 확산", desc: "세계 최대 무슬림 국가를 포함하는 광대한 세력권" }
                ]
            },
            {
                title: "시아파", desc: "알리의 후계자(이맘)를 받드는 소수의 강한 신념",
                items: [
                    { name: "이란-이라크 회랑", examples: ["<i data-flag=\"🇮🇷\">이란</i>", "<i data-flag=\"🇮🇶\">이라크</i>", "<i data-flag=\"🇧🇭\">바레인</i>", "<i data-flag=\"🇦🇿\">아제르바이잔</i>"], meta: "🦁 시아파 맹주 · 🕌 성지 카르발라", desc: "시아파의 종주국과 최대 성지가 위치한 심장부" },
                    { name: "레반트 및 걸프 소수 공동체", examples: ["<i data-flag=\"🇱🇧\">레바논</i>", "<i data-flag=\"🇾🇪\">예멘</i>", "<i data-flag=\"🇸🇾\">시리아</i>"], meta: "⚔️ 헤즈볼라/후티 · 💥 정치적 갈등", desc: "주변국에 흩어져 정치적 긴장의 중심이 된 공동체" }
                ]
            },
            {
                title: "이바디파", desc: "칼리프 계승 논쟁에서 벗어난 가장 오래된 분파",
                items: [
                    { name: "오만 술탄국", examples: ["<i data-flag=\"🇴🇲\">오만</i>"], meta: "🇴🇲 독자 노선 · ⚖️ 중용과 관용", desc: "이슬람 초기 모습을 간직한 국가의 중심 종파" }
                ]
            }
        ]
    },
    "religion-4": {
        title: "힌두교",
        subtitle: "인도 문명의 근간, 윤회와 카스트의 복잡계",
        badge: "IV",
        theme: "#F77F00",
        iconSVG: `<path d="M288.6 345.4c-15.4-8.6-36-14-44.6-31.4-5.4-11-3.8-23.4 4.4-32.6 12.2-13.8 33-17.6 49.6-10.8 16.4-26.4 13.4-62.8-9.2-85.4-24.6-24.6-65.6-25.2-91-1.4-19.2 18-23.4 46.6-10.6 69.4 7.4 13.2 20.2 23.2 35.2 25.6 4.8.8 9.4-2.4 10.2-7.2.8-4.8-2.4-9.4-7.2-10.2-8.2-1.4-15.6-6.6-20-13.6-8.4-13.4-6.8-30.4 4-41.2 15.4-15.4 40.2-15.8 56-1.4 14.4 13.2 17.4 35.2 8 52.4-10.6-2.4-21.6 0-30.6 6.6-15.6 11.4-19.6 32.8-8.8 49 8.2 12.2 23.2 17.8 37.6 14.8 3.2 7.4 8.8 13.6 16.2 17.6 14.4 7.8 32.2 5.2 44-6.6 1.8-1.8 3.4-3.8 4.8-5.8 14.8 8.2 31.8 12.6 48.8 12.6 33.4 0 65.2-16.8 83.6-45 13.6-20.8 20.6-45.2 20.6-70s-7-49.2-20.6-70c-18.4-28.2-50.2-45-83.6-45-19.2 0-38.2 5.6-54.6 16.2 2.8-17.4 11.2-33.4 24.4-46.6 4.2-4.2 3.4-11.2-1.6-14.4-4.8-3.2-11.4-2.2-14.4 2.8-15.2 24.4-13.6 56.2 4 78.6-4.2 2.6-8.2 5.4-12.2 8.4-26.4-17.4-59.2-18-86.2-1.8-26 15.6-42 43.6-42 73.6 0 24.4 10.4 47.6 28.6 64.2-3.8 7.4-6.2 15.4-7 23.6-1.4 15.4 3.2 30.6 12.6 42.2 15.6 19.2 39.4 28.8 63.6 25.8 19.6-2.4 37.6-13.4 49.2-29.2 3.2-4.4 2.4-10.6-2-13.8-4.4-3.2-10.6-2.4-13.8 2-7.4 10.2-19 17.2-31.6 18.8-15.2 1.8-30.2-4.2-40-16.4-5.8-7.2-8.8-16.4-8.2-25.6.6-7.6 3.4-14.8 8-20.8 7 4.2 15 6.4 23.2 6.4 16.8 0 32.8-9.4 41.2-24.2 10.6 16.6 28.8 26.4 48.4 26.4 13 0 25.8-4.4 36.4-12.6zm-64.4-188.2c22.2 0 43.4 11.2 55.6 30 9.2 14 14 30.2 14 47s-4.8 33-14 47c-12.2 18.8-33.4 30-55.6 30-13 0-25.6-3.8-36.6-11-4-2.6-7.6-5.6-10.8-9 13.6-8 23.4-22.2 25.2-38.8 1.2-11-1.6-21.8-7.6-30.8-4-6-9.6-10.8-16.2-14.2 2.2-3.8 4.6-7.4 7.4-10.8 10.6-13.4 25.6-23.2 42.6-27.6 5.2-1.4 8.2-6.8 6.8-12-1.4-5.2-6.8-8.2-12-6.8-20.4 5.2-38.4 17-51.2 33-7.2 9-12.8 19.2-16.6 30-15.4-14.6-24.2-35.4-24.2-56.8 0-20.2 10.8-39 28.4-49.6 18.2-11 39.2-10.6 57 .8 2.8 1.6 5.8 2.6 8.8 2.6z" fill="currentColor"/><path d="M364 103c14.4 0 26-11.6 26-26s-11.6-26-26-26-26 11.6-26 26 11.6 26 26 26z" fill="currentColor"/>`,
        criteria: [
            { icon: "🌍", label: "종교 유형", text: "<a href=\"https://www.google.com/search?q=민족종교\" target=\"_blank\"><i class=\"term\">민족 종교</i></a>" },
            { icon: "✨", label: "신격 존재", text: "브라흐만과 삼주신" },
            { icon: "👤", label: "창시자", text: "특정 창시자 없음" },
            { icon: "📍", label: "주요 성지", text: "바라나시 (갠지스강)" }
        ],
        subCards: [
            {
                title: "성스러운 지리 (Sacred Geography)", desc: "국토 전체가 신의 몸체이자 순례의 대상",
                items: [
                    { name: "어머니 갠지스 (Ganga)", examples: ["바라나시", "하리드와르", "목욕 의식", "화장(다비)"], meta: "🌊 정화의 강 · 🔥 삶과 죽음", desc: "하늘에서 내려온 신성한 물. 이곳에서 죽고 화장되어 강에 뿌려지는 것이 최고의 축복." },
                    { name: "히말라야 (신의 거처)", examples: ["카일라스 산(시바)", "차르 담(4대 성지)", "리시케시"], meta: "🏔️ 시바의 거처 · 🧘 요가와 명상", desc: "시바 신이 명상하는 거처이자 영적인 에너지가 솟아나는 근원지." }
                ]
            },
            {
                title: "지역별 신앙의 색채", desc: "지리적 환경에 따라 다르게 나타나는 신앙의 모습",
                items: [
                    { name: "북인도 (아리아 문화)", examples: ["라마/크리슈나", "비슈누파 강세", "홀리 축제", "갠지스 평원"], meta: "🏹 라마야나 · 🎨 화려한 축제", desc: "갠지스 평원을 중심으로 비슈누의 화신(아바타)인 라마와 크리슈나 신앙이 발달." },
                    { name: "남인도 (드라비다 문화)", examples: ["거대 사원(고푸람)", "시바파 강세", "마두라이", "채식주의"], meta: "🛕 고푸람(탑문) · 🥥 독자적 문화", desc: "거대한 탑문(고푸람)을 가진 사원 도시가 발달했으며, 독자적인 타밀 힌두 문화가 강함." },
                    { name: "발리섬 (해외 힌두교)", examples: ["<i data-flag=\"🇮🇩\">인도네시아</i> 발리", "토착 신앙 융합", "예술적 제의"], meta: "🌺 꽃과 제물 · 🏝️ 힌두의 섬", desc: "이슬람의 바다 속에 남은 힌두교의 섬. 토착 신앙과 결합하여 독특한 예술 문화를 꽃피움." }
                ]
            },
            {
                title: "카스트와 생활 공간", desc: "종교가 규정한 위계가 촌락과 식탁을 분리하다",
                items: [
                    { name: "공간의 분리", examples: ["촌락 구조", "우물 사용 제한", "불가촉천민 거주구"], meta: "🏘️ 거주지 분리 · 💧 우물 차별", desc: "전통 촌락에서 카스트에 따라 거주 구역과 우물이 철저히 분리되었던 흔적." },
                    { name: "정결과 음식", examples: ["채식주의", "소고기 금기", "음식 공유 제한", "부엌의 신성함"], meta: "🥗 채식 문화 · 🐮 암소 보호", desc: "육체와 영혼의 정결함을 지키기 위해 발달한 채식 문화와 엄격한 식사 예절." }
                ]
            }
        ]
    },
    "religion-5": {
        title: "불교",
        subtitle: "한 왕자의 고뇌에서 시작된 깨달음, 아시아를 물들이다",
        badge: "V",
        theme: "#B8860B",
        iconSVG: `<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/><path d="M12 5.5L12 2 M18.5 12L22 12 M12 18.5L12 22 M5.5 12L2 12 M16.6 7.4L19.1 4.9 M16.6 16.6L19.1 19.1 M7.4 16.6L4.9 19.1 M7.4 7.4L4.9 4.9" stroke="currentColor" stroke-width="2"/>`,
        criteria: [
            { icon: "🌍", label: "종교 유형", text: "<a href=\"https://www.google.com/search?q=보편종교\" target=\"_blank\"><i class=\"term\">보편 종교</i></a>" },
            { icon: "✨", label: "신격 존재", text: "없음 (깨달은 자 공경)" },
            { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=고타마 싯다르타\" target=\"_blank\"><i class=\"term\">고타마 싯다르타</i></a>" },
            { icon: "📍", label: "주요 성지", text: "룸비니, 부다가야" }
        ],
        subCards: [
            {
                title: "상좌부 불교", desc: "개인의 해탈을 향한 가장 오래된 여정",
                items: [
                    { name: "인도차이나 반도", examples: ["<i data-flag=\"🇹🇭\">태국</i>", "<i data-flag=\"🇲🇲\">미얀마</i>", "<i data-flag=\"🇰🇭\">캄보디아</i>", "<i data-flag=\"🇱🇦\">라오스</i>"], meta: "🟨 황색 가사 · 🍚 탁발 공양", desc: "왕실의 후원 아래 찬란한 불교문화를 꽃피운 지역" },
                    { name: "스리랑카", examples: ["<i data-flag=\"🇱🇰\">스리랑카</i>"], meta: "🦷 불치사 · 🌴 남방 불교 원류", desc: "교리와 경전을 지켜낸 '남방불교의 총본산'" }
                ]
            },
            {
                title: "대승 불교", desc: "모두의 구원을 이끄는 보살의 길",
                items: [
                    { name: "동아시아 문화권", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇯🇵\">일본</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🏯 사찰 문화 · 📜 한역 경전", desc: "유교, 도교와 융합하여 각국의 정신세계를 형성" }
                ]
            },
            {
                title: "밀교 (금강승)", desc: "주문과 의식, 비밀의 가르침",
                items: [
                    { name: "티베트 고원 및 히말라야", examples: ["<i>티베트</i>", "<i data-flag=\"🇧🇹\">부탄</i>", "<i data-flag=\"🇲🇳\">몽골</i>", "<i data-flag=\"🇳🇵\">네팔</i>"], meta: "☸️ 달라이 라마 · 🏔️ 고산 신앙 융합", desc: "달라이 라마를 중심으로 한 강력한 구심점" }
                ]
            }
        ]
    },
    "religion-6": {
        title: "지역에 뿌리내린 신념들",
        subtitle: "삶의 질서와 자연의 도, 동아시아를 직조한 세계관",
        badge: "VI",
        theme: "#43AA8B",
        iconSVG: `<path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,4 C14.21,4 16,5.79 16,8 C16,10.21 14.21,12 12,12 C9.79,12 8,10.21 8,8 C8,5.79 9.79,4 12,4 Z M12,20 C9.79,20 8,18.21 8,16 C8,13.79 9.79,12 12,12 C14.21,12 16,13.79 16,16 C16,18.21 14.21,20 12,20 Z" fill="currentColor"/><circle cx="12" cy="8" r="2" fill="#fff"/><circle cx="12" cy="16" r="2" fill="#fff"/>`,
        criteria: null, // [특수 구조] 최상단 메타데이터 없음
        subCards: [
            {
                title: "유교", desc: "수신제가치국평천하, 동아시아를 지배한 통치의 철학",
                criteria: [
                    { icon: "🌍", label: "유형", text: "<a href=\"https://www.google.com/search?q=유학\" target=\"_blank\"><i class=\"term\">철학 / 생활 규범</i></a>" },
                    { icon: "✨", label: "신격", text: "천(天), 조상신" },
                    { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=공자\" target=\"_blank\"><i class=\"term\">공자</i></a>" },
                    { icon: "📍", label: "성지", text: "취푸 (공묘)" }
                ],
                items: [
                    { name: "중화 문화권 핵심부", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇹🇼\">대만</i>", "<i data-flag=\"🇭🇰\">홍콩</i>", "<i data-flag=\"🇸🇬\">싱가포르</i>"], meta: "📜 통치 이념 · 👨‍👩‍👧‍👦 가족 중심", desc: "통치 철학이자 사회 규범으로 가장 깊게 작용한 지역" },
                    { name: "한자 문화권 주변부", examples: ["<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇯🇵\">일본</i>", "<i data-flag=\"🇻🇳\">베트남</i>"], meta: "🎓 과거 제도 · 🙇 예절 문화", desc: "법, 제도, 생활 윤리에 큰 영향을 미친 국가들" }
                ]
            },
            {
                title: "도교", desc: "무위자연, 인위를 넘어 자연의 흐름에 순응하는 길",
                criteria: [
                    { icon: "🌍", label: "유형", text: "<a href=\"https://www.google.com/search?q=민족종교\" target=\"_blank\"><i class=\"term\">민족 종교 / 철학</i></a>" },
                    { icon: "✨", label: "신격", text: "도(道), 옥황상제" },
                    { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=노자\" target=\"_blank\"><i class=\"term\">노자</i></a> (전설적)" },
                    { icon: "📍", label: "성지", text: "타이산, 칭청산" }
                ],
                items: [
                    { name: "도교 신앙의 중심지", examples: ["<i data-flag=\"🇹🇼\">대만</i>", "<i data-flag=\"🇭🇰\">홍콩</i>", "<i data-flag=\"🇨🇳\">중국</i> 남부"], meta: "🏮 민간 신앙 · 🔮 풍수지리", desc: "도교 사원이 활발히 운영되고 민간 신앙과 결합된 지역" },
                    { name: "동아시아 사상적 영향권", examples: ["<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇯🇵\">일본</i>"], meta: "🎨 산수화 · 🥋 무술/기공", desc: "예술, 의학, 대중문화에 철학이 스며든 지역" }
                ]
            },
            {
                title: "시크교", desc: "힌두와 이슬람을 넘어, 유일신을 섬기는 구루의 가르침",
                criteria: [
                    { icon: "🌍", label: "유형", text: "<a href=\"https://www.google.com/search?q=민족종교\" target=\"_blank\"><i class=\"term\">민족 종교</i></a>" },
                    { icon: "✨", label: "신격", text: "와헤구루 (유일신)" },
                    { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=구루 나나크\" target=\"_blank\"><i class=\"term\">구루 나나크</i></a>" },
                    { icon: "📍", label: "성지", text: "암리차르 (황금 사원)" }
                ],
                items: [
                    { name: "인도 펀자브", examples: ["<i data-flag=\"🇮🇳\">인도</i> 펀자브", "암리차르", "찬디가르", "루디아나"], meta: "👳 터번 · ⚔️ 상무 정신", desc: "시크교 인구의 80%가 거주하는 탄생지이자 성지" },
                    { name: "영미권 디아스포라", examples: ["<i data-flag=\"🇨🇦\">캐나다</i>", "<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇦🇺\">호주</i>"], meta: "✈️ 이주 노동 · 👮 군인/경찰", desc: "영국 식민지 시절 이주를 시작으로 형성된 해외 공동체" }
                ]
            },
            {
                title: "신토", desc: "팔백만 신들, 일본의 자연과 조상 속에 깃든 믿음",
                criteria: [
                    { icon: "🌍", label: "유형", text: "<a href=\"https://www.google.com/search?q=민족종교 (일본)\" target=\"_blank\"><i class=\"term\">민족 종교</i></a>" },
                    { icon: "✨", label: "신격", text: "야오요로즈 (팔백만 신)" },
                    { icon: "👤", label: "창시자", text: "없음 (자연 발생)" },
                    { icon: "📍", label: "성지", text: "이세 신궁" }
                ],
                items: [
                    { name: "황실 신토의 중심지", examples: ["이세 신궁", "메이지 신궁", "이즈모 대사"], meta: "⛩️ 도리이 · 👑 천황 숭배", desc: "천황 가문과 직접 관련된 가장 격이 높은 신사들" },
                    { name: "일본 전역의 민간 신앙", examples: ["이나리 신사", "하치만구", "텐만구"], meta: "🦊 여우 신앙 · 🙏 마츠리", desc: "각 지역 공동체의 수호신을 모시는 수많은 신사들" }
                ]
            },
            {
                title: "조로아스터교", desc: "선과 악의 끝없는 투쟁, 고대 페르시아의 불의 종교",
                criteria: [
                    { icon: "🌍", label: "유형", text: "<a href=\"https://www.google.com/search?q=민족종교\" target=\"_blank\"><i class=\"term\">민족 종교</i></a>" },
                    { icon: "✨", label: "신격", text: "아후라 마즈다" },
                    { icon: "👤", label: "창시자", text: "<a href=\"https://www.google.com/search?q=조로아스터\" target=\"_blank\"><i class=\"term\">조로아스터</i></a> (자라투스트라)" },
                    { icon: "📍", label: "성지", text: "야즈드 (불의 사원)" }
                ],
                items: [
                    { name: "고대 페르시아 제국", examples: ["<i data-flag=\"🇮🇷\">이란</i> 고원", "야즈드", "케르만"], meta: "🔥 배화교 · 🦅 조장(장례)", desc: "종교의 발상지이자 고대 제국의 국교였던 역사적 중심지" },
                    { name: "인도의 파르시 공동체", examples: ["<i data-flag=\"🇮🇳\">인도</i>", "뭄바이", "구자라트"], meta: "💰 타타 그룹 · 🚢 상업 귀족", desc: "이슬람의 박해를 피해 인도에서 명맥을 이은 후손들" }
                ]
            }
        ]
    }
};

// 도약(Jump) 연결 고리 데이터 정의

const jumpConnections = {
    // =====================================================
    // 1. [기후] 자연의 조각가
    // =====================================================
    'climate-e': [ // 한대 기후
        { section: 'special', card: 'special-2', label: '빙하 지형' },
        { section: 'population', card: 'population-1', label: '인구 희박' },
        { section: 'energy', card: 'energy-1', label: '기후 위기' }
    ],
    'climate-d': [ // 냉대 기후
        { section: 'special', card: 'special-2', label: '주빙하 지형' },
        { section: 'agriculture', card: 'agri-2', label: '호밀/귀리' },
        { section: 'language', card: 'lang-1', label: '러시아어' }
    ],
    'climate-c': [ // 온대 기후
        { section: 'agriculture', card: 'agri-1', label: '쌀과 밀' },
        { section: 'population', card: 'population-1', label: '인구 밀집' },
        { section: 'city', card: 'city-1', label: '세계 도시' }
    ],
    'climate-b': [ // 건조 기후
        { section: 'special', card: 'special-3', label: '건조 지형' },
        { section: 'livestock', card: 'agri-6', label: '유목 (양)' },
        { section: 'religion', card: 'religion-3', label: '이슬람 발상' }
    ],

    'climate-a': [ // 열대 기후
        { section: 'special', card: 'special-4', label: '카르스트' },
        { section: 'freshwater', card: 'hydro-2', label: '아마존/콩고' },
        { section: 'agriculture', card: 'agri-industrial', label: '플랜테이션' }
    ],

    // =====================================================
    // 2. [지형/특수] 땅의 역사와 물
    // =====================================================
    'terrain-1': [ // 신기 조산대
        { section: 'special', card: 'special-5', label: '화산 지형' },
        { section: 'resources', card: 'resources-2', label: '구리 (안데스)' },
        { section: 'energy', card: 'energy-4', label: '지열 발전' }
    ],
    'terrain-2': [ // 고기 조산대/순상지
        { section: 'resources', card: 'resources-1', label: '석탄 (고생대)' },
        { section: 'resources', card: 'resources-2', label: '철광석 (순상지)' }
    ],
    'special-1': [ // 유수와 하천
        { section: 'freshwater', card: 'hydro-1', label: '하천 시스템' },
        { section: 'agriculture', card: 'agri-1', label: '범람원 농업' },
        { section: 'city', card: 'city-2', label: '하중도' }
    ],
    'special-2': [ // 빙하/주빙하
        { section: 'climate', card: 'climate-e', label: '한대 기후' },
        { section: 'freshwater', card: 'hydro-5', label: '빙하호' }
    ],
    'special-3': [ // 건조 지형
        { section: 'climate', card: 'climate-b', label: '건조 기후' },
        { section: 'livestock', card: 'agri-7', label: '낙타 대상' },
        { section: 'religion', card: 'religion-3', label: '이슬람' }
    ],
    'special-4': [ // 카르스트
        { section: 'resources', card: 'resources-5', label: '시멘트 원료' },
        { section: 'climate', card: 'climate-a', label: '탑 카르스트' },
        { section: 'freshwater', card: 'hydro-5', label: '지하수계' }
    ],
    'special-5': [ // 화산 지형
        { section: 'terrain', card: 'terrain-1', label: '불의 고리' },
        { section: 'energy', card: 'energy-4', label: '지열 에너지' },
        { section: 'agriculture', card: 'agri-3', label: '비옥한 화산토' }
    ],
    'special-6': [ // 해안 지형
        { section: 'ocean', card: 'ocean-4', label: '양식업' },
        { section: 'industry', card: 'industry-1', label: '임해 공업' },
        { section: 'tourism', card: 'tourism-1', label: '해안 관광' }
    ],
    'hydro-1': [ // 흐름과 경계
        { section: 'geopolitics', card: 'geopol-3', label: '하천 국경' },
        { section: 'agriculture', card: 'agri-1', label: '관개 농업' }
    ],
    'hydro-2': [ // 야생의 강
        { section: 'climate', card: 'climate-a', label: '열대우림' },
        { section: 'climate', card: 'climate-s', label: '빙하 발원' },
        { section: 'resources', card: 'resources-4', label: '콩고 자원' }
    ],
    'hydro-3': [ // 하천과 도시
        { section: 'city', card: 'city-1', label: '하구 도시' },
        { section: 'geo', card: '6', label: '라인강 수운' }
    ],
    'hydro-5': [ // 호수와 지하수
        { section: 'climate', card: 'climate-b', label: '사막화' },
        { section: 'terrain', card: 'terrain-3', label: '지구대 호수' },
        { section: 'livestock', card: 'agri-6', label: '대찬정 분지' }
    ],

    // =====================================================
    // 3. [공업] 제조의 세계
    // =====================================================
    'industry-1': [ // 기간 산업
        { section: 'resources', card: 'resources-2', label: '철광석' },
        { section: 'economic', card: 'econ-1', label: '베버 입지론' },
        { section: 'geo', card: '7', label: '러스트 벨트' }
    ],
    'industry-2': [ // 노동/소재
        { section: 'economic', card: 'econ-1', label: '노동 입지' },
        { section: 'geo', card: '2', label: '동남아 공장' }
    ],
    'industry-3': [ // 화학 산업
        { section: 'resources', card: 'resources-1', label: '석유/가스' },
        { section: 'agriculture', card: 'agri-8', label: '비료/농약' }
    ],
    'industry-4': [ // 첨단 산업
        { section: 'resources', card: 'resources-4', label: '희토류/리튬' },
        { section: 'city', card: 'city-4', label: '혁신 클러스터' },
        { section: 'geopolitics', card: 'geopol-6', label: '기술 패권' }
    ],
    'industry-5': [ // 고가치 제조업
        { section: 'geo', card: '6', label: '유럽 명품' },
        { section: 'geopolitics', card: 'geopol-5', label: '방산 수출' }
    ],

    // =====================================================
    // 4. [농업] 생명의 식탁
    // =====================================================
    'agri-1': [ // 식량 작물
        { section: 'climate', card: 'climate-c', label: '온대 몬순' },
        { section: 'geo', card: '7', label: '북미 대평원' },
        { section: 'population', card: 'population-1', label: '인구 부양' }
    ],
    'agri-2': [ // 구황 작물
        { section: 'climate', card: 'climate-s', label: '안데스 고산' },
        { section: 'geo', card: '5', label: '아프리카' }
    ],
    'agri-3': [ // 상품 작물
        { section: 'climate', card: 'climate-a', label: '열대 기후' },
        { section: 'geopolitics', card: 'geopol-5', label: '플랜테이션' }
    ],
    'agri-4': [ // 소
        { section: 'climate', card: 'climate-b', label: '건조 스텝' },
        { section: 'geo', card: '8', label: '남미 팜파스' },
        { section: 'religion', card: 'religion-4', label: '암소 숭배' }
    ],
    'agri-5': [ // 돼지
        { section: 'geo', card: '1', label: '중국 식문화' },
        { section: 'religion', card: 'religion-3', label: '종교적 금기' }
    ],
    'agri-6': [ // 양
        { section: 'special', card: 'special-3', label: '건조 지형' },
        { section: 'geo', card: '2', label: '호주/뉴질랜드' }
    ],
    'agri-7': [ // 말/낙타
        { section: 'language', card: 'lang-5', label: '유목 확산' },
        { section: 'special', card: 'special-3', label: '사막 지형' }
    ],
    'agri-8': [ // 과수/원예
        { section: 'climate', card: 'climate-c', label: '지중해성 기후' },
        { section: 'geo', card: '6', label: '남유럽' }
    ],
    'agri-9': [ // 농업의 그림자
        { section: 'geopolitics', card: 'geopol-3', label: '마약 재배' },
        { section: 'industry', card: 'industry-3', label: '화학 비료' }
    ],

    // =====================================================
    // 5. [자원/에너지] 문명의 동력
    // =====================================================
    'resources-1': [ // 화석 에너지
        { section: 'geo', card: '4', label: '중동 산유국' },
        { section: 'geo', card: '7', label: '셰일 가스' },
        { section: 'energy', card: 'energy-1', label: '화력 발전' },
        { section: 'geopolitics', card: 'geopol-4', label: '호르무즈' }
    ],
    'resources-2': [ // 철/구리
        { section: 'terrain', card: 'terrain-2', label: '순상지 (철)' },
        { section: 'terrain', card: 'terrain-1', label: '안데스 (구리)' },
        { section: 'industry', card: 'industry-1', label: '제철/조선' }
    ],
    'resources-3': [ // 귀금속
        { section: 'geo', card: '8', label: '포토시 은광' },
        { section: 'geopolitics', card: 'geopol-6', label: '패권 이동' },
        { section: 'geo', card: '5', label: '피의 다이아몬드' }
    ],
    'resources-4': [ // 전략 광물
        { section: 'industry', card: 'industry-4', label: '첨단 산업' },
        { section: 'energy', card: 'energy-4', label: '에너지 저장' },
        { section: 'geo', card: '1', label: '중국 독점' }
    ],
    'resources-5': [ // 비금속
        { section: 'special', card: 'special-4', label: '카르스트' },
        { section: 'city', card: 'city-2', label: '도시화' }
    ],
    'energy-1': [ // 화력
        { section: 'resources', card: 'resources-1', label: '화석 연료' },
        { section: 'climate', card: 'climate-e', label: '기후 위기' }
    ],
    'energy-2': [ // 원자력
        { section: 'resources', card: 'resources-4', label: '우라늄' },
        { section: 'geopolitics', card: 'geopol-6', label: '핵 안보' }
    ],
    'energy-3': [ // 수력
        { section: 'freshwater', card: 'hydro-1', label: '댐 건설' },
        { section: 'geopolitics', card: 'geopol-3', label: '수자원 분쟁' }
    ],
    'energy-4': [ // 재생
        { section: 'special', card: 'special-5', label: '지열 발전' },
        { section: 'climate', card: 'climate-b', label: '태양광 (사막)' }
    ],

    // =====================================================
    // 6. [인구/도시] 인간의 삶터
    // =====================================================
    'population-1': [ // 인구 분포
        { section: 'climate', card: 'climate-c', label: '살기 좋은 곳' },
        { section: 'city', card: 'city-1', label: '메가시티' }
    ],
    'population-2': [ // 인구 이동
        { section: 'city', card: 'city-1', label: '기회의 땅' },
        { section: 'geopolitics', card: 'geopol-4', label: '난민/국경' }
    ],
    'population-3': [ // 인구 변천
        { section: 'geo', card: '1', label: '초고령 사회' },
        { section: 'geo', card: '5', label: '인구 폭발' }
    ],
    'city-1': [ // 세계 도시
        { section: 'industry', card: 'industry-4', label: '지식 산업' },
        { section: 'geo', card: '7', label: '뉴욕 (맨해튼)' }
    ],
    'city-2': [ // 도시 구조
        { section: 'economic', card: 'econ-3', label: '상업 입지' },
        { section: 'population', card: 'population-3', label: '도심 공동화' }
    ],
    'city-3': [ // 도시 문제
        { section: 'population', card: 'population-2', label: '슬럼' },
        { section: 'geopolitics', card: 'geopol-5', label: '불균등 발전' }
    ],
    'city-4': [ // 산업 클러스터
        { section: 'industry', card: 'industry-4', label: '첨단 산업' },
        { section: 'resources', card: 'resources-4', label: '희토류 수요' }
    ],

    // =====================================================
    // 7. [언어/종교/지정학] 문화와 갈등
    // =====================================================
    'lang-1': [ // 인도유럽어
        { section: 'geo', card: '6', label: '유럽 (본토)' },
        { section: 'geo', card: '8', label: '라틴아메리카' }
    ],
    'lang-2': [ // 아시아 언어
        { section: 'geo', card: '3', label: '북부 인도' },
        { section: 'geo', card: '4', label: '페르시아어' }
    ],
    'lang-5': [ // 확산
        { section: 'geo', card: '4', label: '튀르크 (유목)' },
        { section: 'geo', card: '2', label: '오스트로네시아' }
    ],
    'religion-3': [ // 이슬람교
        { section: 'geo', card: '4', label: '아랍/북아프리카' },
        { section: 'resources', card: 'resources-1', label: '오일 머니' }
    ],
    'religion-4': [ // 힌두교
        { section: 'geo', card: '3', label: '인도' },
        { section: 'livestock', card: 'agri-4', label: '암소 숭배' }
    ],
    'religion-5': [ // 불교
        { section: 'geo', card: '1', label: '동아시아' },
        { section: 'geo', card: '2', label: '동남아시아' }
    ],
    'geopol-1': [ // 심장지대
        { section: 'geo', card: '1', label: '유라시아 내륙' },
        { section: 'resources', card: 'resources-1', label: '자원 외교' }
    ],
    'geopol-4': [ // 영토 유형
        { section: 'resources', card: 'resources-1', label: '에너지 수송' },
        { section: 'population', card: 'population-2', label: '국경 이동' }
    ],

    // =====================================================
    // 8. [권역] 세계의 무대 (허브)
    // =====================================================
    '1': [ // 동아시아
        { section: 'industry', card: 'industry-1', label: '세계의 공장' },
        { section: 'religion', card: 'religion-6', label: '유교 문화' }
    ],
    '2': [ // 동남아시아
        { section: 'climate', card: 'climate-a', label: '열대 몬순' },
        { section: 'geopolitics', card: 'geopol-4', label: '말라카 해협' }
    ],
    '3': [ // 남부 아시아
        { section: 'religion', card: 'religion-4', label: '힌두교' },
        { section: 'population', card: 'population-1', label: '인구 대국' }
    ],
    '4': [ // 건조 아시아
        { section: 'resources', card: 'resources-1', label: '석유 매장' },
        { section: 'religion', card: 'religion-3', label: '이슬람교' }
    ],
    '5': [ // 아프리카
        { section: 'resources', card: 'resources-4', label: '자원의 저주' },
        { section: 'climate', card: 'climate-a', label: '열대 사바나' }
    ],
    '6': [ // 유럽
        { section: 'city', card: 'city-1', label: '세계 도시' },
        { section: 'geopolitics', card: 'geopol-2', label: '유럽 연합' }
    ],
    '7': [ // 앵글로아메리카
        { section: 'geopolitics', card: 'geopol-6', label: '슈퍼 파워' },
        { section: 'industry', card: 'industry-4', label: '실리콘밸리' }
    ],
    '8': [ // 라틴아메리카
        { section: 'religion', card: 'religion-2', label: '가톨릭' },
        { section: 'resources', card: 'resources-2', label: '안데스 광물' }
    ]
};
// [신규] 지리학의 탐구 섹션 데이터 (HTML 분리 통합본: 관광 + 지정학)

// [신규] 여행과 관광 지리 데이터 (HTML/CSS 통합본)
const tourismData = {
    "tourism-1": {
        title: "관광 공간의 탄생",
        subtitle: "우리는 어디로 여행을 가는가",
        badge: "I",
        theme: "#6c5ce7",
        iconSVG: `<path d="M100,20 Q160,80 100,140 T100,20 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="100" cy="80" r="20" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🏞️", label: "자연", text: "산, 바다, 극지" },
            { icon: "🏙️", label: "인문", text: "도시, 유적, 랜드마크" },
            { icon: "🚶", label: "행태", text: "트레킹, 순례, 축제" },
            { icon: "📈", label: "흐름", text: "공간의 상품화" }
        ],
        subCards: [
            {
                title: "자연지리 여행", desc: "수려한 자연을 찾아가는 여행",
                items: [
                    { name: "산악과 트레킹", examples: ["네팔 히말라야", "스위스 알프스", "칠레 파타고니아", "페루 비니쿤카"], meta: "🏔️ 고산 트레킹 · 🌲 국립공원", desc: "두 발로 느끼는 살아 숨쉬는 대지" },
                    { name: "하천과 바다", examples: ["그랜드 캐니언", "하롱베이", "아말피 해안", "그레이트 배리어 리프"], meta: "🌊 협곡과 해안 · 🐠 산호초 다이빙", desc: "수권이 엮어낸 역동적인 풍경" },
                    { name: "화산과 온천", examples: ["아이슬란드", "하코네 온천", "옐로스톤 국립공원", "하와이 화산"], meta: "🌋 불과 얼음 · ♨️ 지열과 온천", desc: "지구의 가장 강대한 에너지" },
                    { name: "극지와 사막", examples: ["사하라 사막", "우유니 소금사막", "남극 크루즈", "북극 오로라"], meta: "🏜️ 극한 환경 · ✨ 오로라와 별", desc: "세상의 끝에서 나를 발견하는 여행" },
                    { name: "동굴과 지하 세계", examples: ["선동 동굴", "멕시코 세노테", "와이토모 반딧불 동굴", "포스토이나 동굴"], meta: "🕳️ 카르스트 지형 · 🔦 동굴 탐험", desc: "숨겨진 지구를 탐험하는 여행" }
                ]
            }
        ]
    },
    "tourism-2": {
        title: "오버투어리즘과 도시의 몸살",
        subtitle: "현대 대중 관광이 맞이한 임계점",
        badge: "II",
        theme: "#6c5ce7",
        iconSVG: `<path d="M40,100 H160 M100,40 V160" stroke="currentColor" stroke-width="12" opacity="0.3"/><circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="8" opacity="0.4"/>`,
        criteria: [
            { icon: "📉", label: "현상", text: "오버투어리즘" },
            { icon: "🏠", label: "피해", text: "주거지 침해" },
            { icon: "💰", label: "원인", text: "저가항공/SNS" }
        ],
        subCards: [
            {
                title: "관광의 역습: 오버투어리즘", desc: "관광객이 원주민의 삶을 밀어내는 현상",
                items: [
                    { name: "베네치아", examples: ["입장료 부과", "대형 크루즈 금지", "인구 유출"], meta: "🇮🇹 관광세 도입 · 🚫 정주권 위협", desc: "몰려드는 관광객으로 인해 물가가 폭등하고 주민들이 떠나 도시가 테마파크화 되는 대표적 사례." },
                    { name: "바르셀로나", examples: ["에어비앤비 규제", "관광객 반대 시위", "람블라스 거리"], meta: "🇪🇸 주민 갈등 · 🏠 주거난 심화", desc: "주거지가 관광 숙소로 변하며 임대료가 상승하자 원주민들이 '관광객은 집으로 돌아가라'고 외치는 곳." },
                    { name: "보라카이 & 마야 베이", examples: ["일시 폐쇄", "환경 정화", "입도 제한"], meta: "🇵🇭🇹🇭 환경 휴식년제 · 🌿 자연 복원", desc: "환경 파괴가 임계점을 넘어 아예 섬을 폐쇄하고 자연이 회복될 시간을 부여한 강력한 조치." }
                ]
            }
        ]
    },
    "tourism-3": {
        title: "새로운 여행의 지평",
        subtitle: "여행이 다다른 성찰과 공존의 길",
        badge: "III",
        theme: "#6c5ce7",
        iconSVG: `<path d="M20,100 Q100,20 180,100 T20,100" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.2"/>`,
        criteria: [
            { icon: "🤝", label: "가치", text: "공정 여행" },
            { icon: "🌿", label: "환경", text: "생태 관광" },
            { icon: "👣", label: "방식", text: "느린 여행" }
        ],
        subCards: [
            {
                title: "지속 가능한 여행", desc: "소비하는 여행에서 존중하는 여행으로",
                items: [
                    { name: "부탄", examples: ["관광세(SDF)", "행복 지수", "환경 보호"], meta: "🇧🇹 고비용 저밀도 · 🧘 영적 여행", desc: "하루 200달러 이상의 체류비를 부과하여 관광객 수를 조절하고 자연과 전통을 지키는 모델." },
                    { name: "코스타리카", examples: ["에코 투어리즘", "국립공원", "생물 다양성"], meta: "🇨🇷 생태 관광의 교과서 · 🦜 자연 공존", desc: "국토의 25%를 보호구역으로 지정하고, 자연을 훼손하지 않으면서 경제적 이익을 얻는 생태 관광의 선진국." },
                    { name: "공정 여행 (Fair Travel)", examples: ["현지 민박 이용", "탄소 상쇄", "동물 쇼 반대"], meta: "⚖️ 윤리적 소비 · 🤝 지역 사회 환원", desc: "현지인의 삶을 존중하고 여행의 이익이 다국적 기업이 아닌 지역 사회로 돌아가게 하는 윤리적 여행." }
                ]
            }
        ]
    }
};

// [신규] 지정학과 정치지리 데이터 (HTML/CSS 통합본)
const geopoliticsData = {
    "geopol-1": {
        title: "심장지대 이론 (Heartland)",
        subtitle: "\"유라시아의 심장을 지배하는 자가 세계를 지배한다\"",
        badge: "I",
        theme: "#c0392b",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1"/><path d="M60,100 H140 M100,60 V140" stroke="currentColor" stroke-width="12" opacity="0.4"/>`,
        criteria: [
            { icon: "👤", label: "제창자", text: "할포드 맥킨더" },
            { icon: "🏰", label: "핵심 지역", text: "유라시아 내륙" },
            { icon: "🚂", label: "수단", text: "철도와 랜드파워" }
        ],
        subCards: [
            {
                title: "이론과 역사적 확장", desc: "해양 세력이 접근할 수 없는 내륙 요새의 힘",
                items: [
                    { name: "맥킨더의 명제", examples: ["동유럽 지배 ➔ 심장지대 장악", "심장지대 장악 ➔ 월드 아일랜드 지배", "월드 아일랜드 지배 ➔ 세계 지배"], meta: "📜 지정학의 시초 · 🚂 철도의 중요성", desc: "바다로 접근할 수 없는 유라시아 내륙을 철도로 연결하면 해양 세력을 압도할 수 있다는 이론." },
                    { name: "몽골 제국", examples: ["칭기즈 칸", "유라시아 통합", "기마 군단", "초원길"], meta: "🐎 랜드파워의 원형 · 🏹 역사적 모델", desc: "심장지대 이론의 영감. 유라시아를 장악한 최초의 대륙 제국." },
                    { name: "시베리아 횡단 철도 (TSR)", examples: ["모스크바-블라디보스토크", "러시아의 동진", "부동항 연결"], meta: "🚂 대륙의 동맥 · ⚓ 해양 세력 견제", desc: "심장지대 이론의 핵심 인프라이자 심장지대를 물리적으로 통합한 수단." },
                    { name: "나치 독일과 레벤스라움", examples: ["동부 전선", "생활권 확보", "독소 전쟁"], meta: "⚔️ 동쪽으로의 진격 · 🇩🇪 대륙 패권 추구", desc: "심장지대(러시아)를 장악하여 자급자족 가능한 대제국을 건설하려 했던 지정학적 야망." },
                    { name: "소비에트 연방", examples: ["철의 장막", "유라시아 지배", "위성 국가"], meta: "☭ 거대 육상 제국 · 🏰 심장지대의 구현", desc: "역사상 심장지대 이론을 가장 완벽하게 현실화하며 유라시아 내륙을 통제했던 거대 제국." }
                ]
            },
            {
                title: "현대의 심장지대: 팽창과 충돌", desc: "다시 깨어난 대륙 세력의 도전",
                items: [
                    { name: "중국 일대일로 (BRI)", examples: ["신실크로드", "중국-유럽 화물열차", "중앙아시아 파이프라인"], meta: "🇨🇳 현대판 실크로드 · 🚂 해양 포위 돌파", desc: "미국의 해양 봉쇄를 뚫고 철도와 파이프라인으로 유라시아 대륙을 연결하려는 거대한 구상." },
                    { name: "중앙아시아 (거대한 체스판)", examples: ["자원 외교", "파이프라인", "미-중-러 각축장"], meta: "♟️ 지정학적 요충지 · 🛢️ 에너지 허브", desc: "과거 소련 영토에서, 오늘날 일대일로와 미국, 러시아의 체스판으로." },
                    { name: "러시아-우크라이나 전쟁", examples: ["완충지대 상실", "NATO 동진 저지", "크림반도"], meta: "🇷🇺 심장지대의 방어 · 💥 지정학적 충돌", desc: "해양 세력(NATO)의 접근을 막고 심장지대의 안전판(완충지대)을 확보하려는 러시아의 무력 투사." },
                    { name: "북극 항로", examples: ["쇄빙선", "자원 개발", "제2의 수에즈", "러시아의 앞마당"], meta: "❄️ 기후 변화의 역설 · 🚢 새로운 전략 통로", desc: "심장지대 국가가 해양 세력의 봉쇄를 우회할 새로운 돌파구." }
                ]
            }
        ]
    },
    "geopol-2": {
        title: "주변부 이론과 해양 권력",
        subtitle: "\"림랜드(Rimland)를 지배하는 자가 유라시아를 지배한다\"",
        badge: "II",
        theme: "#2980b9",
        iconSVG: `<path d="M100,20 C160,20 180,60 180,100 C180,150 150,180 100,180 C50,180 20,150 20,100 C20,60 40,20 100,20 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><path d="M20,100 H180" stroke="currentColor" stroke-width="5" opacity="0.2"/>`,
        criteria: [
            { icon: "👤", label: "제창자", text: "니콜라스 스파이크먼" },
            { icon: "🌊", label: "핵심 지역", text: "유라시아 가장자리" },
            { icon: "⚓", label: "전략", text: "봉쇄와 해양 통제" }
        ],
        subCards: [
            {
                title: "해양 제국과 봉쇄 전략", desc: "대륙을 포위하고 바다를 지배하는 힘",
                items: [
                    { name: "대영제국 (Pax Britannica)", examples: ["수에즈 운하", "싱가포르", "지브롤터", "해가 지지 않는 나라"], meta: "🇬🇧 해양 권력의 원형 · 🚢 길목 장악", desc: "전 세계 주요 해협과 항구를 장악하여 대륙 세력을 견제하고 무역로를 독점한 해양 제국." },
                    { name: "미국의 대양 해군 전략", examples: ["파나마 운하", "하와이", "괌", "대백색함대"], meta: "⚓ 알프레드 마한 · 🇺🇸 양대양 해군", desc: "대서양과 태평양을 연결하고 전진 기지를 확보하여 완성된 초강대국의 기반." },
                    { name: "NATO와 봉쇄 정책", examples: ["트루먼 독트린", "마셜 플랜", "철의 장막"], meta: "🛡️ 대서양 동맹 · 🧱 봉쇄론", desc: "유라시아의 서쪽 림랜드(유럽)를 요새화하여 심장지대(소련)의 팽창을 막아낸 냉전의 승리 공식." },
                    { name: "냉전의 림랜드 전쟁", examples: ["한국전쟁", "베트남전쟁", "도미노 이론"], meta: "⚔️ 열전(Hot War) · 🌏 대리전", desc: "대륙 세력의 해양 진출을 막기 위해 유라시아의 가장자리에서 벌어진 치열한 전쟁." }
                ]
            },
            {
                title: "현대의 림랜드: 아시아의 바다", desc: "태평양으로 진출하려는 자와 막으려는 자",
                items: [
                    { name: "제1 도련선 (Island Chain)", examples: ["오키나와", "대만", "필리핀", "남중국해"], meta: "⚓ 태평양의 인계철선 · 🇨🇳 A2/AD 전략", desc: "중국의 대양 진출을 막는 미국의 1차 해상 방어선이자, 중국이 반드시 돌파해야 할 생명선." },
                    { name: "남중국해 인공섬", examples: ["스프래틀리 군도", "파라셀 군도", "구단선", "항행의 자유"], meta: "🏝️ 불침항모 · 🚧 회색지대 전술", desc: "바다 위에 만리장성을 쌓다. 산호초를 매립하여 군사 기지화함으로써 구단선을 실효 지배하려는 전략." },
                    { name: "인도-태평양 전략", examples: ["<i data-flag=\"🇺🇸\">미국</i>", "<i data-flag=\"🇯🇵\">일본</i>", "<i data-flag=\"🇦🇺\">호주</i>", "<i data-flag=\"🇮🇳\">인도</i>"], meta: "🤝 Quad · 🌏 림랜드 연합", desc: "유라시아 남쪽 림랜드 국가들을 규합하여 대륙 세력의 해양 진출을 견제하는 현대판 봉쇄 전략." },
                    { name: "말라카 딜레마", examples: ["말라카 해협", "싱가포르", "에너지 안보"], meta: "🛢️ 에너지 수송로 · 🚢 Choke Point", desc: "중국 에너지 수입의 80%가 통과하는 좁은 목구멍. 해양 세력이 통제권을 쥔 대륙의 치명적 급소." }
                ]
            }
        ]
    },
    "geopol-3": {
        title: "경계와 국경의 정치학",
        subtitle: "지구 위에 그어진 선, 평화와 갈등의 시작",
        badge: "III",
        theme: "#8e44ad",
        iconSVG: `<path d="M20,100 H180 M100,20 V180" stroke="currentColor" stroke-width="4" stroke-dasharray="10 10" opacity="0.4"/><circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/>`,
        criteria: [
            { icon: "⛰️", label: "자연적", text: "산맥, 하천" },
            { icon: "📏", label: "인위적", text: "위도, 경도" },
            { icon: "⚔️", label: "강제적", text: "식민 유산" }
        ],
        subCards: [
            {
                title: "자연적 경계 (Natural)", desc: "지형지물을 따라 형성된 천연의 방어선",
                items: [
                    { name: "피레네 산맥", examples: ["프랑스-스페인", "기후 경계", "문화적 장벽"], meta: "⛰️ 산맥 국경 · 🇫🇷🇪🇸 천연 요새", desc: "유럽 대륙과 이베리아 반도의 기후 및 문화를 가르는 거대한 장벽." },
                    { name: "알프스 산맥", examples: ["게르만-라틴", "맥주-와인", "버터-올리브유"], meta: "🏔️ 유럽의 지붕 · 🍺 북부 vs 🍷 남부", desc: "유럽의 남북을 가르며 게르만과 라틴 문화권을 구분 지은 장벽." },
                    { name: "안남산맥", examples: ["베트남-라오스", "유교-불교", "한자-인도문자"], meta: "🐉 중화 vs 🐘 인도 · ⛰️ 동남아의 척추", desc: "동쪽의 유교와 한자, 서쪽의 불교와 인도 문화를 구분한 문명의 분수령." },
                    { name: "리오그란데강", examples: ["미국-멕시코", "불법 이민", "경제 격차"], meta: "🌊 하천 국경 · 🇺🇸🇲🇽 경제 단층선", desc: "굽이치는 물길이 만든 자연 경계이자 세계 최대 경제 격차의 단층선." },
                    { name: "도버 해협", examples: ["영국-프랑스", "섬나라 정체성", "브렉시트"], meta: "🚢 해양 국경 · 🇬🇧 고립과 방어", desc: "영국을 대륙과 분리시켜 독자적 정체성을 형성하고 침략을 막아낸 해자." }
                ]
            },
            {
                title: "인위적 경계 (Geometric)", desc: "지도 위에 자를 대고 그은 직선의 국경",
                items: [
                    { name: "미국-캐나다 국경", examples: ["미국-캐나다", "비무장 국경", "직선 경계"], meta: "📏 위도선 국경 · 🇺🇸🇨🇦 북위 49도선", desc: "숲과 호수를 가로지르며 끝없이 뻗은, 세계에서 가장 긴 비무장 직선 국경." },
                    { name: "비르 타윌", examples: ["이집트-수단", "무주지", "행정 경계 불일치"], meta: "🏜️ 북위 22도선 · 🏳️ 무주지", desc: "행정 경계와 정치 경계의 불일치로 생긴, 서로 영유권을 거부하는 무주지." },
                    { name: "북위 38도선", examples: ["남한-북한", "냉전의 산물", "군사분계선"], meta: "⚔️ 분단 국경 · 🇰🇷🇰🇵 냉전의 상처", desc: "지형이나 문화를 무시하고 강대국의 편의에 의해 그어진 비극의 직선." },
                    { name: "인니-파푸아뉴기니 국경", examples: ["<i data-flag=\"🇵🇬\">파푸아뉴기니</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>", "<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇳🇱\">네덜란드</i>", "<i data-flag=\"🇩🇪\">독일</i>"], meta: "📏 동경 141도선 · 🗺️ 식민 유산", desc: "영국과 네덜란드가 세계에서 두 번째로 큰 섬을 동서로 갈라버린 직선 국경." }
                ]
            },
            {
                title: "선행적 & 후행적 경계", desc: "인간 정착과 국경 설정의 시간차",
                items: [
                    { name: "선행적 경계 (Antecedent)", examples: ["보르네오섬", "말레이시아-인도네시아", "안데스 산맥", "히말라야 산맥"], meta: "🌳 정착 이전 설정 · 🕊️ 낮은 갈등", desc: "사람이 살기 전, 혹은 문화권 형성 전에 미리 그어져 갈등이 적은 경계." },
                    { name: "후행적 경계 (Subsequent)", examples: ["오데르-나이세선", "베트남-중국", "아일랜드-북아일랜드", "발칸 반도"], meta: "🗣️ 문화적 구분 · 🇪🇺 점진적 형성", desc: "언어, 종교 등 문화적 차이가 확립된 후에 이를 반영하여 그어진 경계." }
                ]
            },
            {
                title: "전횡적 경계 (Superimposed)", desc: "제국주의가 강제로 그은 분쟁의 씨앗",
                items: [
                    { name: "아프리카의 직선 국경", examples: ["베를린 회의", "부족 무시", "내전의 원인"], meta: "📏 제국주의 유산 · ⚔️ 부족 갈등", desc: "수천 개의 부족을 무시하고 자를 대고 그어 끊임없는 내전의 원인이 된 선." },
                    { name: "래드클리프 라인", examples: ["인도-파키스탄", "종교 분리", "카슈미르"], meta: "☪️🕉️ 종교적 분리 · 🩸 피의 국경", desc: "영국 철수와 함께 종교를 기준으로 하루아침에 이웃을 적으로 만든 비극." },
                    { name: "사이크스-피코 협정", examples: ["중동 분할", "영국-프랑스", "오스만 붕괴", "쿠르드족"], meta: "🗺️ 비밀 협정 · 🇬🇧🇫🇷 식민지 분할", desc: "오스만 제국 붕괴 후 열강이 중동의 모래 위에 그은 현대 분쟁의 기원." },
                    { name: "듀랜드 라인", examples: ["<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇵🇰\">파키스탄</i>", "파슈툰족", "<i data-flag=\"🇦🇫\">아프가니스탄</i>"], meta: "🛡️ 러시아 남진 저지 · 💣 파슈툰족 분단", desc: "영국령 인도와 아프간 사이에 그어져 파슈툰족 거주지를 두 동강 낸 테러리즘의 원흉." },
                    { name: "한반도 군사분계선", examples: ["<i data-flag=\"🇰🇷\">대한민국</i>", "<i data-flag=\"🇰🇵\">북한</i>", "6.25 전쟁", "DMZ", "냉전"], meta: "⚔️ 6.25 전쟁 · 🧱 이념 대립", desc: "6.25 전쟁의 불완전한 봉합. 천 년 이상 통일된 단일 민족을 찢어 놓은 단층선." }
                ]
            },
            {
                title: "잔존 경계 (Relic)", desc: "기능은 사라졌으나 흔적이 남은 경계",
                items: [
                    { name: "베를린 장벽", examples: ["동서독 통일", "경제 격차", "심리적 장벽"], meta: "🧱 냉전의 상징 · 🇩🇪 여전한 격차", desc: "장벽은 무너졌으나 여전히 남아있는 동서독의 경제적 격차와 심리적 장벽." },
                    { name: "하드리아누스 방벽", examples: ["로마 제국", "잉글랜드-스코틀랜드", "문화 유산"], meta: "🏛️ 고대 국경 · 🇬🇧 역사적 경계", desc: "로마 제국의 북쪽 끝을 알리던 성벽. 잉글랜드와 스코틀랜드의 역사적 경계." },
                    { name: "베트남 북위 17도선", examples: ["남북 베트남", "베트남 전쟁", "지역 감정"], meta: "🇻🇳 통일 후유증 · ⚔️ 문화적 차이", desc: "통일 후에도 언어, 음식, 정치 성향 등에서 여전히 남아있는 남북의 차이." },
                    { name: "폴란드 분할선", examples: ["<i data-flag=\"🇵🇱\">폴란드</i>", "프로이센", "러시아", "팬텀 보더"], meta: "🚂 철도 밀도 · 🗳️ 선거 결과", desc: "19세기에 그어진 옛 경계를 기준으로 나타나는 뚜렷한 동서 경관 차이." },
                    { name: "메이슨-딕슨 라인", examples: ["<i data-flag=\"🇺🇸\">미국</i>", "펜실베이니아", "메릴랜드", "노예제"], meta: "⛓️ 노예제 · 🇺🇸 남부와 북부", desc: "옛 노예주와 자유주의 경계. 미 북부와 남부의 정체성의 경계." }
                ]
            }
        ]
    },
    "geopol-4": {
        title: "영역과 영토의 유형",
        subtitle: "기형적인 국경선이 만든 지정학적 운명",
        badge: "IV",
        theme: "#e67e22",
        iconSVG: `<path d="M50,50 L150,50 L150,150 L100,100 L50,150 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="100" cy="80" r="20" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🏝️", label: "월경지", text: "떨어진 영토" },
            { icon: "🎯", label: "위요지", text: "포위된 영토" },
            { icon: "🛣️", label: "회랑", text: "좁은 통로" },
            { icon: "⚓", label: "조임목", text: "전략적 요충" }
        ],
        subCards: [
            {
                title: "월경지 (Exclave)", desc: "본토와 떨어져 타국에 둘러싸인 섬 아닌 섬",
                items: [
                    { name: "칼리닌그라드", examples: ["<i data-flag=\"🇷🇺\">러시아</i>", "발트해 함대", "NATO 포위", "칸트의 고향"], meta: "⚓ 전략적 요충지 · 🇷🇺 러시아의 비수", desc: "NATO 회원국 사이에 박혀 있는 러시아의 전략적 요충지이자 부동항." },
                    { name: "나히체반", examples: ["<i data-flag=\"🇦🇿\">아제르바이잔</i>", "<i data-flag=\"🇦🇲\">아르메니아</i>", "<i data-flag=\"🇹🇷\">튀르키예</i> 연결"], meta: "⚔️ 적국에 포위 · 🌉 튀르크 연결 고리", desc: "적국인 아르메니아에 의해 본토와 분리되었으나 튀르키예와 연결되는 자치 공화국." },
                    { name: "세우타 & 멜리야", examples: ["<i data-flag=\"🇪🇸\">스페인</i>", "<i data-flag=\"🇲🇦\">모로코</i>", "아프리카 내 유럽", "난민 장벽"], meta: "🏰 유럽의 요새 · 🚧 난민 루트", desc: "아프리카 대륙에 박혀 있는 스페인 영토. 유럽으로 향하는 난민들의 주요 루트." },
                    { name: "카빈다", examples: ["<i data-flag=\"🇦🇴\">앙골라</i>", "<i data-flag=\"🇨🇩\">콩고민주공화국</i>", "석유", "분리주의"], meta: "🛢️ 아프리카의 쿠웨이트 · 💸 석유 부호", desc: "콩고에 의해 본토와 분리되었으나 앙골라 석유 생산의 대부분을 차지하는 부호 지역." },
                    { name: "오만 무산담 반도", examples: ["<i data-flag=\"🇴🇲\">오만</i>", "<i data-flag=\"🇦🇪\">UAE</i>", "호르무즈 해협", "전략적 요충지"], meta: "⚓ 호르무즈의 감시자 · 🏝️ UAE에 포위", desc: "호르무즈 해협을 통제하는 전략적 요충지이나, UAE 영토에 의해 본토와 분리된 월경지." }
                ]
            },
            {
                title: "위요지 (Enclave)", desc: "타국 영토 내부에 완전히 포위된 국가나 지역",
                items: [
                    { name: "레소토", examples: ["<i data-flag=\"🇱🇸\">레소토</i>", "<i data-flag=\"🇿🇦\">남아공</i>", "천공의 왕국", "물 수출"], meta: "⛰️ 천공의 왕국 · 💧 남아공 의존", desc: "남아프리카공화국 영토 안에 완전히 갇혀 있는, 물을 수출해 생존하는 산악 국가." },
                    { name: "바티칸 & 산마리노", examples: ["<i data-flag=\"🇻🇦\">바티칸</i>", "<i data-flag=\"🇸🇲\">산마리노</i>", "<i data-flag=\"🇮🇹\">이탈리아</i>", "초미니 국가"], meta: "✝️ 종교와 역사 · 🇮🇹 이탈리아 속 독립국", desc: "이탈리아 영토 안에 존재하는 세계 최소의 독립국들." },
                    { name: "바를러 (Baarle)", examples: ["<i data-flag=\"🇳🇱\">네덜란드</i>", "<i data-flag=\"🇧🇪\">벨기에</i>", "국경선", "모자이크"], meta: "🧩 세계 최다 위요지 · 🏠 집 안의 국경", desc: "국경선이 카페와 집 안방을 가로지르는, 세계에서 가장 복잡한 위요지 군락." },
                    { name: "나고르노-카라바흐", examples: ["<i data-flag=\"🇦🇿\">아제르바이잔</i>", "<i data-flag=\"🇦🇲\">아르메니아</i>", "아르차흐", "영토 분쟁"], meta: "💥 화약고 · 🇦🇲 아르메니아인 거주", desc: "아제르바이잔 영토 내에 아르메니아인이 거주하여 끊임없는 전쟁이 벌어지는 분쟁 지역." }
                ]
            },
            {
                title: "회랑과 돌출지 (Corridors)", desc: "생존과 전략을 위해 가늘고 길게 뻗은 영토",
                items: [
                    { name: "수바우키 회랑", examples: ["<i data-flag=\"🇵🇱\">폴란드</i>", "<i data-flag=\"🇱🇹\">리투아니아</i>", "NATO 아킬레스건", "러시아 위협"], meta: "🛡️ NATO의 급소 · 🇷🇺 벨라루스-칼리닌그라드", desc: "러시아의 위협 시 발트 3국이 고립될 수 있는 NATO 방어의 최약체 구간." },
                    { name: "와칸 회랑", examples: ["<i data-flag=\"🇦🇫\">아프가니스탄</i>", "완충지대", "그레이트 게임", "중국 접경"], meta: "🇬🇧🇷🇺 제국의 완충지 · 🏔️ 고립된 통로", desc: "영국과 러시아 제국의 직접 충돌을 막기 위해 억지로 만들어진 아프가니스탄의 꼬리." },
                    { name: "카프리비 회랑", examples: ["<i data-flag=\"🇳🇦\">나미비아</i>", "잠베지강", "독일 제국", "빅토리아 폭포"], meta: "💧 물을 향한 욕망 · 📏 기형적 영토", desc: "잠베지강에 접근하기 위해 독일 제국이 동쪽으로 길게 뻗어 만든 기형적 영토." },
                    { name: "네움 회랑", examples: ["<i data-flag=\"🇧🇦\">보스니아</i>", "<i data-flag=\"🇭🇷\">크로아티아</i>", "아드리아해", "펠레샤츠 대교"], meta: "🌊 유일한 해안선 · 🌉 크로아티아 단절", desc: "보스니아가 바다로 나갈 수 있는 유일한 통로이자, 크로아티아 영토를 두 동강 낸 회랑." },
                    { name: "실리구리 회랑", examples: ["<i data-flag=\"🇮🇳\">인도</i>", "닭의 목", "북동부 7개주", "중국 위협"], meta: "🐔 닭의 목 · 🛤️ 전략적 병목", desc: "인도 본토와 북동부 7개 주를 잇는 폭 22km의 좁은 통로. 중국의 위협에 취약한 전략적 급소." }
                ]
            },
            {
                title: "조임목 (Choke Points)", desc: "세계 무역과 에너지의 목줄을 쥔 좁은 길목",
                items: [
                    { name: "호르무즈 해협", examples: ["<i data-flag=\"🇮🇷\">이란</i>", "<i data-flag=\"🇴🇲\">오만</i>", "원유 수송", "봉쇄 위협"], meta: "🛢️ 에너지 안보 최전선 · 🚢 원유의 30%", desc: "전 세계 원유 물동량의 30%가 통과하는, 세계 경제의 가장 위험한 급소." },
                    { name: "말라카 해협", examples: ["<i data-flag=\"🇸🇬\">싱가포르</i>", "<i data-flag=\"🇲🇾\">말레이시아</i>", "<i data-flag=\"🇮🇩\">인도네시아</i>", "중국 딜레마"], meta: "🌏 아시아 생명선 · 🚢 물동량 1/4", desc: "동아시아 경제의 생명선이자 중국이 가장 두려워하는 해상 봉쇄 지점." },
                    { name: "수에즈 운하", examples: ["<i data-flag=\"🇪🇬\">이집트</i>", "지중해-홍해", "아시아-유럽", "에버기븐호"], meta: "🚢 세계 무역의 동맥 · 📏 거리 단축", desc: "아시아와 유럽을 잇는 가장 빠른 지름길. 막히면 세계 경제가 마비되는 핵심 동맥." },
                    { name: "바브엘만데브 해협", examples: ["<i data-flag=\"🇾🇪\">예멘</i>", "<i data-flag=\"🇩🇯\">지부티</i>", "홍해 입구", "후티 반군"], meta: "🌊 홍해의 입구 · 💥 지정학적 핫스팟", desc: "수에즈 운하로 가는 관문. 최근 예멘 내전과 해적, 반군의 위협으로 긴장이 고조되는 곳." }
                ]
            },
            {
                title: "완충지대 (Buffer Zones)", desc: "강대국 사이의 충돌을 막기 위해 설정된 중립적 공간",
                items: [
                    { name: "몽골", examples: ["<i data-flag=\"🇲🇳\">몽골</i>", "<i data-flag=\"🇨🇳\">중국</i>", "<i data-flag=\"🇷🇺\">러시아</i>", "고비 사막"], meta: "🇲🇳 중-러 사이 · 🛡️ 전략적 중립", desc: "중국과 러시아라는 두 거인 사이에 끼어 직접적인 충돌을 완화하는 거대한 내륙 완충국." },
                    { name: "사이프러스 그린 라인", examples: ["<i data-flag=\"🇨🇾\">사이프러스</i>", "<i data-flag=\"🇹🇷\">튀르키예</i>", "<i data-flag=\"🇬🇷\">그리스</i>", "니코시아"], meta: "🇺🇳 UN 평화유지군 · 🚧 분단된 섬", desc: "그리스계 남부와 튀르키예계 북부를 가르는 UN 통제 구역. 수도 니코시아를 반으로 가른 멈춰버린 공간." },
                    { name: "태국", examples: ["<i data-flag=\"🇹🇭\">태국</i>", "<i data-flag=\"🇬🇧\">영국</i>", "<i data-flag=\"🇫🇷\">프랑스</i>", "짜오프라야강"], meta: "🇹🇭 유일한 독립국 · ⚖️ 영-프 완충지대", desc: "19세기 영국과 프랑스의 식민지 경쟁 속에서 충돌을 피하기 위해 의도적으로 남겨진 독립국." },
                    { name: "비무장지대 (DMZ)", examples: ["판문점", "38선", "임진강", "야생동물"], meta: "🇰🇷🇰🇵 군사 완충 · 🌿 생태계 보존", desc: "남북한의 군사적 충돌을 방지하기 위해 설정된 폭 4km의 완충 구역이자 생태계의 보고." }
                ]
            }
        ]
    },
    "geopol-5": {
        title: "세계 체제와 불균등 발전",
        subtitle: "중심부와 주변부, 기울어진 운동장의 경제학",
        badge: "V",
        theme: "#636e72",
        iconSVG: `<rect x="50" y="80" width="40" height="80" fill="currentColor" opacity="0.3"/><rect x="110" y="40" width="40" height="120" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "🏙️", label: "도시 구조", text: "식민지 이식" },
            { icon: "🏭", label: "국제 분업", text: "설계 vs 조립" },
            { icon: "🌴", label: "자원 수탈", text: "플랜테이션" }
        ],
        subCards: [
            {
                title: "식민 도시의 내부 구조", desc: "제국주의가 이식한 도시 계획과 거주지 분리",
                items: [
                    { name: "라틴 아메리카의 식민 도시", examples: ["멕시코시티 소칼로", "리마 아르마스 광장", "보고타", "쿠스코"], meta: "📜 인디아스 법 · ⛪ 플라자 마요르", desc: "중앙 광장과 성당을 중심으로 격자형으로 설계된 에스파냐 식민 도시." },
                    { name: "아프리카의 이중 도시", examples: ["나이로비", "카사블랑카", "요하네스버그", "다카르"], meta: "🏙️ 거주지 분리 · 🏚️ 토착민 구역", desc: "쾌적한 유럽인 거주구와 낙후된 원주민 거주구가 철저히 분리된 구조." },
                    { name: "동남아시아의 항구 도시", examples: ["싱가포르", "자카르타(바타비아)", "호치민(사이공)", "마닐라"], meta: "🚢 항구 중심 · 🇨🇳 화교 상권", desc: "항구 중심의 유럽인 구역, 상업을 장악한 화교 구역, 외곽의 원주민 구역이 혼재." },
                    { name: "남부 아시아의 식민 도시", examples: ["뉴델리(신) vs 올드델리(구)", "콜카타", "뭄바이", "첸나이"], meta: "🇬🇧 영국식 신도시 · 🏘️ 구시가와 신시가", desc: "기존 토착 도시 옆에 행정과 군사 기능을 위한 신도시(Cantonment)를 건설하여 병존." }
                ]
            },
            {
                title: "주변부와 중심부의 분업", desc: "자본과 기술의 독점, 노동과 자원의 종속",
                items: [
                    { name: "신국제분업 (NIDL)", examples: ["애플(캘리포니아)", "폭스콘(중국)", "나이키(베트남)", "방글라데시 의류"], meta: "🏭 글로벌 가치 사슬 · 📱 설계 vs 조립", desc: "선진국은 R&D와 마케팅, 개도국은 단순 제조를 담당하는 글로벌 생산 사슬." },
                    { name: "두뇌 유출 (Brain Drain)", examples: ["인도 IT 인력", "아프리카 의료진", "실리콘밸리", "동유럽 청년"], meta: "🧠 인적 자원 유출 · ✈️ 선진국 이주", desc: "주변부의 핵심 인재가 더 나은 대우를 찾아 중심부로 빠져나가는 현상." },
                    { name: "종속 이론 (저발전의 발전)", examples: ["바나나 공화국", "칠레 구리", "콩고 코발트", "월러스틴"], meta: "📉 1차 산품 수출 · 🏭 공산품 수입", desc: "주변부의 자원과 노동이 중심부의 번영을 위해 헐값에 유출되는 구조적 착취." }
                ]
            },
            {
                title: "신식민주의와 자원 수탈", desc: "정치적 독립 후에도 계속되는 경제적 지배",
                items: [
                    { name: "커피와 카카오의 역설", examples: ["코트디부아르(카카오)", "에티오피아(커피)", "네슬레", "스타벅스"], meta: "☕ 가공 무역의 이익 · 🍫 아동 노동", desc: "생산자는 빈곤하고 다국적 기업은 막대한 부를 챙기는 기울어진 구조." },
                    { name: "팜유와 열대우림", examples: ["인도네시아", "보르네오섬", "오랑우탄", "바이오디젤"], meta: "🌴 플랜테이션 확대 · 🔥 환경 파괴", desc: "선진국의 수요를 맞추기 위해 불타오르는 열대우림과 플랜테이션." },
                    { name: "공정 무역 (Fair Trade)", examples: ["아름다운 커피", "착한 초콜릿", "협동조합", "지속 가능성"], meta: "⚖️ 윤리적 소비 · 🤝 정당한 대가", desc: "불평등한 무역 구조를 개선하고 정당한 대가를 지불하려는 윤리적 소비." }
                ]
            }
        ]
    },
    "geopol-6": {
        title: "세계 패권의 이동과 질서",
        subtitle: "제국에서 시스템으로, 권력의 중심은 어떻게 이동했는가",
        badge: "VI",
        theme: "#f1c40f",
        iconSVG: `<path d="M100,20 L160,180 L20,80 H180 L40,180 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🔄", label: "핵심 개념", text: "패권 순환론" },
            { icon: "⚙️", label: "동력", text: "해양→산업→금융" },
            { icon: "⚖️", label: "구조", text: "단일 vs 다극" },
            { icon: "🌊", label: "흐름", text: "대서양 → 태평양" }
        ],
        subCards: [
            {
                title: "태동과 확장: 대항해와 상업 혁명(16~18C)", desc: "바다를 연 자가 부를 거머쥐다",
                items: [
                    { name: "이베리아의 개척", examples: ["에스파냐·포르투갈", "무적함대", "포토시 은광", "마젤란"], meta: "⚓ 대항해시대 · 💰 약탈적 자본주의", desc: "교황의 선으로 지구를 반분하고, 향신료와 금은을 약탈하여 유럽에 초기 자본을 공급한 제국주의의 시초." },
                    { name: "네덜란드의 상업 패권", examples: ["동인도회사(VOC)", "암스테르담", "플류트선", "황금시대"], meta: "🏦 현대 금융의 탄생 · 🚢 중계 무역", desc: "한정된 영토의 한계를 주식회사와 금융 시스템으로 극복하고, 정보와 신용으로 바다를 지배한 상인 국가." }
                ]
            },
            {
                title: "팍스 브리타니카: 산업과 제국(19C)", desc: "공장을 돌리고 자유 무역을 강제하다",
                items: [
                    { name: "대영제국의 전성기", examples: ["파운드 스털링", "수에즈 운하", "건함 경쟁", "빅토리아 여왕"], meta: "🏭 세계의 공장 · 🌊 해양 네트워크", desc: "산업혁명으로 생산력을 독점하고 강력한 해군력으로 전 세계의 무역 항로를 보장하며 '해가 지지 않는 제국'을 건설." },
                    { name: "제국주의의 각축", examples: ["3B 정책 vs 3C 정책", "파쇼다 사건", "비스마르크 체제", "아프리카 분할"], meta: "⚔️ 세력 균형 붕괴 · 🌍 식민지 쟁탈전", desc: "후발 주자(독일, 프랑스)들이 식민지 쟁탈전에 뛰어들며 세력 균형이 무너지고 세계 대전으로 치닫는 격동기." }
                ]
            },
            {
                title: "팍스 아메리카나와 냉전(20C 후반)", desc: "시스템과 이념으로 세계를 양분하다",
                items: [
                    { name: "미국과 소련의 냉전", examples: ["철의 장막", "NATO vs 바르샤바", "쿠바 미사일 위기", "우주 경쟁"], meta: "⚖️ 양극 체제 · 🚀 체제 경쟁", desc: "2차 대전 후 미국(해양/자본)과 소련(대륙/공산)이 이념과 핵무기로 세계를 양분하며 경쟁했던 거대한 체제 대립." },
                    { name: "미국의 유일 패권", examples: ["달러 패권", "워싱턴 컨센서스", "IMF/WB", "세계화"], meta: "💵 기축통화 · 🌐 시스템적 지배", desc: "소련 붕괴 후, 달러(화폐)와 글로벌 스탠더드(규범)를 통해 군사력을 넘어선 시스템적 지배를 완성한 유일 패권." }
                ]
            },
            {
                title: "도전과 재편: 21세기의 균열", desc: "영원한 제국은 없다, 흔들리는 질서",
                items: [
                    { name: "중국의 부상 (수정주의)", examples: ["일대일로", "중국몽", "AIIB", "남중국해"], meta: "🇨🇳 대국굴기 · 🚧 베이징 컨센서스", desc: "기존 서구 중심의 국제 질서에 대항해 독자적인 경제 생태계와 표준을 구축하려는 대륙 세력의 거센 도전." },
                    { name: "다극화와 각자도생", examples: ["글로벌 사우스", "브릭스(BRICS)", "공급망 분절", "블록화"], meta: "🧩 G-Zero 시대 · ⚔️ 세력 균형 재편", desc: "미국의 절대적 영향력이 약화되고 인도, 러시아 등 지역 맹주들이 부상하며 뚜렷한 리더 없이 혼란스러워지는 과도기." }
                ]
            }
        ]
    }
};

// [신규] 갈등과 공존의 세계 데이터 (HTML/CSS 통합본)
const conflictData = {
    "conflict-1": {
        title: "지구촌의 갈등과 분쟁",
        subtitle: "영토, 자원, 종교가 얽힌 세계의 화약고",
        badge: "I",
        theme: "#57606f",
        iconSVG: `<path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "⚔️", label: "유형", text: "영토/자원/종교" },
            { icon: "🕊️", label: "해결", text: "협정/국제법" },
            { icon: "🌍", label: "범위", text: "지구촌 전체" }
        ],
        subCards: [
            {
                title: "영토와 국경 분쟁", desc: "선을 긋기 위한 끝없는 다툼",
                items: [
                    { name: "카슈미르 분쟁", examples: ["인도-파키스탄", "종교 갈등", "핵무기 보유국"], meta: "🇵🇰🇮🇳 아시아의 화약고 · 💥 3차례 전쟁", desc: "힌두교(인도)와 이슬람(파키스탄)의 대립, 그리고 중국까지 얽힌 세계에서 가장 위험한 국경." },
                    { name: "쿠릴 열도 (북방 영토)", examples: ["러시아-일본", "2차대전 유산", "어업권"], meta: "🇷🇺🇯🇵 샌프란시스코 조약 · ⚓ 전략 요충지", desc: "러시아의 태평양 진출로이자 일본의 고토 회복 의지가 충돌하는 북태평양의 섬들." },
                    { name: "독도", examples: ["대한민국-일본", "실효 지배", "역사적 고유 영토"], meta: "🇰🇷 대한민국의 아침 · 🌊 동해의 주권", desc: "역사적, 지리적, 국제법적으로 명백한 대한민국의 영토이나 일본이 부당하게 영유권을 주장하는 곳." }
                ]
            },
            {
                title: "자원과 에너지 전쟁", desc: "생존과 번영을 위한 쟁탈전",
                items: [
                    { name: "나일강 수자원 분쟁", examples: ["에티오피아(상류)", "이집트(하류)", "르네상스 댐"], meta: "💧 물 전쟁 · ⚡ 댐 건설 갈등", desc: "나일강 상류의 댐 건설로 인해 수량이 줄어들 것을 우려하는 하류 국가와의 생존권 다툼." },
                    { name: "북극해 자원 경쟁", examples: ["러시아 vs 서방", "북극 항로", "석유/가스 매장"], meta: "❄️ 녹는 얼음 · 🛢️ 최후의 자원 보고", desc: "빙하가 녹으며 드러난 막대한 자원과 새로운 항로를 선점하기 위한 연안국들의 소리 없는 전쟁." }
                ]
            }
        ]
    }
};

// [신규] 경제 활동의 입지 데이터 (HTML/CSS 통합본)
const economicData = {
    "econ-1": {
        title: "베버의 공업 입지론",
        subtitle: "그 공장은 어디를 향하는가",
        badge: "I",
        theme: "#0984e3",
        iconSVG: `<rect x="50" y="80" width="40" height="80" fill="currentColor" opacity="0.3"/><rect x="110" y="40" width="40" height="120" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "📉", label: "핵심 원리", text: "최소 비용 이론" },
            { icon: "🚛", label: "결정 요인", text: "운송비 > 노동비" },
            { icon: "🏭", label: "주요 대상", text: "제조업 공장" },
            { icon: "👤", label: "이론가", text: "알프레드 베버" }
        ],
        subCards: [
            {
                title: "운송비 지향: 무게가 결정하는 위치", desc: "원료와 제품 중 더 무거운 쪽으로 공장이 이동한다",
                items: [
                    { name: "원료 지향형 (무게 감소)", examples: ["시멘트(석회석)", "통조림", "제재업", "펄프"], meta: "📉 중량 감소 산업 · ⛏️ 원료 산지 입지", desc: "제조 과정에서 무게나 부피가 줄어들어, 원료 산지 근처에 공장을 짓는 것이 운송비 절감에 유리한 산업." },
                    { name: "시장 지향형 (무게 증가)", examples: ["맥주(병입)", "청량음료", "가구", "제과/제빵"], meta: "📈 중량 증가 산업 · 🏙️ 소비지 입지", desc: "제조 후 무게가 늘어나거나 파손 위험이 커서, 소비 시장 근처에 공장을 짓는 것이 유리한 산업." },
                    { name: "적환지 지향형 (이적 지점)", examples: ["정유 공장", "임해 제철소", "석유 화학 단지", "항구"], meta: "🚢 운송 수단 변경 · ⚓ 중간 지점 입지", desc: "해상과 육상 운송이 바뀌는 항구에 입지하여 하역비를 절감하고 원료 수입과 제품 수출을 동시에 해결하는 산업." }
                ]
            },
            {
                title: "노동비와 집적 이익: 비용의 변수", desc: "운송비를 상쇄할 만큼 매력적인 대체 입지 요인",
                items: [
                    { name: "노동 지향형", examples: ["의류/봉제", "신발", "전자 조립", "가발"], meta: "🧵 노동 집약적 · 💸 인건비 절감", desc: "전체 생산비 중 인건비 비중이 높아, 운송비가 더 들더라도 저렴한 노동력을 찾아 이동하는 산업." },
                    { name: "집적 지향형", examples: ["자동차 부품 단지", "실리콘밸리", "울산 석유화학", "기계 공업"], meta: "🏭 연관 산업 밀집 · 🤝 외부 경제 효과", desc: "관련 산업이 한곳에 모여 기술, 정보, 시설을 공유함으로써 비용 절감과 시너지 효과를 얻는 산업." }
                ]
            },
            {
                title: "현대의 입지 변화: 자유로운 발걸음", desc: "전통적 제약을 넘어선 새로운 형태의 공장들",
                items: [
                    { name: "입지 자유형 (Foot-loose)", examples: ["반도체", "스마트폰", "바이오", "항공 우주"], meta: "✈️ 항공 운송 · 💻 고부가가치", desc: "제품이 가볍고 부가가치가 높아 운송비 부담이 적으며, 기술 인력이나 쾌적한 환경이 있는 곳이면 어디든 입지하는 산업." }
                ]
            }
        ]
    },
    "econ-2": {
        title: "크리스탈러의 중심지 이론",
        subtitle: "도시와 상권이 형성되는 공간적 균형의 원리",
        badge: "II",
        theme: "#6c5ce7",
        iconSVG: `<path d="M100,20 L170,60 L170,140 L100,180 L30,140 L30,60 Z" fill="none" stroke="currentColor" stroke-width="8" opacity="0.3"/><circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.6"/>`,
        criteria: [
            { icon: "⚖️", label: "핵심 원리", text: "공간적 균형 (벌집)" },
            { icon: "📐", label: "결정 요인", text: "요구치 < 도달범위" },
            { icon: "🏙️", label: "주요 대상", text: "도시 계층, 상권" },
            { icon: "👤", label: "이론가", text: "발터 크리스탈러" }
        ],
        subCards: [
            {
                title: "입지 조건과 계층 구조", desc: "상점이 유지되기 위한 최소 조건과 최대 범위",
                items: [
                    { name: "최소 요구치 (Threshold)", examples: ["편의점 2천명", "백화점 50만명", "종합병원 30만명", "손익분기점"], meta: "📉 이윤 창출의 하한선 · 👥 필수 배후지", desc: "중심 기능이 유지되기 위해 필요한 최소한의 수요 수준." },
                    { name: "재화의 도달 범위 (Range)", examples: ["도보 10분", "지하철 역세권", "배달 가능 지역", "통행 비용"], meta: "📏 판매 가능 상한선 · 🚫 수요 한계점", desc: "소비자가 통행 비용을 감수하고 재화를 구매하러 오는 공간적 한계." },
                    { name: "고차 계층 (High Order)", examples: ["상급 종합병원", "오페라 하우스", "명품 브랜드", "국제공항"], meta: "🏢 희소 기능 · 🌐 광역 서비스", desc: "전문적이고 고가인 재화를 공급. 배후지가 넓고 중심지 간 거리가 멀며 수는 적다." },
                    { name: "저차 계층 (Low Order)", examples: ["1차 진료 의원", "편의점", "베이커리", "우체국"], meta: "🏠 일상 기능 · 🚶 근린 서비스", desc: "일상적이고 저가인 재화를 공급. 배후지가 좁고 중심지 간 거리가 가까우며 수는 많다." }
                ]
            },
            {
                title: "포섭 원리와 공간 모델", desc: "왜 중심지는 벌집 모양(육각형)으로 배치되는가",
                items: [
                    { name: "시장 원리 (K=3)", examples: ["최소 중심지 수", "효율성 극대화", "1/3씩 포섭"], meta: "🛒 재화 도달 범위 · 📐 1/3 포섭", desc: "가장 적은 수의 중심지로 가장 넓은 지역에 재화를 공급하는 효율성 중심 모델." },
                    { name: "교통 원리 (K=4)", examples: ["교통로 입지", "접근성", "1/2씩 포섭"], meta: "🚦 접근성 극대화 · 🛣️ 교통축 중시", desc: "중심지들이 주요 교통로 선상에 위치하여 이동 효율을 극대화한 모델." },
                    { name: "행정 원리 (K=7)", examples: ["행정 구역", "통치 효율", "완전 포섭"], meta: "🏛️ 통치 효율성 · 🛡️ 완전 포섭", desc: "행정 구역의 분할을 막고 통치 효율을 높이기 위해 하위 중심지를 완전히 포함하는 모델." },
                    { name: "뢰쉬의 수정 모델", examples: ["소비자 밀도", "지형 반영", "가변적 K값"], meta: "🏭 경제적 경관 · 🧩 현실적 변형", desc: "소비자 밀도나 지형 등 현실적 요소를 고려하여 K값이 유연하게 변하는 벌집 구조." }
                ]
            },
            {
                title: "중심지의 동태적 변화", desc: "기술과 사회 변화에 따라 움직이는 상권의 지도",
                items: [
                    { name: "인구 밀도와 구매력", examples: ["강남의 편의점 간격", "시골의 면사무소 거리", "소득 수준"], meta: "👥 수요 밀도 · 💰 구매력 효과", desc: "인구 밀도가 높고 소득이 높을수록 최소 요구치 공간은 좁아져 중심지 간격이 조밀해짐." },
                    { name: "정기 시장의 소멸과 상설화", examples: ["5일장", "상설 시장", "인구 증가", "수요 충족"], meta: "🎪 주기적 시장 · 🏪 상설화", desc: "수요가 최소 요구치에 미달할 때 열리던 정기 시장이 인구 증가로 상설 시장화되는 과정." },
                    { name: "교통 발달과 빨대 효과", examples: ["KTX 개통 효과", "대형 마트", "골목 상권 쇠퇴", "메가시티"], meta: "🚄 시공간 압축 · 🥤 지방 소멸", desc: "교통 혁신으로 도달 범위가 확대되면 소비자가 고차 중심지로 쏠려 저차 중심지가 쇠퇴하는 현상." },
                    { name: "정보 통신과 탈공간화", examples: ["아마존", "쿠팡", "새벽 배송", "무점포 소매업"], meta: "💻 e-커머스 · 📦 물리적 거리 소멸", desc: "인터넷 쇼핑의 등장으로 물리적 거리가 무의미해지고, 최소 요구치의 개념이 사이버 공간으로 확장됨." }
                ]
            }
        ]
    },
    "econ-3": {
        title: "상업 입지론",
        subtitle: "소비자의 발길을 이끄는 점포와 상권의 비밀",
        badge: "III",
        theme: "#e84393",
        iconSVG: `<path d="M100,20 L160,180 L20,80 H180 L40,180 Z" fill="none" stroke="currentColor" stroke-width="10" opacity="0.3"/><circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🛒", label: "핵심 원리", text: "소비자 유인" },
            { icon: "🏪", label: "분석 단위", text: "개별 점포 & 상권" },
            { icon: "📏", label: "주요 변수", text: "거리, 면적, 경쟁" },
            { icon: "🎓", label: "이론가", text: "넬슨, 레일리, 허프" }
        ],
        subCards: [
            {
                title: "상권의 법칙: 중력과 확률", desc: "소비자는 어디로 움직이는가",
                items: [
                    { name: "레일리의 소매인력 법칙", examples: ["상권 경계", "구매력 흡수", "도시 간 경쟁", "결정론적 모델"], meta: "🍎 만유인력 응용 · 🏙️ 큰 도시가 유리", desc: "두 도시가 소비자를 끌어당기는 힘은 인구에 비례하고 거리의 제곱에 반비례한다는 '소매 중력'의 원리." },
                    { name: "컨버스의 분기점 모형", examples: ["1: 루트(인구비)", "시간 거리", "구매 유출입", "수정 중력 모형"], meta: "➗ 수학적 공식 · 🚧 상권 경계 확정", desc: "레일리 법칙을 발전시켜, 두 도시 사이의 상권 경계 지점(분기점)을 수학적 공식을 통해 정확히 산출." },
                    { name: "허프의 확률 모형", examples: ["쇼핑센터 입지", "선택 확률", "마찰 계수", "소비자 효용"], meta: "🎲 확률론적 접근 · 🛍️ 대도시 내 상권", desc: "소비자가 특정 상점을 선택할 확률은 매장 면적에 비례하고 거리에 반비례한다는 소비자 행동 기반의 확률 모델." },
                    { name: "호텔링의 입지 모델", examples: ["내쉬 균형", "집적의 원인", "해수욕장", "정치적 중도"], meta: "🍦 아이스크림 가게 · ⚔️ 최소 차별화 원칙", desc: "경쟁 관계에 있는 두 점포가 시장 점유율을 높이기 위해 결국 중앙으로 모이게 되는 현상을 설명하는 게임 이론." }
                ]
            },
            {
                title: "점포의 입지 유형 (넬슨)", desc: "업종에 따른 최적의 장소",
                items: [
                    { name: "집심성 점포", examples: ["백화점", "귀금속점", "대형 서점", "영화관"], meta: "🏢 도심 입지 · 💍 전문품/선매품", desc: "배후지가 넓고 도심 한복판에 입지해야 유리한 업종. 소비자가 기꺼이 찾아오는 전문품점 등." },
                    { name: "집재성 점포", examples: ["가구 거리", "전자 상가", "공구 상가", "중고차 매매 단지"], meta: "🤝 동종 업종 집적 · 🛋️ 비교 구매", desc: "같은 업종끼리 모여 있어야 비교 구매가 쉬워져 고객 유입이 늘어나는 업종." },
                    { name: "산재성 점포", examples: ["편의점", "세탁소", "목욕탕", "제과점"], meta: "🏘️ 분산 입지 · 🛒 편의품", desc: "일상용품을 취급하여 서로 떨어져 있어야 상권 침해를 막고 유리한 업종." },
                    { name: "국부적 집중성 점포", examples: ["철물점", "농기구점", "문방구", "비료 가게"], meta: "🏠 근린 중심 · 🛠️ 생활 밀착형", desc: "도심은 아니지만 특정 지역의 중심지(동네 요지)에 모여 있는 것이 유리한 업종." }
                ]
            },
            {
                title: "현대 상업 입지의 변화", desc: "전통적 공간 법칙의 파괴와 재구성",
                items: [
                    { name: "몰링 (Malling)", examples: ["스타필드", "이케아", "롯데몰", "교외형 아울렛"], meta: "🎡 원스톱 라이프 · 🚗 교외 입지", desc: "쇼핑, 여가, 외식이 한곳에서 해결되는 거대 소비 공간. 도심이 아닌 교외 IC 근처의 저렴한 부지에 입지." },
                    { name: "카테고리 킬러", examples: ["하이마트", "토이저러스", "올리브영", "ABC마트"], meta: "🦖 전문성+할인 · 🛒 시장 지배력", desc: "특정 품목(가전, 장난감 등)만 전문적으로 취급하며 압도적인 물량과 가격으로 경쟁자를 제압하는 대형 전문점." },
                    { name: "상권의 생애주기", examples: ["경리단길", "성수동", "망리단길", "젠트리피케이션"], meta: "🎸 핫플레이스 · ☕ 상권 획일화", desc: "개성 있는 골목 상권이 뜨면 임대료가 상승해 원주민 가게가 밀려나고 대형 프랜차이즈만 남는 순환 과정." },
                    { name: "옴니 채널", examples: ["O2O 서비스", "쇼루밍 족", "무인 매장", "팝업 스토어"], meta: "📱 온-오프라인 통합 · 📦 물류 혁명", desc: "온라인과 오프라인의 경계가 소멸. 오프라인 매장은 체험형 쇼룸(Showroom)이 되고 결제는 모바일로 이루어짐." }
                ]
            }
        ]
    }
};

// [신규] 촌락과 농업 공간 데이터 (HTML/CSS 통합본)
const ruralData = {
    "rural-1": {
        title: "촌락의 형태론: 집촌과 산촌",
        subtitle: "뭉치거나 흩어지거나, 공간 배열의 문법",
        badge: "I",
        theme: "#6ab04c",
        iconSVG: `<path d="M60,60 H140 V140 H60 Z M100,60 V140 M60,100 H140" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "🤝", label: "집촌 (Nucleated)", text: "용수 부족, 방어, 협동" },
            { icon: "🏡", label: "산촌 (Dispersed)", text: "넓은 경지, 치안 안정" },
            { icon: "📐", label: "배열 형태", text: "괴촌(불규칙), 가촌(선형)" }
        ],
        subCards: [
            {
                title: "집촌: 응집과 협동", desc: "가옥이 밀집하여 형성된 촌락. 물이 귀하거나(오아시스), 방어와 협동이 필요한 곳(벼농사)에서 발달.",
                items: [
                    { name: "괴촌 (Clustered)", examples: ["독일 로텐부르크", "프랑스 프로방스", "한국 씨족 마을", "이탈리아 토스카나"], meta: "🏚️ 자연 발생 · 🤝 공동체 결속", desc: "가옥이 불규칙하게 덩어리져 모여 있는 가장 자연발생적인 형태." },
                    { name: "가촌 (Street Village)", examples: ["독일 숲길 마을(Waldhufendorf)", "일본 역참 마을(슈쿠바)", "미국 메인 스트리트"], meta: "🛣️ 교통로 중심 · 🛒 상업 기능 혼재", desc: "주요 도로를 따라 가옥이 길게 늘어선 형태. 교통과 상업 기능 결합." },
                    { name: "열촌 (Linear Village)", examples: ["라인강변", "방글라데시 델타", "한국 해안가", "네덜란드 간척지"], meta: "🌊 지형 제약 · 📏 선형 배열", desc: "하천 제방이나 해안선 등 자연 지형을 따라 일렬로 늘어선 형태." }
                ]
            },
            {
                title: "산촌: 독립과 효율", desc: "가옥이 서로 떨어져 분산된 형태. 경작지가 넓거나(신대륙), 치안이 안정된 곳, 혹은 산간 지대에서 나타남.",
                items: [
                    { name: "신대륙 팜 (Farm)", examples: ["미국 중서부", "아르헨티나 팜파스", "호주 목장"], meta: "🚜 기계화 영농 · 🏡 직주 일치", desc: "광활한 토지를 효율적으로 관리하기 위해 경작지 한가운데 거주." },
                    { name: "산지 분산촌", examples: ["알프스 산장", "히말라야 산간", "한국 태백산지"], meta: "⛰️ 지형적 분산 · 🌲 화전/임업", desc: "좁은 경지가 여기저기 흩어져 있어 가옥도 분산된 형태." }
                ]
            },
            {
                title: "사회적 형태: 혈연과 종교", desc: "자연환경뿐 아니라 사회적 유대가 빚어낸 독특한 촌락 형태.",
                items: [
                    { name: "씨족 촌락 (Clan Village)", examples: ["안동 하회마을", "중국 객가 토루", "경북 북부 씨족촌"], meta: "👨‍👩‍👧‍👦 혈연 공동체 · 🏯 방어적 구조", desc: "같은 성씨가 모여 사는 혈연 중심 마을. (동아시아의 특징)" },
                    { name: "종교 촌락", examples: ["미국 아미쉬 마을", "유타주 몰몬교", "유럽 수도원 마을"], meta: "✝️ 신앙 공동체 · 🛡️ 외부와 격리", desc: "박해를 피하거나 신앙을 위해 뭉친 격리된 공동체." }
                ]
            }
        ]
    },
    "rural-2": {
        title: "촌락의 입지: 물과 땅의 선택",
        subtitle: "득수와 피수, 생존을 위한 최적의 장소",
        badge: "II",
        theme: "#f0932b",
        iconSVG: `<circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.5"/><path d="M100,85 V20 M100,115 V180 M85,100 H20 M115,100 H180" stroke="currentColor" stroke-width="6" opacity="0.3"/>`,
        criteria: [
            { icon: "💧", label: "득수 (Wet-point)", text: "물 얻기 좋은 곳" },
            { icon: "🏞️", label: "피수 (Dry-point)", text: "물 피하기 좋은 곳" },
            { icon: "🛡️", label: "기능 (Strategic)", text: "방어, 교통, 교역" }
        ],
        subCards: [
            {
                title: "득수 취락: 물을 찾아서", desc: "물을 구하기 어려운 건조/투수 지역에서 수원지에 입지.",
                items: [
                    { name: "선단(扇端) 취락", examples: ["사천 선상지", "일본 부채꼴 평야", "이탈리아 피에몬테"], meta: "💧 용천대 · 🌾 논농사 가능", desc: "선상지 말단부, 지하수가 솟아오르는 용천대에 입지." },
                    { name: "용천대 취락", examples: ["제주도 해안 마을", "일본 구마모토", "알프스 산기슭"], meta: "💧 지하수 용출 · 🏞️ 산록 완사면", desc: "투수층과 불투수층의 경계에서 지하수가 솟아나는 용천대를 따라 형성." },
                    { name: "오아시스 취락", examples: ["이집트 시와", "중국 둔황", "사우디 알하사"], meta: "🌴 사막의 섬 · 🐫 대상 무역 거점", desc: "사막 한가운데 지하수가 자연 노출된 곳." },
                    { name: "인공 수로 취락", examples: ["이란 카나트", "중국 카레즈", "오만 팔라지"], meta: "⛏️ 지하 터널 · 💧 인공 오아시스", desc: "산기슭 지하수를 인공 터널로 끌어와 건조한 평원에 만든 생명의 젖줄." }
                ]
            },
            {
                title: "피수 취락: 물을 피해서", desc: "홍수나 습지를 피해 약간 높은 곳에 입지.",
                items: [
                    { name: "자연제방 취락", examples: ["나일강변", "황허 하류", "한강 하류 (과거)"], meta: "🧱 홍수 방어 · 🛤️ 배수 양호", desc: "범람원의 자연적으로 돋아난 미고지(微高地)에 입지하여 침수 피해 방지." },
                    { name: "터돋움집 취락", examples: ["네덜란드 테르프(Terp)", "방글라데시 델타", "낙동강 하구"], meta: "🏗️ 인공 대지 · ☔ 상습 침수지", desc: "인공적으로 터를 돋우어 집을 짓는 형태." }
                ]
            },
            {
                title: "특수 입지: 방어와 교통", desc: "군사, 교통 등 특수한 목적을 위해 전략적 위치에 입지.",
                items: [
                    { name: "방어 취락 (Acropolis)", examples: ["그리스 아테네", "이탈리아 산악 도시", "예멘 산악 요새"], meta: "🏰 산성 마을 · ⚔️ 군사적 요충", desc: "외적 방어를 위해 산 정상이나 언덕 위 요새에 입지." },
                    { name: "영(嶺)/나루터 취락", examples: ["문경새재(조령)", "스위스 알프스 고개", "라인강 나루"], meta: "🛤️ 교통 결절 · 🏨 역참/숙박", desc: "고개 밑이나 강을 건너는 지점에 형성된 교통의 요지." },
                    { name: "어촌 (Fishing Village)", examples: ["노르웨이 로포텐", "이탈리아 친퀘테레", "한국 남해안"], meta: "⚓ 항구 중심 · 🐟 반농반어", desc: "만(灣), 곶, 섬 등 배를 대기 좋은 곳에 입지." }
                ]
            }
        ]
    },
    "rural-3": {
        title: "거리의 경제학: 튀넨의 고리",
        subtitle: "지대와 운송비가 결정하는 토지 이용의 법칙",
        badge: "III",
        theme: "#be2edd",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="4" opacity="0.2"/><circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="6" opacity="0.3"/><circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "📈", label: "핵심 개념", text: "입지 지대" },
            { icon: "🚛", label: "주요 변수", text: "운송비" },
            { icon: "🏞️", label: "전제 조건", text: "고립국, 균질 평야" },
            { icon: "👤", label: "이론가", text: "J. H. von Thünen" }
        ],
        subCards: [
            {
                title: "이론의 핵심: 입지 지대와 지대 곡선", desc: "시장과의 거리에 따라 달라지는 지대 지불 능력이 농업의 종류를 결정한다는 원리.",
                items: [
                    { name: "입지 지대 (Locational Rent)", examples: ["운송비-지대 반비례", "부패와 운송비 민감도"], meta: "💰 최대 이윤 추구 · 📉 한계 지대점", desc: "`지대 = 시장 가격 - (생산비 + 운송비)`" },
                    { name: "지대 곡선 (Bid Rent Curve)", examples: ["낙농업(가장 가파름)", "곡물(완만함)", "목축(가장 완만함)"], meta: "📐 기울기 = 운송비 민감도 · 🏆 입지 경쟁", desc: "지대 지불 능력을 연결한 선. 기울기가 가장 가파른 활동이 도심에 입지." }
                ]
            },
            {
                title: "고립국 모델: 6개의 동심원", desc: "고립된 단일 시장을 중심으로 6가지 농업 활동이 운송비에 따라 동심원 형태로 배치된다는 고전적 모델.",
                items: [
                    { name: "제1지대: 자유 농업", examples: ["원예 농업 (채소/꽃)", "낙농업 (우유)"], meta: "🥬 집약적 · 🚛 운송비 높음", desc: "쉽게 상하고 운송비가 비싸 시장 바로 근처에 입지." },
                    { name: "제2지대: 임업", examples: ["땔감", "건축 자재", "무게/부피 큼"], meta: "🌲 운송비 높음 · 🔥 과거의 에너지원", desc: "무겁고 부피가 커서 운송비가 많이 드는 목재 생산지." },
                    { name: "제3~5지대: 곡물 재배", examples: ["6년 윤작", "3포식 농업", "휴경(Fallow)"], meta: "🌾 저장성 높음 · 🚜 조방적", desc: "저장성이 좋아 운송비 부담이 적은 곡물 지대. 시장에서 멀어질수록 휴경지가 늘어남." },
                    { name: "제6지대: 방목", examples: ["목축", "버터/치즈 가공", "자체 이동 가능"], meta: "🐄 운송비 최저 · 🧀 부가가치 가공", desc: "가축 스스로 이동 가능하고, 버터/치즈로 가공하면 운송이 용이해져 가장 먼 곳에 입지." }
                ]
            },
            {
                title: "이론의 변용과 현대적 의의", desc: "교통, 기술, 다중 시장 등을 고려하여 이론을 확장하고 현대 도시 공간을 분석하는 틀.",
                items: [
                    { name: "가항 하천과 교통로", examples: ["라인강변 농업", "고속도로 IC 인근", "철도역 주변"], meta: "🚤 운송비 절감 ·  ❌ 동심원 왜곡", desc: "주변에 하천 및 도로가 있으면 동심원 형태가 길게 왜곡됨." },
                    { name: "제2의 시장 (위성 도시)", examples: ["수도권 위성 도시", "지방 거점 도시"], meta: "🏙️ 다중 시장 · 🧩 복합적 구조", desc: "주 시장 외에 작은 시장이 존재하면, 각 시장도 동심원 구조 형성." },
                    { name: "기술 발달과 세계화", examples: ["칠레산 포도", "케냐산 장미", "뉴질랜드산 키위"], meta: "✈️ 시공간 압축 · 🌐 글로벌 푸드 시스템", desc: "냉장과 항공 운송, 운송비 제약이 약화되고, 세계가 하나의 시장으로 통합." }
                ]
            }
        ]
    },
    "rural-4": {
        title: "휘틀지의 농업 지역 구분",
        subtitle: "기후와 자본이 빚어낸 13가지 농업의 얼굴",
        badge: "IV",
        theme: "#4834d4",
        iconSVG: `<path d="M20,20 H180 V180 H20 Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/><path d="M20,100 H180 M100,20 V180" stroke="currentColor" stroke-width="1" stroke-dasharray="5 5" opacity="0.3"/><rect x="80" y="80" width="40" height="40" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🎯", label: "목적", text: "자급적 vs 상업적" },
            { icon: "📈", label: "생산성", text: "집약도 (노동/토지)" },
            { icon: "🐄", label: "가축 결합", text: "경작 vs 목축 vs 혼합" },
            { icon: "👤", label: "이론가", text: "D. Whittlesey" }
        ],
        subCards: [
            {
                title: "전통적 자급 농업", desc: "낮은 기술 수준과 최소한의 자본으로 생존을 위해 이루어지는 농업.",
                items: [
                    { name: "유목", examples: ["사하라 사막", "몽골 초원", "시베리아"], meta: "🏜️ 건조/한대 · 🐫 이동 생활", desc: "물과 풀을 찾아 가축과 함께 이동하는 가장 오래된 목축." },
                    { name: "이동식 화전 농업", examples: ["아마존 열대우림", "콩고 분지", "보르네오섬"], meta: "🔥 열대우림 · 📉 낮은 생산성", desc: "숲을 태워 밭을 만들고, 지력이 다하면 다른 곳으로 이동." },
                    { name: "초보적 정착 농업", examples: ["열대 저지대", "카사바/얌 재배", "과도기적 형태"], meta: "🌱 화전 이후 · 🏡 정착 시도", desc: "화전 농업과 집약적 농업 사이의 과도기적 단계." },
                    { name: "집약적 자급 농업 (벼)", examples: ["중국 화남", "동남아 델타", "인도 벵골"], meta: "🍚 몬순 아시아 · 👨‍🌾 높은 인구 부양력", desc: "몬순 아시아에서 높은 인구 부양력을 위해 노동력을 집약 투입." },
                    { name: "집약적 자급 농업 (벼 이외)", examples: ["중국 화북", "인도 데칸 고원", "멕시코 고원"], meta: "🌾 벼농사 이외 · 💧 강수량 부족", desc: "벼농사가 어려운 곳에서 밀, 옥수수, 콩 등을 집약적으로 재배." }
                ]
            },
            {
                title: "상업적 대규모 농업", desc: "넓은 토지와 기계를 활용하여 특정 작물/가축을 대량 생산하는 자본 집약적 농업.",
                items: [
                    { name: "기업적 곡물 농업", examples: ["북미 대평원", "아르헨티나 팜파스", "호주 밀 벨트"], meta: "🚜 기계화 · 🌾 세계의 빵공장", desc: "광대한 토지에서 기계를 이용해 밀, 옥수수 등을 대량 생산." },
                    { name: "기업적 방목", examples: ["미국 서부", "브라질 세하두", "호주 아웃백"], meta: "🤠 광활한 목초지 · 🥩 육류 수출", desc: "건조 지역에서 소나 양을 대규모로 방목." },
                    { name: "플랜테이션", examples: ["중남미", "동남아", "서아프리카"], meta: "🌴 단일 경작 · 📉 식민 유산", desc: "열대/아열대 지역에서 선진국의 자본과 기술로 단일 상품 작물을 재배." }
                ]
            },
            {
                title: "상업적 집약 농업", desc: "좁은 토지에서 기술과 자본을 집중 투입하여 높은 부가가치를 창출하는 농업.",
                items: [
                    { name: "혼합 농업", examples: ["유럽 중부", "미국 콘벨트 동부"], meta: "🌽 사료 작물 · 🐖 가축 사육", desc: "작물 재배와 가축 사육을 결합하여 지력을 유지하고 위험을 분산." },
                    { name: "낙농업", examples: ["북미 오대호 연안", "북서유럽", "뉴질랜드"], meta: "🥛 도시 근교 · 🧀 냉장 기술 발달", desc: "대도시 근교에서 신선한 우유나 유제품을 생산하는 기술/자본 집약 산업." },
                    { name: "지중해식 농업", examples: ["남유럽", "캘리포니아", "칠레 중부", "남아공"], meta: "🍇 수목 농업 · ☀️ 여름 건조", desc: "여름의 고온 건조를 견디는 수목 농업(올리브, 포도)과 겨울 밀농사 결합." },
                    { name: "상업적 원예 농업", examples: ["미국 남동부", "네덜란드"], meta: "🚚 신선도 중요 · 🏙️ 도시 근교", desc: "대도시 근교에서 신선한 채소, 과일, 화훼를 집약적으로 재배." },
                    { name: "특수 원예 농업", examples: ["한국(인삼)", "중국(약초)", "유럽(버섯)"], meta: "🌿 고부가가치 · 🔬 특수 기술", desc: "특정 기후나 토양에서 인삼, 약초, 버섯 등 특용 작물을 재배." }
                ]
            }
        ]
    },
    "rural-5": {
        title: "현대 농업의 구조 변동",
        subtitle: "자본과 기술이 재편하는 글로벌 푸드 시스템",
        badge: "V",
        theme: "#636e72",
        iconSVG: `<circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/><path d="M100,20 L180,180 H20 Z" fill="currentColor" opacity="0.3"/>`,
        criteria: [
            { icon: "🌐", label: "세계화", text: "푸드 마일리지" },
            { icon: "🏙️", label: "도시화", text: "교외화, 도시 농업" },
            { icon: "🏢", label: "자본화", text: "애그리비즈니스" }
        ],
        subCards: [
            {
                title: "글로벌 푸드 시스템과 시공간 압축", desc: "냉장 기술과 항공 운송이 '거리'의 의미를 파괴하고, 전 지구가 하나의 식탁으로 연결되는 과정.",
                items: [
                    { name: "푸드 마일리지", examples: ["칠레산 포도", "노르웨이산 연어", "뉴질랜드산 키위"], meta: "✈️ 항공 운송 · 🌍 탄소 발자국", desc: "식료품이 생산지에서 소비지까지 이동하는 거리. 탄소 발자국과 직결됨." },
                    { name: "계절의 파괴", examples: ["겨울의 칠레산 체리", "여름의 호주산 오렌지"], meta: "🔄 계절 역전 · 🚢 콜드체인", desc: "남반구와 북반구의 계절 차이를 이용해 1년 내내 신선 과일을 공급." }
                ]
            },
            {
                title: "도시화와 촌락의 변화", desc: "도시의 팽창이 농촌의 공간과 기능을 어떻게 바꾸고 있는가.",
                items: [
                    { name: "교외화와 근교 농업", examples: ["수도권 비닐하우스", "네덜란드 화훼 단지", "미국 트럭 농업"], meta: "🚗 도시 근접성 · 🥬 상업적 원예", desc: "도시 근교에서 신선 채소, 화훼 등 고부가가치 작물을 집약적으로 재배." },
                    { name: "촌락의 소멸과 재활성화", examples: ["일본 한계 마을", "이탈리아 1유로 집", "농촌 관광(Agritourism)"], meta: "📉 인구 과소 · 🏡 귀농/귀촌", desc: "이촌향도로 인한 한계 마을 문제와, 이를 극복하려는 새로운 시도들." }
                ]
            },
            {
                title: "기술 혁신과 미래의 농업", desc: "데이터와 생명 공학이 주도하는 제4의 농업 혁명.",
                items: [
                    { name: "스마트팜과 도시 농업", examples: ["수직 농장(Vertical Farm)", "식물 공장", "아쿠아포닉스"], meta: "💡 기술 집약 · 🏢 공간 효율 극대화", desc: "ICT 기술로 환경을 제어하여 도심에서도 식량을 생산." },
                    { name: "애그리비즈니스와 종자 전쟁", examples: ["몬산토(바이엘)", "카길", "GMO 논쟁", "토종 종자 보존"], meta: "🏢 거대 자본 · 🧬 종자 독점", desc: "종자부터 비료, 유통까지 장악한 거대 기업과 식량 주권 문제." }
                ]
            }
        ]
    }
};

// [신규] 도시의 시대적 변화 데이터 (HTML/CSS 통합본)
const urbanData = {
    "urban-1": {
        title: "성벽 안의 도시, 전산업 도시",
        subtitle: "종교와 정치, 그리고 길드로 엮어진 공간",
        badge: "I",
        theme: "#fdcb6e",
        iconSVG: `<rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" stroke-width="10" opacity="0.2"/><path d="M60,60 H140 V140 H60 Z M100,60 V140 M60,100 H140" fill="none" stroke="currentColor" stroke-width="6" opacity="0.4"/>`,
        criteria: [
            { icon: "🚶‍♂️", label: "핵심 기술", text: "비생물 동력 (인력/축력)" },
            { icon: "👑", label: "사회 구조", text: "소수 엘리트 지배" },
            { icon: "🛠️", label: "경제 기반", text: "길드 중심 수공업" },
            { icon: "👤", label: "이론가", text: "기데온 쇼버그" }
        ],
        subCards: [
            {
                title: "형태와 구조: 성벽과 중심", desc: "도시의 물리적 형태를 결정한 방어와 권력의 상징",
                items: [
                    { name: "성곽 (City Walls)", examples: ["카르카손", "서울 한양도성", "시안 성벽"], meta: "🏰 방어와 통제 · 🧱 도시의 경계", desc: "외부 세계와의 단절이자 방어의 최전선. 세금을 징수하던 통제의 경계." },
                    { name: "중심 광장 (Central Square)", examples: ["로마 포룸", "아테네 아고라", "시에나 캄포 광장"], meta: "🏛️ 공공 공간 · 🗣️ 소통과 교역", desc: "정치, 종교, 상업이 모두 이루어지던 도시의 심장." },
                    { name: "종교/정치 시설", examples: ["파리 노트르담", "베이징 자금성", "프라하 성"], meta: "⛪️ 신의 권위 · 👑 왕의 권력", desc: "도시의 스카이라인을 지배하며 권력을 과시하던 대성당, 성, 궁전." },
                    { name: "유기적 도로망", examples: ["베네치아 골목", "페스 메디나", "톨레도 구시가지"], meta: "🚶‍♂️ 보행자 중심 · 🕸️ 미로형 구조", desc: "자동차가 없던 시절, 보행과 지형에 맞춰 형성된 좁고 구불구불한 길." }
                ]
            },
            {
                title: "기능과 질서: 길드와 계급", desc: "성벽 안에서 조직되고 분리된 삶의 방식",
                items: [
                    { name: "길드와 직인 거리", examples: ["피렌체 장인 지구", "런던 플리트가", "교토 니시키 시장"], meta: "🛠️ 직업별 거주 · 👨‍🏫 기술 전수", desc: "같은 직업의 장인들이 모여 살며 기술을 전수하던, 생산과 주거가 일치된 공간." },
                    { name: "계급적 공간 분리", examples: ["중심부 지배층", "주변부 피지배층", "카스트"], meta: "👑 중심부 귀족 · 🌾 주변부 평민", desc: "지배층은 중심부에, 피지배층은 주변부에 거주하며 사회적 위계가 공간에 반영." },
                    { name: "종교/인종적 게토", examples: ["베네치아 게토", "유대인 지구(쿼터)", "차이나타운"], meta: "✡️ 공동체 보호 · 🚧 사회적 차별", desc: "특정 종교나 민족이 분리되어 거주하던 구역. 공동체 구심점이자 차별의 공간." },
                    { name: "시장의 역할", examples: ["이스탄불 그랜드 바자르", "런던 버러 마켓", "서울 남대문시장"], meta: "💰 경제의 심장 · 🎪 정기 시장", desc: "도시의 경제적 생명선. 중앙 시장과 소규모 시장들이 도시 곳곳에 활력을 불어넣던 장소." }
                ]
            },
            {
                title: "지역별 도시 모델", desc: "각 문명권이 발전시킨 독자적인 도시 형태",
                items: [
                    { name: "유럽의 중세 도시", examples: ["브뤼헤", "톨레도", "로텐부르크", "두브로브니크"], meta: "🇪🇺 유기적 성장 · 🏰 성과 교회", desc: "성과 교회를 중심으로 불규칙하게 성장한 유기적 도시." },
                    { name: "이슬람 도시 (메디나)", examples: ["마라케시", "다마스쿠스", "페스", "알제"], meta: "☪️ 프라이버시 중시 · 🕌 모스크와 수크", desc: "사생활 보호를 위한 막다른 골목과 안뜰 구조. 모스크와 시장(수크)이 중심." },
                    { name: "동아시아의 계획 도시", examples: ["장안(시안)", "교토", "한양(서울)", "자금성"], meta: "🇨🇳 격자형 계획 · 🏯 궁궐 중심", desc: "풍수와 우주관에 따라 바둑판 모양으로 설계된 도시. 성벽으로 둘러싸인 궁궐이 중심." }
                ]
            }
        ]
    },
    "urban-2": {
        title: "굴뚝과 자동차의 도시, 포디즘 도시",
        subtitle: "대량생산과 대량소비의 시대를 연 산업 혁명과 교외화",
        badge: "II",
        theme: "#b2bec3",
        iconSVG: `<rect x="60" y="80" width="80" height="40" fill="none" stroke="currentColor" stroke-width="8" opacity="0.4"/><circle cx="80" cy="120" r="15" fill="currentColor" opacity="0.3"/><circle cx="120" cy="120" r="15" fill="currentColor" opacity="0.3"/><path d="M40,160 H160" stroke="currentColor" stroke-width="4" stroke-dasharray="10 5" opacity="0.2"/>`,
        criteria: [
            { icon: "⚙️", label: "핵심 기술", text: "내연기관 & 전력" },
            { icon: "🏭", label: "사회 구조", text: "노동자 vs 자본가" },
            { icon: "📦", label: "경제 기반", text: "공장제 대량생산" },
            { icon: "🏙️", label: "대표 도시", text: "디트로이트, 시카고" }
        ],
        subCards: [
            {
                title: "중심부의 변화: 굴뚝과 마천루", desc: "산업화가 빚어낸 생산과 관리의 거대 공간",
                items: [
                    { name: "공업 지역의 형성", examples: ["루르 공업지대", "맨체스터", "피츠버그", "디트로이트"], meta: "🏭 집적 이익 · 🚂 철도망 결절", desc: "철도와 항만 근처에 형성된 거대한 굴뚝의 숲. 도시의 스카이라인을 공장 연기가 지배." },
                    { name: "중심 업무 지구(CBD)", examples: ["맨해튼 미드타운", "시카고 루프", "런던 더 시티"], meta: "🏙️ 지대 입찰 · 🏢 수직적 성장", desc: "마천루가 솟아오른 도시의 새로운 심장. 금융, 보험, 기업 본사 등 관리 기능의 집결지." },
                    { name: "교통의 혁명", examples: ["전차(Tram)", "지하철", "중앙역(Grand Central)", "통근 열차"], meta: "🚃 대중교통 발달 · 🚉 도시의 관문", desc: "도시 내부를 연결하는 전차와 도시 간을 잇는 철도역이 새로운 도시의 관문이자 중심축으로 부상." },
                    { name: "도시 미화 운동", examples: ["파리 오스만 개조", "워싱턴 D.C. 내셔널 몰", "캔버라", "시카고 플랜"], meta: "🏛️ 권력의 과시 · ✨ 질서와 위생", desc: "산업화로 혼잡해진 도시에 질서를 부여하려던 시도. 웅장한 도로와 기념비적 광장 조성." }
                ]
            },
            {
                title: "주거 공간의 재편: 교외화와 확산", desc: "자동차와 함께 도시 밖으로 뻗어 나간 삶터",
                items: [
                    { name: "교외화의 시작", examples: ["마이카 시대", "고속도로망", "아메리칸 드림"], meta: "🚗 자동차 보급 · 🏡 쾌적한 외곽", desc: "자동차의 보급으로 부유층과 중산층이 매연 가득한 도심을 떠나 쾌적한 외곽 지역으로 이주." },
                    { name: "직주 분리", examples: ["통근 열차", "베드타운", "러시아워", "위성도시"], meta: "🚌 통근 문화 · 😴 베드타운", desc: "생산 공간(공장, CBD)과 주거 공간(교외 주택)이 명확히 분리됨. 매일 아침저녁으로 반복되는 통근 문화 탄생." },
                    { name: "계급에 따른 주거 분화", examples: ["이너 시티 빈곤", "교외 중산층", "슬럼 형성"], meta: "🏚️ 도심 공동화 · 🏘️ 교외 부유층", desc: "부유층은 쾌적한 교외에, 노동자들은 공장 주변의 비위생적인 주거지에 모여 살며 공간 분리가 심화됨." },
                    { name: "인종 분리의 메커니즘", examples: ["레드라이닝(금융 차별)", "블록버스팅(투기)", "화이트 플라이트"], meta: "🔴 제도적 차별 · 🏚️ 흑인 게토화", desc: "흑인 거주지에 대출을 제한한 '레드라이닝', 백인의 공포를 이용한 '블록버스팅'이 낳은 기형적 교외화와 인종 분리." },
                    { name: "레빗타운 (Levittown)", examples: ["뉴욕 롱아일랜드", "표준화 주택", "대량 공급"], meta: "🏘️ 공장식 주택 · 👨‍👩‍👧‍👦 베이비 붐", desc: "주택을 공장에서 찍어내듯 대량 생산하여 공급한 최초의 계획 교외 단지. 포디즘이 주거 공간까지 지배함." },
                    { name: "스프롤 현상", examples: ["로스앤젤레스", "피닉스", "개구리뛰기(Leap-frog)", "교통 체증"], meta: "📉 저밀도 확산 · 🌲 녹지 잠식", desc: "도시가 계획 없이 무질서하게 외곽으로 팽창하는 현상. 녹지 파괴와 기반 시설 비용 증가 초래." }
                ]
            },
            {
                title: "도시 생태학: 시카고 학파의 이론", desc: "도시 공간의 분화를 설명하는 고전 모델들",
                items: [
                    { name: "동심원 모델 (버제스)", examples: ["시카고", "단핵 구조", "침입과 천이"], meta: "🎯 5개 지대 · 🏚️ 점이 지대", desc: "도시가 생태계처럼 침입과 천이를 거치며 중심에서 외곽으로 5개의 동심원 지대를 형성한다는 이론." },
                    { name: "선형 모델 (호이트)", examples: ["교통축", "부채꼴 모양", "고급 주거지"], meta: "🚄 교통망 중시 · 🏘️ 주거 분리 심화", desc: "고급 주거지가 주요 교통로(철도, 간선도로)를 따라 부채꼴 모양으로 뻗어 나간다는 이론." },
                    { name: "다핵심 모델 (해리스 & 울만)", examples: ["런던", "도쿄", "기능별 분화", "현대 도시"], meta: "🌌 다핵 구조 · 🏭 기능별 집적", desc: "도시가 성장함에 따라 기능별로 특화된 여러 개의 핵(부도심, 공업핵 등)을 중심으로 재편된다는 이론." }
                ]
            }
        ]
    },
    "urban-3": {
        title: "네트워크와 포스트포디즘 도시",
        subtitle: "공업 그 너머로 향하는 도시의 새로운 길",
        badge: "III",
        theme: "#a29bfe",
        iconSVG: `<circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.6"/><circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/><path d="M100,100 L40,40 M100,100 L160,40 M100,100 L40,160 M100,100 L160,160" stroke="currentColor" stroke-width="2" opacity="0.3"/><circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.4"/><circle cx="160" cy="40" r="5" fill="currentColor" opacity="0.4"/><circle cx="40" cy="160" r="5" fill="currentColor" opacity="0.4"/><circle cx="160" cy="160" r="5" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "💻", label: "핵심 기술", text: "정보통신(IT)" },
            { icon: "🧠", label: "사회 구조", text: "창조 계급" },
            { icon: "💡", label: "경제 기반", text: "지식 서비스업" },
            { icon: "🏙️", label: "대표 도시", text: "실리콘밸리" }
        ],
        subCards: [
            {
                title: "도시 경제의 재편: 굴뚝 없는 공장", desc: "지식과 문화가 새로운 자본이 되다",
                items: [
                    { name: "탈공업화와 도시 재생", examples: ["런던 테이트 모던", "뉴욕 첼시 마켓", "빌바오 구겐하임", "서울 성수동"], meta: "🏗️ 브라운필드 재생 · 🎨 문화 주도", desc: "도심의 낡은 공장과 창고가 미술관, 오피스, 문화 공간으로 변신." },
                    { name: "테크노폴과 혁신 클러스터", examples: ["실리콘밸리", "소피아 앙티폴리스", "판교 테크노밸리", "시스타"], meta: "💡 지식 집약 · 🤝 산학 연계", desc: "대학과 연구소를 중심으로 첨단 기업들이 모여드는 새로운 혁신의 거점." },
                    { name: "생산자 서비스업의 성장", examples: ["월스트리트", "카나리 워프", "여의도 금융가", "강남 테헤란로"], meta: "💼 고부가가치 · 🏙️ 도심 집중", desc: "금융, 법률, 컨설팅 등 기업 활동을 지원하는 전문 서비스업이 도심의 핵심으로 부상." }
                ]
            },
            {
                title: "공간 구조의 변화: 압축과 연결", desc: "무분별한 확산을 멈추고 밀도를 높이다",
                items: [
                    { name: "다핵화와 네트워크 도시", examples: ["GTX(수도권)", "런던 크로스레일", "도쿄권 네트워크"], meta: "🌐 다핵 네트워크 · 🚄 광역 교통망", desc: "교통과 통신의 발달로 도시 기능이 여러 거점으로 분산되고 네트워크로 연결됨." },
                    { name: "압축 도시 (Compact City)", examples: ["홍콩 수직 도시", "밴쿠버즘", "역세권 개발(TOD)"], meta: "🏢 고밀도 복합 개발 · 🚶 보행 친화", desc: "무분별한 확산을 막고 도심의 밀도를 높여 직주근접과 에너지 효율을 추구." },
                    { name: "직주 혼재와 24시간 도시", examples: ["도심 주상복합", "밤의 경제", "활력 회복"], meta: "🌙 도심 활성화 · 🏠 복합 용도", desc: "업무 지구에 주거와 상업 기능이 결합되어 도심 공동화 현상을 극복." },
                    { name: "게이티드 커뮤니티", examples: ["요새 도시", "사유화된 공간", "보안 시스템", "양극화"], meta: "🔒 배타적 주거 · 🚧 도시의 파편화", desc: "담장과 보안 시스템으로 외부와 철저히 단절된 요새형 주거지. 양극화된 현대 도시의 배타적 단면." }
                ]
            },
            {
                title: "미래 도시의 지향점", desc: "기술과 환경이 공존하는 삶터",
                items: [
                    { name: "뉴 어버니즘 (New Urbanism)", examples: ["걷기 좋은 거리", "마을 공동체", "미국 시사이드"], meta: "🏡 인간 중심 설계 · 🚶 보행권 회복", desc: "자동차 중심의 교외화를 반성하고, 걷기 좋은 거리와 공동체를 복원하려는 운동." },
                    { name: "스마트 시티 (Smart City)", examples: ["송도 국제도시", "바르셀로나", "네옴 시티", "암스테르담"], meta: "🤖 IoT와 빅데이터 · 📱 효율적 관리", desc: "ICT 기술을 활용해 도시 문제를 해결하고 삶의 질을 높이는 지능형 도시." },
                    { name: "디지털 판옵티콘", examples: ["감시 사회", "CCTV·안면인식", "빅데이터 통제", "프라이버시"], meta: "👁️ 보이지 않는 시선 · 🔒 통제의 일상화", desc: "스마트 시티의 편리함 이면에 존재하는, 데이터와 CCTV를 통한 상시적인 감시와 통제의 메커니즘." },
                    { name: "지속 가능한 생태 도시", examples: ["프라이부르크", "코펜하겐", "쿠리치바", "탄소 중립"], meta: "🌿 탄소 중립 · ☀️ 신재생 에너지", desc: "탄소 중립을 실현하고 자연과 공존하는 녹색 도시 모델." }
                ]
            }
        ]
    },
    "urban-4": {
        title: "도시지리학의 핵심 이론과 모델",
        subtitle: "도시 공간을 해석하는 학술적 틀과 원리",
        badge: "IV",
        theme: "#636e72",
        iconSVG: `<path d="M100,20 L180,180 H20 Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.1"/><circle cx="100" cy="110" r="40" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/><rect x="80" y="90" width="40" height="40" fill="currentColor" opacity="0.3"/><path d="M20,100 H180 M100,20 V180" stroke="currentColor" stroke-width="1" stroke-dasharray="5 5" opacity="0.4"/>`,
        criteria: [
            { icon: "🔍", label: "분석 단위", text: "미시(내부) & 거시(체계)" },
            { icon: "🔄", label: "핵심 개념", text: "경쟁, 순환, 재구조화" },
            { icon: "📚", label: "학문 조류", text: "시카고 학파 → LA 학파" },
            { icon: "🎓", label: "주요 학자", text: "알론소, 하비, 소자" }
        ],
        subCards: [
            {
                title: "도시 내부 구조의 미시적 원리", desc: "공간을 차지하기 위한 경쟁과 순환의 메커니즘",
                items: [
                    { name: "침입, 경쟁, 천이", examples: ["이민자 유입", "슬럼화", "재개발", "인구 이동"], meta: "🌿 도시 생태학 · 🏙️ 차이나타운 형성", desc: "외부 집단(침입)이 기존 세력과 경쟁하여 지역의 주도권을 교체(천이)하는 도시 생태학적 변화 과정." },
                    { name: "여과 과정 (Filtering Process)", examples: ["하향 여과(슬럼)", "상향 여과(젠트리피케이션)", "공가(Emptying)"], meta: "🏠 주택의 생애주기 · 🔄 계층 순환", desc: "주택이 노후화됨에 따라 거주 계층이 고소득층에서 저소득층으로(하향), 혹은 재개발로 그 반대로(상향) 이동하는 순환." },
                    { name: "입찰 지대 이론 (Bid Rent Theory)", examples: ["도심 상업지구", "접근성", "지가 하락", "토지 이용 효율"], meta: "💰 윌리엄 알론소 · 📈 지대 곡선", desc: "도심 접근성에 따른 지대 지불 능력의 차이가 상업, 공업, 주거 등 토지 이용의 공간적 배치를 결정한다는 이론." }
                ]
            },
            {
                title: "도시의 진화와 거시 체계", desc: "역사와 경제 체제가 빚어낸 도시의 구조",
                items: [
                    { name: "조절 이론 (Regulation Theory)", examples: ["유연적 축적", "탈공업화", "신자유주의 도시", "데이비드 하비"], meta: "🏭 산업 집적 → 🌌 다핵 네트워크", desc: "소품종 대량 생산(포디즘)에서 유연한 다품종 생산(포스트포디즘)으로의 패러다임 전환이 도시 공간을 다핵 중심으로 바꾸었음을 설명하는 이론." },
                    { name: "디킨슨의 3지대론", examples: ["중세 성곽", "산업혁명 주거지", "현대 교외", "동심원적 확장"], meta: "⏳ 역사적 층위 · 🇪🇺 서유럽 도시", desc: "서유럽 도시의 역사적 성장 단계를 중앙지대(중세), 중간지대(산업혁명기), 외부지대(교외)의 동심원적 구조로 설명." },
                    { name: "커슬리의 수정 동심원 모델", examples: ["도심 재활성화", "하향 여과", "현대적 변용", "주거지 분화"], meta: "🏘️ 모델의 진화 · 🔄 쇠퇴와 재생", desc: "고전적 동심원 모델에 도심 재생과 젠트리피케이션 개념을 추가하여, 쇠퇴와 부활이 공존하는 현대 도시 구조를 설명." },
                    { name: "세계 도시 가설 (World City)", examples: ["글로벌 제어 센터", "생산자 서비스업", "사스키아 사센", "초국적 자본"], meta: "🌐 존 프리드먼 · 🏙️ 도시 위계", desc: "세계 경제 통합으로 인해 특정 거점 도시들이 자본과 정보를 통제하며 국가를 초월한 계층적 위계를 형성한다는 이론." }
                ]
            },
            {
                title: "포스트모던과 새로운 공간", desc: "기존의 틀을 깨는 현대 도시의 새로운 해석",
                items: [
                    { name: "LA 학파 (Los Angeles School)", examples: ["에드워드 소자", "마이클 디어", "포스트모더니즘", "요새 도시"], meta: "🎲 키노 캐피탈리즘 · 🌴 파편화된 도시", desc: "시카고 학파의 단핵 모델을 비판하며, 로스앤젤레스처럼 다핵적이고 무작위적인(Keno) 도시를 현대의 원형으로 제시." },
                    { name: "제3의 공간 (Thirdspace)", examples: ["앙리 르페브르", "공간의 생산", "실천적 공간", "사회적 공간"], meta: "👁️ 에드워드 소자 · ✨ 공간적 전회", desc: "물리적 공간(제1)과 관념적 공간(제2)을 넘어선, 실제 삶이 실천되고 체험되며 상상되는 '살아있는 공간'을 강조." },
                    { name: "에지 시티 (Edge City)", examples: ["타이슨스 코너", "직주근접", "쇼핑몰", "오피스 파크"], meta: "🏢 조엘 가로 · 🚗 자동차 중심", desc: "교외 주거지가 업무와 상업 기능을 갖춘 독립적인 중심지로 성장하여 모도시의 의존에서 벗어나는 현상." }
                ]
            }
        ]
    }
};

// [신규] 문화의 확산과 경관 데이터 (HTML/CSS 통합본)
const culturalData = {
    "cultural-1": {
        title: "문화의 전파와 확산",
        subtitle: "문화는 어떻게 퍼져나가는가?",
        badge: "I",
        theme: "#e17055",
        iconSVG: `<path d="M20,100 Q100,180 180,100" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/><circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.4"/>`,
        criteria: [
            { icon: "🌊", label: "확산 유형", text: "전염, 계층, 이주" },
            { icon: "🛡️", label: "장벽", text: "거리, 문화적 차이" },
            { icon: "🌍", label: "결과", text: "문화 변용, 동화" }
        ],
        subCards: [] // 내용 없음
    },
    "cultural-2": {
        title: "문화 경관: 땅에 새겨진 이야기",
        subtitle: "문화가 보여주는 상징적이고 일상적인 경관",
        badge: "II",
        theme: "#e17055",
        iconSVG: `<rect x="50" y="50" width="100" height="100" fill="currentColor" opacity="0.2"/>`,
        criteria: [
            { icon: "👁️", label: "경관 유형", text: "일상적 vs 상징적" },
            { icon: "📝", label: "해석", text: "텍스트로서의 경관" },
            { icon: "🏘️", label: "사례", text: "종교 건축, 촌락" }
        ],
        subCards: [] // 내용 없음
    },
    "cultural-3": {
        title: "장소 상실과 장소 만들기",
        subtitle: "세계화가 지운 장소성, 장소성을 되찾는 장소 마케팅",
        badge: "III",
        theme: "#e17055",
        iconSVG: `<path d="M100,20 L120,180 M80,180 L100,20" stroke="currentColor" stroke-width="4" opacity="0.3"/>`,
        criteria: [
            { icon: "🚫", label: "문제", text: "장소 상실(무장소성)" },
            { icon: "🎨", label: "대안", text: "장소 만들기" },
            { icon: "💰", label: "수단", text: "장소 마케팅" }
        ],
        subCards: [] // 내용 없음
    }
};