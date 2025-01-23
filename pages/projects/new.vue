<template>
    <div class="pt-4 px-4 lg:pt-6 lg:px-8">
        <div class="flex justify-between">
            <div  class="flex">
                <h1 v-if="!enableRenameTitle" @click.prevent="rename" class="text-2xl font-bold tracking-tight text-gray-900">Project title...</h1>
                <input v-else @blur="saveTitle" type="text" name="title" value="Project title..." class="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" autofocus />
                <button @click="uiStore.drawerModalState = true" type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ml-4">✨ AI Assistant</button>
            </div>
            <div>
                <button @click="deleteProject" type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-red-500 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-gray-50 mr-2">
                    <FolderArrowDownIcon class="-ml-0.5 size-5" aria-hidden="true" />
                    Delete Project
                </button>
                <button @click="download" type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <FolderArrowDownIcon class="-ml-0.5 size-5" aria-hidden="true" />
                    Download
                </button>
            </div>
        </div>
        <div class="py-6">
            <div id="workplace" class="scrollbar flex overflow-auto py-8 px-6">
                <TransitionRoot v-for="(form, idx) in forms" as="template" :key="idx" name="list" tag="div" :class="idx > 0 ? 'ml-4' : ''" class="min-w-96 flex flex-col rounded-lg border border-gray-200 bg-white h-full">
                    <img src="/emptyimage.png" alt="product.imageAlt" class="w-full bg-gray-200 object-cover group-hover:opacity-75 sm:h-[720px]" />
                    <div class="flex space-y-2 p-4">
                        <Form :idx="idx" :form="form" @remove="removeForm" @add-character="addCharacter" @generate="generate" />
                    </div>
                </TransitionRoot>
                <div class="min-w-14 flex justify-center bg-transparent item-center text-center rounded-r-full">
                    <button @click="addForm()" type="button" class="rounded-r-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center w-14">
                        <strong class="text-4xl">+</strong>
                        <p>Add</p>
                    </button>
                </div>
            </div>
        </div>
        <Drawer />
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import { FolderArrowDownIcon  } from '@heroicons/vue/24/outline'

  definePageMeta({
    layout: 'app'
  })

  let counter = 0
  let timer = null

  const enableRenameTitle = ref(false)

  const character = { description: "", pose: "" }

  const form = {
    characters: [{ description: "", pose: "" }],
    style: "",
    background: "",
    prompt: ""
  }

  const forms = ref([{
    characters: [{ description: "", pose: "" }],
    style: "",
    background: "",
    prompt: ""
  }])
  
  const mobileMenuOpen = ref(false)

  const uiStore = useUIStore()

  const analyticStore = useAnalyticStore()

  onMounted(() => {
    analyticStore.trackViewers('projects-new')
  })

  function addForm() {
    forms.value.push({
    characters: [{ description: "", pose: "" }],
    style: "",
    background: "",
    prompt: ""
  })
    const workplaceDoc = document.getElementById("workplace")
    setTimeout(() => {
        workplaceDoc.scrollTo(workplaceDoc.scrollWidth, 0)
    }, 100)
  }

  function removeForm(idx) {
    if (forms.length == 1) {
        return
    }
    forms.value.splice(idx, 1)
  }

  function addCharacter(idx) {
    forms.value[idx].characters.push({ description: "", pose: "" })
  }

  function rename() {
    counter++;
      
      if(counter == 1) {
         timer = setTimeout(() => {
            counter = 0;
         }, 300);

         return;
      }
      
      clearTimeout(timer);  
      counter = 0
      enableRenameTitle.value = true
  }

  function saveTitle() {
    enableRenameTitle.value = false
  }

  function generate() {
    analyticStore.event('generate')
    uiStore.wlModalState = true
  }

  function download() {
    analyticStore.event('download')
    uiStore.wlModalState = true
  }

  function deleteProject() {
    analyticStore.event('deleteProject')
    uiStore.wlModalState = true
  }

  </script>
  <style scoped>
    .scrollbar::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .scrollbar::-webkit-scrollbar
    {
        height: 6px;
        background-color: #F5F5F5;
    }

    .scrollbar::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: rgb(79 70 229 / var(--tw-bg-opacity, 1));
    }
  </style>