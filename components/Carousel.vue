<template>
     <!--HTML CODE-->
<div class="w-full relative">
    <div class="swiper centered-slide-carousel swiper-container relative ">
    <div class="swiper-wrapper">
    <div class="swiper-slide">
    <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
        <span class="text-3xl font-semibold text-indigo-600">Slide 1 </span>
    </div>
    </div>
    <div class="swiper-slide">
    <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
        <span class="text-3xl font-semibold text-indigo-600">Slide 2 </span>
    </div>
    </div>
    <div class="swiper-slide">
    <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
        <span class="text-3xl font-semibold text-indigo-600">Slide 3 </span>
    </div>
    </div>
    <div class="swiper-slide">
    <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
        <span class="text-3xl font-semibold text-indigo-600">Slide 4 </span>
    </div>
    </div>
    <div class="swiper-slide">
    <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
        <span class="text-3xl font-semibold text-indigo-600">Slide 5 </span>
    </div>
    </div>
    <div class="swiper-slide">
    <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
        <span class="text-3xl font-semibold text-indigo-600">Slide 6 </span>
    </div>
    </div>
    </div>
    <div class="swiper-pagination "></div>
    </div>
</div>
</template>
<script setup>
var swiper = new Swiper(".centered-slide-carousel", {
 centeredSlides: true,
 paginationClickable: true,
 loop: true,
 spaceBetween: 30,
 slideToClickedSlide: true,
 pagination: {
   el: ".centered-slide-carousel .swiper-pagination",
   clickable: true,
 },
 breakpoints: {
   1920: {
     slidesPerView: 4,
     spaceBetween: 30
   },
   1028: {
     slidesPerView: 2,
     spaceBetween: 10
   },
   990: {
     slidesPerView: 1,
     spaceBetween: 0
   }
 }
});
</script>
<style scoped>
/* CSS Code */
.swiper-wrapper {
width: 100%;
height: max-content !important;
padding-bottom: 64px !important;
-webkit-transition-timing-function: linear !important;
transition-timing-function: linear !important;
position: relative;
}
.swiper-pagination-bullet {
background: #4F46E5;
}
.swiper-pagination-bullet-active {
background: #4F46E5 !important;
}
</style>