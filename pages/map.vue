<template>
   <section class="relative flex h-full flex-col items-center justify-between">
      <TopBar
         class="force-top absolute left-0 right-0 top-0 px-5 pt-10"
         @update:map-center="updateMapCenter"
      />
      <FlowbiteToast />
      <ClientOnly fallback-tag="span">
         <MapLibre :map-center="mapCenter" />
         <template #fallback>
            <div
               class="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800"
            />
         </template>
      </ClientOnly>
   </section>
</template>

<script setup>
const mapCenter = ref({ lat: 5.852036, lng: -55.154996 });

function updateMapCenter(lat, lng) {
   mapCenter.value = { lat, lng };
}

definePageMeta({
   layout: "intro",
});
</script>

<style scoped>
.force-top {
   z-index: 9999; /* High z-index to ensure it appears above other elements */
}
</style>
