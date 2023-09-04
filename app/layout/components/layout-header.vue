<script lang="ts" setup>
import LayoutNavbar from './layout-navbar.vue';
import LayoutNavDrawer from './layout-nav-drawer.vue';
import { useNav } from '../composables/use-nav';

const { isDrawerOpen, toggleDrawer } = useNav();
</script>

<template>
  <header class="sticky top-0 z-30 w-full border-b border-$pr-c-gutter">
    <LayoutNavbar
      :is-drawer-open="isDrawerOpen"
      @toggle-drawer="toggleDrawer"
    />

    <LayoutNavDrawer :is-open="isDrawerOpen" />
  </header>
</template>
