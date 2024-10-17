<template>
   <div class="mt-5 border-b border-gray-200 pb-4">
      <button
         class="flex w-full items-center justify-between text-left text-lg font-semibold text-pirate-950"
         @click="isOpen = !isOpen"
      >
         {{ title }}
         <ph-caret-down
            :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }"
            weight="bold"
            class="h-4 w-4 transform text-gray-800 transition-transform duration-300 ease-in-out"
         />
      </button>
      <transition
         enter-active-class="transition-all duration-500 ease-out-back"
         leave-active-class="transition-all duration-500 ease-in-out"
         enter-from-class="opacity-0 max-h-0"
         enter-to-class="opacity-100 max-h-96 "
         leave-from-class="opacity-100 max-h-96"
         leave-to-class="opacity-0 max-h-0 pt-0"
      >
         <div v-show="isOpen" class="overflow-hidden text-gray-500">
            <hr class="my-4" />
            <p>{{ text }}</p>
         </div>
      </transition>
   </div>
</template>

<script setup>
import { ref } from "vue";
import { PhCaretDown } from "@phosphor-icons/vue";

defineProps({
   title: {
      type: String,
      required: true,
   },
   text: {
      type: String,
      required: true,
   },
});

const isOpen = ref(false);
</script>
