<template>
    <div>
      <Hero />
      <Gallery />
      <Pricing />
      <Footer />
    </div>
</template>
<script setup>
const analyticStore = useAnalyticStore()

onMounted(() => {
  analyticStore.trackViewers('lp')
})
</script>