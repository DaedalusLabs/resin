<template>
   <div class="relative flex h-full w-full items-center justify-center">
      <!-- Leaflet Map Component -->
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

      <!-- Button to View Properties -->
      <NuxtLink
         class="force-top absolute bottom-10"
         :to="localePath('properties')"
      >
         <FlowbiteButton
            :text="`View ${visibleLocationsAmount} properties`"
            class="rounded bg-resin-500 px-4 py-2 text-white hover:bg-resin-600"
         />
      </NuxtLink>

      <!-- GPS Location Button -->
      <button
         class="force-top absolute bottom-10 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-md"
         @click="getUserLocation"
      >
         <PhGps :size="32" />
      </button>

      <!-- Property Card Transition -->
      <transition
         enter-active-class="slide-up-enter"
         leave-active-class="slide-up-leave"
      >
         <PropertyCard
            v-if="clickedLocation"
            :key="clickedLocation.id"
            :property="clickedLocation"
            class="force-top property-card absolute bottom-0 w-screen rounded-none bg-white shadow-lg"
         />
      </transition>
   </div>
</template>

<script setup>
import * as _Leaflet from "leaflet";
import "leaflet.markercluster";
import { useLocationsStore } from "~/stores/locations";
import { PhGps } from "@phosphor-icons/vue";

// Store and State Setup
const locationsStore = useLocationsStore();
const locations = locationsStore.locations;
const zoom = ref(6);
const map = ref(null);
const visibleLocationsAmount = ref(0);
const userLocation = ref(null);
const clickedLocation = ref(null);

const props = defineProps({
   mapCenter: {
      type: Object,
      required: false,
      default: () => ({ lat: 47.41322, lng: -1.219482 }),
   },
});

// Get User Location
const getUserLocation = () => {
   if (navigator.geolocation && userLocation.value === null) {
      navigator.geolocation.getCurrentPosition((position) => {
         userLocation.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
         };
         map.value.leafletObject.setView(userLocation.value, 15);
         zoom.value = 12;
      });
   }
};

// Custom Marker Icon
const createCustomIcon = (count) => {
   return L.divIcon({
      html: `<div class="marker-icon">${count > 1 ? count : ""}</div>`,
      className: `bg-resin-500 border-2 border-white text-white text-center custom-marker rounded-full shadow-md text-sm font-bold`,
      iconSize: [count === 1 ? 20 : 30, count === 1 ? 20 : 30],
      iconAnchor: [count === 1 ? 10 : 15, count === 1 ? 20 : 30],
   });
};

// Map Ready Callback
const onMapReady = () => {
   const markers = L.markerClusterGroup({
      iconCreateFunction: (cluster) =>
         createCustomIcon(cluster.getChildCount()),
   });

   locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
         icon: createCustomIcon(1),
      });

      marker.on("click", () => {
         clickedLocation.value = location;
      });

      markers.addLayer(marker);
   });

   map.value.leafletObject.addLayer(markers);
   calculateVisibleLocations();

   map.value.leafletObject.on("moveend", calculateVisibleLocations);
   map.value.leafletObject.on("zoomend", calculateVisibleLocations);

   map.value.leafletObject.removeControl(map.value.leafletObject.zoomControl);
};

// Calculate Visible Locations
const calculateVisibleLocations = () => {
   const bounds = map.value.leafletObject.getBounds();
   const visibleLocations = locations.filter((location) =>
      bounds.contains([location.lat, location.lng]),
   );
   visibleLocationsAmount.value = visibleLocations.length;
   locationsStore.setFilteredLocations(visibleLocations);
};

// Click Outside Handling
const clickedOutside = (event) => {
   if (!clickedLocation.value) return;

   const propertyCard = document.querySelector(".property-card");
   if (propertyCard && !propertyCard.contains(event.target)) {
      clickedLocation.value = null;
      removeClickOutsideListener();
   }
};

const addClickOutsideListener = () => {
   setTimeout(() => {
      document.addEventListener("click", clickedOutside);
   }, 100);
};

const removeClickOutsideListener = () => {
   document.removeEventListener("click", clickedOutside);
};

// Watch for click events outside of the property card
watchEffect(() => {
   if (clickedLocation.value) {
      addClickOutsideListener();
   } else {
      removeClickOutsideListener();
   }
});

// Watch mapCenter for changes and update map center
watch(
   () => props.mapCenter,
   (newCenter) => {
      if (map.value && newCenter) {
         map.value.leafletObject.setView([newCenter.lat, newCenter.lng], 15);
      }
   },
   { immediate: true },
);
</script>

<style scoped>
/* High z-index to ensure elements appear above others */
.force-top {
   z-index: 9999;
}

/* Slide Up/Down Animation */
@keyframes slideUp {
   0% {
      transform: translateY(100%);
      opacity: 0;
   }
   100% {
      transform: translateY(0);
      opacity: 1;
   }
}

@keyframes slideDown {
   0% {
      transform: translateY(0);
      opacity: 1;
   }
   100% {
      transform: translateY(100%);
      opacity: 0;
   }
}

.slide-up-enter {
   animation: slideUp 0.2s ease-out forwards;
}

.slide-up-leave {
   animation: slideDown 0.2s ease-in forwards;
}
</style>
