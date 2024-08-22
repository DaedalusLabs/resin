<template>
   <div>
      <h1>Details</h1>
   </div>
</template>

<script setup>
const route = useRoute();

console.log(route.params.id);
</script>
