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
    class="hamburger flex justify-center items-center w-12 h-$nav-height"
    :class="{ active }"
    @click="$emit('click')"
  >
    <span class="relative w-4 h-[14px] overflow-hidden">
      <span class="top" />
      <span class="middle" />
      <span class="bottom" />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
  .hamburger {
    .top, .middle, .bottom {
      @apply absolute w-4 bg-light-1;
      height: 2px;
      transition: top .25s, background-color .5s, transform .25s;
    }

    &:hover {
      .top {
        transform: translateX(4px);
      }

      .middle {
        transform: translateX(0px);
      }

      .bottom {
        transform: translateX(8px);
      }

      &.active {
        .top, .middle, .bottom {
          @apply bg-light-2;
          transition: top .25s, background-color .25s, transform .25s;
        }
      }
    }

    &.active {
      .top {
        top: 6px;
        transform: translateX(0) rotate(225deg);
      }

      .middle {
        top: 6px;
        transform: translateX(16px);
      }

      .bottom {
        top: 6px;
        transform: translateX(0) rotate(135deg);
      }
    }

    .top {
      top: 0;
      left: 0;
      transform: translateX(0);
    }

    .middle {
      top: 6px;
      left: 0;
      transform: translateX(8px);
    }

    .bottom {
      top: 12px;
      left: 0;
      transform: translateX(4px);
    }
  }
</style>
