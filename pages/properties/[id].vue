<template>
   <section class="mb-28">
      <!-- Property Image and Basic Info -->
      <div class="relative">
         <NuxtImg
            :src="property.images[0]"
            alt="Property Image"
            class="h-64 w-full object-cover"
         />

         <DetailsTopBar :property="property" />
      </div>

      <!-- Property Details -->
      <div class="container mx-auto mt-8 w-10/12">
         <h1 class="text-2xl font-extrabold leading-tight">
            {{ property.location.address.street }}
         </h1>
         <p class="mt-1 text-sm">
            {{ property.location.address.city }},
            {{ property.location.address.country }}
         </p>

         <DetailsSize :property="property" />

         <DetailsPrices :property="property" />

         <DetailsSummary :property="property" />

         <DetailsKeyFeatures :property="property" />

         <DetailsAdditional :property="property" />
      </div>

      <ClientOnly fallback-tag="span">
         <DetailsMap :property="property" />
      </ClientOnly>

      <DetailsNearby :property="property" />

      <DetailsBottomBar />
   </section>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
import { fixNestedStrings } from "~/utils/jsonParser";

const propertiesStore = usePropertiesStore();
const route = useRoute();

const property = propertiesStore.properties.find(
   (p) => p.id === parseInt(route.params.id),
   propertiesStore.addViewedProperty(route.params.id),
);

if (typeof property === "string") {
   fixNestedStrings(property);
}

definePageMeta({
   layout: "white",
});
</script>

<style scoped>
.z-top {
   z-index: 1000;
}
</style>
