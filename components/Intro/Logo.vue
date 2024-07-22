<template>
   <div ref="logoContainer">
      <img
         ref="logo"
         src="/images/logos/resin-icon.webp"
         alt="Logo"
         class="logo"
      />
   </div>
</template>

<script setup>
const { locale } = useI18n();
const logo = ref(null);
const router = useRouter();

onMounted(() => {
   setTimeout(() => {
      router.push({ path: `/${locale.value}/introduction` });
   }, 3000);
});
</script>

<style scoped>
@keyframes springAnimation {
   0% {
      transform: translateY(200px);
   }
   60% {
      transform: translateY(-50px);
      transform: scale(1.1);
   }
   80% {
      transform: translateY(-50px);
      transform: scale(1.1);
   }

   100% {
      transform: translateY(50px);
      transform: scale(0.7);
   }
}

.container {
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
}

.logo {
   animation: springAnimation 1500ms ease-in-out forwards;
}
</style>
