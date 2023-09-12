<script lang="ts" setup>
import { TOOL_ICONS } from '~~/domains/core/data/tool-icons';
</script>

<template>
  <section class="">
    <!-- Container -->
    <div class="px-6 py-12 lg:(px-16) sm:(px-12 py-16)">
      <div class="mx-auto max-w-[1152px] flex flex-col text-center lg:(flex-row text-left)">
        <!-- Hero Texts -->
        <div class="relative z-10 order-2 mt-4 shrink-0 grow-1 lg:(order-1 mt-0 max-w-[592px] w-[calc((100%/3)*2)])">
          <h1 class="mx-auto max-w-[392px] text-size-[32px] font-700 leading-[40px] tracking-[-0.4px] text-transparent lg:(m-0 text-size-[56px] leading-[64px]) sm:(max-w-[486px] text-size-[48px] leading-[56px])">
            <span class="hero-name">
              Prabu Rangki
            </span>
          </h1>

          <p class="mx-auto max-w-[392px] pt-2 text-size-lg font-500 leading-[28px] text-$pr-c-text-1 lg:(mx-0 max-w-[486px] pt-3 text-xl text-size-2xl leading-[32px] leading-[36px])">
            A software engineer hailing from the sunny shores of Bali
            <i class="i-twemoji:flag-indonesia mx-[2px] mb-[2px] drop-shadow-lg" />,
            specializing in the enchanting realms of front-end development with various frameworks and Typescript as my trusty allies.
            <br>
            <br>
            Here, I showcase my passion for creativity, innovation, and personal growth.
            Explore my diverse projects that push boundaries and delve into my thoughts and experiences.
          </p>
        </div>

        <div class="order-1 lg:(order-2 m-0 min-h-full grow-1) -mx-6 -mb-12 -mt-19 sm:(-mt-27)">
          <!-- Image Container -->
          <div class="relative mx-auto h-80 w-80 lg:(h-full w-full flex items-center justify-center -translate-[32px]) sm:(h-98 w-98)">
            <!-- Background gradient -->
            <div
              class="absolute left-1/2 top-1/2 h-48 w-48 rounded-full blur-40 lg:(h-80 w-80 blur-72) sm:(h-64 w-64 blur-56) -translate-1/2"
              style="background: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);"
            />

            <NuxtImg
              src="/profile"
              provider="cloudinary"
              class="absolute left-1/2 top-1/2 max-h-48 max-w-48 rounded-10 lg:(max-h-80 max-w-80) sm:(max-h-64 max-w-64) -translate-1/2"
              loading="lazy"
              :modifiers="{
                flags: 'progressive',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="tools"
    class="container"
  >
    <h2 class="text-center text-xl font-700 lg:text-3xl md:text-2xl">
      Tools that I've worked with
    </h2>

    <div class="mx-auto mt-10 max-w-[1152px]">
      <div class="mt-4 flex flex-wrap gap-4">
        <a
          v-for="icon in TOOL_ICONS"
          :key="icon.link"
          :href="icon.link"
          target="_blank"
          class="grid grid-cols-[max-content_1fr] items-center overflow-hidden border-2 border-$pr-c-divider rounded-2 bg-$pr-c-bg transition-all-280 hover:(scale-110 border-$pr-c-border)"
          :title="icon.name"
        >
          <span class="h-8 w-8 inline-flex items-center justify-center bg-$pr-c-bg-alt p-1.6 lg:(h-[2.8125rem] w-[2.8125rem] p-[0.3rem])">
            <i
              :class="icon.class"
              class="h-5 w-5 lg:(h-6 w-6)"
            />
          </span>

          <span class="grow-1 px-2 text-sm font-600 lg:text-lg md:text-lg">
            {{ icon.name }}
          </span>
        </a>
      </div>
    </div>
  </section>

  <!-- <SiteHomeWorks /> -->
</template>

<style lang="postcss" scoped>
  .hero-name {
    background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
