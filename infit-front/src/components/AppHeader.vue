<template>
  <header class="bg-white backdrop-blur-sm sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex items-center gap-2">
          <img src="/infit_logo.png" alt="InFit Logo" class="h-9">
          <span class="text-2xl font-bold text-whale-sky">InFit</span>
        </router-link>
        <div>
          <router-link 
            to="/" 
            class="font-medium py-2 px-4 rounded-lg transition"
            :class="$route.path === '/' ? 'font-bold text-ocean-mint' : 'text-slate-ink/80 hover:text-ocean-mint'"
          >
            메인
          </router-link>
          <router-link 
            to="/column" 
            class="font-medium py-2 px-4 rounded-lg transition"
            :class="$route.path === '/column' ? 'font-bold text-ocean-mint' : 'text-slate-ink/80 hover:text-ocean-mint'"
          >
            칼럼
          </router-link>
          <a 
            href="https://forms.gle/TqsuSL5ZhtDGeb9YA"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-soft-coral text-white font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity ml-4"
          >
            설문 참여하기
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// 브랜드 컬러를 CSS 변수로 정의
</script>

<style scoped>
/* 컴포넌트별 추가 스타일 */
</style>
