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
            :image-urls="property.imageUrls"
            :address="property.address"
            :location="property.location"
            :price="property.price"
            :size="property.size"
            :beds="property.beds"
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
const properties = ref([]);
const isLoading = ref(true);

onMounted(() => {
   setTimeout(() => {
      properties.value = getProperties(); // TODO: replace by API call
      isLoading.value = false;
   }, 3000);
});

function getProperties() {
   return [
      {
         id: 1,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: "Mahonylaan 5",
         location: "Paramaribo, Suriname",
         price: 1950,
         size: 195,
         beds: 3,
      },
      {
         id: 2,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: "Mahonylaan 5",
         location: "Paramaribo, Suriname",
         price: 1950,
         size: 195,
         beds: 3,
      },
      {
         id: 3,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: "Mahonylaan 5",
         location: "Paramaribo, Suriname",
         price: 1950,
         size: 195,
         beds: 3,
      },
      {
         id: 4,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: "Mahonylaan 5",
         location: "Paramaribo, Suriname",
         price: 1950,
         size: 195,
         beds: 3,
      },
   ];
}

const showDrawer = ref(false);
const currentPropertyImages = ref([]);

const openGallery = (propertyImages) => {
   currentPropertyImages.value = propertyImages;
   showDrawer.value = true;
};
</script>
