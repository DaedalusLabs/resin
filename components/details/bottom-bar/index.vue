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
         <FlowbiteButton text="Rent-to-own" />
      </div>
   </div>
</template>

<style scoped>
.secondary {
   @apply bg-pirate-700 !important;
}
</style>
