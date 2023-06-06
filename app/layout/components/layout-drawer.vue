<script lang="ts" setup>
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
const { isMenuOpen, toggleMenu } = useNav();

const drawer = ref<HTMLElement | null>(null);

function lockBodyScroll() {
  disableBodyScroll(drawer.value!, { reserveScrollBarGap: true });
}

function unlockBodyScroll() {
  clearAllBodyScrollLocks();
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity-250 all-[.drawer-container]:transition-transform-250"
    leave-active-class="transition-opacity-250 all-[.drawer-container]:transition-transform-250"
    enter-from-class="opacity-0 all-[.drawer-container]:-translate-y-3"
    leave-to-class="opacity-0 all-[.drawer-container]:-translate-y-3"
    @enter="lockBodyScroll"
    @after-leave="unlockBodyScroll"
  >
    <nav
      v-if="isMenuOpen"
      ref="drawer"
      class="drawer [-webkit-overflow-scrolling:touch] pointer-events-auto fixed bottom-0 left-0 right-0 top-14 w-full bg-white dark:(bg-slate-900)"
    >
      <div class="drawer-container h-full flex flex-col px-4 py-6">
        <ClientOnly>
          <ToggleDarkBtn />
        </ClientOnly>
      </div>
    </nav>
  </Transition>
</template>
