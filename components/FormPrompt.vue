<template>
    <form class="w-full">
      <div class="space-y-12 pb-2 px-1 ">
        <!-- <span class="items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Scene {{  idx+1  }}</span> -->
        <!-- <h2 class="text-base/7 font-semibold text-gray-900">Image Prompt</h2> -->
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="grid grid-cols-6 col-span-6">
              <div class="col-span-6">  
                <p class="text-sm/6 font-medium text-gray-700">Characters</p>
              </div>
              <div class="col-span-6 mt-4 flex" v-for="(character, charIdx) in form.characters" :key="charIdx">
                <div class="-mr-px grid grow grid-cols-1 focus-within:relative">
                  <input v-model="form.characters[charIdx]" type="text" name="query" id="query" class="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 px-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Describe the character" />
                  <UsersIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4" aria-hidden="true" />
                </div>
                <button @click="$emit('removeCharacter', idx, charIdx)" type="button" class="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-red-600 outline outline-1 -outline-offset-1 outline-red-300 hover:bg-white focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600">
                  Remove
                </button>
              </div>

              <div class="col-span-6 sm:col-span-3">
                  <button @click="$emit('addCharacter', idx)" type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white border border-1 border-gray-400 px-2 py-1 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-4">
                      <PlusIcon class="-ml-0.5 size-4" aria-hidden="true" />
                      Add Characters
                  </button>
              </div>
          </div>

            
          <div class="col-span-6 sm:col-span-4">
            <label for="country" class="block text-sm/6 font-medium text-gray-700">Style</label>
            <div class="mt-2 grid grid-cols-1">
              <select v-model="form.style" id="country" name="country" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>Cartoon</option>
                <option>Realistic</option>
                <option>Animation</option>
              </select>
              <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
            </div>
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label class="block text-sm/6 font-medium text-gray-700">Background</label>
            <div class="mt-2">
              <input v-model="form.background" name="text" type="text" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div class="col-span-6 sm:col-span-6">
            <label class="block text-sm/6 font-medium text-gray-700">Prompt</label>
            <div class="mt-2">
              <textarea v-model="form.prompt" rows="5" name="comment" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Write prompt for this scene..." />
            </div>
          </div>

        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { PlusIcon } from '@heroicons/vue/20/solid'
  const props = defineProps(['idx', 'form'])
  </script>
  <style scoped>
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