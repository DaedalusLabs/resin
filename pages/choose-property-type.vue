<template>
   <section class="flex flex-col items-center justify-between px-12 pt-20">
      <h1
         class="text-center font-inter text-2xl font-extrabold leading-tight text-white"
      >
         {{ $t("propertyType") }}
      </h1>
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
         <PropertyType
            v-for="propertyType in propertyTypes"
            :key="propertyType.id"
            :title="$t(propertyType.title)"
            :description="$t(propertyType.description)"
            class="w-full flex-grow"
            @click="addPropertyType(propertyType.id)"
         />
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
         <NuxtLink v-if="selectedPropertyTypes.length > 0" to="list-view">
            <FlowbiteButton class="mt-10" :text="$t('chooseLocation')" />
         </NuxtLink>
         <FlowbiteDisabledButton
            v-else
            class="mt-10"
            :text="$t('chooseLocation')"
         />
         <NuxtLink
            v-if="selectedPropertyTypes.length < 1"
            to="#"
            class="mt-4 rounded-lg px-5 py-2.5 font-inter text-sm font-medium text-pirate-400 hover:bg-white hover:text-pirate-700"
         >
            {{ $t("skip") }}
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
import { ref } from "vue";

const selectedPropertyTypes = ref([]);
const propertyTypes = ref([
   {
      id: 1,
      title: "propertyTypes.shortToMediumTermStay.title",
      description: "propertyTypes.shortToMediumTermStay.description",
   },
   {
      id: 2,
      title: "propertyTypes.longerTermResidentialHouse.title",
      description: "propertyTypes.longerTermResidentialHouse.description",
   },
   {
      id: 3,
      title: "propertyTypes.commercialProperty.title",
      description: "propertyTypes.commercialProperty.description",
   },
]);

const addPropertyType = (propertyTypeId) => {
   if (selectedPropertyTypes.value.includes(propertyTypeId)) {
      selectedPropertyTypes.value = selectedPropertyTypes.value.filter(
         (id) => id !== propertyTypeId,
      );
   } else {
      selectedPropertyTypes.value.push(propertyTypeId);
   }
};

definePageMeta({
   layout: "intro",
});
</script>
