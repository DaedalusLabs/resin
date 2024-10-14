<!-- components/Modal.vue -->
<template>
   <Teleport to="body">
      <div
         v-if="isOpen"
         class="fixed inset-0 z-20 overflow-y-auto"
         aria-labelledby="modal-title"
         role="dialog"
         aria-modal="true"
      >
         <div class="flex min-h-screen items-center justify-center">
            <!-- Background overlay -->
            <div
               class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
               aria-hidden="true"
               @click="close"
            />

            <!-- Modal panel -->
            <div
               class="inline-block w-11/12 transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle"
            >
               <div class="bg-white p-6">
                  <div class="sm:flex sm:items-start">
                     <div class="w-full sm:mt-0 sm:text-left">
                        <h3
                           id="modal-title"
                           class="text-xl font-semibold leading-6 text-gray-900"
                        >
                           <div class="flex items-start justify-between">
                              <slot name="title">Modal Title</slot>
                              <button
                                 type="button"
                                 class="inline-flex justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pirate-500"
                                 @click="close"
                              >
                                 <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M6 18L18 6M6 6l12 12"
                                    />
                                 </svg>
                              </button>
                           </div>
                        </h3>
                        <div class="mt-2">
                           <slot>Modal content goes here</slot>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Teleport>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["close"]);

const isOpen = ref(false);

const open = () => {
   isOpen.value = true;
};

const close = () => {
   isOpen.value = false;
   emit("close");
};

defineExpose({ open, close });
</script>
