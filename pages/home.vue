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
            class="absolute z-10"
            :filtered-suggestions="filteredSuggestions"
            :query="query"
            @update:query="updateQuery"
         />
      </div>
      <h2 class="text-pirate-950leading-tight mb-3 mt-10 text-xl font-bold">
         Recent searches
      </h2>
      <div class="flex gap-4 overflow-scroll">
         <p v-if="!searches.length" class="text-pirate-950">
            No recent searches
         </p>
         <HomeRecentSearch
            v-for="search in searches"
            :key="search"
            class="w-1/2 flex-shrink-0"
            :search="search"
            @click="searchProperties(search)"
         />
      </div>
      <h2 class="text-pirate-950leading-tight mb-3 mt-10 text-xl font-bold">
         Recently viewed
      </h2>
      <div class="flex gap-4 overflow-scroll">
         <p v-if="!viewedProperties.length" class="text-pirate-950">
            No recently viewed properties
         </p>
         <FavoritesCard
            v-for="property in viewedProperties"
            :key="property"
            class="flex-shrink-0"
            :property="property"
         />
      </div>
      <h2 class="text-pirate-950leading-tight mb-3 mt-10 text-xl font-bold">
         Trending areas
      </h2>
      <div class="flex flex-col gap-4">
         <p
            v-if="!propertiesStore.trendingAreas.length"
            class="text-pirate-950"
         >
            No trending areas
         </p>
         <HomeAreaCard
            v-for="area in propertiesStore.trendingAreas"
            :key="area"
            class="flex-shrink-0"
            :area="area"
         />
      </div>
   </section>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
const propertiesStore = usePropertiesStore();
const query = ref("");
const searches = ref([propertiesStore.searches.reverse()]);
const viewedProperties = ref([propertiesStore.viewedLocations.reverse()]);

definePageMeta({
   layout: "white",
});

const filteredSuggestions = computed(() => {
   if (!query.value) return [];
   return propertiesStore.properties.filter(
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

function updateQuery(newQuery, latitude, longitude) {
   query.value = newQuery;
   if ((latitude, longitude)) {
      const localeRoute = useLocaleRoute();
      const long = longitude;
      const lat = latitude;
      const route = localeRoute({
         name: "map",
         query: { lat, lng: long },
      });
      if (route) {
         return navigateTo(route.fullPath);
      }
   }
}

watchEffect(() => {
   searches.value = propertiesStore.searches.reverse();
   viewedProperties.value = propertiesStore.viewedLocations.reverse();
});

function searchProperties(search) {
   query.value = search;
   const property = propertiesStore.findPropertyBySearchQuery(search);
   if (!property) return;
   updateQuery(
      search,
      property.location.coordinates.latitude,
      property.location.coordinates.longitude,
   );
}
</script>

<style scoped>
::-webkit-scrollbar {
   display: none;
}
</style>
