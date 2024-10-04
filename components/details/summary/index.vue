<template>
   <div class="mt-8 flex flex-col">
      <h2 class="text-lg font-bold">Summary</h2>
      <p
         ref="summaryText"
         class="mt-2 text-sm font-normal text-pirate-950 transition-all duration-300 ease-in-out"
         :class="isExpanded || !isClamped ? '' : 'line-clamp-4'"
      >
         {{ property.summary }}
      </p>
      <div v-if="isClamped" class="mt-4 flex justify-center space-x-4">
         <DetailsSummaryReadMoreButton
            :is-expanded="isExpanded"
            @click="isExpanded = !isExpanded"
         />
      </div>
   </div>
</template>

<script setup>
const isExpanded = ref(false);
const isClamped = ref(false);
const summaryText = ref(null);

defineProps({
   property: {
      type: Object,
      required: true,
   },
});

const checkClamped = () => {
   const el = summaryText.value;
   if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxHeight = lineHeight * 4; // For line-clamp-4

      isClamped.value = el.scrollHeight > maxHeight;
   }
};

onMounted(async () => {
   checkClamped();
});
</script>
