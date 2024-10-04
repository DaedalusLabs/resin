<template>
   <div class="container mx-auto mt-8 w-10/12">
      <h2 class="text-xl font-bold">Nearby Properties</h2>
      <div class="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
         <div v-if="!property.nearbyProperties.length">
            <p>No nearby properties found</p>
         </div>
         <div
            v-for="nearbyProperty in property.nearbyProperties"
            :key="nearbyProperty.id"
         >
            <PropertyCard :property="nearbyProperty" :show-media-icon="false" />
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   property: {
      type: Object,
      required: true,
   },
});
</script>
