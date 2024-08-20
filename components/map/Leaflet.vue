<template>
   <div class="h-full w-full">
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
   </div>
</template>

<script setup>
import * as Leaflet from "leaflet";
import "leaflet.markercluster";

const zoom = ref(6);
const userLocation = ref([47.21322, -1.559482]);
const map = ref(null);

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

// Example locations with lat-lng and name
const locations = [
   { name: "Nantes", lat: 47.218371, lng: -1.553621 },
   { name: "Saint-Nazaire", lat: 47.273018, lng: -2.213733 },
   { name: "La Baule", lat: 47.286835, lng: -2.393108 },
   { name: "Pornic", lat: 47.112, lng: -2.102 },
   { name: "Guérande", lat: 47.328, lng: -2.429 },
   { name: "Clisson", lat: 47.087, lng: -1.276 },
   { name: "Ancenis", lat: 47.366, lng: -1.176 },
   { name: "Châteaubriant", lat: 47.716, lng: -1.376 },
   { name: "Redon", lat: 47.652, lng: -2.084 },
   { name: "Pontchâteau", lat: 47.433, lng: -2.117 },
   { name: "Savenay", lat: 47.327, lng: -1.952 },
   { name: "Rezé", lat: 47.183, lng: -1.55 },
   { name: "Vertou", lat: 47.166, lng: -1.466 },
   { name: "Carquefou", lat: 47.283, lng: -1.5 },
   { name: "Orvault", lat: 47.283, lng: -1.633 },
   { name: "Saint-Herblain", lat: 47.216, lng: -1.65 },
   { name: "Sainte-Luce-sur-Loire", lat: 47.233, lng: -1.483 },
   { name: "Bouguenais", lat: 47.183, lng: -1.583 },
   { name: "Saint-Sébastien-sur-Loire", lat: 47.183, lng: -1.483 },
   { name: "Basse-Goulaine", lat: 47.2, lng: -1.483 },
];

const onMapReady = () => {
   useLMarkerCluster({
      leafletObject: map.value.leafletObject,
      markers: locations,
   });
};
</script>
