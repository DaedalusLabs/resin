<template>
   <section
      class="flex h-screen flex-col items-center justify-between px-12 py-20"
   >
      <NuxtImg
         src="/images/logos/resin-text.webp"
         alt="Logo"
         class="md:w-1/10 mx-auto w-1/2"
      />
      <div class="flex flex-col items-center justify-center gap-6">
         <h1
            class="text-center font-inter text-4xl font-bold leading-tight text-white"
         >
            {{ $t("buyHomeWithoutBank") }}
         </h1>
         <NuxtLink :to="localePath('/choosePropertyType')">
            <FlowbiteButton :text="$t('getStarted')" />
         </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
         <FlowbiteButton :text="$t('signIn')" />

         <NuxtLink
            to="#"
            class="mb-2 me-2 rounded-lg px-5 py-2.5 font-inter text-sm font-medium text-pirate-400 hover:bg-white hover:text-pirate-700"
         >
            {{ $t("checkCountryAvailability") }}
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>
