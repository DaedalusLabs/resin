<template>
   <div class="mt-8 flex flex-col">
      <h2 class="text-lg font-bold">Summary</h2>
      <p
         class="mt-2 text-sm font-normal text-pirate-950"
         :class="isExpanded ? '' : 'line-clamp-2'"
      >
         {{ property.summary }}
      </p>
      <div class="mt-4 flex justify-center space-x-4">
         <DetailsSummaryReadMoreButton
            v-if="property.summary.length > 20"
            :is-expanded="isExpanded"
            @click="isExpanded = !isExpanded"
         />
      </div>
   </div>
</template>

<script setup>
const isExpanded = ref(false);

defineProps({
   property: {
      type: Object,
      required: true,
   },
});
</script>
