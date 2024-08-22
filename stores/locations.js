import { defineStore } from "pinia";

export const useLocationsStore = defineStore("locations", {
   state: () => {
      return {
         locations: [],
         filteredLocations: [],
         favorites: [],
      };
   },
   getters: {
      getLocations() {
         return this.locations;
      },
      getFilteredLocations() {
         return this.filteredLocations;
      },
      areFiltersActive() {
         return this.locations.length !== this.filteredLocations.length;
      },
   },

   actions: {
      setFilteredLocations(filteredLocations) {
         this.filteredLocations = filteredLocations;
      },
      filterLocations(searchTerm) {
         this.filteredLocations = this.locations.filter((location) => {
            return (
               location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               location.address.street
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
               location.address.city
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
               location.address.country
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            );
         });
      },
      resetLocations() {
         this.filteredLocations = this.locations;
      },
      toggleFavorite(locationId) {
         if (this.favorites.includes(locationId)) {
            this.favorites = this.favorites.filter((id) => id !== locationId);
         } else {
            this.favorites.push(locationId);
         }
      },
      isFavorite(locationId) {
         return this.favorites.includes(locationId);
      },
   },
});
