<script lang="ts" setup>
const { isMenuOpen, toggleMenu } = useNav();
</script>

<template>
  <header class="z-20 relative top-0 left-0 w-full pointer-events-none transition-background-color-500">
    <div class="app-header relative border-b-1 border-transparent pl-6 pr-2 h-$nav-height transition-background-color,border-color-500 pointer-events-none">
      <div class="flex justify-between pointer-events-none h-$nav-height">
        <div class="shrink-0 h-[calc(var(--nav-height)-1px)] transition-background-color-500">
          <NuxtLink
            to="/"
            class="flex items-center w-full h-$nav-height font-semibold transition-opacity-250 hover:opacity-60"
          >
            <NuxtImg
              src="/profile"
              provider="cloudinary"
              class="h-6 rounded mr-2"
            />

            praburangki
          </NuxtLink>
        </div>

        <div class="grow-1 flex justify-end items-center h-[calc(var(--nav-height)-1px)]">
          <AppSwitchAppearance />

          <AppHamburger
            class="md:hidden"
            :active="isMenuOpen" @click="toggleMenu"
          />
        </div>
      </div>
    </div>

    <AppNavMenu :open="isMenuOpen" />
  </header>
</template>

<style lang="postcss" scoped>
  .app-header :deep(*) {
    pointer-events: auto;
  }
</style>
