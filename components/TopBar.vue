<template>
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
      <FlowbiteSearchbar />
      <FlowbiteIconButton
         icon="filter"
         description="filter properties"
         :class="locationsStore.areFiltersActive ? 'text-resin-500' : ''"
      />
   </div>
</template>

<script setup>
import { useLocationsStore } from "~/stores/locations";

const locationsStore = useLocationsStore();
const route = useRoute();
const showListIcon = ref(route.fullPath.includes("map"));
</script>
