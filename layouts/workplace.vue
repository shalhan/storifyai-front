<template>
    <div>
      <!-- <main class="py-10 lg:pl-72">
        <div class="px-4 sm:px-6 lg:px-8"> -->
      <main class="bg-gray-100">
        <div class="border-2 border-gray-400 border-dashed">
          <Banner @open-waiting-list="onOpenWaitingList"/>
          <slot @open-waiting-list="onOpenWaitingList"/>
        </div>
      </main>
      <Modal @close="uiStore.wlModalState = false "/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Bars3Icon,
    FolderIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Projects', href: '/projects', icon: FolderIcon, current: false },
  ]
  const teams = [

  ]

  const sidebarOpen = ref(false)

  const uiStore = useUIStore()
  const analyticStore = useAnalyticStore()


  function onOpenWaitingList() {
    uiStore.wlModalState = true
    analyticStore.event('waiting-list')
  }
  </script>