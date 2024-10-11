<template>
   <input
      id="default-input"
      :placeholder="placeholder"
      type="text"
      class="= block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-300 focus:ring-transparent"
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
