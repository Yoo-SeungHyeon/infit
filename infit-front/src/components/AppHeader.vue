<template>
  <header class="bg-white backdrop-blur-sm sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex items-center gap-2">
          <img src="/infit_logo.png" alt="InFit Logo" class="h-9">
          <span class="text-2xl font-bold text-whale-sky">InFit</span>
        </router-link>
        
        <!-- 데스크톱 네비게이션 (500px 이상) -->
        <div class="desktop-nav">
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

        <!-- 모바일 햄버거 버튼 (500px 이하) -->
        <button 
          @click="toggleMobileMenu"
          class="mobile-menu-btn p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="메뉴"
        >
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <!-- 모바일 드롭다운 메뉴 -->
      <div v-if="isMobileMenuOpen" class="mobile-dropdown">
        <nav class="mobile-nav-container">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="mobile-nav-item"
            :class="$route.path === '/' ? 'mobile-nav-active' : ''"
          >
            메인
          </router-link>
          <router-link 
            to="/column" 
            @click="closeMobileMenu"
            class="mobile-nav-item"
            :class="$route.path === '/column' ? 'mobile-nav-active' : ''"
          >
            칼럼
          </router-link>
          <a 
            href="https://forms.gle/TqsuSL5ZhtDGeb9YA"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMobileMenu"
            class="mobile-survey-btn"
          >
            설문 참여하기
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// 모바일 메뉴 상태 관리
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* 데스크톱 네비게이션 - 500px 이상에서만 표시 */
.desktop-nav {
  display: flex;
  align-items: center;
}

/* 모바일 햄버거 버튼 - 500px 이하에서만 표시 */
.mobile-menu-btn {
  display: none;
}

/* 모바일 드롭다운 메뉴 - 500px 이하에서만 표시 */
.mobile-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
}

/* 모바일 네비게이션 컨테이너 - 세로 배치 */
.mobile-nav-container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  gap: 0.25rem;
}

/* 모바일 네비게이션 아이템 */
.mobile-nav-item {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  color: rgba(71, 85, 105, 0.8);
  text-decoration: none;
}

.mobile-nav-item:hover {
  background-color: rgba(249, 250, 251, 1);
  color: #0ea5e9;
}

/* 활성 네비게이션 아이템 */
.mobile-nav-active {
  font-weight: 700;
  color: #0ea5e9;
  background-color: rgba(249, 250, 251, 1);
}

/* 모바일 설문 버튼 */
.mobile-survey-btn {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.75rem 1rem 0.5rem 1rem;
  padding: 0.75rem 1.25rem;
  background-color: #F7A78F;
  color: white;
  font-weight: 700;
  text-align: center;
  border-radius: 9999px;
  transition: opacity 0.2s ease;
  text-decoration: none;
}

.mobile-survey-btn:hover {
  opacity: 0.9;
}

/* 햄버거 아이콘 스타일 */
.hamburger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-icon span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: #475569;
  border-radius: 1px;
  transition: all 0.3s ease;
}

/* 미디어 쿼리 - 500px 이하 */
@media (max-width: 500px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-dropdown {
    display: block;
  }
}

/* 호버 효과 */
.mobile-menu-btn:hover .hamburger-icon span {
  background-color: #334155;
}
</style>
