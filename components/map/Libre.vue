<template>
   <div class="relative flex h-full w-full items-center justify-center">
      <div ref="mapContainer" class="h-full w-full" />

      <!-- Button to View Properties -->
      <NuxtLink
         class="force-top absolute bottom-20"
         :to="localePath('properties')"
      >
         <FlowbiteButton
            :text="`View ${visibleLocationsAmount} properties`"
            class="rounded bg-resin-500 px-4 py-2 text-white hover:bg-resin-600"
         />
      </NuxtLink>

      <!-- GPS Location Button -->
      <button
         class="force-top absolute bottom-20 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-md"
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
            :show-media-icon="false"
            :property="clickedLocation"
            class="force-top property-card absolute bottom-0 w-screen rounded-none bg-white shadow-lg"
         />
      </transition>
   </div>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";
import { PhGps } from "@phosphor-icons/vue";
import { fixNestedStrings } from "~/utils/jsonParser";
import { Map } from "maplibre-gl";

const propertiesStore = usePropertiesStore();
const properties = propertiesStore.properties;
const zoom = ref(6);
const mapContainer = ref(null);
const map = ref(null);
const visibleLocationsAmount = ref(0);
const userLocation = ref(null);
const clickedLocation = ref(null);

const props = defineProps({
   mapCenter: {
      type: Object,
      required: false,
      default: () => ({ lat: 8.852036, lng: -57.154996 }),
   },
});

const getUserLocation = () => {
   if (navigator.geolocation && userLocation.value === null) {
      navigator.geolocation.getCurrentPosition((position) => {
         userLocation.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
         };
         map.value.setCenter([userLocation.value.lng, userLocation.value.lat]);
         map.value.setZoom(15);
      });
   }
};

const calculateVisibleLocations = () => {
   const bounds = map.value.getBounds();
   const visibleLocations = properties.filter((property) =>
      bounds.contains([
         property.location.coordinates.longitude,
         property.location.coordinates.latitude,
      ]),
   );
   visibleLocationsAmount.value = visibleLocations.length;
   propertiesStore.setFilteredLocations(visibleLocations);
};

onMounted(() => {
   map.value = new Map({
      container: mapContainer.value,
      style: "https://api.jawg.io/styles/jawg-streets.json?access-token=ZhCsSw2AlckiNMZu9HZ1EubtLRNYKqP5xfDQmpI9BpouMugsh5NrknvugQUTGhNs",
      center: [props.mapCenter.lng, props.mapCenter.lat],
      zoom: zoom.value,
   });

   map.value.on("load", () => {
      const geojson = {
         type: "FeatureCollection",
         features: properties.map((location) => ({
            type: "Feature",
            geometry: {
               type: "Point",
               coordinates: [
                  location.location.coordinates.longitude,
                  location.location.coordinates.latitude,
               ],
            },
            properties: location,
         })),
      };

      map.value.addSource("properties", {
         type: "geojson",
         data: geojson,
         cluster: true,
         clusterMaxZoom: 14,
         clusterRadius: 150,
      });

      // Add cluster circles
      map.value.addLayer({
         id: "clusters",
         type: "circle",
         source: "properties",
         filter: ["has", "point_count"],
         paint: {
            "circle-stroke-width": 3,
            "circle-stroke-color": "#fff",

            "circle-color": [
               "step",
               ["get", "point_count"],
               "#F07E19",
               10,
               "#F07E19",
               100,
               "#F07E19",
            ],
            "circle-radius": [
               "step",
               ["get", "point_count"],
               15,
               10,
               20,
               100,
               20,
            ],
         },
      });

      map.value.addLayer({
         id: "cluster-count",
         type: "symbol",
         source: "properties",
         filter: ["has", "point_count"],
         layout: {
            "text-field": "{point_count_abbreviated}",
            "text-size": 15,
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"], // Use Inter if it's available
         },
         paint: {
            "text-color": "#ffffff",
         },
      });

      map.value.addLayer({
         id: "unclustered-point",
         type: "circle",
         source: "properties",
         filter: ["!", ["has", "point_count"]],

         paint: {
            "circle-color": "#F07E19",
            "circle-radius": 8,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#fff",
         },
      });

      map.value.on("click", "unclustered-point", (e) => {
         clickedLocation.value = fixNestedStrings(e.features[0].properties);
      });

      // click on a cluster
      map.value.on("click", "clusters", async (e) => {
         const features = map.value.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
         });
         const clusterId = features[0].properties.cluster_id;
         const zoom = await map.value
            .getSource("properties")
            .getClusterExpansionZoom(clusterId);
         map.value.easeTo({
            center: features[0].geometry.coordinates,
            zoom,
         });
      });
      calculateVisibleLocations();

      map.value.on("moveend", calculateVisibleLocations);
      map.value.on("zoomend", calculateVisibleLocations);
   });
});

watch(
   () => props.mapCenter,
   (newCenter) => {
      if (map.value && newCenter) {
         map.value.setCenter([newCenter.lng, newCenter.lat]);
         map.value.setZoom(15);
      }
   },
   { immediate: true },
);

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
