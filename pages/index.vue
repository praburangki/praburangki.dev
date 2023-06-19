<script lang="ts" setup>

</script>

<template>
  <section
    id="hero"
    class="relative isolate overflow-hidden pt-14"
  >
    <div class="bg-gradient-from-top absolute inset-x-0 bottom-0 h-24 from-surface -z-10 sm:h-32 dark:from-slate-950" />
    <div
      class="absolute inset-y-0 right-1/2 w-[200%] origin-top-right skew-x-[-30deg] -z-10 -mr-96 dark:shadow-slate-700 lg:shadow-xl lg:-mr-96 sm:-mr-80"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl px-6 pb-10 lg:px-8 lg:py-32">
      <div class="mx-auto max-w-2xl lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 lg:mx-0 lg:max-w-none lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
        <h1 class="max-w-2xl from-blue-400 to-blue-700 bg-gradient-to-r bg-clip-text pb-1 text-4xl font-bold text-transparent xl:col-auto lg:col-span-2 sm:text-6xl">
          Hi, I'm Prabu Rangki.
        </h1>

        <div class="mt-6 max-w-xl font-medium text-slate-600 xl:(row-start-1 col-end-1) lg:mt-0 dark:text-slate-300">
          A software engineer hailing from the sunny shores of Bali
          <i class="i-twemoji:flag-indonesia mx-[2px] mb-[2px] drop-shadow-lg" />,
          specializing in the enchanting realms of front-end development with Vue and Typescript as my trusty allies.
          <br>
          <br>
          Here, I showcase my passion for creativity, innovation, and personal growth.
          Explore my diverse projects that push boundaries and delve into my thoughts and experiences.
        </div>

        <NuxtImg
          src="/profile"
          provider="cloudinary"
          class="mt-10 h-[320px] max-w-full rounded-2xl object-cover shadow-lg xl:(row-span-2 row-end-2 mt-36) lg:(ml-20 mt-0 max-w-none) sm:(mt-16 h-[400px])"
          loading="lazy"
          :modifiers="{
            flags: 'progressive',
          }"
        />
      </div>
    </div>
  </section>

  <section
    id="tools"
    class="mt-10"
  >
    TOols
    <!--  -->
  </section>
</template>
