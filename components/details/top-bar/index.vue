<template>
   <div class="absolute right-4 top-4 flex w-11/12 justify-between space-x-4">
      <NuxtLink
         class="rounded-full bg-white/10 p-3 shadow backdrop-blur"
         :to="localePath('properties')"
      >
         <PhCaretLeft weight="bold" :size="28" class="text-xl text-white" />
      </NuxtLink>
      <div class="flex space-x-4">
         <button class="rounded-full bg-white p-3 shadow">
            <PhExport :size="28" class="text-xl text-pirate-950" />
         </button>
         <button class="rounded-full bg-resin-500 p-3 shadow">
            <PhHeartStraight
               :size="28"
               class="text-xl text-white"
               :weight="isFavorite ? 'fill' : 'regular'"
               @click="toggleFavorite"
            />
         </button>
      </div>
   </div>
</template>

<script setup>
import { PhHeartStraight, PhExport, PhCaretLeft } from "@phosphor-icons/vue";

import { usePropertiesStore } from "~/stores/properties";

const propertiesStore = usePropertiesStore();

const toggleFavorite = () => {
   isFavorite.value = !isFavorite.value;
   propertiesStore.toggleFavorite(props.property.id);
};

const props = defineProps({
   property: {
      type: Object,
      required: true,
   },
});

const isFavorite = ref(propertiesStore.isFavorite(props.property.id));
</script>
