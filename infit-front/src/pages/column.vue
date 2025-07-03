<template>
  <div class="column-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          산업별 심층 분석<br />
          <span class="whale-sky">AI가 제시하는</span> 투자 인사이트
        </h1>
        <p class="hero-description">
          인핏의 AI 분석 엔진이 제공하는 산업별 리포트로<br />
          데이터 기반의 스마트한 투자 결정을 내려보세요
        </p>
      </div>
    </section>

    <!-- Reports Grid -->
    <section class="reports-section">
      <div class="container">
        <div class="reports-grid">
          <ReportCard 
            v-for="report in reports" 
            :key="report.id" 
            :report="report" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ReportCard from '@/components/ReportCard.vue'
import { useReports } from '@/composables/useReports'

const { getAllReports } = useReports()
const reports = getAllReports()
</script>

<style scoped>
.column-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bubble-cream) 0%, #ffffff 100%);
}

/* Hero Section */
.hero-section {
  padding: 80px 20px 60px;
  text-align: center;
  background: linear-gradient(135deg, var(--whale-sky) 0%, var(--ocean-mint) 100%);
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.whale-sky {
  color: var(--sunny-yellow);
}

.hero-description {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 32px;
}

/* Reports Section */
.reports-section {
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-section {
    padding: 60px 20px 40px;
  }
  
  .reports-section {
    padding: 40px 20px;
  }
  
  .reports-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style> 