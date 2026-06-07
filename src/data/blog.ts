export type BlogCategory = 'all' | 'tech' | 'case-study' | 'insight' | 'news'

export const blogPage = {
  hero: {
    badge: 'Blog',
    title: 'InsightNet Blog',
    subtitle: '기술 트렌드, 프로젝트 인사이트, 그리고 디지털 혁신 이야기',
    backgroundImage: '/images/blog-hero-bg.jpg',
  },
  categories: [
    { id: 'all' as const, label: '전체' },
    { id: 'tech' as const, label: 'Tech' },
    { id: 'case-study' as const, label: 'Case Study' },
    { id: 'insight' as const, label: 'Insight' },
    { id: 'news' as const, label: 'News' },
  ],
  posts: [
    {
      id: 1,
      title: '2026년, AI 에이전트가 비즈니스를 바꾸는 방식',
      excerpt:
        '단순 챗봇을 넘어 자율적으로 업무를 수행하는 AI 에이전트가 기업 환경에 어떤 변화를 가져오고 있는지 살펴봅니다.',
      category: 'tech' as const,
      author: '김태호',
      role: 'AI Lab 리드',
      date: '2026.05.20',
      readTime: '7분',
      image: '/images/blog-01.jpg',
    },
    {
      id: 2,
      title: '프레시코리아 이커머스 리뉴얼: 3개월 만에 전환율 2.8배 달성한 비결',
      excerpt:
        '레거시 시스템에서 헤드리스 커머스로의 전환 과정, 기술적 의사결정, 그리고 실제 운영 데이터를 공개합니다.',
      category: 'case-study' as const,
      author: '박지원',
      role: '프로젝트 매니저',
      date: '2026.05.10',
      readTime: '9분',
      image: '/images/blog-02.jpg',
    },
    {
      id: 3,
      title: '스마트 팩토리 O2O, 우리가 설비 가동률 28%를 끌어올린 방법',
      excerpt:
        '제조 현장의 IoT 센서 데이터를 어떻게 수집하고 분석했는지, 그리고 실제로 어떤 인사이트를 도출했는지 상세히 다룹니다.',
      category: 'case-study' as const,
      author: '이도윤',
      role: '데이터 엔지니어',
      date: '2026.04.28',
      readTime: '8분',
      image: '/images/blog-03.jpg',
    },
    {
      id: 4,
      title: 'React Server Components가 프론트엔드 아키텍처를 바꾸는 이유',
      excerpt:
        'Next.js App Router와 RSC의 등장으로 달라진 프론트엔드 개발 패러다임, 우리 팀의 실제 도입 사례와 함께 정리했습니다.',
      category: 'tech' as const,
      author: '정민수',
      role: '프론트엔드 리드',
      date: '2026.04.15',
      readTime: '10분',
      image: '/images/blog-04.jpg',
    },
    {
      id: 5,
      title: '디지털 전환이 실패하는 5가지 이유 — 그리고 우리가 배운 것들',
      excerpt:
        '20년간 다양한 산업의 DT 프로젝트를 수행하면서 목격한 실패 패턴과, 그것을 극복한 조직들의 공통점을 분석합니다.',
      category: 'insight' as const,
      author: '한승우',
      role: 'DT 컨설팅 리드',
      date: '2026.03.22',
      readTime: '11분',
      image: '/images/blog-05.jpg',
    },
    {
      id: 6,
      title: "인사이트네트, '2026 대한민국 디지털 혁신 어워드' 대상 수상",
      excerpt:
        '스마트 팩토리 O2O 플랫폼이 제조 혁신 부문에서 대상을 받았습니다. 시상식 현장과 심사평을 전해드립니다.',
      category: 'news' as const,
      author: '인사이트네트',
      role: '마케팅팀',
      date: '2026.03.10',
      readTime: '4분',
      image: '/images/blog-06.jpg',
    },
    {
      id: 7,
      title: 'LLM Fine-tuning vs RAG: 우리 프로젝트에 맞는 선택은?',
      excerpt:
        '기업용 AI 챗봇 프로젝트를 준비 중이라면 반드시 고민하게 되는 두 접근법. 실제 프로젝트 데이터를 기반으로 비교합니다.',
      category: 'tech' as const,
      author: '김태호',
      role: 'AI Lab 리드',
      date: '2026.02.18',
      readTime: '12분',
      image: '/images/blog-07.jpg',
    },
    {
      id: 8,
      title: 'MZ 세대를 사로잡은 핀테크 앱, UI/UX 설계 비하인드',
      excerpt:
        '페이플래닛 프로젝트에서 20만 다운로드를 달성하기까지의 UI/UX 의사결정 과정을 낱낱이 공개합니다.',
      category: 'case-study' as const,
      author: '윤서연',
      role: 'UX 디자이너',
      date: '2026.02.05',
      readTime: '7분',
      image: '/images/blog-08.jpg',
    },
  ],
} as const

export function getCategoryLabel(category: BlogCategory): string {
  return blogPage.categories.find((c) => c.id === category)?.label ?? category
}
