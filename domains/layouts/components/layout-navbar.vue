<script lang="ts" setup>
import LayoutLogo from './layout-logo.vue';
import LayoutHamburger from './layout-hamburger.vue';
import LayoutNavbarMenu from './layout-navbar-menu.vue';

defineProps<{
  isDrawerOpen: boolean;
}>();

defineEmits<{
  (event: 'toggleDrawer'): void;
}>();
</script>

<template>
  <div class="relative h-$pr-nav-height whitespace-nowrap pl-6 pr-2">
    <!-- Container -->
    <div class="mx-auto h-$pr-nav-height max-w-[calc(var(--pr-layout-max-w)-64px)] flex justify-between">
      <!-- Title -->
      <div
        class="shrink-0"
      >
        <NuxtLink
          to="/"
          aria-label="home page"
          class="h-$pr-nav-height w-full flex items-center text-$pr-c-text-1 lg:shrink-0"
        >
          <span class="sr-only">Home page</span>
          <LayoutLogo class="h-5 w-auto" />
        </NuxtLink>
      </div>

      <!-- Content -->
      <div class="grow-1">
        <div class="h-$pr-nav-height flex items-center justify-end grid-gap-x-2">
          <LayoutNavbarMenu />

          <LayoutHamburger
            :active="isDrawerOpen"
            @click="$emit('toggleDrawer')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
