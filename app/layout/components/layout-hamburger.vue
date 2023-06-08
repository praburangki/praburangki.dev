<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button
    aria-label="mobile navigation"
    :aria-expanded="active"
    class="group hamburger text-surface-invert dark:text-surface h-$nav-height flex items-center justify-center pa-2"
    :class="{ active }"
    @click="$emit('click')"
  >
    <span class="relative h-[14px] w-4 overflow-hidden">
      <span
        class="top absolute left-0 top-0 h-[2px] w-4 translate-x-0 bg-current"
        :class="{
          'vin:(top-[6px] [--un-translate-x:0] rotate-225) group-hover:bg-opacity-70': active,
          'group-hover:translate-x-1': !active,
        }"
      />
      <span
        class="middle absolute left-0 top-[6px] h-[2px] w-4 translate-x-2 bg-current"
        :class="{
          'vin:(top-[6px] translate-x-4) group-hover:bg-opacity-70': active,
          'group-hover:translate-x-0': !active,
        }"
      />
      <span
        class="bottom absolute left-0 top-3 h-[2px] w-4 translate-x-1 bg-current"
        :class="{
          'vin:([--un-translate-x:0px] top-[6px]) rotate-135 group-hover:bg-opacity-70': active,
          'group-hover:translate-x-2': !active,
        }"
      />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
  .hamburger {
    .top, .middle, .bottom {
      transition: top .25s, background-color .5s, transform .25s;
    }
  }
</style>
