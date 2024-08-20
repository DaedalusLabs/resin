<template>
   <div class="flex items-center justify-between gap-2">
      <NuxtLink :to="localePath('map')">
         <FlowbiteIconButton icon="map" description="view map" />
      </NuxtLink>
      <FlowbiteSearchbar />
      <FlowbiteIconButton icon="filter" description="filter properties" />
   </div>
</template>
