<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Make Video Like These Instantly</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div class="flex overflow-auto mt-16 max-w-2xl auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none snap-x">
          <article v-for="post in posts" :key="post.id" class="border-8 border-black mr-4 h-[720px] min-w-96 relative isolate snap-center flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            
            <img :src="post.imageUrl" loading="lazy" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
              <!-- <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="flex gap-x-2.5">
                  <img :src="post.author.imageUrl" alt="" class="size-6 flex-none rounded-full bg-white/10" />
                  {{ post.author.name }}
                </div>
              </div> -->
            </div>
            <h3 class="mt-3 text-lg/6 font-semibold text-white">
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      id: 1,
      title: 'Poor Kitty Car Accident AI Story',
      href: 'https://www.youtube.com/shorts/H84nr7VDEPU',
      imageUrl: 'https://xbgtdyebkkmvdoinsuia.supabase.co/storage/v1/object/public/storifyai-asset/0113%20(1).gif?t=2025-01-25T06%3A54%3A07.439Z',
    },
    {
      id: 2,
      title: 'Cat Stuck In Flight Accident 😢',
      href: 'https://www.youtube.com/shorts/NuhSSUo3S7w',
      imageUrl:'https://xbgtdyebkkmvdoinsuia.supabase.co/storage/v1/object/public/storifyai-asset/0122(1).gif?t=2025-01-25T06%3A54%3A18.663Z',
    },
    {
      id: 3,
      title: 'Happy Kid, Happy Dad❤️',
      href: 'https://www.youtube.com/shorts/gYfPSwowQCs',
      imageUrl: 'https://xbgtdyebkkmvdoinsuia.supabase.co/storage/v1/object/public/storifyai-asset/0106.gif?t=2025-01-25T06%3A54%3A32.261Z',
    },
  ]
  </script>