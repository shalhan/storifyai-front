<template>
    <div>
      <div class="sticky top-0 z-10 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
        <div class="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
        <a href="#">
          <span class="sr-only">Your profile</span>
          <img class="size-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </a>
      </div>
  
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