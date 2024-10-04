<template>
   <div
      v-if="showToast"
      class="force-top absolute inset-0 flex items-center justify-center"
   >
      <div
         id="toast-message-cta"
         class="relative w-full max-w-xs rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
         role="alert"
      >
         <button
            class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label="Close"
            @click="
               showToast = false;
               propertiesStore.hasSeenMapToast = true;
            "
         >
            <PhX :size="18" weight="bold" />
         </button>

         <div class="flex">
            <NuxtImg
               class="h-8 w-8 rounded-full"
               src="/images/avatar.png"
               alt="avatar"
            />
            <div class="ms-3 text-sm font-normal">
               <span
                  class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
                  >Let's find a property!</span
               >
               <div class="mb-2 text-sm font-normal">
                  RESIN offers apartments, single family homes, commercial real
                  estate and more around LatAm.
               </div>
               <button
                  href="#"
                  class="inline-flex rounded-lg bg-resin-500 px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-resin-600 focus:outline-none focus:ring-4 focus:ring-resin-300 dark:bg-resin-500 dark:hover:bg-resin-600 dark:focus:ring-resin-800"
                  @click="
                     showToast = false;
                     propertiesStore.hasSeenMapToast = true;
                  "
               >
                  Continue
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { PhX } from "@phosphor-icons/vue";

import { usePropertiesStore } from "~/stores/properties";
const propertiesStore = usePropertiesStore();
const showToast = ref(false);

watchEffect(() => {
   showToast.value = !propertiesStore.hasSeenMapToast;
});
</script>
