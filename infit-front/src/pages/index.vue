<template>
  <div class="bg-[#FFF9F2] text-slate-ink">
    <!-- Hero Section -->
    <section class="text-center py-24 px-6 bg-whale-sky">
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        정보의 홍수 속에서<br>
        <span class="text-sunny-yellow">가장 중요한 단 하나의 인사이트</span>
      </h1>
      <p class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
        InFit은 AI 기술로 매일 쏟아지는 데이터를 분석하여, 당신의 성공에 필요한 핵심만 담은 주간 산업 리포트를 제공하는 '개인형 AI 전략가'입니다.
      </p>
      <div class="mt-10">
        <a href="#features" class="bg-soft-coral text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-sunny-yellow hover:text-slate-ink transition-colors duration-300">
          InFit의 특별함 알아보기
        </a>
      </div>
    </section>

    <!-- Why InFit Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">당신의 시간은 소중하니까요.</h2>
        <p class="max-w-3xl mx-auto text-slate-ink/80 text-lg mb-12">
          수많은 뉴스를 읽고, 정리하고, 분석하는 데 얼마나 많은 시간을 쓰고 계신가요?<br>InFit은 그 모든 과정을 대신하여 당신이 더 중요한 '결정'에 집중할 수 있도록 돕습니다.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="p-6">
            <div class="text-5xl mb-4">🌪️</div>
            <h3 class="text-xl font-bold mb-2">정보 과부하</h3>
            <p class="text-slate-ink/70">매일 쏟아지는 무의미한 정보 속에서 진짜 중요한 시그널을 놓칩니다.</p>
          </div>
          <div class="p-6">
            <div class="text-5xl mb-4">⏱️</div>
            <h3 class="text-xl font-bold mb-2">시간 낭비</h3>
            <p class="text-slate-ink/70">데이터를 찾고 분석하는데 너무 많은 시간을 허비하여 정작 중요한 결정을 미룹니다.</p>
          </div>
          <div class="p-6">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-xl font-bold mb-2">인사이트 부재</h3>
            <p class="text-slate-ink/70">표면적인 사실 너머의 '왜'와 '그래서 무엇을'에 대한 깊이 있는 통찰이 부족합니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-whale-sky text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold">InFit 리포트가 제공하는 것</h2>
          <p class="mt-4 max-w-2xl mx-auto text-white/80 text-lg">단순 요약을 넘어, 구조화된 분석을 통해 복잡한 산업의 흐름을 한눈에 파악하게 합니다.</p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Feature List -->
          <div class="w-full lg:w-1/2 space-y-8">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <v-icon icon="mdi-numeric-1-circle" color="white" size="36"></v-icon>
              </div>
              <div>
                <h3 class="text-xl font-bold">핵심 뉴스 브리핑</h3>
                <p class="text-white/80">한 주간 가장 중요했던 산업 뉴스를 선별하고, 그 의미와 파급력을 요약하여 제공합니다.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <v-icon icon="mdi-numeric-2-circle" color="white" size="36"></v-icon>
              </div>
              <div>
                <h3 class="text-xl font-bold">키워드 심층 분석</h3>
                <p class="text-white/80">시장을 움직이는 핵심 키워드의 기술적, 산업적, 사회적 맥락을 깊이 있게 분석합니다.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <v-icon icon="mdi-numeric-3-circle" color="white" size="36"></v-icon>
              </div>
              <div>
                <h3 class="text-xl font-bold">데이터 기반 시각화</h3>
                <p class="text-white/80">복잡한 통계와 수치를 직관적인 차트와 그래프로 시각화하여 빠른 이해를 돕습니다.</p>
              </div>
            </div>
             <div class="flex items-start gap-4">
               <div class="flex-shrink-0 mt-1">
                <v-icon icon="mdi-numeric-4-circle" color="white" size="36"></v-icon>
              </div>
              <div>
                <h3 class="text-xl font-bold">연관 산업 이슈 트래킹</h3>
                <p class="text-white/80">분석 대상 산업이 다른 분야에 미치는 영향을 추적하여 거시적인 비즈니스 관점을 제공합니다.</p>
              </div>
            </div>
          </div>

          <!-- Character Placeholder -->
          <div class="lg:w-1/2">
            <div class="bg-white rounded-2xl shadow-xl p-8 border-4 feature-card character-card">
              <div class="character-image-container">
                <img src="/infit_logo.png" alt="InFit AI 캐릭터" class="character-image">
              </div>
              <h4 class="text-center text-xl font-bold mt-6 text-slate-ink">AI 전략가 'InFit'</h4>
              <p class="text-center text-slate-ink/70 mt-2">당신을 위해 24시간 일하며<br>가장 날카로운 인사이트를 찾아냅니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-ink">InFit의 미래: 당신만을 위한 인텔리전스</h2>
          <p class="mt-4 max-w-2xl mx-auto text-slate-ink/80 text-lg">InFit은 단순한 리포트 제공을 넘어, 당신의 성장을 돕는 진정한 파트너로 진화합니다.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-xl feature-card border-2 border-ocean-mint shadow-lg bg-[#FFF9F2]">
            <div class="bg-soft-coral text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-6">1</div>
            <h3 class="text-2xl font-bold mb-3 text-slate-ink">다양한 산업 리포트</h3>
            <p class="text-slate-ink/80">금융을 넘어 IT, 바이오, 유통 등 관심 있는 모든 산업의 전문 분석 리포트를 '칼럼' 페이지에서 만나보세요.</p>
          </div>
          <div class="p-8 rounded-xl feature-card border-2 border-ocean-mint shadow-lg bg-[#FFF9F2]">
            <div class="bg-whale-sky text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-6">2</div>
            <h3 class="text-2xl font-bold mb-3 text-slate-ink">사용자 활동 기반 학습</h3>
            <p class="text-slate-ink/80">리포트를 읽고, 저장하고, 댓글을 다는 당신의 모든 활동을 AI가 학습하여 당신의 관심사를 파악합니다.</p>
          </div>
          <div class="p-8 rounded-xl feature-card border-2 border-ocean-mint shadow-lg bg-[#FFF9F2]">
            <div class="bg-whale-sky text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-6">3</div>
            <h3 class="text-2xl font-bold mb-3 text-slate-ink">초개인화 리포트 발송</h3>
            <p class="text-slate-ink/80">궁극적으로 InFit은 당신이 가장 궁금해할 내용만 담아, 세상에 단 하나뿐인 맞춤형 리포트를 매주 당신의 이메일로 보내드립니다.</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
//
</script>

<style scoped>
/* 커스텀 스타일 */
.character-card {
  border-color: rgba(133, 193, 220, 0.5);
}

.character-image-container {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 249, 242, 0.3);
}

.character-image {
  max-height: 80%;
  max-width: 80%;
  object-fit: contain;
}
</style>
