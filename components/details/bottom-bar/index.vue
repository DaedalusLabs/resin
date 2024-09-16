<template>
   <div
      class="z-top fixed bottom-14 left-0 w-full bg-black/30 p-4 backdrop-blur-md"
   >
      <div class="mx-auto flex w-11/12 justify-between">
         <FlowbiteButton
            text="Request Tour"
            :show-icon="false"
            class="bg-pirate-700"
         />
         <NuxtLink
            :to="localePath(`/properties/${route.params.id}/rent-to-own`)"
         >
            <FlowbiteButton text="Rent-to-own" />
         </NuxtLink>
      </div>
   </div>
</template>

<script setup>
const route = useRoute();
</script>
