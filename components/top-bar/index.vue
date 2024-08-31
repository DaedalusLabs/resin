<template>
   <div>
      <div class="flex items-center justify-between gap-2">
         <NuxtLink
            :to="localePath('map')"
            @click="locationsStore.resetLocations()"
         >
            <FlowbiteIconButton
               :icon="showListIcon ? 'rows' : 'map'"
               description="view map"
            />
         </NuxtLink>
         <FlowbiteSearchbar
            class="flex-grow"
            :query="query"
            @update:query="updateQuery"
         />
         <FlowbiteIconButton icon="filter" description="filter properties" />
      </div>
      <TopBarDropdown
         :filtered-suggestions="filteredSuggestions"
         :query="query"
         @update:query="updateQuery"
      />
   </div>
</template>

<script setup>
const locationsStore = useLocationsStore();
const route = useRoute();
const showListIcon = ref(route.fullPath.includes("map"));

const query = ref("");
const mapCenter = ref(null);
const suggestions = locationsStore.locations;

const emits = defineEmits(["update:map-center"]);

const filteredSuggestions = computed(() => {
   if (!query.value) return [];
   return suggestions.filter(
      (suggestion) =>
         suggestion.address.city.toLowerCase().includes(query.value) ||
         suggestion.address.street.toLowerCase().includes(query.value) ||
         suggestion.address.country.toLowerCase().includes(query.value),
   );
});

function updateQuery(newQuery, lat, lng) {
   query.value = newQuery;
   if (lat !== undefined && lng !== undefined) {
      mapCenter.value = { lat, lng };
      emits("update:map-center", lat, lng);
   }
}
</script>
