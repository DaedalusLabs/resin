<template>
   <div class="mx-auto mt-10 max-w-screen-md p-6">
      <!-- Header Section -->
      <div class="mb-6 flex w-full items-end justify-between text-center">
         <h1 class="text-2xl font-extrabold">Rent-to-own</h1>
         <img
            src="/images/logos/Resin_Hexagon_Orange_Fill.svg"
            alt="Resin"
            class="mt-2 h-8"
         />
      </div>

      <!-- Property Card -->
      <FavoritesCard :property="property" can-remove="false" />

      <!-- Collapsible Sections -->
      <div class="mt-6 space-y-4">
         <div class="border-gray-200 pt-4">
            <button
               class="flex w-full items-center justify-between pb-3 text-left text-lg font-semibold"
               @click="toggleSection('bank')"
            >
               Own without the bank
               <ph-caret-down
                  :class="{
                     'rotate-180': isOpen.bank,
                     'rotate-0': !isOpen.bank,
                  }"
                  class="h-5 w-5 transform transition-transform"
               />
            </button>

            <div v-if="isOpen.bank" class="mt-2 border-t pt-3 text-gray-600">
               Rent-to-own offers a flexible path to homeownership. You can
               start living in this modern home at Mahonylaan 5, Paramaribo,
               Suriname, while gradually working towards owning it. Pay monthly
               rent with a portion going towards the purchase price, making it
               easier to transition from renting to owning without a large
               upfront payment. Enjoy the benefits of homeownership, including
               building equity and having a place to call your own, while taking
               your time to complete the purchase.
            </div>
         </div>

         <div class="border-t border-gray-200 pt-4">
            <button
               class="flex w-full items-center justify-between text-left text-lg font-semibold"
               @click="toggleSection('interestRates')"
            >
               Low interest rates
               <ph-caret-down
                  :class="{
                     'rotate-180': isOpen.interestRates,
                     'rotate-0': !isOpen.interestRates,
                  }"
                  class="h-5 w-5 transform transition-transform"
               />
            </button>
            <div v-if="isOpen.interestRates" class="mt-2 text-gray-600">
               Enjoy lower interest rates compared to traditional loans and save
               more over time as you work towards homeownership.
            </div>
         </div>

         <div class="border-t border-gray-200 pt-4">
            <button
               class="flex w-full items-center justify-between text-left text-lg font-semibold"
               @click="toggleSection('equity')"
            >
               Grow your equity
               <ph-caret-down
                  :class="{
                     'rotate-180': isOpen.equity,
                     'rotate-0': !isOpen.equity,
                  }"
                  class="h-5 w-5 transform transition-transform"
               />
            </button>
            <div v-if="isOpen.equity" class="mt-2 text-gray-600">
               Build equity over time by owning part of the property as you
               continue paying rent.
            </div>
         </div>

         <div class="border-t border-gray-200 pt-4">
            <button
               class="flex w-full items-center justify-between text-left text-lg font-semibold"
               @click="toggleSection('paymentOptions')"
            >
               Rent payment options
               <ph-caret-down
                  :class="{
                     'rotate-180': isOpen.paymentOptions,
                     'rotate-0': !isOpen.paymentOptions,
                  }"
                  class="h-5 w-5 transform transition-transform"
               />
            </button>
            <div v-if="isOpen.paymentOptions" class="mt-2 text-gray-600">
               Flexible rent payment plans are available to suit your financial
               situation and help you transition into homeownership with ease.
            </div>
         </div>
      </div>

      <!-- Bottom Button Component -->
      <DetailsBottomBar />
   </div>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
import { PhCaretDown } from "@phosphor-icons/vue";

const propertiesStore = usePropertiesStore();
const route = useRoute();

const property = propertiesStore.properties.find(
   (p) => p.id === parseInt(route.params.id),
);

// Section toggles
const isOpen = ref({
   bank: true,
   interestRates: false,
   equity: false,
   paymentOptions: false,
});

const toggleSection = (section) => {
   isOpen.value[section] = !isOpen.value[section];
};

definePageMeta({
   layout: "white",
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
