<template>
   <div>
      <div v-if="show" class="fixed inset-0 z-40 overflow-hidden">
         <div
            class="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
            @click="close"
         />
      </div>
      <transition name="slide-up">
         <div
            v-show="show"
            v-touch:swipe.down="swipeHandler"
            class="absolute inset-x-0 bottom-0 z-50 flex max-h-[70vh] w-full flex-col rounded bg-white p-7 pt-0 shadow-lg"
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
      </transition>
   </div>
</template>

<script setup>
const show = ref(false);

const props = defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
});

const emit = defineEmits(["close"]);

const close = () => {
   emit("close");
};

watchEffect(() => {
   show.value = props.isOpen;
});

const swipeHandler = () => {
   close();
};
</script>

<style scoped>
/* Fade in/out for the backdrop */
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.2s ease-out;
}
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
   opacity: 1;
}

/* Slide up/down for the modal */
.slide-up-enter-active,
.slide-up-leave-active {
   transition:
      transform 0.2s ease-out,
      opacity 0.2s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
   transform: translateY(100%);
   opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
   transform: translateY(0);
   opacity: 1;
}
</style>
