<template>
   <div
      class="flex min-h-screen flex-col bg-pirate-950 bg-hex-dark bg-cover bg-center"
   >
      <main class="h-full flex-1 pb-20">
         <slot />
      </main>
      <BottomBar />
   </div>
</template>
