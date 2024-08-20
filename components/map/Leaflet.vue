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
            :text="`View ${visibleLocationsAmount} properties`"
            class="rounded bg-resin-500 px-4 py-2 text-white hover:bg-resin-600"
         />
      </NuxtLink>
      <button
         class="force-top absolute bottom-10 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-md"
         @click="getUserLocation"
      >
         <PhGps :size="32" />
      </button>
   </div>
</template>

<script setup>
import * as Leaflet from "leaflet";
import "leaflet.markercluster";
import { useLocationsStore } from "~/stores/locations";
import { PhGps } from "@phosphor-icons/vue";

const locationsStore = useLocationsStore();
const locations = locationsStore.locations;
const zoom = ref(6);
const map = ref(null);
const visibleLocationsAmount = ref(0);
const userLocation = ref({ lat: 47.41322, lng: -1.219482 });

const getUserLocation = () => {
   if (
      navigator.geolocation &&
      userLocation.value.lat === 47.41322 &&
      userLocation.value.lng === -1.219482
   ) {
      navigator.geolocation.getCurrentPosition((position) => {
         userLocation.value = [
            position.coords.latitude,
            position.coords.longitude,
         ];
         zoom.value = 12;
      });
   }
};

const onMapReady = () => {
   useLMarkerCluster({
      leafletObject: map.value.leafletObject,
      markers: locations,
   });
   calculateVisibleLocations();

   map.value.leafletObject.on("moveend", calculateVisibleLocations);
   map.value.leafletObject.on("zoomend", calculateVisibleLocations);

   // remove zoom control
   map.value.leafletObject.removeControl(map.value.leafletObject.zoomControl);
};

const calculateVisibleLocations = () => {
   const bounds = map.value.leafletObject.getBounds();
   const visibleLocations = locations.filter((location) =>
      bounds.contains([location.lat, location.lng]),
   );
   visibleLocationsAmount.value = visibleLocations.length;
   locationsStore.setFilteredLocations(visibleLocations);
};
</script>

<style scoped>
.force-top {
   z-index: 9999; /* High z-index to ensure it appears above other elements */
}
</style>
