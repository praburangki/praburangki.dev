<script lang="ts" setup>
import LayoutHeader from '~~/app/layout/components/layout-header.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />

    <div
      class="mx-auto w-full shrink-0 grow-1"
    >
      <!-- <LayoutBgImage /> -->

      <slot />

      <!-- <LayoutFooter /> -->
    </div>
  </div>
</template>
