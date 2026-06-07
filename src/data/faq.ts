export type FaqCategory = 'all' | 'project' | 'tech' | 'cost'

export const faqPage = {
  hero: {
    badge: 'FAQ',
    title: '자주 묻는 질문',
    subtitle: '프로젝트 문의부터 기술 스택까지, 궁금하신 점에 대한 답변을 모았습니다.',
    backgroundImage: '/images/faq-hero-bg.jpg',
  },
  categories: [
    { id: 'all' as const, label: '전체' },
    { id: 'project' as const, label: '프로젝트 진행' },
    { id: 'tech' as const, label: '기술 & 역량' },
    { id: 'cost' as const, label: '비용 & 계약' },
  ],
  items: [
    {
      id: 1,
      category: 'project' as const,
      question: '프로젝트는 보통 어떤 프로세스로 진행되나요?',
      answer:
        "크게 '진단 → 기획 → 설계 → 개발 → 검증 → 오픈 → 운영' 7단계로 진행됩니다. 초기 진단 단계에서는 워크숍을 통해 비즈니스 목표와 기술 요구사항을 함께 정리하고, 그에 맞춰 스프린트 단위로 개발을 진행합니다. 평균적으로 중소규모 프로젝트는 2-4개월, 대규모 플랫폼은 6-12개월 정도 소요됩니다.",
    },
    {
      id: 2,
      category: 'project' as const,
      question: '프로젝트 시작 전에 PoC를 진행할 수 있나요?',
      answer:
        '물론입니다. 특히 AI나 O2O같이 불확실성이 높은 프로젝트는 2-4주 정도의 PoC를 먼저 진행하는 것을 권장드려요. 실제 데이터로 작은 규모의 MVP를 만들어보면서 기술적 타당성과 비즈니스 임팩트를 검증한 뒤 본 프로젝트로 넘어갑니다.',
    },
    {
      id: 3,
      category: 'project' as const,
      question: '기존에 사용 중인 레거시 시스템과 연동도 가능한가요?',
      answer:
        '네, 20년간 수많은 레거시 시스템 마이그레이션과 연동을 경험해 왔습니다. SAP, Oracle EBS, 자체 개발 ERP 등 다양한 엔터프라이즈 시스템과의 API 연동은 물론, 점진적인 마이그레이션 전략 수립까지 경험이 풍부합니다. 어떤 환경이든 최적의 연동 방안을 제안해 드려요.',
    },
    {
      id: 4,
      category: 'project' as const,
      question: '애자일로 진행하나요, 워터폴로 진행하나요?',
      answer:
        '프로젝트 성격에 따라 유연하게 선택합니다. 제품의 방향성이 비교적 명확한 경우 2주 스프린트 기반의 스크럼을, 요구사항이 잘 정의된 구축형 프로젝트는 워터폴을 적용합니다. 대부분의 프로젝트는 초기 기획은 워터폴, 개발은 애자일을 혼합한 하이브리드 방식으로 진행하고 있어요.',
    },
    {
      id: 5,
      category: 'tech' as const,
      question: '주로 사용하는 기술 스택이 어떻게 되나요?',
      answer:
        '프론트엔드는 React/Next.js와 Vue.js, 모바일은 Flutter와 React Native를 주력으로 사용합니다. 백엔드는 Node.js 기반이 메인이지만 Java/Spring이나 Python/FastAPI도 프로젝트에 따라 선택합니다. AI 쪽은 PyTorch 기반의 자체 모델과 LangChain을 활용한 LLM 파이프라인을 구축하고 있어요. 인프라는 주로 AWS를 사용하고, 필요시 GCP나 Azure도 검토합니다.',
    },
    {
      id: 6,
      category: 'tech' as const,
      question: 'AI 모델은 자체 개발인가요, 외부 API를 활용하나요?',
      answer:
        '둘 다 병행합니다. 범용적인 자연어 처리나 이미지 생성 같은 경우 GPT, Claude, Stable Diffusion 등 검증된 API를 활용하고, 고객사의 특수한 도메인 데이터가 필요한 경우에는 자체 파인튜닝 또는 RAG 파이프라인을 구축합니다. 하이브리드 접근으로 비용과 성능을 모두 최적화하는 게 저희의 강점이에요.',
    },
    {
      id: 7,
      category: 'tech' as const,
      question: '보안은 어떻게 관리하나요?',
      answer:
        '모든 프로젝트는 개발 초기 단계부터 보안을 설계에 반영합니다(Shift Left Security). 정기적인 취약점 스캔, 코드 리뷰 시 보안 점검, 그리고 프로덕션 환경에 대한 연간 모의해킹을 진행합니다. 금융, 의료 등 규제가 엄격한 산업군의 프로젝트도 다수 수행한 경험이 있으니 안심하셔도 됩니다.',
    },
    {
      id: 8,
      category: 'cost' as const,
      question: '프로젝트 비용은 어떻게 산정되나요?',
      answer:
        '투입 인력의 규모와 기간을 기준으로 산정합니다. 초기 무료 컨설팅을 통해 프로젝트 범위를 정의하고, 이에 맞춰 상세한 견적을 제공해 드려요. 일반적인 웹/앱 프로젝트는 3천만원에서 1억원 사이, AI나 O2O 플랫폼은 5천만원에서 3억원 이상까지 프로젝트 규모에 따라 다양합니다. 정확한 견적은 상담 후 안내드립니다.',
    },
    {
      id: 9,
      category: 'cost' as const,
      question: '계약 후 추가 비용이 발생할 수 있나요?',
      answer:
        '초기 스코프에 포함되지 않은 추가 기능이나 변경 사항에 대해서만 추가 비용이 발생합니다. 모든 변경 요청은 별도의 변경 관리 프로세스를 통해 사전 협의 후 진행되므로, 예상치 못한 비용 청구는 없으니 걱정하지 않으셔도 됩니다.',
    },
    {
      id: 10,
      category: 'cost' as const,
      question: '유지보수는 어떻게 이루어지나요?',
      answer:
        '프로젝트 오픈 후 3-6개월의 무상 유지보수 기간을 기본으로 제공하며, 이후에는 월 정액 또는 건별로 유지보수 계약을 체결하실 수 있습니다. 장애 대응은 24시간 내 초기 대응을 원칙으로 하고 있고, 경중에 따라 SLA를 차등 적용하고 있어요.',
    },
  ],
} as const

export function getFaqCategoryLabel(category: FaqCategory): string {
  return faqPage.categories.find((c) => c.id === category)?.label ?? category
}
