<template>
   <div class="mt-12 w-3/4">
      <h2 class="mb-3 text-lg font-bold">Additional Details</h2>
      <ul class="grid grid-cols-2 gap-y-4">
         <!-- Type -->
         <li class="flex items-center">
            <p class="text-sm text-black">Type</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="property.propertyDetails.additionalDetails.type"
               class="ml-4"
            />
         </li>

         <!-- Built -->
         <li class="flex items-center">
            <p class="text-sm text-black">Built</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="
                  property.propertyDetails.additionalDetails.yearBuilt.toString()
               "
               class="ml-4"
            />
         </li>

         <!-- Garden -->
         <li class="flex items-center">
            <p class="text-sm text-black">Garden</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="
                  property.propertyDetails.additionalDetails.hasGarden
                     ? 'Yes'
                     : 'No'
               "
               class="ml-4"
            />
         </li>

         <!-- Floors -->
         <li class="flex items-center">
            <p class="text-sm text-black">Floors</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="
                  property.propertyDetails.additionalDetails.numberOfFloors.toString()
               "
               class="ml-4"
            />
         </li>

         <!-- Heating -->
         <li class="flex items-center">
            <p class="text-sm text-black">Heating</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="property.propertyDetails.additionalDetails.heating"
               class="ml-4"
            />
         </li>

         <!-- Cooling -->
         <li class="flex items-center">
            <p class="text-sm text-black">Cooling</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="property.propertyDetails.additionalDetails.cooling"
               class="ml-4"
            />
         </li>

         <!-- Parking -->
         <li class="flex items-center">
            <p class="text-sm text-black">Parking</p>
         </li>
         <li class="flex">
            <FlowbiteBadge
               :text="property.propertyDetails.additionalDetails.parking"
               class="ml-4"
            />
         </li>
      </ul>
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
