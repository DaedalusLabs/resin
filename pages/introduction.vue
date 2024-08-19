<template>
   <section
      class="flex h-full flex-col items-center justify-between px-12 py-20"
   >
      <NuxtImg
         src="/images/logos/resin-white.svg"
         alt="Logo"
         class="max-h-20 max-w-96"
      />
      <div class="flex flex-col items-center justify-center gap-6">
         <h1 class="text-center text-4xl font-bold leading-tight text-white">
            {{ $t("buyHomeWithoutBank") }}
         </h1>
         <NuxtLink :to="localePath('choose-property-type')">
            <FlowbiteButton :text="$t('getStarted')" />
         </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
         <FlowbiteButton :text="$t('signIn')" />

         <NuxtLink
            to="#"
            class="mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-pirate-400 hover:bg-white hover:text-pirate-700"
         >
            {{ $t("checkCountryAvailability") }}
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
definePageMeta({
   layout: "intro",
});
</script>
