<template>
    <form class="w-full">
      <div class="space-y-12 pb-2 px-1 ">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="col-span-3 sm:col-span-3">
            <label for="country" class="block text-sm/6 font-medium text-gray-700 mb-4">Size</label>
            <SwitchGroup as="div" class="flex items-center">
              <SwitchLabel as="span" class="mr-3 text-sm">
                <span :class="!form.isFull ? 'font-medium' : ''"  class="text-gray-700">Half</span>
              </SwitchLabel>
              <Switch v-model="form.isFull" :class="[form.isFull ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                <span aria-hidden="true" :class="[form.isFull ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span :class="form.isFull ? 'font-medium' : ''" class="text-gray-700">Full</span>
              </SwitchLabel>
            </SwitchGroup>
          </div>
          <div class="col-span-3 sm:col-span-3">
            <label v-if="!form.isFull" for="country" class="block text-sm/6 font-medium text-gray-700 mb-4">Background</label>
            <input v-if="!form.isFull" type="color" class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="hs-color-input" :value="form.background" @input="form.background = $event.target.value" title="Choose your color">
          </div>
          <div class="col-span-6 sm:col-span-4">
            <label for="country" class="block text-sm/6 font-medium text-gray-700">Effect</label>
            <div class="mt-2 grid grid-cols-1">
              <select id="country" name="country" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>None</option>
                <option>Zoom In</option>
                <option>Zoom Out</option>
                <option>Slide</option>
              </select>
              <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
            </div>
          </div>
          <div class="col-span-6 sm:col-span-4">
            <label for="country" class="block text-sm/6 font-medium text-gray-700">Transition</label>
            <div class="mt-2 grid grid-cols-1">
              <select id="country" name="country" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>None</option>
                <option>Zoom In</option>
                <option>Zoom Out</option>
                <option>Slide</option>
              </select>
              <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  const props = defineProps(['idx', 'form'])
  
  </script>