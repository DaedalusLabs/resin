<template>
   <section
      class="flex h-full flex-col items-center justify-between px-12 py-20"
   >
      <FlowbiteDrawer :is-open="showKeyDrawer" @close="showKeyDrawer = false">
         <template #title> Log in with NOSTR private key </template>
         <template #content>
            <FlowbiteTextInput placeholder="Enter your Enter your nsec" />
            <NuxtLink :to="localePath('properties')">
               <FlowbiteButton
                  :text="$t('logIn')"
                  class="mt-4 flex w-full items-center justify-center px-5 py-3"
                  :is-login="true"
                  :show-icon="false"
               />
            </NuxtLink>
         </template>
      </FlowbiteDrawer>
      <FlowbiteDrawer
         :is-open="showPhraseDrawer"
         @close="showPhraseDrawer = false"
      >
         <template #title> Log in with recovery phrase </template>
         <template #content>
            <form
               class="grid grid-cols-2 gap-4"
               action="#"
               @submit.prevent="validateForm"
            >
               <FlowbiteTextInput v-for="i in 12" :key="i" :placeholder="i" />
            </form>
            <NuxtLink :to="localePath('properties')">
               <FlowbiteButton
                  :text="$t('logIn')"
                  class="mt-4 flex w-full items-center justify-center px-5 py-3"
                  :is-login="true"
                  :show-icon="false"
               />
            </NuxtLink>
         </template>
      </FlowbiteDrawer>
      <FlowbiteNostrModal v-if="isModalVisible" />
      <FlowbiteModal ref="loginModal">
         <template #title>Log in with NOSTR</template>
         <p class="my-6 text-sm">
            Choose an option below to access your account.
         </p>
         <div class="mt-4 flex w-full flex-col gap-4">
            <FlowbiteBorderButton :text="`Use browser extension`" />
            <FlowbiteBorderButton
               :text="`Use private key (NSEC)`"
               @click="openDrawer"
            />
            <FlowbiteBorderButton
               :text="`Use recovery phrase (12 words)`"
               @click="openPhraseDrawer"
            />
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

const showKeyDrawer = ref(false);
const showPhraseDrawer = ref(false);
const isModalVisible = ref(false);
const loginModal = ref(null);

function openDrawer() {
   showKeyDrawer.value = true;
   loginModal.value.close();
}

function openPhraseDrawer() {
   showPhraseDrawer.value = true;
   loginModal.value.close();
}

function openModal() {
   isModalVisible.value = true;
}

const openLoginModal = () => {
   loginModal.value.open();
};

const validateForm = () => {
   console.log("Form submitted");
};
</script>
