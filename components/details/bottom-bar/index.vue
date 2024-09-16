<template>
   <div
      class="z-top fixed bottom-14 left-0 w-full bg-black/30 p-4 backdrop-blur-md"
   >
      <div class="mx-auto flex w-11/12 justify-between">
         <FlowbiteButton
            text="Request Tour"
            :show-icon="false"
            class="secondary"
         />
         <NuxtLink
            :to="localePath(`/properties/${route.params.id}/rent-to-own`)"
         >
            <FlowbiteButton :text="buttonText" />
         </NuxtLink>
      </div>
   </div>
</template>

<script setup>
const route = useRoute();

const buttonText = computed(() => {
   return route.path.includes("rent-to-own")
      ? "Rent this property"
      : "Rent-to-own";
});
</script>

<style scoped>
.secondary {
   @apply bg-pirate-700 !important;
}
</style>
