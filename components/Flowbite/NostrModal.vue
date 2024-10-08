<template>
   <!-- Background overlay (dimming effect) -->
   <div class="fixed inset-0 z-40 bg-black bg-opacity-50" />

   <!-- Main modal -->
   <div class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="w-10/12 rounded-lg bg-white p-8 text-center shadow-lg">
         <!-- Dynamic content based on loading state -->
         <NuxtImg
            :src="loading ? '/icons/nostr.png' : '/icons/nostr-success.png'"
            class="mx-auto w-24"
         />
         <p class="font-extrabold text-gray-900">
            {{ loading ? "Creating NOSTR key..." : "NOSTR account created!" }}
         </p>
         <p v-if="!loading" class="text-sm text-gray-500">
            You can add your personal details later if you like.
         </p>

         <!-- Button for success state -->
         <NuxtLink v-if="!loading" :to="localePath('choose-property-type')">
            <FlowbiteButton
               :show-icon="false"
               text="Continue with RESIN"
               class="mt-4 text-center"
            />
         </NuxtLink>
      </div>
   </div>
</template>

<script setup>
const loading = ref(true);

onMounted(() => {
   // Simulate API call delay of 3 seconds
   setTimeout(() => {
      loading.value = false;
   }, 3000); // 3000ms = 3 seconds
});
</script>
