<script lang="ts" setup>
import LayoutNavDrawerGroup from './layout-nav-drawer-group.vue';
import { navItems } from '../data/nav';
</script>

<template>
  <nav>
    <template
      v-for="navItem in navItems"
      :key="navItem.text"
    >
      <NuxtLink
        v-if="navItem.link"
        :to="navItem.link"
        class="block border-b border-$pr-c-divider py-3 text-sm font-500 text-$pr-c-text-1 transition-colors-280 hover:text-$pr-c-brand-1"
      >
        {{ navItem.text }}
      </NuxtLink>

      <LayoutNavDrawerGroup
        v-else
        :nav-item="navItem"
      />
    </template>
  </nav>
</template>
