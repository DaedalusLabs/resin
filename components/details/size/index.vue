<template>
   <div class="mt-6 flex space-x-8">
      <p class="flex items-center gap-1">
         <PhRuler :size="20" class="inline" />
         {{ property.propertyDetails.size.lotSizeM2 }} m²
      </p>
      <p class="flex items-center gap-1">
         <PhHouseSimple :size="20" class="inline" />
         {{ property.propertyDetails.size.houseSizeM2 }} m²
      </p>
      <p class="flex items-center gap-1">
         <PhBed :size="20" class="inline" />
         {{ property.propertyDetails.bedrooms }} beds
      </p>
   </div>
</template>

<script setup>
import { PhRuler, PhHouseSimple, PhBed } from "@phosphor-icons/vue";

defineProps({
   property: {
      type: Object,
      required: true,
   },
});
</script>
