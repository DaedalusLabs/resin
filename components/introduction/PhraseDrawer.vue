<template>
   <div>
      <FlowbiteErrorToast
         :text="`Invalid Nsec key`"
         :show-toast="wrongPhrase"
         @close-toast="wrongPhrase = false"
      />
      <FlowbiteDrawer :is-open="showDrawer" @close="showDrawer = false">
         <template #title> Log in with recovery phrase </template>
         <template #content>
            <form action="#" method="POST" @submit.prevent="validatePhrase">
               <div class="grid grid-cols-2 gap-4">
                  <FlowbiteTextInput
                     v-for="(word, index) in recoveryPhrase"
                     :key="index"
                     v-model="recoveryPhrase[index]"
                     :placeholder="'Word ' + (index + 1)"
                     :error-messages="errorMessages"
                  />
               </div>
               <p v-if="showError" class="mt-1 text-sm text-red-600">
                  {{ errorMessages[0] }}
               </p>
               <FlowbiteButton
                  :text="$t('logIn')"
                  class="mt-4 flex w-full items-center justify-center px-5 py-3"
                  :is-login="true"
                  :show-icon="false"
                  @click="validatePhrase"
               />
            </form>
         </template>
      </FlowbiteDrawer>
   </div>
</template>

<script setup>
const recoveryPhrase = ref(Array(12).fill(""));
const errorMessages = ref([]);
const wrongPhrase = ref(false);

const validatePhrase = () => {
   if (!recoveryPhrase.value.some((word) => word.trim() !== "")) {
      errorMessages.value.push("Please fill in your recovery phrase");
   } else {
      const localeRoute = useLocaleRoute();
      const route = localeRoute({
         name: "properties",
      });
      if (route) {
         return navigateTo(route.fullPath);
      }
   }
};

const props = defineProps({
   showPhraseDrawer: Boolean,
});

const showDrawer = ref(false);

watchEffect(() => {
   showDrawer.value = props.showPhraseDrawer;
});

watchEffect(() => {
   if (recoveryPhrase.value.some((word) => word.trim() !== "")) {
      errorMessages.value = [];
   }
});
</script>
