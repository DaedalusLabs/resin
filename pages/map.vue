<template>
   <section class="flex h-full flex-col items-center justify-between">
      <TopBar
         class="force-top absolute left-0 right-0 top-0 px-5 pt-10"
         locations="locations"
      />
      <ClientOnly fallback-tag="span" fallback="Loading map...">
         <MapLeaflet />
      </ClientOnly>
   </section>
</template>

<style scoped>
.force-top {
   z-index: 9999;
}
</style>
