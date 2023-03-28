<script lang="ts" setup>
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

defineProps<{
  open: boolean;
}>();

const menu = ref<HTMLElement | null>(null);

function lockBodyScroll() {
  disableBodyScroll(menu.value!, { reserveScrollBarGap: true });
}

function unlockBodyScroll() {
  clearAllBodyScrollLocks();
}
</script>

<template>
  <transition
    name="fade"
    @enter="lockBodyScroll"
    @after-leave="unlockBodyScroll"
  >
    <div v-if="open" ref="menu" class="app-menu fixed top-[calc(var(--nav-height)-1px)] right-0 bottom-0 left-0 px-8 w-full overflow-y-auto pointer-events-auto bg-$c-bg">
      <div class="app-menu__container mx-auto pt-6 pb-24 max-w-[288px]">
        <div class="flex justify-between items-center rounded-2 py-3 px-4 bg-$c-bg-soft">
          <p class="font-medium text-$c-text-2 text-xs">
            Appearance
          </p>

          <AppSwitchAppearance />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss" scoped>
  .app-menu {
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity 0.25s;

      .app-menu__container {
        transition: transform 0.25s ease;
      }
    }

    &.fade-enter-from, &.fade-leave-to {
      opacity: 0;

      .app-menu__container {
        transform: translateY(-8px);
      }
    }
  }
</style>
