<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <label title="toggle dark mode">
    <AppSwitch
      class="app-switch-appearance"
      :aria-checked="isDark"
      @click="toggleDark()"
    >
      <i class="i-ri-sun-line dark:i-ri-moon-line text-$c-text-2" />
    </AppSwitch>
  </label>
</template>

<style lang="postcss" scoped>
  .dark .app-switch-appearance :deep(.app-switch__check) {
    transform: translateX(18px);
  }
</style>
