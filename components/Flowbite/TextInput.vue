<template>
   <div>
      <input
         id="default-input"
         :placeholder="placeholder"
         type="text"
         class="block w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:ring-transparent"
         :class="{
            'border-gray-300 bg-gray-50 focus:border-gray-300': !showError,
            'border-red-500 bg-red-50 focus:border-red-500': showError,
         }"
         :value="modelValue"
         @input="onInput"
      />
   </div>
</template>

<script setup>
const showError = ref(false);

const props = defineProps({
   placeholder: {
      type: String,
      default: "Enter your text",
   },
   errorMessages: {
      type: Array,
      default: () => [],
   },
   modelValue: {
      type: String,
      default: "",
   },
});

const emit = defineEmits(["update:modelValue"]);

watchEffect(() => {
   showError.value = props.errorMessages.length > 0;
});

const onInput = (event) => {
   emit("update:modelValue", event.target.value);
};
</script>
