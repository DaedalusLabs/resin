<template>
   <button
      type="button"
      class="mb-2 me-2 rounded-lg border border-pirate-400 px-6 py-3 text-center text-sm font-medium text-white hover:bg-white hover:text-resin-500 focus:outline-none focus:ring-4 focus:ring-pirate-700 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
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
});
</script>
