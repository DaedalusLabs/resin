<template>
   <div v-if="isOpen" class="fixed inset-0 z-40 overflow-hidden">
      <div
         class="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
         @click="close"
      />

      <div
         v-touch:swipe.down="swipeHandler"
         class="absolute inset-x-0 bottom-0 flex max-h-[70vh] w-full flex-col rounded bg-white p-7 pt-0 shadow-lg"
      >
         <div
            class="mx-auto mb-4 mt-3 h-1 w-8 cursor-pointer rounded-full bg-gray-300"
            @click="close"
         />

         <div class="mb-4 flex items-center px-4">
            <h3
               id="drawer-title"
               class="w-full text-center text-xl font-bold text-gray-900"
            >
               <slot name="title" />
            </h3>
         </div>

         <div class="flex-1 overflow-y-auto">
            <slot name="content" />
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   isOpen: {
      type: Boolean,
      default: false,
   },
});

const emit = defineEmits(["close"]);

const close = () => {
   emit("close");
};
</script>
