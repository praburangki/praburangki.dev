<script lang="ts" setup>
import { navItems } from '../data/nav';
</script>

<template>
  <nav>
    <template
      v-for="navItem in navItems"
      :key="navItem.text"
    >
      <NuxtLink
        :to="navItem.link"
        class="block border-b border-$pr-c-divider py-3 text-sm font-500 text-$pr-c-text-1 transition-colors-280 hover:text-$pr-c-brand-1"
      >
        {{ navItem.text }}
      </NuxtLink>
    </template>
  </nav>
</template>
