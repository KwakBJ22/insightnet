export type PortfolioDetail = {
  id: number
  title: string
  category: 'web' | 'app' | 'ai-o2o'
  categoryLabel: string
  heroImage: string
  clientName: string
  industry: string
  duration: string
  overview: string
  challenge: string
  solution: string
  techStack: { name: string; items: string[] }[]
  results: { value: string; label: string }[]
  testimonial: { quote: string; author: string; role: string }
  relatedProjects: number[]
}

export const portfolioDetails: Record<number, PortfolioDetail> = {
  1: {
    id: 1,
    title: '이커머스 플랫폼 리뉴얼 및 글로벌 확장',
    category: 'web',
    categoryLabel: 'Web Development',
    heroImage: '/images/portfolio-01-hero.jpg',
    clientName: '국내 식품 이커머스사',
    industry: '이커머스 / 리테일',
    duration: '2024.03 - 2024.06 (4개월)',
    overview:
      '국내 식품 전문 이커머스 기업의 레거시 플랫폼을 React 기반 헤드리스 커머스로 리뉴얼하고 동남아 3개국 진출을 위한 글로벌 인프라를 구축했습니다. 국가별 현지화, 통합 결제, AI 개인화 추천 엔진을 도입해 전환율과 사용자 경험을 대폭 개선했습니다.',
    challenge:
      '기존 PHP 기반 모놀리식 시스템은 해외 확장이 구조적으로 어려웠고, 페이지 로딩이 평균 5.8초에 달해 모바일 이탈률이 40%를 넘었습니다. 국가별 결제·통화·세금 체계를 유연하게 수용할 수 있는 아키텍처가 필요했습니다.',
    solution:
      'React + Next.js 기반 헤드리스 커머스를 도입해 프론트엔드와 백엔드를 완전히 분리하고, AWS CloudFront 글로벌 CDN으로 평균 로딩 속도를 1.2초로 단축했습니다. 국가별 결제 모듈과 AI 추천 엔진을 마이크로서비스로 통합하여 현지화 효율을 극대화했습니다.',
    techStack: [
      { name: 'Frontend', items: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'] },
      { name: 'Infrastructure', items: ['AWS', 'CloudFront', 'ECS', 'Terraform'] },
      { name: 'Data / AI', items: ['TensorFlow Lite', 'Recommendation Engine', 'Analytics Pipeline'] },
    ],
    results: [
      { value: '1.6x', label: '전환율 증가' },
      { value: '1.2s', label: '평균 로딩 속도' },
      { value: '3', label: '서비스 국가' },
      { value: '99.9%', label: '서비스 가용성' },
    ],
    testimonial: {
      quote:
        "처음에는 '리뉴얼이 답일까' 고민이 많았는데, 결과를 보니 진작 할 걸 그랬다는 생각이 들어요. 플랫폼 속도가 빨라지니까 매출이 바로 반응하더라고요. 동남아 진출도 기술적인 걱정 없이 비즈니스에만 집중할 수 있었습니다.",
      author: '이커머스사 CTO',
      role: '',
    },
    relatedProjects: [2, 5],
  },
  2: {
    id: 2,
    title: 'AI 의료 영상 분석 보조 시스템',
    category: 'ai-o2o',
    categoryLabel: 'AI Solutions',
    heroImage: '/images/portfolio-02-hero.jpg',
    clientName: '의료 AI 스타트업',
    industry: '헬스케어 / 의료',
    duration: '2023.11 - 2024.04 (6개월)',
    overview:
      '대학병원 영상의학과와 협력하여 딥러닝 기반 실시간 영상 판독 보조 시스템을 구축했습니다. X-ray, CT, MRI 영상의 이상 소견을 자동 탐지하고 의사의 진단 결정을 지원하는 AI 플랫폼으로, 3개 의료기관에 도입되어 일평균 1,500건 이상의 영상을 분석하고 있습니다.',
    challenge:
      '의료 영상의 고해상도 특성상 데이터 용량이 방대하여 실시간 처리와 높은 정확도를 동시에 확보하기 어려웠습니다. 또한 환자 데이터 보호를 위한 의료법 및 개인정보보호 규제를 완벽히 준수하는 인프라 설계가 필수였습니다.',
    solution:
      'EfficientNet 기반 경량화 모델로 고해상도 영상을 실시간 처리하며 96.8%의 탐지 정확도를 기록했습니다. 온프레미스 GPU 클러스터와 의료 데이터 특화 클라우드 아키텍처를 연동해 보안과 성능을 모두 확보했고, 의료진의 실제 판독 워크플로우에 자연스럽게 통합되도록 UI를 설계했습니다.',
    techStack: [
      { name: 'AI / ML', items: ['PyTorch', 'EfficientNet', 'YOLOv8', 'MONAI'] },
      { name: 'Backend', items: ['Python', 'FastAPI', 'PostgreSQL', 'Celery'] },
      { name: 'Frontend', items: ['React', 'D3.js', 'DICOM Viewer', 'WebGL'] },
      { name: 'Infrastructure', items: ['NVIDIA GPU Cluster', 'Kubernetes', 'HL7/FHIR'] },
    ],
    results: [
      { value: '96.8%', label: '이상 소견 탐지율' },
      { value: '500+', label: '일평균 분석 건수' },
      { value: '2', label: '도입 의료기관' },
      { value: '0.3s', label: '이미지당 처리 속도' },
    ],
    testimonial: {
      quote:
        "AI 판독 보조 도입 전에는 '과연 도움이 될까' 반신반의했어요. 그런데 실제 써보니 야간 당직 때 작은 결절도 놓치지 않고 짚어주는 게 정말 든든하더라고요. 의사 입장에서는 최종 판단을 내리는 건 변함없지만, 놓칠 수 있는 부분을 체크해주는 조력자가 생긴 느낌입니다.",
      author: '도입 병원 영상의학과 전문의',
      role: '',
    },
    relatedProjects: [4, 6],
  },
  3: {
    id: 3,
    title: 'MZ 타겟 자산관리 모바일 앱',
    category: 'app',
    categoryLabel: 'App Development',
    heroImage: '/images/portfolio-03-hero.jpg',
    clientName: '핀테크 스타트업',
    industry: '핀테크 / 금융',
    duration: '2024.02 - 2024.06 (5개월)',
    overview:
      '2030 세대를 겨냥한 통합 자산관리 플랫폼의 iOS/Android 앱을 Flutter로 크로스플랫폼 구축했습니다. 실시간 금융 데이터 연동, AI 투자 성향 분석, 소셜 트레이딩 기능을 탑재하여 출시 3개월 만에 20만 다운로드를 기록했습니다.',
    challenge:
      "주식·코인 시세, 은행 계좌, 카드 소비 데이터를 하나의 앱에서 안정적으로 통합해야 했고, 금융보안원 규제를 완벽히 준수하는 보안 아키텍처가 필수였습니다. 특히 '쉽고 재미있는' 금융 앱이라는 MZ세대의 기대치를 충족시키는 UX가 핵심 과제였습니다.",
    solution:
      'Flutter로 iOS/Android 모두 60fps를 유지하는 네이티브급 성능을 구현하고, 웹소켓 기반 실시간 데이터 스트리밍을 적용했습니다. 바이오 인증과 E2E 암호화로 금융보안원 가이드라인을 충족했으며, AI 기반 소비 패턴 분석 기능으로 초개인화된 투자 팁을 제공합니다.',
    techStack: [
      { name: 'Mobile', items: ['Flutter 3.x', 'Dart', 'Custom Paint', 'GoRouter'] },
      { name: 'Backend', items: ['Go', 'WebSocket', 'PostgreSQL', 'Redis Streams'] },
      { name: 'AI / Data', items: ['Python', 'scikit-learn', 'Spending Analysis'] },
      { name: 'Security', items: ['E2E Encryption', 'Biometric Auth', 'FDS'] },
    ],
    results: [
      { value: '3만+', label: '출시 3개월 다운로드' },
      { value: '4.7', label: '앱스토어 평점' },
      { value: '60fps', label: '일관된 프레임률' },
      { value: '72%', label: '월간 활성 사용자' },
    ],
    testimonial: {
      quote:
        '금융 앱인데도 오히려 SNS 피드 보는 느낌으로 들어오는 사용자들이 많아요. 복잡한 자산 정보를 이렇게 직관적으로 보여줄 수 있다는 게 놀라웠고, 인사이트네트는 기술뿐 아니라 MZ세대의 감성까지 이해하고 있는 팀이었어요.',
      author: '핀테크 스타트업 대표',
      role: '',
    },
    relatedProjects: [1, 5],
  },
  4: {
    id: 4,
    title: '스마트팩토리 IoT 관제 플랫폼',
    category: 'ai-o2o',
    categoryLabel: 'O2O Platform',
    heroImage: '/images/portfolio-04-hero.jpg',
    clientName: '중견 정밀부품 제조사',
    industry: '제조 / 스마트팩토리',
    duration: '2023.09 - 2024.02 (6개월)',
    overview:
      '중견 정밀부품 제조 기업의 3개 공장에 IoT 센서와 AI 예측 정비 시스템을 적용한 통합 관제 플랫폼을 구축했습니다. 설비 데이터 실시간 수집, AI 기반 고장 예측, 디지털 트윈 시뮬레이션을 통해 가동률과 유지보수 효율을 크게 개선했습니다.',
    challenge:
      '제조사도, 통신 프로토콜도 제각각인 레거시 설비들의 데이터를 하나로 모으는 작업이 난제였습니다. 게다가 24시간 가동되는 공장이라 시스템을 중단할 수 없어, 라이브 마이그레이션 전략이 반드시 필요했습니다.',
    solution:
      'OPC-UA, Modbus 등 다양한 산업용 프로토콜을 통합 수집하는 IoT 게이트웨이를 자체 개발해 각 설비에 설치했습니다. LSTM 기반 예측 정비 모델로 설비 이상을 36시간 전에 감지하고, 디지털 트윈으로 생산 시뮬레이션을 구현했습니다.',
    techStack: [
      { name: 'IoT / Edge', items: ['OPC-UA', 'Modbus', 'MQTT', 'Edge Gateway'] },
      { name: 'AI / ML', items: ['PyTorch', 'LSTM', 'Anomaly Detection'] },
      { name: 'Platform', items: ['React', 'Three.js', 'WebSocket', 'TimescaleDB'] },
      { name: 'Infrastructure', items: ['Kubernetes', 'Kafka', 'AWS IoT Core', 'Grafana'] },
    ],
    results: [
      { value: '28%', label: '설비 가동률 향상' },
      { value: '36h', label: '고장 사전 감지' },
      { value: '15%', label: '유지보수 비용 절감' },
      { value: '2', label: '통합 공장 수' },
    ],
    testimonial: {
      quote:
        "처음 스마트팩토리 얘기 꺼냈을 땐 '우리 같은 중견기업이 할 수 있을까' 싶었는데, 인사이트네트가 현장 상황에 맞춰 차근차근 풀어나갔어요. 특히 기존 설비를 교체하지 않고 센서만 붙여서 데이터를 뽑아낸 접근이 현실적이었고, 고장 예측 알림 덕분에 밤중에 급하게 출동하는 일이 확 줄었습니다.",
      author: '제조사 생산본부장',
      role: '',
    },
    relatedProjects: [2, 6],
  },
  5: {
    id: 5,
    title: 'B2B 데이터 분석 SaaS 대시보드',
    category: 'web',
    categoryLabel: 'Web Development',
    heroImage: '/images/portfolio-05-hero.jpg',
    clientName: 'B2B 데이터 분석 스타트업',
    industry: 'SaaS / B2B',
    duration: '2024.03 - 2024.06 (4개월)',
    overview:
      'B2B 데이터 분석 스타트업의 대시보드 제품을 Vue.js와 D3.js로 전면 재구축했습니다. 드래그 앤 드롭 방식의 위젯 커스터마이징, 최대 50만 행 데이터의 실시간 시각화, 고객사별 독립 대시보드 구성 기능을 갖춘 엔터프라이즈급 플랫폼으로 탈바꿈시켰습니다.',
    challenge:
      '기존 대시보드는 고정 레이아웃만 지원해 고객사별 다양한 니즈를 수용하지 못했고, 데이터가 10만 행을 넘으면 브라우저가 멈추는 문제가 있었습니다. 또한 빠르게 증가하는 엔터프라이즈 고객을 감당할 수 있는 확장성 있는 아키텍처로 전환이 시급했습니다.',
    solution:
      'Web Worker 기반 병렬 데이터 처리로 메인 스레드 블로킹 없이 대용량 실시간 시각화를 구현했습니다. Vue 3 Composition API와 Pinia로 위젯 시스템을 모듈화하고, 고객사별 대시보드 프리셋 템플릿을 지원해 온보딩 시간을 70% 단축했습니다.',
    techStack: [
      { name: 'Frontend', items: ['Vue 3', 'TypeScript', 'Pinia', 'D3.js', 'Web Workers'] },
      { name: 'Backend', items: ['Node.js', 'GraphQL', 'ClickHouse', 'Redis'] },
      { name: 'Infrastructure', items: ['AWS', 'ECS', 'RDS'] },
      { name: 'Data', items: ['Apache Arrow', 'Parquet', 'OLAP'] },
    ],
    results: [
      { value: '10만+', label: '실시간 처리 행 수' },
      { value: '2x', label: '엔터프라이즈 계약 증가' },
      { value: '60fps', label: '차트 렌더링 성능' },
      { value: 'NPS 68', label: '고객 만족도' },
    ],
    testimonial: {
      quote:
        "기존 제품으로는 '이 데이터는 대시보드에서 빼주세요'라는 고객 요청이 일상이었는데, 인사이트네트가 재구축한 뒤에는 오히려 '더 많은 데이터를 연결해달라'는 요청이 들어오기 시작했어요. 기술력을 비즈니스 성과로 연결해준 셈이죠.",
      author: '스타트업 CPO',
      role: '',
    },
    relatedProjects: [1, 3],
  },
  6: {
    id: 6,
    title: '옴니채널 리테일 통합 앱',
    category: 'app',
    categoryLabel: 'App Development',
    heroImage: '/images/portfolio-06-hero.jpg',
    clientName: '국내 중견 패션 브랜드',
    industry: '리테일 / 패션',
    duration: '2023.11 - 2024.03 (5개월)',
    overview:
      '국내 중견 패션 브랜드의 온·오프라인 통합 옴니채널 앱을 React Native로 구축했습니다. 전국 60여 개 매장 재고 실시간 연동, AI 개인화 추천, 오프라인 매장 방문 예약, QR 무인 결제 시스템을 통합해 온·오프라인 경계를 허무는 쇼핑 경험을 제공합니다.',
    challenge:
      '전국 매장마다 서로 다른 버전의 POS 시스템이 운영 중이었고, 온라인몰과의 재고 불일치로 인한 고객 불만이 지속적으로 발생했습니다. 이기종 시스템 간 실시간 데이터 동기화가 기술적으로 가장 까다로운 지점이었습니다.',
    solution:
      'Apache Kafka 기반 이벤트 드리븐 아키텍처로 모든 재고 변동을 실시간 동기화하고, CQRS 패턴으로 읽기·쓰기 부하를 분리했습니다. React Native로 iOS/Android 동시 지원하며, AI 추천 엔진은 온·오프라인 구매 이력을 통합 분석해 개인화된 상품을 제안합니다.',
    techStack: [
      { name: 'Mobile', items: ['React Native', 'TypeScript', 'Redux Toolkit'] },
      { name: 'Backend', items: ['Spring Boot', 'Kafka', 'PostgreSQL', 'Elasticsearch'] },
      { name: 'AI / Data', items: ['Python', 'Recommendation System', 'Customer Analytics'] },
      { name: 'Infrastructure', items: ['AWS', 'Kubernetes', 'GraphQL Gateway'] },
    ],
    results: [
      { value: '20', label: '연동 매장 수' },
      { value: '1.8x', label: '크로스채널 구매 증가' },
      { value: '99.5%', label: '재고 정확도' },
      { value: '28%', label: '앱 체류시간 증가' },
    ],
    testimonial: {
      quote:
        '오프라인 매장 직원들이 앱으로 자기 매장 재고를 실시간 확인할 수 있게 된 것만으로도 업무 효율이 확 올랐어요. 고객 입장에서도 온라인으로 보고 매장에서 픽업이 자연스러워졌고요. 인사이트네트는 기술만 던져주는 게 아니라, 리테일 현장의 언어로 소통할 줄 아는 팀이었습니다.',
      author: '패션 브랜드 디지털혁신팀',
      role: '',
    },
    relatedProjects: [3, 4],
  },
}

export function getPortfolioDetail(id: number): PortfolioDetail | undefined {
  return portfolioDetails[id]
}

export function getAllPortfolioIds(): number[] {
  return Object.keys(portfolioDetails).map(Number)
}
