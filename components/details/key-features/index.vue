<template>
   <div class="mt-8">
      <h2 class="text-lg font-bold">Key Features</h2>
      <div class="mt-4 flex flex-wrap gap-2">
         <FlowbiteBadge
            v-for="feature in property.propertyDetails.keyFeatures"
            :key="feature"
            :text="feature"
         />
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
