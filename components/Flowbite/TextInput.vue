<template>
   <input
      id="default-input"
      :placeholder="placeholder"
      type="text"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-resin-500 focus:ring-resin-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-resin-500 dark:focus:ring-resin-500"
   />
</template>

<script setup>
defineProps({
   placeholder: {
      type: String,
      default: "Enter your text",
   },
});
</script>
