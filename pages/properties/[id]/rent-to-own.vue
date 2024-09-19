<template>
   <div class="mx-auto mt-10 max-w-screen-md p-6">
      <div class="mb-6 flex w-full items-center justify-between text-center">
         <h1 class="text-2xl font-extrabold">Rent-to-own</h1>
         <NuxtImg src="/images/logos/resin-text.png" alt="Resin" class="h-4" />
      </div>

      <FavoritesCard :property="property" can-remove="false" class="mb-10" />

      <RentToOwnSection
         v-for="section in sections"
         :key="section.title"
         :title="section.title"
         :text="section.text"
      />
      <DetailsBottomBar />
   </div>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";

const propertiesStore = usePropertiesStore();
const route = useRoute();

const property = propertiesStore.properties.find(
   (p) => p.id === parseInt(route.params.id),
);

const sections = ref([
   {
      title: "Own without the bank",
      text: "Rent-to-own offers a flexible path to homeownership. You can start living in this modern home at Mahonylaan 5, Paramaribo, Suriname, while     gradually working towards owning it. Pay monthly rent with a portion       going towards the purchase price, making it easier to transition from    renting to owning without a large upfront payment. Enjoy the benefits  of homeownership, including building equity and having a place to call       your own, while taking your time to complete the purchase..",
   },
   {
      title: "Low interest rates",
      text: " Enjoy lower interest rates compared to traditional loans and save  more over time as you work towards homeownership.",
   },
   {
      title: "Grow your equity",
      text: " Build equity over time by owning part of the property as you    continue paying rent.",
   },
   {
      title: " Rent payment options",
      text: "Flexible rent payment plans are available to suit your financial    situation and help you transition into homeownership with ease.",
   },
]);

definePageMeta({
   layout: "white",
});
</script>
