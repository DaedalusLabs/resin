<template>
   <FlowbiteDrawer :is-open="showNsecDrawer" @close="showDrawer == false">
      <template #title> Log in with NOSTR private key </template>
      <template #content>
         <FlowbiteTextInput
            v-model="nsecKey"
            placeholder="Enter your nsec"
            :is-invalid="!isNsecFilled"
         />
         <FlowbiteButton
            :text="$t('logIn')"
            class="mt-4 flex w-full items-center justify-center px-5 py-3"
            :is-login="true"
            :show-icon="false"
            @click="validateKey"
         />
      </template>
   </FlowbiteDrawer>
</template>

<script setup>
const nsecKey = ref("");

const isNsecFilled = computed(() => nsecKey.value.trim() !== "");

const validateKey = () => {
   if (isNsecFilled.value) {
      console.log("Form is valid. Proceeding...");
   } else {
      console.log("Please fill all the fields.");
   }
};

const props = defineProps({
   showNsecDrawer: Boolean,
});

const showDrawer = ref(false);

watchEffect(() => {
   showDrawer.value = props.showNsecDrawer;
});
</script>
