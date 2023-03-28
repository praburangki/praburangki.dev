<script lang="ts" setup>

</script>

<template>
  <button role="switch" class="relative rounded-3 block w-10 h-[22px] border border-$c-border bg-$c-mute transition-border-color-250 hover:(border-$c-gray)">
    <span class="app-switch__check absolute top-[1px] left-[1px] w-[18px] h-[18px] rounded-full bg-$c-neutral-inverse transition-transform-250 shadow-1">
      <span class="relative block w-[18px] h-[18px] rounded-full overflow-hidden">
        <slot />
      </span>
    </span>
  </button>
</template>
