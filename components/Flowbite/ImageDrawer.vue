<script setup>
import { useFlowbite } from "~/composables/useFlowbite";

const drawer = ref(null);

const props = defineProps({
   showDrawer: Boolean,
   imageUrls: {
      type: Array,
      required: true,
   },
});

const emit = defineEmits(["close"]);

onMounted(() => {
   useFlowbite(() => {
      const $targetEl = document.getElementById("drawer-bottom-example");

      const options = {
         placement: "bottom",
         backdrop: true,
         bodyScrolling: false,
         edge: false,
         edgeOffset: "",
         onHide() {
            emit("close");
         },

         backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
      };

      if ($targetEl) {
         drawer.value = new Drawer($targetEl, options);

         // Show or hide drawer based on initial prop value
         if (props.showDrawer) {
            drawer.value.show();
         } else {
            drawer.value.hide();
         }
      }
   });
});

watch(
   () => props.showDrawer,
   (value) => {
      if (drawer.value) {
         if (value) {
            drawer.value.show();
         } else {
            drawer.value.hide();
         }
      }
   },
);
</script>

<template>
   <div
      id="drawer-bottom-example"
      class="fixed bottom-0 left-0 right-0 z-40 h-5/6 w-full transform-none overflow-y-auto bg-white transition-transform dark:bg-gray-800"
      tabindex="-1"
   >
      <div
         class="sticky top-0 z-50 cursor-pointer bg-white p-4 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
         @click="emit('close')"
      >
         <span
            class="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-lg bg-gray-300 dark:bg-gray-600"
         />
      </div>
      <div class="flex flex-col items-center justify-between">
         <NuxtImg
            v-for="imageUrl in imageUrls"
            :key="imageUrl"
            :src="imageUrl"
            class="h-48 w-full object-cover"
         />
      </div>
   </div>
</template>
