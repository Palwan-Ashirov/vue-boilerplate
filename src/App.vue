<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const layout = computed(() => route.meta.layout || 'div')
</script>

<style scoped lang="scss">
  @import '@/assets/styles/global.scss';
</style>
