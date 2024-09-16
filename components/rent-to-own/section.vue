<template>
   <div class="mt-4 border-b border-gray-200 pb-2">
      <button
         class="flex w-full items-center justify-between pb-3 text-left text-lg font-semibold text-pirate-950"
         @click="isOpen = !isOpen"
      >
         {{ title }}
         <ph-caret-down
            :class="{
               'rotate-180': isOpen,
               'rotate-0': !isOpen,
            }"
            weight="bold"
            class="h-4 w-4 transform text-gray-800 transition-transform"
         />
      </button>

      <div v-if="isOpen" class="mt-2 border-t pt-3 text-gray-500">
         {{ text }}
      </div>
   </div>
</template>

<script setup>
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
