<template>
  <router-link 
    :to="`/report/${report.id}`" 
    class="report-card bg-white rounded-2xl shadow-lg border overflow-hidden"
  >
    <div class="report-image-container">
      <img :src="report.image" :alt="report.title" class="report-image">
    </div>
    <div class="p-6">
      <h2 class="text-xl font-bold text-slate-ink mb-2">{{ report.title }}</h2>
      <p class="text-slate-ink/70 mb-4">{{ report.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in report.tags" 
          :key="tag" 
          class="tag"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  report: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* 리포트 카드 이미지 스타일 */
.report-image-container {
  width: 100%;
  height: 12rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.report-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.report-card:hover .report-image {
  transform: scale(1.05);
}

.report-card {
  border-color: var(--ocean-mint);
  border-width: 2px;
  display: block;
  text-decoration: none;
  color: inherit;
}

.report-card:hover {
  text-decoration: none;
  color: inherit;
}
</style> 