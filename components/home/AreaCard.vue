<template>
   <div
      class="group relative flex items-center rounded-lg border-2 border-pirate-100 bg-white p-4 shadow-md transition-transform duration-300 ease-in-out"
   >
      <NuxtImg
         :src="area.image"
         alt="Area image"
         class="mr-4 h-16 w-16 rounded-md object-cover object-center"
      />
      <div class="min-w-0 flex-1">
         <h3 class="truncate text-lg font-bold text-resin-500">
            {{ area.name }}
         </h3>
         <p class="text-sm text-pirate-950">
            {{ area.city }},{{ area.country }}
         </p>
         <p class="text-sm font-bold text-pirate-950">
            From ${{ area.price }} per month
         </p>
      </div>
   </div>
</template>

<script setup>
defineProps({
   area: {
      type: Object,
      required: true,
   },
});
</script>
