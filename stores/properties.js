import { defineStore } from "pinia";

export const usePropertiesStore = defineStore("properties", {
   state: () => {
      return {
         properties: [],
         filteredProperties: [],
         favorites: [],
         searches: [],
         viewedProperties: [],
         trendingAreas: [],
      };
   },
   getters: {
      getLocations() {
         return this.properties;
      },
      getFilteredLocations() {
         return this.filteredProperties;
      },
      areFiltersActive() {
         return this.properties.length !== this.filteredProperties.length;
      },
      favoriteLocations() {
         return this.properties.filter((location) =>
            this.favorites.includes(location.id),
         );
      },
      viewedLocations() {
         return this.properties.filter((location) =>
            this.viewedProperties.includes(location.id),
         );
      },
   },

   actions: {
      addViewedProperty(propertyId) {
         if (!this.viewedProperties.includes(propertyId)) {
            this.viewedProperties.push(propertyId);
         }
         console.log(this.viewedProperties);
      },
      addSearch(searchTerm) {
         console.log(searchTerm);
         this.searches.push(searchTerm);
      },
      setFilteredLocations(filteredProperties) {
         this.filteredProperties = filteredProperties;
      },
      filterLocations(searchTerm) {
         this.filteredProperties = this.properties.filter((property) => {
            return (
               property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               property.location.address.street
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
               property.location.address.city
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
               property.location.address.country
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            );
         });
      },
      resetLocations() {
         this.filteredProperties = this.properties;
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
