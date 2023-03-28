<script lang="ts" setup>

</script>

<template>
  <header class="z-20 relative top-0 left-0 w-full pointer-events-none transition-background-color-500">
    <div class="relative border-b-1 border-transparent pl-6 pr-2 h-$nav-height transition-background-color,border-color-500 pointer-events-none">
      <div class="container flex justify-between pointer-events-none h-$nav-height">
        <div class="shrink-0 h-[calc(var(--nav-height)-1px)] transition-background-color-500">
          <NuxtLink
            to="/"
            class="flex items-center w-full h-$nav-height font-semibold transition-opacity-250 hover:opacity-60"
          >
            praburangki
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
  .container :deep(*) {
    pointer-events: auto;
  }
</style>
