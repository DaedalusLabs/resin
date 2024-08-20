<template>
   <section class="flex h-full flex-col items-center justify-between">
      <ClientOnly fallback-tag="span" fallback="Loading map...">
         <MapLeaflet />
      </ClientOnly>
   </section>
</template>
