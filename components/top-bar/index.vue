<template>
   <div>
      <div class="flex items-center justify-between gap-2">
         <NuxtLink
            :to="localePath('map')"
            @click="propertiesStore.resetLocations()"
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
         <FlowbiteIconButton
            icon="filter"
            description="filter properties"
            @click="emits('toggle-filters')"
         />
      </div>
      <TopBarDropdown
         :filtered-suggestions="filteredSuggestions"
         :query="query"
         @update:query="updateQuery"
      />
   </div>
</template>

<script setup>
const propertiesStore = usePropertiesStore();
const route = useRoute();
const showListIcon = ref(route.fullPath.includes("map"));

const query = ref("");
const mapCenter = ref(null);
const suggestions = propertiesStore.properties;

const emits = defineEmits(["update:map-center", "toggle-filters"]);

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

function updateQuery(newQuery, lat, lng) {
   query.value = newQuery;
   if (lat !== undefined && lng !== undefined) {
      mapCenter.value = { lat, lng };
      emits("update:map-center", lat, lng);
   }
}
</script>
