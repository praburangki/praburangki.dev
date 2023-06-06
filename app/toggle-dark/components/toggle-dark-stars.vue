<script lang="ts" setup>
defineProps({
  d: String,
});
</script>

<template>
  <g>
    <path
      fill="#fff"
      fill-rule="evenodd"
      :d="d"
      clip-rule="evenodd"
    />
  </g>
</template>
