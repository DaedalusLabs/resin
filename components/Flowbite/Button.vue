<template>
   <button
      type="button"
      class="inline-flex items-center rounded-lg bg-resin-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-resin-600 focus:outline-none"
   >
      <PhSignIn v-if="isLogin" :size="24" class="mr-3" />

      {{ text }}

      <svg
         v-if="showIcon"
         class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 14 10"
      >
         <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
         />
      </svg>
   </button>
</template>

<script setup>
import { PhSignIn } from "@phosphor-icons/vue";

defineProps({
   text: {
      type: String,
      required: true,
   },
   isLogin: {
      type: Boolean,
      default: false,
   },
   showIcon: {
      type: Boolean,
      default: true,
   },
});
</script>
