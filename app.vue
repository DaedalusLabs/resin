<template>
   <div>
      <VitePwaManifest />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>

<script setup>
import { useLocationsStore } from "~/stores/locations";

const locationsStore = useLocationsStore();

async function getLocations() {
   // mock API call
   return [
      {
         id: 1,
         name: "Luxury Villa",
         lat: 47.218371,
         lng: -1.553621,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: {
            street: "Mahonylaan 5",
            city: "Paramaribo",
            country: "Suriname",
         },
         price: 1950,
         size: 195,
         beds: 3,
         popup: "<h1>This is Nantes</h1>",
      },
   {
      id: 3,
      name: "Cozy house",
      lat: 47.217250,
      lng: -1.551920,
      imageUrls: [
         "/images/mock/house.png",
         "/images/mock/house.png",
         "/images/mock/house.png",
      ],
      address: {
         street: "Rue de Strasbourg",
         city: "Nantes",
         country: "France",
      },
      price: 850,
      size: 55,
      beds: 1,
      popup: "<h1>Cozy house in Nantes</h1>",
   },
   {
      id: 4,
      name: "Modern house",
      lat: 47.220500,
      lng: -1.560750,
      imageUrls: [
         "/images/mock/house.png",
         "/images/mock/house.png",
         "/images/mock/house.png",
      ],
      address: {
         street: "Boulevard Gabriel Lauriol",
         city: "Nantes",
         country: "France",
      },
      price: 1200,
      size: 75,
      beds: 2,
      popup: "<h1>Modern house in Nantes</h1>",
   },
      {
         id: 5,
         name: "Modern house",
         lat: 48.856613,
         lng: 2.352222,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: {
            street: "Avenue des Champs-Élysées 123",
            city: "Paris",
            country: "France",
         },
         price: 2500,
         size: 85,
         beds: 2,
         popup: "<h1>Welcome to Paris</h1>",
      },
      {
         id: 6,
         name: "Cozy Cabin",
         lat: 60.169856,
         lng: 24.938379,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: {
            street: "Saunalahdentie 10",
            city: "Helsinki",
            country: "Finland",
         },
         price: 1200,
         size: 70,
         beds: 1,
         popup: "<h1>Discover Helsinki</h1>",
      },
      {
         id: 7,
         name: "Elegant Condo",
         lat: 40.712776,
         lng: -74.005974,
         imageUrls: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],
         address: {
            street: "Broadway 123",
            city: "New York",
            country: "USA",
         },
         price: 3000,
         size: 120,
         beds: 2,
         popup: "<h1>Explore New York</h1>",
      },
   ];
}

const locations = await getLocations();
locationsStore.locations = locations;
locationsStore.filteredLocations = locations;
</script>

<style>
::-moz-selection {
   /* Code for Firefox */
   color: white;
   background: #f07e19;
}

::selection {
   color: white;
   background: #f07e19;
}

html {
   scroll-behavior: smooth;
}

/* font Inter for all text */
* {
   font-family: "Inter", sans-serif;
   font-optical-sizing: auto;
   font-style: normal;
   font-variation-settings: "slnt" 0;
}

/* clears the ‘X’ from Internet Explorer */
input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }
</style>
