<template>
   <section
      class="flex h-full flex-col items-center justify-between px-12 py-20"
   >
      <FlowbiteNostrModal v-if="isModalVisible" />
      <FlowbiteModal ref="loginModal">
         <template #title>Log in with NOSTR</template>
         <p class="my-6 text-sm">
            Choose an option below to access your account.
         </p>
         <div class="mt-4 flex w-full flex-col gap-4">
            <FlowbiteBorderButton :text="`Use browser extension`" />
            <FlowbiteBorderButton :text="`Use private key (NSEC)`" />
            <FlowbiteBorderButton :text="`Use recovery phrase (12 words)`" />
         </div>
         <p class="mt-4 text-center text-xs">
            Or <span class="text-resin-500">create a new account</span> if you
            don't have one yet. Have questions?
            <NuxtLink class="text-resin-500" to="#">Contact us</NuxtLink> for
            assistance.
         </p>
      </FlowbiteModal>
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
            @click="openLoginModal"
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

const loginModal = ref(null);

const openLoginModal = () => {
   loginModal.value.open();
};

const closeModal = () => {
   loginModal.value.close();
};
</script>
