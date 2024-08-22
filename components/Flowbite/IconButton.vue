<template>
   <button
      type="button"
      class="focus:ring-primary-500 inline-flex items-center rounded-2xl bg-black p-4 text-center text-sm font-medium text-pirate-50 hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-pirate-500 focus:ring-opacity-50"
   >
      <svg
         v-if="icon === 'filter'"
         class="h-6 w-6"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         fill="none"
         viewBox="0 0 24 24"
      >
         <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
         />
      </svg>

      <!-- MapPinLine -->
      <NuxtLink v-else-if="icon === 'map'" :to="localePath('map')">
         <PhMapPinLine class="h-6 w-6" weight="bold" />
      </NuxtLink>
      <NuxtLink v-else :to="localePath('properties')">
         <PhRows class="h-6 w-6" weight="bold" />
      </NuxtLink>
      <span class="sr-only">{{ description }}</span>
   </button>
</template>

<script setup>
import { PhMapPinLine, PhRows } from "@phosphor-icons/vue";

defineProps({
   icon: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
});
</script>
