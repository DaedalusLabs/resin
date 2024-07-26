<template>
   <div
      v-touch:swipe.left="swipeHandler"
      class="flex items-center rounded-lg border-2 border-pirate-100 bg-white p-4 shadow-md transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-96 transform': isRemoving }"
   >
      <NuxtImg
         :src="image"
         alt="Favorite image"
         class="mr-4 h-16 w-16 rounded-md object-cover object-center"
      />
      <div class="flex-1">
         <h3 class="text-lg font-bold text-resin-500">{{ title }}</h3>
         <p class="text-sm text-pirate-950">{{ location }}</p>
         <p class="text-sm font-bold text-pirate-950">
            {{ price }} SRD per month
         </p>
      </div>
   </div>
</template>

<script setup>
const isRemoving = ref(false);

const emit = defineEmits(["remove"]);

const swipeHandler = () => {
   isRemoving.value = true;
   setTimeout(() => {
      emit("remove");
   }, 300);
};

defineProps({
   image: {
      type: String,
      required: true,
   },
   title: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   price: {
      type: String,
      required: true,
   },
});
</script>
