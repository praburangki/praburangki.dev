<script lang="ts" setup>
const { isMenuOpen, toggleMenu } = useNav();
</script>

<template>
  <div
    class="sticky top-0 z-40 w-full flex-none border-b border-zinc-900/7.5 bg-white/50 backdrop-blur-sm transition-colors duration-500 lg:(z-50) dark:(border-white/7.5 backdrop-blur)"
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

        <div class="relative">
          <LayoutHamburger
            class="ml-auto md:hidden"
            :active="isMenuOpen"
            @click="toggleMenu"
          />
        </div>
      </div>
    </div>
  </div>
</template>
