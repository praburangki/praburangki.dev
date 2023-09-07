<script lang="ts" setup>
import { useContent } from '#imports';

const { page } = useContent();
</script>

<template>
  <div class="document-driven-page">
    <div class="w-full px-6 pb-24 pt-8 lg:(px-8 pb-0 pt-8) md:(px-8 pb-32 pt-12)">
      <!-- Container -->
      <div class="mx-auto w-full xl:(flex justify-center)">
        <!-- Content -->
        <div class="relative mx-auto w-full xl:(order-1 min-w-[640px]) lg:(px-8 pb-32)">
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
    @apply lg:pl-[272px]

    @media (min-width: 1440px) {
      padding-left: calc((100vw - var(--pr-layout-max-w)) / 2 + 272px);
      padding-right: calc((100vw - var(--pr-layout-max-w)) / 2);
    }
  }
</style>
