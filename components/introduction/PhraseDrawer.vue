<template>
   <FlowbiteDrawer :is-open="showDrawer" @close="showDrawer == false">
      <template #title> Log in with recovery phrase </template>
      <template #content>
         <div class="grid grid-cols-2 gap-4">
            <FlowbiteTextInput
               v-for="(word, index) in recoveryPhrase"
               :key="index"
               v-model="recoveryPhrase[index]"
               :placeholder="'Word ' + (index + 1)"
            />
         </div>
         <FlowbiteButton
            :text="$t('logIn')"
            class="mt-4 flex w-full items-center justify-center px-5 py-3"
            :is-login="true"
            :show-icon="false"
            @click="validatePhrase"
         />
      </template>
   </FlowbiteDrawer>
</template>

<script setup>
const recoveryPhrase = ref(Array(12).fill(""));
const isFormValid = computed(() =>
   recoveryPhrase.value.every((word) => word.trim() !== ""),
);

const validatePhrase = () => {
   if (isFormValid.value) {
      console.log("Form is valid. Proceeding...");
   } else {
      console.log("Please fill all the fields.");
   }
};

const props = defineProps({
   showPhraseDrawer: Boolean,
});

const showDrawer = ref(false);

watchEffect(() => {
   showDrawer.value = props.showPhraseDrawer;
});
</script>
