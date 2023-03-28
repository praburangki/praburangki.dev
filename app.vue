<script lang="ts" setup>
const title = 'praburangki';

useHead({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title}` : title;
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-light-1 dark:(text-gray-200 bg-black) bg-white [--scroll-mt:10rem] lg:[--scroll-mt:7rem]',
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
