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
    
    <div v-else class="container mx-auto px-6 py-8">
      <!-- 뒤로가기 버튼 -->
      <div class="mb-6">
        <router-link 
          to="/column" 
          class="inline-flex items-center gap-2 text-whale-sky hover:text-soft-coral transition-colors"
        >
          <span>←</span> 칼럼 목록으로 돌아가기
        </router-link>
      </div>
      
      <!-- 동적으로 추가된 스타일 -->
      <div v-if="extractedStyles" v-html="`<style>${extractedStyles}</style>`"></div>
      
      <!-- 리포트 내용 -->
      <div v-html="reportContent" class="report-content"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const error = ref(false)
const reportContent = ref('')
const extractedStyles = ref('')

onMounted(async () => {
  try {
    const reportId = route.params.id
    
    // reports 폴더에서 해당 HTML 파일을 가져옵니다
    const response = await fetch(`/reports/${reportId}.html`)
    
    if (!response.ok) {
      throw new Error('Report not found')
    }
    
    const htmlContent = await response.text()
    
    // HTML 파싱
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    
    // body 내용 추출
    const bodyContent = doc.body.innerHTML
    reportContent.value = bodyContent
    
    // style 태그에서 CSS 추출
    const styleElements = doc.querySelectorAll('style')
    let combinedStyles = ''
    styleElements.forEach(style => {
      combinedStyles += style.textContent + '\n'
    })
    extractedStyles.value = combinedStyles
    
    loading.value = false
  } catch (err) {
    console.error('Error loading report:', err)
    error.value = true
    loading.value = false
  }
})
</script>

<style scoped>
.report-content {
  /* 추출된 HTML 스타일이 적용되는 영역 */
  width: 100%;
  max-width: none;
}
</style> 