<template>
   <div class="relative">
      <!-- Drawer Overlay -->
      <div
         v-if="isDrawerOpen"
         class="fixed inset-0 z-40 bg-gray-800 bg-opacity-50"
         @click="emit('close')"
      />

      <!-- Drawer Panel -->
      <div
         v-if="isDrawerOpen"
         class="fixed inset-y-0 right-0 z-50 w-80 overflow-y-auto bg-white shadow-lg"
      >
         <!-- Header -->
         <div class="flex items-center justify-between border-b p-4">
            <h2 class="text-lg font-medium">Filters</h2>
            <button
               class="text-sm text-red-600 hover:underline"
               @click="clearFilters"
            >
               Clear
            </button>
         </div>

         <!-- Filters -->
         <div class="p-4">
            <!-- Price Filter -->
            <div class="mb-6">
               <label for="garden-area">Price</label>
               <div class="mt-2 flex items-center space-x-2">
                  <input
                     v-model="filters.gardenArea.min"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                     placeholder="0"
                  />
                  <span>To</span>
                  <input
                     v-model="filters.gardenArea.max"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="0"
                  />
               </div>
            </div>

            <!-- Rental Period -->
            <div class="mb-6">
               <span>Rental Period</span>
               <div class="mt-2">
                  <label class="flex items-center">
                     <div class="flex flex-col space-y-2">
                        <div
                           v-for="option in rentalPeriodOptions"
                           :key="option"
                        >
                           <input
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                           />
                           <span class="ml-2 text-sm">{{ option }}</span>
                        </div>
                     </div>
                  </label>
               </div>
            </div>

            <!-- Sort -->
            <div class="mb-6">
               <span>Sort</span>
               <div class="mt-2">
                  <label class="flex items-center">
                     <div class="flex flex-col space-y-2">
                        <div v-for="option in sortOptions" :key="option">
                           <input
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                           />
                           <span class="ml-2 text-sm">{{ option }}</span>
                        </div>
                     </div>
                  </label>
               </div>
            </div>

            <!-- Available Since -->
            <div class="mb-6">
               <span class="mb-2 block text-sm font-medium text-gray-700"
                  >Available since</span
               >
               <div
                  v-for="option in availableSinceOptions"
                  :key="option"
                  class="mb-4 flex items-center"
               >
                  <input
                     type="radio"
                     value=""
                     name="default-radio"
                     class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label
                     for="default-radio-1"
                     class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                     >{{ option }}</label
                  >
               </div>
            </div>

            <!-- Availability -->
            <div class="mb-6">
               <span>Availability</span>
               <div class="mt-2">
                  <div class="flex flex-col space-y-2">
                     <div
                        v-for="availability in availabilityOptions"
                        :key="availability"
                     >
                        <input
                           type="checkbox"
                           class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span class="ml-2 text-sm">{{ availability }}</span>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Living Area -->
            <div class="mb-6">
               <label for="garden-area">Living Area</label>
               <div class="mt-2 flex items-center space-x-2">
                  <input
                     v-model="filters.gardenArea.min"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                     placeholder="0"
                  />
                  <span>To</span>
                  <input
                     v-model="filters.gardenArea.max"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="0"
                  />
               </div>
            </div>

            <!-- Plot Area -->
            <div class="mb-6">
               <label for="garden-area">Plot Area</label>
               <div class="mt-2 flex items-center space-x-2">
                  <input
                     v-model="filters.gardenArea.min"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                     placeholder="0"
                  />
                  <span>To</span>
                  <input
                     v-model="filters.gardenArea.max"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="0"
                  />
               </div>
            </div>

            <!-- Rooms Counter -->
            <div class="mb-6">
               <label class="mb-2 block text-sm font-medium text-gray-700"
                  >Rooms</label
               >
               <div class="relative flex items-center">
                  <button
                     id="decrement-button"
                     type="button"
                     data-input-counter-decrement="quantity-input"
                     class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                     <svg
                        class="h-3 w-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                     >
                        <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M1 1h16"
                        />
                     </svg>
                  </button>
                  <input
                     type="text"
                     data-input-counter
                     aria-describedby="helper-text-explanation"
                     class="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="999"
                  />
                  <button
                     id="increment-button"
                     type="button"
                     data-input-counter-increment="quantity-input"
                     class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                     <svg
                        class="h-3 w-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                     >
                        <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M9 1v16M1 9h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>

            <!-- Bedrooms Counter -->
            <div class="mb-6">
               <label class="mb-2 block text-sm font-medium text-gray-700"
                  >Bedrooms</label
               >
               <div class="relative flex items-center">
                  <button
                     id="decrement-button"
                     type="button"
                     data-input-counter-decrement="quantity-input"
                     class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                     <svg
                        class="h-3 w-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                     >
                        <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M1 1h16"
                        />
                     </svg>
                  </button>
                  <input
                     type="text"
                     data-input-counter
                     aria-describedby="helper-text-explanation"
                     class="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="999"
                  />
                  <button
                     id="increment-button"
                     type="button"
                     data-input-counter-increment="quantity-input"
                     class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                     <svg
                        class="h-3 w-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                     >
                        <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M9 1v16M1 9h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>

            <!-- Outdoor Space -->
            <div class="mb-6">
               <span>Garden orientation</span>
               <div class="mt-2">
                  <label class="flex items-center">
                     <div class="flex flex-col space-y-2">
                        <div v-for="space in outdoorSpaces" :key="space">
                           <input
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                           />
                           <span class="ml-2 text-sm">{{ space }}</span>
                        </div>
                     </div>
                  </label>
               </div>
            </div>

            <!-- Garden Orientation and Area -->
            <div class="mb-6">
               <span>Garden orientation</span>
               <div class="mt-2">
                  <label class="flex items-center">
                     <div class="flex flex-col space-y-2">
                        <div
                           v-for="orientation in gardenOrientations"
                           :key="orientation"
                        >
                           <input
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                           />
                           <span class="ml-2 text-sm">{{ orientation }}</span>
                        </div>
                     </div>
                  </label>
               </div>
            </div>

            <!-- Garden Area -->
            <div class="mb-6">
               <label for="garden-area">Garden area</label>
               <div class="mt-2 flex items-center space-x-2">
                  <input
                     v-model="filters.gardenArea.min"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                     placeholder="0"
                  />
                  <span>To</span>
                  <input
                     v-model="filters.gardenArea.max"
                     type="number"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="0"
                  />
               </div>
            </div>

            <!-- Show Results Button -->
            <div class="p-4">
               <button
                  class="w-full rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                  @click="applyFilters"
               >
                  Show {{ filteredResults }} results
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
const isDrawerOpen = ref(false);

const props = defineProps({
   showDrawer: {
      type: Boolean,
      required: true,
   },
});

const emit = defineEmits(["close"]);

watchEffect(() => {
   isDrawerOpen.value = props.showDrawer;
});

const gardenOrientations = ["North", "South", "East", "West"];
const outdoorSpaces = ["Garden", "Balcony", "Terrace"];
const availabilityOptions = ["Available", "Under negotiation", "Sold"];
const availableSinceOptions = [
   "No preference",
   "Today",
   "3 days",
   "5 days",
   "10 days",
   "30 days",
];
const sortOptions = [
   "House",
   "Apartment",
   "Parking availability",
   "Construction land",
   "Commercial property",
];
const rentalPeriodOptions = ["Short to medium term", "Long term"];

const filters = reactive({
   priceFrom: 0,
   priceTo: 0,
   rentalPeriod: {
      shortMedium: false,
      longTerm: false,
   },
   sort: {
      house: false,
      apartment: false,
   },
   availableSince: "noPreference",
   availability: {
      available: false,
      underNegotiation: false,
   },
   rooms: 0,
   bedrooms: 0,
   gardenOrientation: {
      north: false,
      // Add more garden orientation options
   },
   gardenArea: {
      min: 0,
      max: 0,
   },
});

const filteredResults = computed(() => {
   // Calculate the number of filtered results
   return 0;
});

const clearFilters = () => {
   // Clear all filters
};

const decreaseRooms = () => {
   if (filters.rooms > 0) {
      filters.rooms--;
   }
};

const increaseRooms = () => {
   filters.rooms++;
};

const decreaseBedrooms = () => {
   if (filters.bedrooms > 0) {
      filters.bedrooms--;
   }
};

const increaseBedrooms = () => {
   filters.bedrooms++;
};

const applyFilters = () => {
   // Apply filters
};
</script>

<style scoped>
label {
   @apply mb-2 block text-sm font-semibold text-gray-900;
}
</style>
