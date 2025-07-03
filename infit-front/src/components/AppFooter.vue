<template>
  <v-footer
    app
    height="72"
    class="flex-column"
  >
    <div class="d-flex justify-center w-100 mb-2">
      <a
        href="https://forms.gle/TqsuSL5ZhtDGeb9YA"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-soft-coral text-white font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity"
      >
        설문 참여하기
      </a>
    </div>

    <div class="w-100 d-flex align-center">
      <div class="mx-auto text-caption text-disabled text-center">
        &copy; 2024 InFit. All rights reserved.
      </div>
    </div>
  </v-footer>
</template>

<script setup>
  // 스크립트 내용은 비워두거나 필요시 수정
</script>

<style scoped lang="sass">
  .bg-soft-coral
    background-color: #FF8A80 !important // Vuetify의 기본 스타일을 덮어쓰기 위해 !important 사용
  .text-white
    color: white !important
</style>
