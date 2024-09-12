<template>
   <button
      type="button"
      class="flex items-center space-x-2 rounded-lg border bg-transparent px-4 py-2 text-center text-base font-medium text-pirate-500 outline-pirate-500 hover:bg-resin-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-pirate-100"
   >
      <div v-if="isExpanded" class="flex items-center space-x-2">
         <PhArrowUp weight="bold" />
         <p>Collapse</p>
      </div>
      <div v-else class="flex items-center space-x-2">
         <PhArrowDown weight="bold" />
         <p>Read full description</p>
      </div>
   </button>
</template>

<script setup>
import { PhArrowDown, PhArrowUp } from "@phosphor-icons/vue";

defineProps({
   isExpanded: {
      type: Boolean,
      required: true,
   },
});
</script>
