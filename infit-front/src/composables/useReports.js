import { ref } from 'vue'

// 리포트 메타데이터 정의
const reportsData = [
  {
    id: 'IT산업레포트',
    title: 'IT 산업 분석: 자율형 AI 에이전트',
    description: '자율형 AI 에이전트의 부상과 IT 산업 생태계의 근본적인 변화를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['IT', 'AI에이전트', '프로세스자동화'],
    category: 'technology'
  },
  {
    id: '금융산업레포트',
    title: '금융 산업 AI 도입 동향 리포트',
    description: '증권사들의 AI 서비스 현황과 \'초개인화\' 경쟁, 향후 전망을 심층 분석합니다.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    tags: ['금융', '증권사AI', '초개인화'],
    category: 'finance'
  },
  {
    id: '바이오•제약산업레포트',
    title: '바이오•제약 산업 리포트',
    description: '바이오테크 및 제약 산업의 최신 동향과 투자 전망을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
    tags: ['바이오', '제약', '헬스케어'],
    category: 'healthcare'
  },
  {
    id: '반도체산업레포트',
    title: '반도체 산업 리포트',
    description: '글로벌 반도체 시장 동향과 한국 기업들의 경쟁력을 심층 분석합니다.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['반도체', '메모리', 'AI칩'],
    category: 'technology'
  },
  {
    id: '배터리산업레포트',
    title: '배터리 산업 리포트',
    description: '전기차 시대 핵심 기술인 배터리 산업의 성장 전망과 기업 분석입니다.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['배터리', '전기차', '에너지저장'],
    category: 'energy'
  },
  {
    id: '자동차산업레포트',
    title: '자동차 산업 리포트',
    description: '모빌리티 혁신과 자율주행 기술이 주도하는 자동차 산업 변화를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
    tags: ['자동차', '자율주행', '모빌리티'],
    category: 'automotive'
  },
  {
    id: '유통•리테일산업레포트',
    title: '유통•리테일 산업 리포트',
    description: '디지털 전환과 O2O 혁신이 바꾸는 유통업계의 새로운 패러다임을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    tags: ['유통', '리테일', 'O2O'],
    category: 'retail'
  },
  {
    id: '식음료산업레포트',
    title: '식음료 산업 리포트',
    description: '건강 트렌드와 지속가능성이 주도하는 식음료 산업의 변화를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=2070&auto=format&fit=crop',
    tags: ['식음료', '건강트렌드', '지속가능성'],
    category: 'food'
  },
  {
    id: '석유화학산업레포트',
    title: '석유화학 산업 리포트',
    description: '탄소중립 시대 석유화학 산업의 전환 전략과 새로운 기회를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2070&auto=format&fit=crop',
    tags: ['석유화학', '탄소중립', '전환전략'],
    category: 'chemical'
  },
  {
    id: '항공우주산업레포트',
    title: '항공우주 산업 리포트',
    description: '우주경제 시대를 이끄는 항공우주 산업의 혁신과 성장 동력을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070&auto=format&fit=crop',
    tags: ['항공우주', '우주경제', '뉴스페이스'],
    category: 'aerospace'
  },
  {
    id: '콘텐츠•미디어산업레포트',
    title: '콘텐츠•미디어 산업 리포트',
    description: 'OTT와 메타버스가 주도하는 콘텐츠 산업의 새로운 생태계를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2070&auto=format&fit=crop',
    tags: ['콘텐츠', '미디어', 'OTT', '메타버스'],
    category: 'media'
  },
  {
    id: '철강•금속산업레포트',
    title: '철강•금속 산업 리포트',
    description: '친환경 전환과 고부가가치화로 변화하는 철강•금속 산업을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1565011523534-747a8601f10a?q=80&w=2070&auto=format&fit=crop',
    tags: ['철강', '금속', '친환경', '고부가가치'],
    category: 'materials'
  },
  {
    id: '조선•해양산업레포트',
    title: '조선•해양 산업 리포트',
    description: '친환경 선박과 해양 신산업이 주도하는 조선업계의 미래를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop',
    tags: ['조선', '해양', '친환경선박'],
    category: 'maritime'
  },
  {
    id: '로봇산업레포트',
    title: '로봇 산업 리포트',
    description: '서비스 로봇과 산업용 로봇의 융합이 만드는 새로운 시장을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    tags: ['로봇', '서비스로봇', '산업용로봇'],
    category: 'robotics'
  },
  {
    id: '건설•플랜트산업레포트',
    title: '건설•플랜트 산업 리포트',
    description: '스마트 건설과 그린 인프라가 주도하는 건설업계의 디지털 전환을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    tags: ['건설', '플랜트', '스마트건설', '그린인프라'],
    category: 'construction'
  }
]

export function useReports() {
  const reports = ref(reportsData)

  const getReportById = (id) => {
    return reports.value.find(report => report.id === id)
  }

  const getReportsByCategory = (category) => {
    return reports.value.filter(report => report.category === category)
  }

  const getAllReports = () => {
    return reports.value
  }

  return {
    reports,
    getReportById,
    getReportsByCategory,
    getAllReports
  }
} 