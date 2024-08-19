<template>
   <section class="mx-auto flex w-10/12 flex-col py-20">
      <div class="mb-5 flex items-center justify-between text-pirate-950">
         <h1 class="text-2xl font-extrabold leading-tight">Favorites</h1>
         <button @click="sharePage">
            <svg
               class="h-6 w-6 text-gray-800 dark:text-white"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               fill="none"
               viewBox="0 0 24 24"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"
               />
            </svg>
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
         <NuxtLink :to="localePath('list-view')">
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
            :image="favorite.image"
            :title="favorite.title"
            :location="favorite.location"
            :price="favorite.price"
            @remove="removeFavorite(favorite.id)"
         />
      </div>
   </section>
</template>

<script setup>
definePageMeta({
   layout: "white",
});

const favorites = ref([
   {
      id: 1,
      image: "images/mock/favorites/mock.webp",
      title: "Mahonylaan 5",
      location: "Paramaribo, Suriname",
      price: "1,950",
   },
   {
      id: 2,
      image: "images/mock/favorites/mock.webp",
      title: "Johannes Mungrastraat 520",
      location: "Paramaribo, Suriname",
      price: "1,200",
   },
]);

const removeFavorite = (id) => {
   favorites.value = favorites.value.filter((favorite) => favorite.id !== id);
};

const route = useRoute();

const shareData = {
   title: "RESIN",
   text: "Check out my favorite listings on RESIN",
   url: route.fullPath,
};

const sharePage = async () => {
   try {
      await navigator.share(shareData); // TODO: Add other share logic
   } catch (err) {
      console.error("Error sharing:", err);
      alert(
         "Error sharing your favorite listings, this feature is not supported on your device",
      );
   }
};
</script>
