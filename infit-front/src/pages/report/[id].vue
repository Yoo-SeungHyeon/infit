<template>
  <div class="text-slate-ink bg-white min-h-screen">
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="text-xl">리포트를 불러오는 중...</div>
    </div>
    
    <div v-else-if="error" class="flex justify-center items-center py-20">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-slate-ink mb-4">리포트를 찾을 수 없습니다</h2>
        <p class="text-slate-ink/70 mb-6">요청하신 리포트가 존재하지 않거나 일시적으로 접근할 수 없습니다.</p>
        <router-link 
          to="/column" 
          class="bg-whale-sky text-white font-bold py-3 px-6 rounded-full hover:bg-soft-coral transition-colors"
        >
          칼럼 목록으로 돌아가기
        </router-link>
      </div>
    </div>
    
    <div v-else>
      <!-- 뒤로가기 버튼 (고정) -->
      <div class="fixed top-20 left-4 z-50 bg-white rounded-full shadow-lg">
        <router-link 
          to="/column" 
          class="inline-flex items-center gap-2 text-whale-sky hover:text-soft-coral transition-colors px-4 py-2 rounded-full"
        >
          <span>←</span> 칼럼 목록
        </router-link>
      </div>
      
      <!-- HTML 파일을 iframe으로 완전히 표시 -->
      <iframe 
        :src="`/reports/${reportId}.html`"
        class="w-full h-screen border-0"
        title="리포트 내용"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const error = ref(false)
const reportId = ref('')

onMounted(async () => {
  try {
    reportId.value = route.params.id
    
    // 파일 존재 여부 확인
    const response = await fetch(`/reports/${reportId.value}.html`)
    
    if (!response.ok) {
      throw new Error('Report not found')
    }
    
    loading.value = false
  } catch (err) {
    console.error('Error loading report:', err)
    error.value = true
    loading.value = false
  }
})
</script>

<style scoped>
/* iframe이 Vue layout과 잘 조화되도록 스타일 조정 */
iframe {
  margin-top: -80px; /* 헤더 높이만큼 올려서 전체 화면 활용 */
  height: calc(100vh + 80px);
}
</style> 