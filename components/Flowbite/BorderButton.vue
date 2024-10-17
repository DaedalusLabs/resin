<template>
   <button
      type="button"
      class="inline-flex items-center justify-center rounded-lg border border-resin-500 bg-transparent px-4 py-2 text-center text-sm font-medium text-resin-500 hover:bg-resin-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-pirate-100"
   >
      {{ text }}
   </button>
</template>

<script setup>
defineProps({
   text: {
      type: String,
      required: true,
   },
   showIcon: {
      type: Boolean,
      default: true,
   },
});
</script>
