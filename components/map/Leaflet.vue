<template>
   <div class="relative flex h-full w-full items-center justify-center">
      <LMap
         ref="map"
         :zoom="zoom"
         :center="userLocation"
         :use-global-leaflet="true"
         @ready="onMapReady"
      >
         <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            layer-type="base"
            name="OpenStreetMap"
         />
      </LMap>
      <NuxtLink
         class="force-top absolute bottom-10"
         :to="localePath('list-view')"
      >
         <FlowbiteButton
            :text="`View ${visibleLocations} properties`"
            class="rounded bg-resin-500 px-4 py-2 text-white hover:bg-resin-600"
         />
      </NuxtLink>
   </div>
</template>

<script setup>
import * as Leaflet from "leaflet";
import "leaflet.markercluster";

const zoom = ref(6);
const userLocation = ref([47.21322, -1.559482]);
const map = ref(null);
const visibleLocations = ref(0);

onMounted(() => {
   console.log(L);
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
         userLocation.value = [
            position.coords.latitude,
            position.coords.longitude,
         ];
         zoom.value = 12;
      });
   }
});

const locations = [
   {
      name: "Nantes",
      lat: 47.218371,
      lng: -1.553621,
      popup: "<h1>This is Nantes</h1>",
   },
   {
      name: "Paris",
      lat: 48.856613,
      lng: 2.352222,
      popup: "<h1>This is Paris</h1>",
   },
   {
      name: "Lyon",
      lat: 45.75,
      lng: 4.85,
      popup: "<h1>This is Lyon</h1>",
   },
   {
      name: "Marseille",
      lat: 43.296346,
      lng: 5.369889,
      popup: "<h1>This is Marseille</h1>",
   },
   {
      name: "Bordeaux",
      lat: 44.837789,
      lng: -0.57918,
      popup: "<h1>This is Bordeaux</h1>",
   },
   {
      name: "Toulouse",
      lat: 43.604652,
      lng: 1.444209,
      popup: "<h1>This is Toulouse</h1>",
   },
   {
      name: "Lille",
      lat: 50.62925,
      lng: 3.057256,
      popup: "<h1>This is Lille</h1>",
   },
   {
      name: "Strasbourg",
      lat: 48.573405,
      lng: 7.752111,
      popup: "<h1>This is Strasbourg</h1>",
   },
   {
      name: "Rennes",
      lat: 48.117266,
      lng: -1.677792,
      popup: "<h1>This is Rennes</h1>",
   },
   {
      name: "Montpellier",
      lat: 43.610769,
      lng: 3.876716,
      popup: "<h1>This is Montpellier</h1>",
   },
   {
      name: "Nice",
      lat: 43.7101728,
      lng: 7.2619532,
      popup: "<h1>This is Nice</h1>",
   },
   {
      name: "Grenoble",
      lat: 45.188529,
      lng: 5.724524,
      popup: "<h1>This is Grenoble</h1>",
   },
];

const onMapReady = () => {
   useLMarkerCluster({
      leafletObject: map.value.leafletObject,
      markers: locations,
   });
   calculateVisibleLocations();

   map.value.leafletObject.on("moveend", calculateVisibleLocations);
   map.value.leafletObject.on("zoomend", calculateVisibleLocations);
};

const calculateVisibleLocations = () => {
   const bounds = map.value.leafletObject.getBounds();
   visibleLocations.value = locations.filter((location) =>
      bounds.contains([location.lat, location.lng]),
   ).length;
};
</script>

<style scoped>
.force-top {
   z-index: 9999; /* High z-index to ensure it appears above other elements */
}
</style>
