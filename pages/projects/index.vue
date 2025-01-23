<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center space-y-4">
        <EmptyState />
      </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'app'
})

const analyticStore = useAnalyticStore()

onMounted(() => {
  analyticStore.trackViewers('projects')
})
</script>