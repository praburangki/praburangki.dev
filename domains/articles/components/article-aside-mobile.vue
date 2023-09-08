<script lang="ts" setup>
import { ref } from 'vue';
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue';

import ArticleAsideItem from './article-aside-item.vue';

const isOpen = ref(false);

const { toc } = useContent();

const tocLinks = computed(() => toc.value.links);

const navHeight = ref(0);

onMounted(() => {
  navHeight.value = Number.parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--pr-nav-height',
    ),
  );
});

const vh = ref(0);

watch(isOpen, () => {
  vh.value = window.innerHeight + Math.min(window.scrollY - navHeight.value, 0);
});

function scrollToTop() {
  isOpen.value = false;
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function onClickItem() {
  isOpen.value = false;
}
</script>

<template>
  <div
    class="sticky left-0 top-$pr-nav-height z-10 w-full flex items-center justify-end border-b border-$pr-c-gutter bg-$pr-c-bg lg:hidden"
  >
    <PopoverRoot v-model:open="isOpen">
      <PopoverTrigger
        class="group relative block px-5 py-3 text-xs font-500 leading-6 transition-color-280 data-[state=closed]:text-$pr-c-text-2 data-[state=open]:text-$pr-c-text-1 hover:text-$pr-c-text-1"
        aria-label="On this page"
      >
        On this page

        <i
          class="i-radix-icons-chevron-right ml-[2px] h-[14px] w-[14px] transition-transform-280 group-data-[state=open]:rotate-90"
        />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          :style="{ '--pr-vh': `${vh}px` }"
          class="z-10 mr-4 max-h-[calc(var(--pr-vh,100vh)-86px)] w-[calc(var(--radix-popper-available-width)-32px)] overflow-x-hidden overflow-y-auto border border-$pr-c-divider rounded-2 bg-$pr-c-bg px-[10px] px-[10px] pb-4 pt-1 shadow-3 outline-none will-change-opacity,transform data-[side=bottom]:animate-slide-up-and-fade data-[side=left]:animate-slide-right-and-fade data-[side=right]:animate-slide-left-and-fade data-[side=top]:animate-slide-down-and-fade"
          :side-offset="16"
        >
          <div class="flex flex-col">
            <button
              class="mx-[13px] mb-[10px] block w-full border-b border-b-$pr-c-divider py-[6px] text-left text-size-[13px] font-medium text-$pr-c-brand"
              @click="scrollToTop"
            >
              Return to top
            </button>

            <ArticleAsideItem
              :toc-links="tocLinks"
              @click="onClickItem"
            />
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </div>
</template>

<style lang="postcss" scoped>
  :deep(.outline-link) {
    font-size: 14px;
    padding: 2px 0;
  }
</style>
