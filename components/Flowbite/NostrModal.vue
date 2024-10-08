<template>
   <!-- Main modal -->
   <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
   >
      <div class="relative max-h-full w-full max-w-2xl p-4">
         <!-- Modal content -->
         <NuxtImg src="/icons/nostr.png" />
         <p>Creating NOSTR key...</p>
      </div>
   </div>
</template>
