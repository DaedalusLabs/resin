<template>
   <section class="relative flex h-full flex-col items-center justify-between">
      <TopBar
         class="force-top absolute left-0 right-0 top-0 px-5 pt-10"
         locations="locations"
      />
      <FlowbiteToast />
      <ClientOnly fallback-tag="span">
         <MapLeaflet />
         <template #fallback>
            <!-- this will be rendered on server side -->
            <div
               class="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800"
            />
         </template>
      </ClientOnly>
      <!-- div while map loads -->
   </section>
</template>

<style scoped>
.force-top {
   z-index: 9999;
}
</style>
