<template>
   <div>
      <!-- drawer init and toggle -->
      <div class="text-center">
         <button
            class="mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
         >
            Show drawer
         </button>
      </div>

      <!-- drawer component -->
      <div
         id="drawer-example"
         class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
         tabindex="-1"
         aria-labelledby="drawer-label"
      >
         <h5
            id="drawer-label"
            class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
         >
            <svg
               class="me-2.5 h-4 w-4"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 20 20"
            >
               <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
               /></svg
            >Info
         </h5>
         <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            class="absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
         >
            <svg
               class="h-3 w-3"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 14 14"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
               />
            </svg>
            <span class="sr-only">Close menu</span>
         </button>

         <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our
            <a
               href="#"
               class="text-blue-600 underline hover:no-underline dark:text-blue-500"
               >limited-time sale</a
            >
            for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
         </p>
         <div class="grid grid-cols-2 gap-4">
            <a
               href="#"
               class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
               >Learn more</a
            >
            <a
               href="#"
               class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >Get access
               <svg
                  class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
               >
                  <path
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M1 5h12m0 0L9 1m4 4L9 9"
                  /></svg
            ></a>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

// initialize components based on data attribute selectors
onMounted(() => {
   useFlowbite(() => {
      initFlowbite();
   });
});
</script>
