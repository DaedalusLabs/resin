<template>
   <FlowbiteModal ref="loginModal" @close="handleCloseModal">
      <template #title>Log in with NOSTR</template>
      <p class="my-6 text-sm">Choose an option below to access your account.</p>
      <div class="mt-4 flex w-full flex-col gap-4">
         <NuxtLink :to="localePath('properties')" class="block">
            <FlowbiteBorderButton
               :text="`Use browser extension`"
               class="w-full"
            />
         </NuxtLink>

         <FlowbiteBorderButton
            :text="`Use private key (NSEC)`"
            @click="emit('openNsecDrawer')"
         />
         <FlowbiteBorderButton
            :text="`Use recovery phrase (12 words)`"
            @click="emit('openPhraseDrawer')"
         />
      </div>
      <p class="mt-4 text-center text-xs">
         Or <span class="text-resin-500">create a new account</span> if you
         don't have one yet. Have questions?
         <NuxtLink class="text-resin-500" to="#">Contact us</NuxtLink> for
         assistance.
      </p>
   </FlowbiteModal>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const loginModal = ref(null);

const emit = defineEmits(["openNsecDrawer", "openPhraseDrawer", "close"]);

const props = defineProps({
   show: Boolean,
});

const handleCloseModal = () => {
   emit("close");
};

watchEffect(() => {
   if (loginModal.value != null) {
      if (props.show) {
         loginModal.value.open();
      } else {
         loginModal.value.close();
      }
   }
});
</script>
