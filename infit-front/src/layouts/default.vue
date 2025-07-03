<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer id="footer" class="bg-slate-ink text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-bubble-cream">저희 서비스에 대한 여러분의 소중한 의견을 들려주세요!</h2>
        <p class="mt-6 max-w-3xl mx-auto text-bubble-cream/80 leading-relaxed text-lg">
          'InFit'은 여러분의 피드백을 바탕으로 더욱 발전할 수 있습니다. 
          잠시 시간을 내어 설문조사에 참여해 주시면 감사하겠습니다. 
          설문에 참여해 주신 분들 중 <span class="font-bold text-soft-coral">추첨을 통해 N분께 소정의 기프티콘</span>을 선물로 드립니다!
        </p>
        <div class="mt-10">
          <a href="https://forms.gle/TqsuSL5ZhtDGeb9YA" target="_blank" rel="noopener noreferrer" class="inline-block bg-soft-coral text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-transform duration-300 transform">
            설문 참여하기
          </a>
        </div>
        <div class="mt-16 border-t border-bubble-cream/20 pt-10">
          <router-link to="/" class="flex items-center justify-center gap-2">
            <img src="/infit_logo.png" alt="InFit Logo" class="h-9">
            <span class="text-2xl font-bold text-white">InFit</span>
          </router-link>
          <p class="mt-4 text-sm text-bubble-cream/70">
            정보를 넘어 인사이트를. 당신의 성공적인 의사결정을 위한 파트너.
          </p>
          <p class="text-xs mt-8 text-bubble-cream/50">
            &copy; 2024 InFit. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped>
/* 레이아웃별 추가 스타일 */
</style>
