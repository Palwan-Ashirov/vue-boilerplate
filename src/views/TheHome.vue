<template>
  <div>The Home Page</div>
  <div class="count__value">
    {{ globalStore.count }}
  </div>
  <button @click="globalStore.increamentCount">Counter</button>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '@store/global'

  const globalStore = useGlobalStore()
</script>

<style scoped></style>
