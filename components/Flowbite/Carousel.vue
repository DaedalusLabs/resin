<template>
   <div id="animation-carousel" class="relative w-full" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-full overflow-hidden md:h-72 lg:h-96">
         <div
            v-for="(item, index) in items"
            :key="index"
            :class="['duration-200 ease-linear', { hidden: index !== 0 }]"
            :data-carousel-item="index === 0 ? 'active' : ''"
         >
            <NuxtImg
               :src="item"
               class="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
               alt="..."
            />
         </div>
      </div>
      <!-- Slider controls -->
      <button
         type="button"
         class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
         data-carousel-prev
      >
         <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
         >
            <svg
               class="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 6 10"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
               />
            </svg>
            <span class="sr-only">Previous</span>
         </span>
      </button>
      <button
         type="button"
         class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
         data-carousel-next
      >
         <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
         >
            <svg
               class="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 6 10"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
               />
            </svg>
            <span class="sr-only">Next</span>
         </span>
      </button>
   </div>
</template>

<script setup>
import { useFlowbite } from "~/composables/useFlowbite";

// initialize components based on data attribute selectors
onMounted(() => {
   useFlowbite(() => {
      initFlowbite();
   });
});

defineProps({
   items: {
      type: Array,
      required: true,
   },
});
</script>
