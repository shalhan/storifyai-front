<template>
    <div class="pt-4 px-4 lg:pt-6">
        <div class="flex flex-col sm:flex-row justify-between pl-2 sm:pl-6">
            <div class="flex justify-between">
                <h1 v-if="!enableRenameTitle" @click.prevent="rename" class="text-2xl font-bold tracking-tight text-gray-900">Project title...</h1>
                <input v-else @blur="saveTitle" type="text" name="title" value="Project title..." class="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" autofocus />
                <button @click="uiStore.drawerModalState = true" type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ml-4">✨ AI Assistant</button>
            </div>
            <div class="mt-4 sm:mt-0">
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
          <div id="workplace" class="scrollbar flex overflow-auto py-4 lg:py-8 lg:px-6">
              <TransitionGroup name="list">
                <div v-for="(form, idx) in forms" :key="form" name="list" tag="div" :class="idx > 0 ? 'ml-4' : ''" class="min-w-96 max-w-96 flex flex-col rounded-lg h-full">
                  <div :style="`background-color: ${form.setting.background}`" class="relative w-full object-cover group-hover:opacity-75 sm:h-[682px] shadow-xl" >  
                    <img v-if="form.setting.isFull" src="/full.png" alt="product.imageAlt" />
                    <img v-else src="/half.png" alt="product.imageAlt" class="absolute top-[25%]" />
                  </div>  
                  <div class="bg-white rounded-b-lg mt-2 shadow-xl">
                    <button @click="toggleAccordion(idx, 1)" class="px-4 w-full border-b border-1 border-gray-200 flex justify-between items-center py-5 text-slate-800">
                      <span class="font-medium">⚒️ Image Setting</span>
                      <span :id="`icon-${idx}-1`" class="text-slate-800 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                          <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                    <div :id="`content-${idx}-1`" class="bg-slate-100 max-h-0 overflow-hidden">
                      <div class="px-4 pb-4 text-sm text-slate-500">
                        <FormImage :idx="idx" :form="form.setting" />
                      </div>
                    </div>
                    <button @click="toggleAccordion(idx, 2)" class="px-4  w-full border-b border-1 border-gray-200 flex justify-between items-center py-5 text-slate-800">
                      <span class="font-medium">💬 Image Prompt</span>
                      <span :id="`icon-${idx}-2`" class="text-slate-800 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                          <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                    <div :id="`content-${idx}-2`" class="bg-slate-100 max-h-0 overflow-hidden">
                      <div class="px-4 pb-4 text-sm text-slate-500">
                        <FormPrompt :idx="idx" :form="form.prompt" @remove-character="removeCharacter" @add-character="addCharacter" />
                      </div>
                    </div>
                    <div class="flex items-center justify-end gap-x-6 p-4">
                      <button @click="removeForm(idx)" type="button" class="text-sm/6 font-semibold text-red-500">Remove</button>
                      <button @click="generate(idx)" type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">✨ Generate</button>
                    </div>
                  </div>
                </div>
                <div class="min-w-14 flex justify-center bg-transparent item-center text-center rounded-r-full sm:h-[682px]  shadow-xl">
                    <button @click="addForm()" type="button" class="rounded-r-full bg-indigo-600 p-2 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center w-14 shadow-md">
                        <strong class="text-4xl">+</strong>
                        <p>Add</p>
                    </button>
                </div>
              </TransitionGroup>
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

  const forms = ref([{
      setting: {
        isFull: true,
        background: '#0a0a0a'
      },
      prompt: {
        characters: [""],
        style: "Realistic",
        background: "",
        prompt: ""
      }
    }])
  
  const mobileMenuOpen = ref(false)

  const uiStore = useUIStore()

  const analyticStore = useAnalyticStore()

  onMounted(() => {
    analyticStore.trackViewers('projects-new')
  })

  function addForm() {
    forms.value.push({
      setting: {
        isFull: true,
        background: '#0a0a0a'
      },
      prompt: {
        characters: [""],
        style: "Realistic",
        background: "",
        prompt: ""
      }
    })
    const workplaceDoc = document.getElementById("workplace")
    setTimeout(() => {
        workplaceDoc.scrollTo(workplaceDoc.scrollWidth, 0)
    }, 100)
  }

  function removeForm(idx) {
    if (forms.value.length == 1) {
        return
    }
    forms.value.splice(idx, 1)
  }

  function removeCharacter(formIdx, charIdx) {
    if (forms.value[formIdx].prompt.characters.length == 1) {
        return
    }
    forms.value[formIdx].prompt.characters.splice(charIdx, 1)
  }

  function addCharacter(idx) {
    if (forms.value[idx].prompt.characters.length >= 5) {
      return
    }
    forms.value[idx].prompt.characters.push("")
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

  function generate(idx) {
    analyticStore.event('generate')
    uiStore.wlModalState = true
  }

  function download() {
    analyticStore.event('download')
    uiStore.wlModalState = true
  }

  function deleteProject() {
    analyticStore.event('delete-project')
    uiStore.wlModalState = true
  }

  function toggleAccordion(formIdx, accordIdx) {
    const content = document.getElementById(`content-${formIdx}-${accordIdx}`);
    const icon = document.getElementById(`icon-${formIdx}-${accordIdx}`);
 
    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;
 
    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = 720 + 'px';
      icon.innerHTML = downSVG;
    }
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
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(-30px);
    }
  </style>