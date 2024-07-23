<template>
   <div
      class="flex min-h-screen flex-col bg-pirate-950 bg-hex-dark bg-cover bg-center"
   >
      <header />
      <main class="flex-1 pb-10" :class="{ 'pb-20': showBottomBar }">
         <slot />
      </main>
      <BottomBar v-if="showBottomBar" />
   </div>
</template>

<script setup>
const route = useRoute();

console.log(route.name);

const showBottomBar =
   !route.name.includes("introduction") &&
   !route.name.includes("index") &&
   !route.name.includes("choosepropertyType");
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

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

* {
   font-family: "Inter", sans-serif;
}
</style>
