<template>
   <span
      class="me-2 text-nowrap rounded-full bg-pirate-100 px-3 py-1 text-xs font-bold text-pirate-500 dark:bg-gray-700 dark:text-gray-300"
      >{{ text }}</span
   >
</template>

<script setup>
defineProps({
   text: {
      type: String,
      required: true,
   },
});
</script>
