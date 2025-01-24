import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => {
    return {
        wlModalState: false,
        drawerModalState: true
    }
  },
})