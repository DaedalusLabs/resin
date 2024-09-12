<template>
   <div class="mt-12 flex space-x-8">
      <div>
         <h3 class="mb-2 text-xs">Rent Price</h3>
         <p class="text-lg font-semibold">
            $ {{ property.pricingDetails.rentPerMonth.toLocaleString() }}
            per month
         </p>
      </div>
      <div>
         <h3 class="mb-2 text-xs">Property Price</h3>
         <p class="text-lg font-semibold">
            $ {{ property.pricingDetails.propertyPrice.toLocaleString() }}
         </p>
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
