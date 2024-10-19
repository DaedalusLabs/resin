<template>
   <div
      v-touch:swipe.left="swipeHandler"
      class="group relative flex items-center rounded-lg border-2 border-pirate-100 bg-white p-4 shadow-sm transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-96 transform': isRemoving }"
      @click="openDetails"
   >
      <NuxtImg
         :src="property.images[0]"
         alt="Favorite image"
         class="mr-4 h-16 w-16 rounded-md object-cover object-center"
      />
      <div class="min-w-0 flex-1">
         <h3 class="truncate text-lg font-bold text-resin-500">
            {{ property.location.address.street }}
         </h3>
         <p class="text-sm text-pirate-950">
            {{ property.location.address.city }},
            {{ property.location.address.country }}
         </p>
         <p class="text-sm font-bold text-pirate-950">
            ${{ property.pricingDetails.rentPerMonth }} per month
         </p>
      </div>
      <div
         v-if="canRemove"
         class="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
         @click="handleRemove"
      >
         <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
         >
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M6 18L18 6M6 6l12 12"
            />
         </svg>
      </div>
   </div>
</template>

<script setup>
const isRemoving = ref(false);

const emit = defineEmits(["remove"]);

const swipeHandler = () => {
   if (!props.isRemovable) {
      return;
   }
   isRemoving.value = true;
   setTimeout(() => {
      emit("remove");
   }, 300);
};

const handleRemove = () => {
   emit("remove");
};

const openDetails = () => {
   const localeRoute = useLocaleRoute();
   const route = localeRoute({
      name: "properties-id",
      params: { id: props.property.id.toString() },
   });
   if (route) {
      return navigateTo(route.fullPath);
   }
};

const props = defineProps({
   property: {
      type: Object,
      required: true,
   },
   isRemovable: {
      type: Boolean,
      default: false,
   },
});
</script>
