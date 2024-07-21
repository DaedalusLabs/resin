<template>
   <div>
      <a
         href="#"
         :class="{ 'border-resin-500': isSelected }"
         class="block h-full max-w-sm rounded-2xl border-4 border-gray-200 bg-white p-6 pr-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
         @click="isSelected = !isSelected"
      >
         <div class="flex justify-between">
            <h5
               class="mb-2 w-3/4 text-lg font-bold leading-tight tracking-tight text-gray-900"
            >
               {{ title }}
            </h5>
            <div
               class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200"
               :class="{ 'bg-resin-500': isSelected }"
            >
               <svg
                  v-if="isSelected"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="3"
                     d="M5 13l4 4L19 7"
                  />
               </svg>
            </div>
         </div>
         <p class="font-normal text-gray-400">
            {{ description }}
         </p>
      </a>
   </div>
</template>

<script setup>
defineProps({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
});

const isSelected = ref(false);
</script>
