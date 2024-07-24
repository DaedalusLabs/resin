<template>
   <div class="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div class="relative">
         <FlowbiteCarousel
            :items="imageUrls"
            class="z-0 h-48 w-full object-cover md:h-72 lg:h-96"
         />
         <button
            class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white shadow-md hover:border-resin-500"
            @click="openGallery"
         >
            <PhImages :size="20" />
         </button>
      </div>
      <div class="flex flex-col gap-2 p-4">
         <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-resin-500">{{ address }}</h3>
            <PhHeartStraight :size="21" class="text-pirate-200" />
         </div>
         <p class="text-gray-600">{{ location }}</p>
         <p class="font-inter text-sm font-bold text-gray-800">
            {{ price }} SRD per month
         </p>
      </div>
      <div class="flex items-center justify-between bg-gray-100 p-4 text-sm">
         <div class="flex items-center gap-4">
            <p class="flex items-center gap-1">
               <PhRuler :size="20" class="inline" />
               <span class="text-gray-500">{{ size }} m²</span>
            </p>
            <p class="flex items-center gap-1">
               <PhBed :size="20" class="inline" />
               <span class="text-gray-500">{{ beds }} Beds</span>
            </p>
         </div>
         <FlowbiteButton text="Details" @click="viewDetails" />
      </div>
   </div>
</template>

<script setup>
import { PhBed, PhRuler, PhHeartStraight, PhImages } from "@phosphor-icons/vue";

const props = defineProps({
   imageUrls: {
      type: Array,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   size: {
      type: Number,
      required: true,
   },
   beds: {
      type: Number,
      required: true,
   },
});

const emit = defineEmits(["open-gallery"]);

const openGallery = () => {
   emit("open-gallery", props.imageUrls);
};

const viewDetails = () => {
   // Implement the detail view logic here
   alert(`View details for ${props.address}`);
};
</script>
