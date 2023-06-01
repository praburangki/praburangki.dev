<script lang="ts" setup>
import { useEventListener } from '@vueuse/core';

const isOpaque = ref(false);

const offset = 50;

function onScroll() {
  if (!isOpaque.value && window.scrollY > offset) {
    isOpaque.value = true;
  } else if (isOpaque.value && window.scrollY <= offset) {
    isOpaque.value = false;
  }
}

onMounted(() => {
  onScroll();

  useEventListener('scroll', onScroll, { passive: true });
});

const { isMenuOpen, toggleMenu } = useNav();
</script>

<template>
  <div
    class="sticky top-0 z-40 w-full flex-none backdrop-blur transition-colors duration-500 lg:(z-50 border-b border-slate-900/10) dark:border-slate-50/[0.06]"
    :class="[{
      'bg-white supports-[(backdrop-filter:blur(0))]:bg-white/95 dark:bg-slate-900/75': isOpaque,
      'bg-white/95 supports-[(backdrop-filter:blur(0))]:bg-white/60 dark:bg-transparent': !isOpaque,
    }]"
  >
    <div class="max-w-8xl mx-auto">
      <div class="mx-4 border-b border-slate-900/10 py-4 lg:(mx-0 border-0 px-8) dark:border-slate-300/10">
        <div class="relative flex items-center">
          <NuxtLink
            to="/"
            class="w-auto flex-none overflow-hidden"
          >
            <span class="sr-only">Home page</span>
            <LayoutLogo class="h-5 w-auto" />
          </NuxtLink>

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
