<template>
    <TransitionRoot as="template" :show="uiStore.wlModalState">
      <Dialog class="relative z-10" @close="$emit('close')">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">

          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full">
                <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-lg sm:px-24 xl:py-32">
                    <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl"> Get notified when we’re launching</h2>
                    <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">We are still working on it 🛠️ Drop your email and get exclusive promos just for joining the waiting list! 🚀 </p>
                    <form class="mx-auto mt-10 flex max-w-md gap-x-4" @submit.prevent="onSubmit">
                    <label for="email-address" class="sr-only">Email address</label>
                    <input v-model="email" :disabled="isLoading" id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6" placeholder="Enter your email" />
                    <button type="submit" :disabled="isLoading" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
                    </form>
                    <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                        <stop stop-color="#7775D6" />
                        <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                    </svg>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { CheckIcon } from '@heroicons/vue/24/outline'

  const uiStore = useUIStore()
  const waitingListStore = useWaitingListStore()
  const email = ref('')
  const isLoading = ref(false)

  async function onSubmit() {
    isLoading.value = true
    await waitingListStore.submit(email.value)
    isLoading.value = false
    uiStore.wlModalState = false
  }
  </script>