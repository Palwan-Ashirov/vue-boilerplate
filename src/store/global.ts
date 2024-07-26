import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const count = ref(0)

  function increamentCount() {
    count.value = count.value + 1
  }
  return { count, increamentCount }
})
