<template>
   <button
      type="button"
      class="inline-flex items-center rounded-lg bg-white bg-opacity-25 px-6 py-3 text-center text-sm font-medium text-pirate-300 hover:cursor-not-allowed"
   >
      {{ text }}

      <svg
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
defineProps({
   text: {
      type: String,
      required: true,
   },
});
</script>
