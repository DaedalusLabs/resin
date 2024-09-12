<template>
   <div>
      <div
         class="mx-auto flex w-11/12 flex-col items-center justify-center gap-8"
      >
         <TopBar class="mt-10" />
         <div
            v-if="isLoading"
            class="flex w-full flex-col items-center justify-center gap-4"
         >
            <FlowbiteSkeleton v-for="i in 4" :key="i" />
         </div>
         <PropertyCard
            v-for="property in properties"
            v-else
            :key="property.id"
            :property="property"
            class="w-full md:w-96"
            @open-gallery="openGallery(property.imageUrls)"
         />
      </div>
      <FlowbiteImageDrawer
         :show-drawer="showDrawer"
         :image-urls="currentPropertyImages"
         @close="showDrawer = false"
      />
   </div>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
const isLoading = ref(true);
const properties = ref([]);

onMounted(() => {
   setTimeout(() => {
      isLoading.value = false;
      const propertiesStore = usePropertiesStore();
      properties.value = propertiesStore.filteredLocations;
   }, 3000);
});

const showDrawer = ref(false);
const currentPropertyImages = ref([]);

const openGallery = (propertyImages) => {
   currentPropertyImages.value = propertyImages;
   showDrawer.value = true;
};
</script>
