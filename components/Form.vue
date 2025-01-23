<template>
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <span class="items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-2">Scene {{  idx+1  }}</span>
          <!-- <h2 class="text-base/7 font-semibold text-gray-900">Image Prompt</h2> -->
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="grid grid-cols-6 sm:col-span-6">
                <div class="grid grid-cols-6 col-span-6" v-for="(character, idx) in form.characters" :key="idx">
                  <div class="col-span-6 sm:col-span-3">
                      <label for="character" class="block text-sm/6 font-medium text-gray-900">Character 👫</label>
                      <div class="mt-2 mr-2">
                          <input v-model="character.description" type="text" name="character" id="character"  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                      </div>
                  </div>
      
                  <div class="col-span-6 sm:col-span-3">
                      <label for="pose" class="block text-sm/6 font-medium text-gray-900">Pose, clotches, etc 🏊‍♂️</label>
                      <div class="mt-2">
                          <input v-model="character.pose" type="text" name="pose" id="pose" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                      </div>
                  </div>
                </div>

                <div class="sm:col-span-3">
                    <button @click="$emit('addCharacter', idx)" type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white border border-1 border-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4">
                        <PlusIcon class="-ml-0.5 size-5" aria-hidden="true" />
                        Add Characters
                    </button>
                </div>
            </div>

              
            <div class="sm:col-span-4">
              <label for="country" class="block text-sm/6 font-medium text-gray-900">Style 🎨</label>
              <div class="mt-2 grid grid-cols-1">
                <select id="country" name="country" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>Cartoon</option>
                  <option>Realistic</option>
                  <option>Animation</option>
                </select>
                <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
              </div>
            </div>
  
            <div class="sm:col-span-4">
              <label class="block text-sm/6 font-medium text-gray-900">Background 🖼️</label>
              <div class="mt-2">
                <input name="text" type="text" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label class="block text-sm/6 font-medium text-gray-900">Prompt 📝</label>
              <div class="mt-2">
                <textarea rows="5" name="comment" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Write prompt for this scene..." />
              </div>
            </div>
  
          </div>
        </div>
      </div>
  
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button @click="$emit('remove', idx)" type="button" class="text-sm/6 font-semibold text-red-500">Remove</button>
        <button @click="$emit('generate')" type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">✨ Generate</button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { PlusIcon } from '@heroicons/vue/20/solid'
  const props = defineProps(['idx', 'form'])
  </script>