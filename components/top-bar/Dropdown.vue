<template>
   <div
      v-if="filteredSuggestions.length"
      class="z-10 mt-1 rounded-xl bg-black py-4 shadow-lg"
   >
      <ul>
         <p class="pb-2 pl-4 text-sm font-semibold text-white">Places</p>
         <li
            v-for="(suggestion, index) in filteredSuggestions"
            :key="index"
            class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-400 hover:text-resin-500"
            @click="selectSuggestion(suggestion)"
         >
            <PhMagnifyingGlass :size="12" class="mr-2 flex-shrink-0" />
            <span class="truncate">
               {{ suggestion.address.street }}, {{ suggestion.address.city }},
               {{ suggestion.address.country }}
            </span>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";

defineProps({
   filteredSuggestions: {
      type: Array,
      required: true,
   },
});

const emit = defineEmits(["update:query"]);

function selectSuggestion(suggestion) {
   const fullAddress = `${suggestion.address.street}, ${suggestion.address.city}, ${suggestion.address.country}`;
   emit("update:query", fullAddress, suggestion.lat, suggestion.lng);
}
</script>
