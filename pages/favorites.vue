<template>
   <section class="mx-auto flex w-10/12 flex-col py-20">
      <div class="mb-5 flex items-center justify-between text-pirate-950">
         <h1 class="text-2xl font-extrabold leading-tight">Favorites</h1>
         <button :v-if="isSupported" @click="startShare">
            <PhExport :size="28" class="text-xl text-pirate-950" />
         </button>
      </div>
      <!-- if no favorites yet -->
      <div
         v-if="favorites.length === 0"
         class="items center flex flex-col items-center justify-center"
      >
         <p class="mt-20 gap-2 font-semibold text-pirate-950">
            You have no favorites yet
         </p>
         <NuxtLink :to="localePath('properties')">
            <p
               class="mt-4 inline-block rounded-lg border-2 border-resin-500 bg-resin-500 px-4 py-2 text-white"
            >
               Browse listings
            </p>
         </NuxtLink>
      </div>
      <div class="space-y-4">
         <FavoritesCard
            v-for="favorite in favorites"
            :key="favorite.id"
            :property="favorite"
            @remove="removeFavorite(favorite.id)"
         />
      </div>
   </section>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
import { useShare } from "@vueuse/core";
import { PhExport } from "@phosphor-icons/vue";

const { share, isSupported } = useShare();

function startShare() {
   share({
      title: "Resin",
      text: "Check out these listings on Resin",
      url: location.href,
   });
}

const favorites = ref([]);
const propertiesStore = usePropertiesStore();

definePageMeta({
   layout: "white",
});

onMounted(() => {
   favorites.value = propertiesStore.favoriteLocations;
});

const removeFavorite = (id) => {
   propertiesStore.toggleFavorite(id);
   favorites.value = propertiesStore.favoriteLocations;
};
</script>
