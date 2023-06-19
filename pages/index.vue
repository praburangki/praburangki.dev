<script lang="ts" setup>
const toolIcons = [
  {
    name: 'Nuxt',
    class: 'i-logos:nuxt-icon',
    link: 'https://nuxt.com/',
  },
  {
    name: 'Typescript',
    class: 'i-logos:typescript-icon',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'UnoCSS',
    class: 'i-vscode-icons:file-type-unocss',
    link: 'https://unocss.dev/',
  },
  {
    name: 'Figma',
    class: 'i-logos:figma',
    link: 'https://www.figma.com/',
  },
  {
    name: 'Cypress',
    class: 'i-logos:cypress-icon',
    link: 'https://www.cypress.io/',
  },
];

const socialIcons = [
  {
    name: 'Github',
    class: 'i-logos:github-icon dark:invert',
    link: 'https://github.com/praburangki',
  },
  {
    name: 'LinkedIn',
    class: 'i-logos:linkedin-icon',
    link: 'https://www.linkedin.com/in/praburangki/',
  },
  {
    name: 'Twitter',
    class: 'i-logos:twitter',
    link: 'https://twitter.com/praburangki',
  },
];
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
        <h1 class="*headline max-w-2xl text-4xl xl:col-auto lg:col-span-2 sm:text-6xl">
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
          class="mt-10 h-[320px] max-w-full rounded-2xl object-cover shadow-lg xl:(row-span-2 row-end-2 mt-36) <sm:mx-auto lg:(ml-20 mt-0 max-w-none) sm:(mt-16 h-[400px])"
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
    class="mt-10 container"
  >
    <h2 class="*headline mt-24 text-center text-xl lg:text-3xl md:text-2xl">
      My productive tools
    </h2>

    <div class="mx-auto mt-8 max-w-5xl flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
      <a
        v-for="icon in toolIcons"
        :key="icon.link"
        :href="icon.link"
        class="group"
        :title="icon.name"
      >
        <i
          :class="icon.class"
          class="drop-shadow-icon group-hover-drop-shadow-icon_hover dark:drop-shadow-icon_dark dark:group-hover-drop-shadow-icon_dark_hover h-12 w-12 transition-filter md:(h-16 w-16)"
        />
      </a>
    </div>
    <!--  -->
  </section>

  <footer class="mt-8 py-8 md:mt-20">
    <div class="container">
      <div class="flex items-center justify-between border-t-1 border-slate-200 pt-5 dark:border-slate-700">
        <span>&copy; {{ new Date().getFullYear() }} praburangki</span>

        <ul class="flex gap-6">
          <li
            v-for="icon in socialIcons"
            :key="icon.link"
            class="text-2xl opacity-70 transition-opacity hover:opacity-100"
          >
            <a
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
              :title="icon.name"
            >
              <i :class="icon.class" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
