<template>
   <div class="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white">
      <div class="mx-auto flex max-w-md items-center justify-between px-6 py-2">
         <NuxtLink
            :to="localePath('home')"
            class="flex flex-col items-center text-gray-500 hover:text-gray-900"
            :class="{ 'text-resin-500': isHomeView }"
         >
            <PhHouseSimple :size="24" weight="regular" class="mb-1" />
         </NuxtLink>
         <NuxtLink
            :to="localePath('properties')"
            class="flex flex-col items-center text-gray-500 hover:text-gray-900"
            :class="{ 'text-resin-500': isListView }"
         >
            <PhMagnifyingGlass :size="24" weight="regular" class="mb-1" />
         </NuxtLink>
         <NuxtLink
            :to="localePath('resin')"
            class="flex flex-col items-center text-gray-500 hover:text-gray-900"
            :class="{ 'text-resin-500': isResinView }"
         >
            <NuxtImg
               src="/images/logos/Resin_Hexagon_Gray_Fill.svg"
               width="32"
               height="32"
               class="mb-1"
            />
         </NuxtLink>
         <NuxtLink
            :to="localePath('favorites')"
            class="flex flex-col items-center text-gray-500 hover:text-gray-900"
            :class="{ 'text-resin-500': isFavoritesView }"
         >
            <PhHeartStraight :size="24" weight="regular" class="mb-1" />
         </NuxtLink>
         <NuxtLink
            href="#"
            class="relative flex flex-col items-center text-gray-500 hover:text-gray-900"
            :class="{ 'text-resin-500': isProfileView }"
         >
            <PhUser :size="24" weight="regular" class="mb-1" />
         </NuxtLink>
      </div>
   </div>
</template>

<script setup>
import {
   PhHouseSimple,
   PhMagnifyingGlass,
   PhHeartStraight,
   PhUser,
} from "@phosphor-icons/vue";

const route = useRoute();

const isListView = route.name.includes("listView");
const isHomeView = route.name.includes("home");
const isResinView = route.name.includes("resin");
const isFavoritesView = route.name.includes("favorites");
const isProfileView = route.name.includes("profile");
</script>
