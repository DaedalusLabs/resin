import { defineStore } from "pinia";

export const useLocationsStore = defineStore("locations", {
   state: () => {
      return {
         locations: [
            {
               name: "Luxury Villa",
               lat: 47.218371,
               lng: -1.553621,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Mahonylaan 5",
                  city: "Paramaribo",
                  country: "Suriname",
               },
               price: 1950,
               size: 195,
               beds: 3,
               popup: "<h1>This is Nantes</h1>",
            },
            {
               name: "Modern Apartment",
               lat: 48.856613,
               lng: 2.352222,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Avenue des Champs-Élysées 123",
                  city: "Paris",
                  country: "France",
               },
               price: 2500,
               size: 85,
               beds: 2,
               popup: "<h1>Welcome to Paris</h1>",
            },
            {
               name: "Cozy Cabin",
               lat: 60.169856,
               lng: 24.938379,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Saunalahdentie 10",
                  city: "Helsinki",
                  country: "Finland",
               },
               price: 1200,
               size: 70,
               beds: 1,
               popup: "<h1>Discover Helsinki</h1>",
            },
            {
               name: "Elegant Condo",
               lat: 40.712776,
               lng: -74.005974,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Broadway 123",
                  city: "New York",
                  country: "USA",
               },
               price: 3000,
               size: 120,
               beds: 2,
               popup: "<h1>Explore New York</h1>",
            },
         ],
         filteredLocations: [
            {
               name: "Luxury Villa",
               lat: 47.218371,
               lng: -1.553621,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Mahonylaan 5",
                  city: "Paramaribo",
                  country: "Suriname",
               },
               price: 1950,
               size: 195,
               beds: 3,
               popup: "<h1>This is Nantes</h1>",
            },
            {
               name: "Modern Apartment",
               lat: 48.856613,
               lng: 2.352222,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Avenue des Champs-Élysées 123",
                  city: "Paris",
                  country: "France",
               },
               price: 2500,
               size: 85,
               beds: 2,
               popup: "<h1>Welcome to Paris</h1>",
            },
            {
               name: "Cozy Cabin",
               lat: 60.169856,
               lng: 24.938379,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Saunalahdentie 10",
                  city: "Helsinki",
                  country: "Finland",
               },
               price: 1200,
               size: 70,
               beds: 1,
               popup: "<h1>Discover Helsinki</h1>",
            },
            {
               name: "Elegant Condo",
               lat: 40.712776,
               lng: -74.005974,
               imageUrls: [
                  "/images/mock/house.png",
                  "/images/mock/house.png",
                  "/images/mock/house.png",
               ],
               address: {
                  street: "Broadway 123",
                  city: "New York",
                  country: "USA",
               },
               price: 3000,
               size: 120,
               beds: 2,
               popup: "<h1>Explore New York</h1>",
            },
         ],
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
               location.fullAddress
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            );
         });
      },
      resetLocations() {
         this.filteredLocations = this.locations;
      },
   },
});
