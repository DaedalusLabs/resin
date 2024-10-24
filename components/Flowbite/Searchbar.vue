<template>
   <form @submit.prevent>
      <label
         for="default-search"
         class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
         >Search</label
      >
      <div class="relative">
         <div
            class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
         >
            <svg
               class="h-4 w-4 text-gray-500 dark:text-gray-400"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 20 20"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
               />
            </svg>
         </div>
         <input
            id="default-search"
            :value="query"
            type="search"
            class="focus:outline-border-pirate-700 block w-full rounded-2xl border border-pirate-700 border-transparent bg-black p-4 pr-7 ps-10 text-sm text-gray-900 text-pirate-50 outline-none focus:border-pirate-700 focus:ring-0"
            placeholder="City, region, country..."
            required
            @input="onInput($event)"
         />
         <button
            v-if="query"
            type="button"
            class="absolute inset-y-0 end-0 flex items-center pe-3"
            @click="clearQuery"
         >
            <PhXCircle class="text-pirate-400" :size="18" weight="fill" />
         </button>
      </div>
   </form>
</template>

<script setup>
import { PhXCircle } from "@phosphor-icons/vue";

const props = defineProps({
   query: {
      type: String,
      required: true,
   },
});

const localQuery = ref(props.query);

watchEffect(() => {
   localQuery.value = props.query;
});

const emit = defineEmits(["update:query"]);

function onInput(event) {
   localQuery.value = event.target.value;
   emit("update:query", event.target.value.toLowerCase());
}

function clearQuery() {
   emit("update:query", "");
}
</script>
