<template>
    <div>
      <Hero />
      <Gallery />
      <Pricing />
    </div>
</template>
<script setup>
const analyticStore = useAnalyticStore()

onMounted(() => {
  analyticStore.trackViewers('lp')
})
</script>