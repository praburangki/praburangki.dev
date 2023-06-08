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

const navLinks = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
];
</script>

<template>
  <Transition
    enter-active-class="transition-opacity,transform-500"
    leave-active-class="transition-opacity,transform-500"
    enter-from-class="opacity-0 translate-x-[100%]"
    leave-to-class="opacity-0 translate-x-[100%]"
    @enter="lockBodyScroll"
    @after-leave="unlockBodyScroll"
  >
    <nav
      v-if="isMenuOpen"
      ref="drawer"
      class="drawer dark:bg-surface-invert bg-surface [-webkit-overflow-scrolling:touch] pointer-events-auto fixed bottom-0 right-0 top-14 z-20 w-[300px]"
    >
      <div class="text-surface-invert h-full flex flex-col px-4 py-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400">
        <ul class="space-y-6">
          <li
            v-for="navLink in navLinks"
            :key="navLink.path"
          >
            <NuxtLink
              :to="navLink.path"
              class="flex transition-color-300 focus:text-sky-500 hover:text-sky-500 dark:hover:text-sky-400"
            >
              {{ navLink.name }}
            </NuxtLink>
          </li>
        </ul>

        <div class="mt-6 border-t border-slate-200 pt-6 text-center dark:border-slate-200/10">
          <ClientOnly>
            <ToggleDarkBtn />
          </ClientOnly>
        </div>
      </div>
    </nav>
  </Transition>

  <Transition
    enter-active-class="transition-opacity-300"
    leave-active-class="transition-opacity-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed bottom-0 left-0 right-0 top-14 z-19 bg-black/20"
      @click="toggleMenu"
    />
  </Transition>
</template>
