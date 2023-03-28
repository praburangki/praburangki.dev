<script lang="ts" setup>
const title = 'praburangki';

useHead({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title}` : title;
  },
  bodyAttrs: {
    class: 'antialiased font-sans [--scroll-mt:10rem] lg:[--scroll-mt:7rem]',
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
