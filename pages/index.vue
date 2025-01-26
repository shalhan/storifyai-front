<template>
    <div>
      <Hero />
      <Gallery />
      <Feature />
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