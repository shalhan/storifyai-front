<template>
    <TransitionRoot as="template" :show="uiStore.drawerModalState">
      <Dialog class="relative z-10" @close="uiStore.drawerModalState = false">
        <div class="fixed inset-0" />
  
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <form @submit.prevent="onSubmit" class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div class="flex flex-col h-full w-full bg-white shadow-lg rounded-lg overflow-hidden font-sans">
                      <!-- Chat Header -->
                      <div class="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                        <div class="flex items-center space-x-3">
                          <img src="/assistant.png" class="w-10 h-10 rounded-full bg-white border border-black">
                          <div>
                            <h3 class="text-lg font-semibold text-gray-900">AI Assistant</h3>
                            <p class="text-sm text-gray-500">We can help you generate ideas for your short</p>
                          </div>
                        </div>
                        <button @click="uiStore.drawerModalState = false" type="button" class="p-2 text-gray-500 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <!-- Chat Messages -->
                      <div class="flex-1 p-4 overflow-y-auto space-y-4">
                        <!-- Incoming Message -->
                        <div class="flex items-start space-x-2">
                          <img src="/assistant.png" class="w-10 h-10 rounded-full bg-white border border-black">
                          <div class="max-w-[70%] bg-gray-100 p-3 rounded-lg">
                            <p class="text-sm text-gray-800">Hi there! How can I assist you today?</p>
                            <p class="text-xs text-gray-500 mt-1">10:00 AM</p>
                          </div>
                        </div>

                        <!-- Outgoing Message -->
                        <div class="flex items-start justify-end space-x-2">
                          <div class="max-w-[70%] bg-blue-500 p-3 rounded-lg">
                            <p class="text-sm text-white">I need help with my account.</p>
                            <p class="text-xs text-blue-200 mt-1">10:02 AM</p>
                          </div>
                        </div>

                        <!-- Incoming Message -->
                        <div class="flex items-start space-x-2">
                          <img src="/assistant.png" class="w-10 h-10 rounded-full bg-white border border-black">
                          <div class="max-w-[70%] bg-gray-100 p-3 rounded-lg">
                            <p class="text-sm text-gray-800">Sure, I can help with that. Could you provide your account email?</p>
                            <p class="text-xs text-gray-500 mt-1">10:03 AM</p>
                          </div>
                        </div>
                      </div>

                      <!-- Message Input -->
                      <div class="p-4 bg-gray-50 border-t border-gray-200">
                        <div class="flex flex-col items-end space-x-2">
                          <textarea
                            type="text"
                            placeholder="Write your story"
                            rows="2"
                            class="flex-1 w-full px-6 py-4 text-sm text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button class="p-2 text-blue-500 hover:text-blue-700 items-right">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/20/solid'
  
  const uiStore = useUIStore()
  
  const team = [
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Whitney Francis',
      email: 'whitney.francis@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leonard Krasner',
      email: 'leonard.krasner@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Floyd Miles',
      email: 'floyd.miles@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Selman',
      email: 'emily.selman@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  function onSubmit() {
    uiStore.drawerModalState = false
    uiStore.wlModalState = true
  }
  
  const open = ref(true)
  </script>