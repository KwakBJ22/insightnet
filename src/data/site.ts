export const hero = {
  mainTitle: '2004년부터 이어진 혁신, 웹을 넘어 AI와 O2O로',
  subTitle:
    '비즈니스의 시작부터 미래의 디지털 전환까지, 인사이트네트가 함께합니다.',
  ctaPrimary: '포트폴리오 보기',
  ctaSecondary: '프로젝트 문의하기',
  backgroundImage: '/images/hero-bg.jpg',
} as const

export const historySection = {
  label: 'Since 2004',
  title: '20년 이상의 축적된 노하우',
  subtitle: '웹 에이전시에서 AI 플랫폼 기업으로, 끊임없는 진화의 기록',
  cards: [
    {
      value: '20+',
      label: 'Years of Experience',
      description: '2004년부터 시작된 우리의 여정',
      subtext: 'Digital Innovation Partner',
    },
    {
      value: '500+',
      label: 'Successfully Delivered Projects',
      description: '다양한 산업군에서 쌓아온 신뢰',
      subtext: 'Proven Track Record',
    },
  ],
  timeline: [
    {
      year: '2004',
      title: '설립',
      desc: '웹 에이전시로 시작, 첫 엔터프라이즈 프로젝트 수주',
    },
    {
      year: '2015',
      title: '도약',
      desc: '모바일 앱 개발로 사업 확장, 300+ 프로젝트 달성',
    },
    {
      year: '2024',
      title: '혁신',
      desc: 'AI·O2O 플랫폼 기업으로 진화, 글로벌 파트너십 확대',
    },
  ],
} as const

export const statsSection = {
  title: '숫자로 보는 인사이트네트',
  stats: [
    { value: '20+', label: '업력 (년)' },
    { value: '60+', label: '누적 팀 멤버' },
    { value: '500+', label: '완료 프로젝트' },
    { value: '200+', label: '누적 고객사' },
  ],
  backgroundImage: '/images/stats-bg.jpg',
} as const

export const servicesSection = {
  title: '우리가 만드는 미래',
  subtitle: '기술과 인사이트의 융합으로 비즈니스의 새로운 가능성을 열어갑니다',
  items: [
    {
      id: 'web-app',
      title: 'Web & App Development',
      subtitle: '고성능 웹·앱 개발',
      description:
        '최신 기술 스택을 활용한 반응형 웹사이트와 크로스플랫폼 네이티브 앱을 구축합니다. 사용자 경험을 최우선으로 설계된 맞춤형 디지털 프로덕트를 제공합니다.',
      keywords: ['React', 'Flutter', 'Node.js', 'AWS'],
      image: '/images/web-app.png',
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      subtitle: '생성형 AI · 맞춤형 모델',
      description:
        '비즈니스 효율화를 위한 생성형 AI 도입부터 기업 맞춤형 AI 모델 개발까지, 데이터 기반의 지능형 솔루션으로 경쟁력을 강화합니다.',
      keywords: ['LLM', 'RAG', 'Computer Vision', 'MLOps'],
      image: '/images/AI-Solutions.png',
    },
    {
      id: 'o2o',
      title: 'O2O Platform',
      subtitle: '온·오프라인 연결 아키텍처',
      description:
        '온라인과 오프라인을 정밀하게 연결하는 비즈니스 아키텍처를 구현합니다. 실시간 데이터 동기화와 통합 예약·결제 시스템으로 완성하는 O2O 경험을 제공합니다.',
      keywords: ['Real-time Sync', 'IoT', 'Payment', 'Logistics'],
      image: '/images/O2O-Platform.png',
    },
    {
      id: 'dx',
      title: 'Digital Transformation',
      subtitle: '맞춤형 DT 컨설팅',
      description:
        '비즈니스 진단부터 전략 수립, 실행 및 고도화까지 전 과정을 함께하는 맞춤형 디지털 전환 컨설팅을 제공합니다. 귀사의 비즈니스에 진정한 인사이트를 더합니다.',
      keywords: ['Strategy', 'Process Innovation', 'Data Analytics', 'Cloud Migration'],
      image: '/images/Digital%20-Transformation.png',
    },
  ],
} as const

export type PortfolioCategory = 'all' | 'web' | 'app' | 'ai-o2o'

export const portfolioSection = {
  title: 'Selected Works',
  subtitle: '기술과 인사이트가 만든 대표 프로젝트들',
  tabs: [
    { id: 'all' as const, label: '전체' },
    { id: 'web' as const, label: 'Web' },
    { id: 'app' as const, label: 'App' },
    { id: 'ai-o2o' as const, label: 'AI·O2O' },
  ],
  projects: [
    {
      id: 1,
      title: '글로벌 이커머스 플랫폼 구축',
      category: 'web' as const,
      description: 'React 기반 헤드리스 커머스, 12개국 멀티랭귀지 지원',
      tags: ['React', 'Node.js', 'AWS'],
      image: '/images/portfolio-01.jpg',
    },
    {
      id: 2,
      title: 'AI 기반 의료 영상 분석 시스템',
      category: 'ai-o2o' as const,
      description: '딥러닝 모델을 활용한 실시간 의료 영상 판독 플랫폼',
      tags: ['AI', 'Computer Vision', 'Healthcare'],
      image: '/images/portfolio-02.jpg',
    },
    {
      id: 3,
      title: '핀테크 모바일 앱',
      category: 'app' as const,
      description: 'Flutter 크로스플랫폼, 실시간 금융 데이터 대시보드',
      tags: ['Flutter', 'Fintech', 'Real-time'],
      image: '/images/portfolio-03.jpg',
    },
    {
      id: 4,
      title: '스마트팩토리 O2O 관제 시스템',
      category: 'ai-o2o' as const,
      description: 'IoT 센서 연동 생산라인 실시간 모니터링 및 예측 정비',
      tags: ['IoT', 'AI', 'Manufacturing'],
      image: '/images/portfolio-04.jpg',
    },
    {
      id: 5,
      title: '엔터프라이즈 SaaS 대시보드',
      category: 'web' as const,
      description: 'B2B 데이터 분석 SaaS, 커스터마이즈 가능한 위젯 시스템',
      tags: ['Vue.js', 'D3.js', 'SaaS'],
      image: '/images/portfolio-05.jpg',
    },
    {
      id: 6,
      title: '옴니채널 리테일 앱',
      category: 'app' as const,
      description: '온·오프라인 통합 재고관리 및 개인화 추천 엔진 탑재',
      tags: ['React Native', 'AI', 'Retail'],
      image: '/images/portfolio-06.jpg',
    },
  ],
} as const

export const contactSection = {
  title: '귀사의 비즈니스에 인사이트를 더하세요',
  subtitle: '프로젝트에 대해 이야기해 주세요. 최적의 디지털 솔루션을 제안해 드립니다.',
  formLabels: {
    name: '이름',
    company: '회사명',
    email: '이메일',
    phone: '연락처',
    message: '프로젝트 내용',
    submit: '문의하기',
  },
  placeholders: {
    company: '선택사항',
    message: '프로젝트에 대해 자유롭게 설명해 주세요 (목표, 예산, 일정 등)',
  },
  successMessage:
    '문의가 정상적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.',
} as const

export const footer = {
  brandName: 'insightnet.',
  slogan: '귀사의 비즈니스에 인사이트를 더하다',
  copyright: '© 2025 InsightNet. All rights reserved.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '/#services' },
        { label: 'App Development', href: '/#services' },
        { label: 'AI Solutions', href: '/#services' },
        { label: 'O2O Platform', href: '/#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Portfolio', href: '/#portfolio' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/#portfolio' },
        { label: 'Tech Stack', href: '/#services' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: '개인정보처리방침', href: '/privacy' },
        { label: '이용약관', href: '/terms' },
      ],
    },
  ],
} as const
