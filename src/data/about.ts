export const aboutPage = {
  hero: {
    badge: 'About Us',
    title: '20년의 기술 축적, 오늘의 인사이트',
    subtitle:
      '2004년 작은 웹 에이전시로 시작해 지금은 AI와 O2O를 아우르는 디지털 혁신 파트너로 성장했습니다.',
    backgroundImage: '/images/about-hero-bg.jpg',
  },
  vision: {
    title: 'Vision',
    description:
      '기술과 인사이트의 융합으로 비즈니스의 새로운 가능성을 열어갑니다. 단순한 개발사를 넘어, 고객의 디지털 전환을 함께 설계하는 진정한 파트너가 되는 것이 우리의 목표입니다.',
    icon: 'ri-lightbulb-flash-line',
  },
  mission: {
    title: 'Mission',
    description:
      "데이터 기반 인사이트와 검증된 기술력으로 고객 비즈니스의 본질적인 성장을 이끌어냅니다. 모든 프로젝트는 '이게 정말 비즈니스에 도움이 되는가'라는 질문에서 출발합니다.",
    icon: 'ri-rocket-2-line',
  },
  timeline: [
    {
      year: '2004',
      title: '인사이트네트 설립',
      description:
        '서울 강남에서 3인 규모의 웹 에이전시로 시작했습니다. 당시 막 보급되기 시작한 초고속 인터넷 환경에 맞춰 기업 웹사이트 구축을 주력으로 삼았죠.',
    },
    {
      year: '2008',
      title: '모바일 웹 시대 진입',
      description:
        '아이폰 국내 출시와 함께 모바일 웹 시장에 진출했습니다. 피처폰에서 스마트폰으로 넘어가는 과도기에 모바일 최적화 솔루션을 다수 공급했어요.',
    },
    {
      year: '2012',
      title: '반응형 웹 & UX 전문성 확보',
      description:
        '다양한 디바이스에 대응하는 반응형 웹 기술을 선제적으로 도입하고, UX 리서치 팀을 신설해 사용자 경험 기반의 설계 방법론을 확립했습니다.',
    },
    {
      year: '2016',
      title: '데이터 분석 & 플랫폼 사업 확장',
      description:
        '단순 구축에서 나아가 데이터 분석 기반의 비즈니스 컨설팅으로 영역을 넓혔습니다. 자체 SaaS 제품도 이 시기에 첫 출시했어요.',
    },
    {
      year: '2020',
      title: 'AI & O2O 통합 솔루션 출범',
      description:
        '생성형 AI와 IoT 기술을 비즈니스에 접목하기 시작했습니다. 온오프라인 데이터를 실시간으로 연결하는 O2O 플랫폼이 업계의 주목을 받았어요.',
    },
    {
      year: '2025',
      title: '글로벌 디지털 혁신 파트너',
      description:
        '현재 60여 명의 인재들과 함께 국내외 500건 이상의 프로젝트를 성공적으로 이끌며, AI 시대의 디지털 혁신을 선도하고 있습니다.',
    },
  ],
  values: [
    {
      title: '기술보다 문제에 집중합니다',
      description:
        '최신 기술을 쓰는 게 목적이 아니에요. 고객의 실제 비즈니스 문제를 해결하는 데 가장 적합한 기술을 선택합니다.',
      icon: 'ri-focus-3-line',
    },
    {
      title: '데이터로 말합니다',
      description:
        '감이나 직관이 아닌, 정량적인 데이터와 인사이트에 기반해 의사결정을 내립니다. 모든 제안에는 근거가 있습니다.',
      icon: 'ri-bar-chart-2-line',
    },
    {
      title: '함께 성장합니다',
      description:
        '고객의 성공이 곧 우리의 성장입니다. 프로젝트 완료 후에도 지속적인 파트너십을 통해 함께 진화해 나갑니다.',
      icon: 'ri-team-line',
    },
    {
      title: '투명하게 소통합니다',
      description:
        '어려운 얘기일수록 솔직하게 공유합니다. 일정, 예산, 리스크까지 — 처음부터 끝까지 투명한 커뮤니케이션을 약속해요.',
      icon: 'ri-chat-heart-line',
    },
  ],
  stats: {
    title: '숫자로 보는 인사이트네트',
    items: [
      { value: '20+', label: '업력 (년)' },
      { value: '60+', label: '팀 멤버' },
      { value: '500+', label: '완료 프로젝트' },
      { value: '200+', label: '누적 고객사' },
    ],
  },
} as const
