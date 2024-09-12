<template>
   <div class="flex h-screen flex-col bg-hex-white bg-cover bg-center">
      <main class="h-full flex-1 overflow-scroll pb-14">
         <slot />
      </main>
      <BottomBar />
   </div>
</template>
