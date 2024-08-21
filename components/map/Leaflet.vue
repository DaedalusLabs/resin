<template>
   <div class="relative flex h-full w-full items-center justify-center">
      <LMap
         ref="map"
         :zoom="zoom"
         :center="mapCenter"
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
import * as _Leaflet from "leaflet";
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
         userLocation.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
         };
         zoom.value = 12;
      });
   }
};

const createCustomIcon = (count) => {
   if (count === 1) {
      return L.divIcon({
         className:
            "bg-resin-500 border-2 border-white text-white text-center custom-marker rounded-full shadow-md text-sm font-bold",
         iconSize: [20, 20],
         iconAnchor: [10, 20],
      });
   }
   return L.divIcon({
      html: `<div class="marker-icon">${count}</div>`,
      className:
         "bg-resin-500  border-2 border-white text-white text-center custom-marker rounded-full shadow-md text-sm font-bold",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
   });
};

const onMapReady = () => {
   const markers = L.markerClusterGroup({
      iconCreateFunction: function (cluster) {
         const count = cluster.getChildCount();
         return createCustomIcon(count);
      },
   });

   locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
         icon: createCustomIcon(1),
      });
      markers.addLayer(marker);
   });

   map.value.leafletObject.addLayer(markers);
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

const props = defineProps({
   mapCenter: {
      type: Object,
      required: false,
      default: () => ({ lat: 47.41322, lng: -1.219482 }),
   },
});

// Watch mapCenter for changes and update the map center
watch(
   () => props.mapCenter,
   (newCenter) => {
      if (map.value && newCenter) {
         map.value.leafletObject.setView(
            [newCenter.lat, newCenter.lng],
            (zoom.value = 15),
         );
      }
   },
   { immediate: true },
);
</script>

<style>
.force-top {
   z-index: 9999; /* High z-index to ensure it appears above other elements */
}
</style>
