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
            class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-400"
            @click="selectSuggestion(suggestion)"
         >
            <PhMagnifyingGlass :size="12" class="mr-2 flex-shrink-0" />
            <span class="truncate font-semibold hover:text-resin-500">
               <span v-html="highlightQuery(suggestion)" />
            </span>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";

const props = defineProps({
   filteredSuggestions: {
      type: Array,
      required: true,
   },
   query: {
      type: String,
      required: true,
   },
});

const emit = defineEmits(["update:query"]);

function selectSuggestion(suggestion) {
   const fullAddress = `${suggestion.location.address.street}, ${suggestion.location.address.city}, ${suggestion.location.address.country}`;
   emit(
      "update:query",
      fullAddress,
      suggestion.location.coordinates.latitude,
      suggestion.location.coordinates.longitude,
   );
}

function highlightQuery(suggestion) {
   const fullAddress = `${suggestion.location.address.street}, ${suggestion.location.address.city}, ${suggestion.location.address.country}`;
   const regex = new RegExp(`(${props.query})`, "gi");
   return fullAddress.replace(regex, '<span class="text-resin-500">$1</span>');
}
</script>
