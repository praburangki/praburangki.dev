<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'antialiased font-sans text-gray-700 dark:(text-gray-200 bg-black) bg-white [--scroll-mt:10rem] lg:[--scroll-mt:7rem]',
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
