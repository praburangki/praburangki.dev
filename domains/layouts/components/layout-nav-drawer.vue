<script lang="ts" setup>
import { isBrowser } from '@vinicunca/perkakas';
import { useScrollLock } from '@vueuse/core';

import LayoutNavDrawerMenu from './layout-nav-drawer-menu.vue';
import ToggleDarkBtn from './toggle-dark/toggle-dark-btn.vue';

defineProps<{
  isOpen: boolean;
}>();

const drawerRef = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(isBrowser ? document.body : null);
</script>

<template>
  <Transition
    enter-active-class="transition-opacity,transform-250"
    leave-active-class="transition-opacity,transform-250"
    enter-from-class="opacity-0 -translate-y-2"
    leave-to-class="opacity-0 -translate-y-2"
    @enter="isLocked = true"
    @after-leave="isLocked = false"
  >
    <div
      v-if="isOpen"
      ref="drawerRef"
      class="fixed bottom-0 left-0 right-0 top-[calc(var(--pr-nav-height)+1px)] w-full overflow-y-auto bg-$pr-c-bg px-8 md:hidden"
    >
      <div class="mx-auto max-w-[288px] pb-24 pt-6">
        <LayoutNavDrawerMenu />

        <div class="flex justify-center">
          <ClientOnly>
            <ToggleDarkBtn class="mt-6" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </Transition>
</template>
