<template>
   <div class="card rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <p class="line-clamp-2 font-bold text-pirate-950">{{ search }}</p>
   </div>
</template>
<script setup>
defineProps({
   search: {
      type: String,
      required: true,
   },
});
</script>
