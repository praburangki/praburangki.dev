<script lang="ts" setup>
const { isMenuOpen, toggleMenu } = useNav();

watch(isMenuOpen, (val) => {
  const rootEl = document.documentElement;

  if (val) {
    rootEl.classList.add('overflow-hidden');
  } else {
    rootEl.classList.remove('overflow-hidden');
  }
});
</script>

<template>
  <nav
    class="elevation-16 [-webkit-overflow-scrolling:touch] pointer-events-auto fixed bottom-0 right-0 top-0 z-50 h-full max-w-full w-[300px] flex flex-col bg-white duration-200 transition-property-[box-shadow,transform,visibility,width,height,left,right,top,bottom] will-change-transform dark:(bg-slate-900)"
    :class="{
      'translate-x-0': isMenuOpen,
      'translate-x-[110%]': !isMenuOpen,
    }"
  >
    kekekeke
  </nav>

  <Transition
    enter-active-class="transition-opacity-300"
    leave-active-class="transition-opacity-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="absolute inset-0 z-49 bg-black/20"
      @click="toggleMenu"
    />
  </Transition>
</template>
