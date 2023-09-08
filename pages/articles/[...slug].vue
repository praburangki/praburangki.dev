<script lang="ts" setup>
import { useContent } from '#imports';
import ArticleAside from '~/domains/articles/components/article-aside.vue';
import ArticleAsideMobile from '~/domains/articles/components/article-aside-mobile.vue';

const { page } = useContent();
</script>

<template>
  <div class="document-driven-page">
    <ArticleAsideMobile />

    <div class="w-full px-6 pb-24 pt-8 lg:(px-8 pb-0 pt-8) md:(px-8 pb-32 pt-12)">
      <!-- Container -->
      <div class="mx-auto w-full lg:(flex justify-center)">
        <!-- Aside -->
        <div class="relative order-2 hidden max-w-[256px] w-full grow-1 pl-8 lg:block">
          <!-- Aside Container -->
          <div class="fixed top-0 h-screen w-[224px] overflow-x-hidden overflow-y-auto pt-[calc(var(--pr-nav-height)+32px)]">
            <!-- Aside Content -->
            <div class="min-h-[calc(100vh-(var(--pr-nav-height)+32px))] flex flex-col pb-8">
              <ArticleAside />
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="relative mx-auto w-full lg:(order-1 min-w-[640px] px-8 pb-32)">
          <!-- Content Container -->
          <div class="mx-auto max-w-[688px]">
            <!-- Main -->
            <main
              v-if="page"
              class="prose"
            >
              <ContentRenderer
                :key="(page as any)._id"
                :value="page"
              >
                <template #empty="{ value }">
                  <DocumentDrivenEmpty :value="value" />
                </template>
              </ContentRenderer>
            </main>

            <DocumentDrivenNotFound v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .document-driven-page {
    @apply xl:pl-[272px]

    @media (min-width: 1440px) {
      padding-left: calc((100vw - var(--pr-layout-max-w)) / 2 + 272px);
      padding-right: calc((100vw - var(--pr-layout-max-w)) / 2);
    }
  }
</style>
