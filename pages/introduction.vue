<template>
   <section
      class="flex h-full flex-col items-center justify-between px-12 py-20"
   >
      <FlowbiteNostrModal v-if="isModalVisible" />
      <NuxtImg src="/images/logos/resin-text.png" alt="Logo" class="h-10" />
      <div class="flex flex-col items-center justify-center gap-6">
         <div>
            <h1 class="text-center text-4xl font-bold leading-tight text-white">
               {{ $t("rentToOwn") }}
            </h1>
            <h1 class="text-center text-4xl font-bold text-white">
               {{ $t("withoutALoan") }}
            </h1>
         </div>

         <FlowbiteButton
            class="px-5 py-3"
            :text="$t('introductionButton')"
            :show-icon="false"
            @click="openModal"
         />
         <NuxtImg
            src="/icons/arrow.png"
            alt="Arrow"
            class="absolute w-16 translate-x-36 translate-y-7"
         />
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
         <FlowbiteButton
            :text="$t('signIn')"
            class="border border-pirate-400 bg-transparent px-3 py-3 font-normal text-pirate-50"
            :show-icon="false"
         />
         <NuxtLink
            to="#"
            class="mb-2 me-2 mt-10 rounded-lg px-5 py-2.5 text-sm font-medium text-pirate-400 hover:bg-white hover:text-pirate-700"
         >
            {{ $t("checkCountryAvailability") }}
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
   layout: "intro",
});

const isModalVisible = ref(false);

function openModal() {
   console.log("here");
   isModalVisible.value = true;
}
</script>
