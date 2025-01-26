<template>
    <div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base/7 font-semibold text-indigo-400">Create short video faster</h2>
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Transform Your Stories into Mesmerizing Videos in Seconds</p>
              <p class="mt-6 text-lg/8 text-gray-300">Turn your wildest imagination into scroll-stopping videos with StorifyAI – where AI meets creativity, and every story comes to life.</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-white">
                    <component :is="feature.icon" class="absolute left-1 top-1 size-5 text-indigo-500" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img src="/featuress.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { AdjustmentsHorizontalIcon, LightBulbIcon, FilmIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Smart Scene Creation',
      description:
        'Leverage cutting-edge AI to transform text into vivid, dynamic scenes. Our advanced text-to-image generator understands your narrative\'s nuances, crafting visual stories that capture every emotion and detail',
      icon: LightBulbIcon,
    },
    {
      name: 'Seamless Customization',
      description: 'Take complete creative control with our intuitive scene editor. Adjust transitions, apply effects, and fine-tune every visual detail to match your vision. Your story, your style, perfectly realized.',
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: 'Effortless Video Creation',
      description: 'No design skills? No problem. StorifyAI simplifies video production, allowing anyone to create professional-quality, engaging short videos in minutes. From concept to completion, storytelling has never been this easy.',
      icon: FilmIcon,
    },
  ]
  </script>