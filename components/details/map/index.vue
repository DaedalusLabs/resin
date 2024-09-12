<template>
   <div class="container mx-auto mt-8 w-10/12">
      <h2 class="text-base font-bold">Location</h2>
      <div class="mt-4 overflow-hidden rounded-2xl">
         <div ref="mapContainer" class="h-64">
            <div
               class="force-top absolute bottom-0 flex w-full justify-center bg-black/20 p-4 text-sm text-white backdrop-blur-md"
            >
               <NuxtLink class="" :to="localePath('map')">
                  <p>View on map</p>
               </NuxtLink>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
const mapContainer = ref(null);
const map = ref(null);
const props = defineProps({
   property: {
      type: Object,
      required: true,
   },
});

onMounted(() => {
   map.value = new maplibregl.Map({
      container: mapContainer.value,
      style: "https://api.jawg.io/styles/jawg-streets.json?access-token=ZhCsSw2AlckiNMZu9HZ1EubtLRNYKqP5xfDQmpI9BpouMugsh5NrknvugQUTGhNs",
      center: [
         props.property.location.coordinates.longitude,
         props.property.location.coordinates.latitude,
      ],
      zoom: 13,
      dragPan: false,
   });

   map.value.scrollZoom.disable();

   const el = document.createElement("div");
   el.className = "marker";

   el.style.background = "#F07E19";
   el.style.width = "20px";
   el.style.height = "20px";
   el.style.borderRadius = "50%";
   el.style.border = "2px solid #fff";

   new maplibregl.Marker({ element: el })
      .setLngLat([
         props.property.location.coordinates.longitude,
         props.property.location.coordinates.latitude,
      ])
      .addTo(map.value);
});
</script>

<style scoped>
.force-top {
   z-index: 10;
}
</style>
