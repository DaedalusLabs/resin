<template>
   <section class="mx-auto flex w-10/12 flex-col py-20">
      <NuxtImg
         src="/images/logos/resin-text.png"
         alt="image"
         class="mb-10 w-24"
      />
      <div>
         <div class="flex items-center justify-between gap-2">
            <FlowbiteSearchbar
               class="flex-grow"
               :query="query"
               @update:query="updateQuery"
            />
         </div>
         <TopBarDropdown
            :filtered-suggestions="filteredSuggestions"
            :query="query"
            @update:query="updateQuery"
         />
      </div>
      <h2 class="text-pirate-950leading-tight mb-3 mt-10 text-xl font-bold">
         Recent searches
      </h2>
      <div class="flex gap-4 overflow-scroll">
         <p v-if="!propertiesStore.searches.length" class="text-pirate-950">
            No recent searches
         </p>
         <HomeRecentSearch
            v-for="search in propertiesStore.searches"
            :key="search"
            class="flex-shrink-0"
            :search="search"
         />
      </div>
      <h2 class="text-pirate-950leading-tight mb-3 mt-10 text-xl font-bold">
         Recently viewed
      </h2>
      <div class="flex gap-4 overflow-scroll">
         <p
            v-if="!propertiesStore.viewedProperties.length"
            class="text-pirate-950"
         >
            No recently viewed properties
         </p>
         <FavoritesCard
            v-for="property in propertiesStore.viewedProperties"
            :key="property"
            class="flex-shrink-0"
            :property="property"
         />
      </div>
      <h2 class="text-pirate-950leading-tight mb-3 mt-10 text-xl font-bold">
         Trending areas
      </h2>
   </section>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
const propertiesStore = usePropertiesStore();
const query = ref("");

definePageMeta({
   layout: "white",
});

const filteredSuggestions = computed(() => {
   if (!query.value) return [];
   return suggestions.filter(
      (suggestion) =>
         suggestion.location.address.city.toLowerCase().includes(query.value) ||
         suggestion.location.address.street
            .toLowerCase()
            .includes(query.value) ||
         suggestion.location.address.country
            .toLowerCase()
            .includes(query.value),
   );
});

function updateQuery(newQuery) {
   query.value = newQuery;
}
</script>
