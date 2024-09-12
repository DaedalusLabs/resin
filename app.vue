<template>
   <div>
      <VitePwaManifest />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>

<script setup>
import { usePropertiesStore } from "~/stores/properties";

const propertiesStore = usePropertiesStore();

async function getProperties() {
   // mock API call
   return [
      {
         id: 1,
         name: "Luxury Villa",

         location: {
            coordinates: {
               latitude: 5.852036,
               longitude: -55.154996,
            },
            address: {
               street: "Mahonylaan 5",
               city: "Paramaribo",
               country: "Suriname",
            },
         },

         images: [
            "/images/mock/house.png",
            "/images/mock/house.png",
            "/images/mock/house.png",
         ],

         pricingDetails: {
            rentPerMonth: 1950,
            propertyPrice: 468000,
         },

         propertyDetails: {
            size: {
               houseSizeM2: 195, // Size of the house in square meters
               lotSizeM2: 327, // Total lot size in square meters
            },
            bedrooms: 3, // Number of bedrooms
            keyFeatures: [
               "Security system",
               "Swimming pool",
               "Home office space",
               "Solar panels",
            ],
            additionalDetails: {
               type: "Single-family residence",
               yearBuilt: 2021,
               hasGarden: true,
               numberOfFloors: 2,
               heating: "Central heating",
               cooling: "Central air conditioning",
               parking: {
                  garageCapacity: "2-car garage",
               },
            },
         },

         summary:
            "This exquisite single-family residence, built in 2021, offers a blend of modern design and urban convenience, making it the perfect choice for contemporary living. Step into luxury with this apartment's open-concept layout, which seamlessly integrates the living, dining, and kitchen areas.",

         nearbyProperties: [
            {
               id: 2,
               name: "Johannes Mungrastraat 420",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1274,
               },
               propertyDetails: {
                  houseSizeM2: 195,
                  bedrooms: 2,
               },
               imageUrl: "/images/mock/apartment1.png",
            },
            {
               id: 3,
               name: "Van 't Hogerhuysstraat 690",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1200,
               },
               propertyDetails: {
                  houseSizeM2: 195,
                  bedrooms: 2,
               },
               imageUrl: "/images/mock/house1.png",
            },
            {
               id: 4,
               name: "Wilhelminastraat 42",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: null, // Price not available
               },
               propertyDetails: {
                  houseSizeM2: null, // Size not available
                  bedrooms: null, // Bedroom info not available
               },
               imageUrl: "/images/mock/house2.png",
            },
         ],

         popupHtml: "<h1>This is Nantes</h1>",
      },
      {
         id: 2,
         name: "Modern Bungalow",

         location: {
            coordinates: {
               latitude: 5.866942,
               longitude: -55.167011,
            },
            address: {
               street: "Kleine Combeweg 12",
               city: "Paramaribo",
               country: "Suriname",
            },
         },

         images: ["/images/mock/house.png"],

         pricingDetails: {
            rentPerMonth: 1400, // In USD
            propertyPrice: 350000, // In USD
         },

         propertyDetails: {
            size: {
               houseSizeM2: 180, // Size of the house in square meters
               lotSizeM2: 300, // Total lot size in square meters
            },
            bedrooms: 4, // Number of bedrooms
            keyFeatures: [
               "Large backyard",
               "Fireplace",
               "Covered parking",
               "Energy-efficient windows",
            ],
            additionalDetails: {
               type: "Single-family residence",
               yearBuilt: 2019,
               hasGarden: true,
               numberOfFloors: 1,
               heating: "Central heating",
               cooling: "Air conditioning",
               parking: {
                  garageCapacity: "1-car garage",
               },
            },
         },

         summary:
            "A modern bungalow built for comfort, located in a quiet neighborhood in Paramaribo. Features a spacious open-concept living area, energy-efficient windows, and a cozy fireplace for a perfect family home.",

         nearbyProperties: [
            {
               id: 5,
               name: "Verlengde Gemenelandsweg 450",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1250,
               },
               propertyDetails: {
                  houseSizeM2: 160,
                  bedrooms: 3,
               },
               imageUrl: "/images/mock/house.png",
            },
            {
               id: 6,
               name: "Frederikshoopweg 27",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1350,
               },
               propertyDetails: {
                  houseSizeM2: 170,
                  bedrooms: 3,
               },
               imageUrl: "/images/mock/house.png",
            },
         ],

         popupHtml: "<h1>Modern Bungalow in Paramaribo</h1>",
      },
      {
         id: 3,
         name: "Cozy Cottage",

         location: {
            coordinates: {
               latitude: 5.852036,
               longitude: -55.154996,
            },
            address: {
               street: "Kwattaweg 67",
               city: "Paramaribo",
               country: "Suriname",
            },
         },

         images: ["/images/mock/house.png"],

         pricingDetails: {
            rentPerMonth: 1100, // In USD
            propertyPrice: 280000, // In USD
         },

         propertyDetails: {
            size: {
               houseSizeM2: 130, // Size of the house in square meters
               lotSizeM2: 250, // Total lot size in square meters
            },
            bedrooms: 2, // Number of bedrooms
            keyFeatures: [
               "Private garden",
               "Renovated kitchen",
               "Covered porch",
            ],
            additionalDetails: {
               type: "Cottage",
               yearBuilt: 2008,
               hasGarden: true,
               numberOfFloors: 1,
               heating: "Electric heating",
               cooling: "Ceiling fans",
               parking: {
                  garageCapacity: "Street parking",
               },
            },
         },

         summary:
            "This cozy cottage offers a private garden and a recently renovated kitchen. Located in a quiet area, it’s the perfect getaway for those seeking comfort and tranquility.",

         nearbyProperties: [
            {
               id: 7,
               name: "Kwattaweg 79",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1150,
               },
               propertyDetails: {
                  houseSizeM2: 135,
                  bedrooms: 2,
               },
               imageUrl: "/images/mock/house.png",
            },
            {
               id: 8,
               name: "Kwattaweg 84",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1200,
               },
               propertyDetails: {
                  houseSizeM2: 140,
                  bedrooms: 3,
               },
               imageUrl: "/images/mock/house.png",
            },
         ],

         popupHtml: "<h1>Cozy Cottage in Kwattaweg</h1>",
      },
      {
         id: 4,
         name: "Riverside Mansion",

         location: {
            coordinates: {
               latitude: 5.85015,
               longitude: -55.133602,
            },
            address: {
               street: "Waterkant 23",
               city: "Paramaribo",
               country: "Suriname",
            },
         },

         images: ["/images/mock/house.png"],

         pricingDetails: {
            rentPerMonth: 2500, // In USD
            propertyPrice: 750000, // In USD
         },

         propertyDetails: {
            size: {
               houseSizeM2: 350, // Size of the house in square meters
               lotSizeM2: 600, // Total lot size in square meters
            },
            bedrooms: 5, // Number of bedrooms
            keyFeatures: [
               "Riverside view",
               "Private dock",
               "Large patio",
               "Swimming pool",
               "Solar panels",
            ],
            additionalDetails: {
               type: "Mansion",
               yearBuilt: 2015,
               hasGarden: true,
               numberOfFloors: 2,
               heating: "Central heating",
               cooling: "Central air conditioning",
               parking: {
                  garageCapacity: "3-car garage",
               },
            },
         },

         summary:
            "An expansive mansion located by the river, complete with a private dock and a large patio for outdoor entertaining. This luxurious property offers stunning views and the highest standard of modern living.",

         nearbyProperties: [
            {
               id: 9,
               name: "Waterkant 27",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 2300,
               },
               propertyDetails: {
                  houseSizeM2: 340,
                  bedrooms: 5,
               },
               imageUrl: "/images/mock/house.png",
            },
            {
               id: 10,
               name: "Waterkant 30",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 2450,
               },
               propertyDetails: {
                  houseSizeM2: 355,
                  bedrooms: 6,
               },
               imageUrl: "/images/mock/house.png",
            },
         ],

         popupHtml: "<h1>Luxury Riverside Mansion</h1>",
      },
      {
         id: 5,
         name: "Suburban Family Home",

         location: {
            coordinates: {
               latitude: 5.850903,
               longitude: -55.16325,
            },
            address: {
               street: "Welgedacht A 55",
               city: "Paramaribo",
               country: "Suriname",
            },
         },

         images: ["/images/mock/house.png"],

         pricingDetails: {
            rentPerMonth: 1600, // In USD
            propertyPrice: 400000, // In USD
         },

         propertyDetails: {
            size: {
               houseSizeM2: 220, // Size of the house in square meters
               lotSizeM2: 400, // Total lot size in square meters
            },
            bedrooms: 4, // Number of bedrooms
            keyFeatures: [
               "Spacious living area",
               "Private garden",
               "Playground nearby",
               "Home office",
            ],
            additionalDetails: {
               type: "Family home",
               yearBuilt: 2010,
               hasGarden: true,
               numberOfFloors: 2,
               heating: "Central heating",
               cooling: "Air conditioning",
               parking: {
                  garageCapacity: "2-car garage",
               },
            },
         },

         summary:
            "This suburban family home offers ample space for a growing family, with a large living area, private garden, and a nearby playground. Located in a family-friendly neighborhood in Paramaribo.",

         nearbyProperties: [
            {
               id: 11,
               name: "Welgedacht A 60",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1550,
               },
               propertyDetails: {
                  houseSizeM2: 210,
                  bedrooms: 4,
               },
               imageUrl: "/images/mock/house.png",
            },
            {
               id: 12,
               name: "Welgedacht A 70",
               location: {
                  city: "Paramaribo",
                  country: "Suriname",
               },
               pricingDetails: {
                  rentPerMonth: 1650,
               },
               propertyDetails: {
                  houseSizeM2: 230,
                  bedrooms: 5,
               },
               imageUrl: "/images/mock/house.png",
            },
         ],

         popupHtml: "<h1>Family Home in Welgedacht A</h1>",
      },
   ];
}

const properties = await getProperties();
propertiesStore.properties = properties;
propertiesStore.filteredProperties = properties;
</script>

<style>
::-moz-selection {
   /* Code for Firefox */
   color: white;
   background: #f07e19;
}

::selection {
   color: white;
   background: #f07e19;
}

html {
   scroll-behavior: smooth;
}

/* font Inter for all text */
* {
   font-family: "Inter", sans-serif;
   font-optical-sizing: auto;
   font-style: normal;
   font-variation-settings: "slnt" 0;
}

/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
   display: none;
   width: 0;
   height: 0;
}
input[type="search"]::-ms-reveal {
   display: none;
   width: 0;
   height: 0;
} /* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
   display: none;
}
</style>
