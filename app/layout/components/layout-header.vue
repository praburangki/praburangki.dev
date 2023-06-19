<script lang="ts" setup>
const { isMenuOpen, toggleMenu } = useNav();
</script>

<template>
  <div
    class="sticky top-0 z-30 w-full flex-none border-b border-surface-invert/7.5 backdrop-blur transition-colors duration-500 dark:(border-surface/7.5)"
    :class="{
      'bg-surface dark:bg-slate-800': isMenuOpen,
      'bg-surface/50 dark:bg-surface-invert/20': !isMenuOpen,
    }"
  >
    <div class="mx-auto max-w-8xl">
      <div class="relative h-14 flex items-center justify-between p-4 lg:(px-8)">
        <NuxtLink
          to="/"
          class="w-auto flex-none overflow-hidden"
        >
          <span class="sr-only">Home page</span>
          <LayoutLogo class="h-5 w-auto" />
        </NuxtLink>

        <LayoutHamburger
          class="ml-auto md:hidden"
          :active="isMenuOpen"
          @click="toggleMenu"
        />
      </div>
    </div>
  </div>

  <LayoutDrawer />
</template>
