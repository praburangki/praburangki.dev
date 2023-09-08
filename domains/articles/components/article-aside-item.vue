<script lang="ts" setup>
defineProps<{
  tocLinks: any[];
  root?: boolean;
}>();

const emits = defineEmits<{
  (event: 'click'): void;
}>();

function onClick({ target: el }: Event) {
  const id = (el as HTMLAnchorElement).href!.split('#')[1];
  const heading = document.getElementById(decodeURIComponent(id));
  heading?.focus();
  emits('click');
}
</script>

<template>
  <ul
    :class="[
      root ? 'relative z-1' : 'pl-3',
    ]"
  >
    <li
      v-for="{ id, text, children } in tocLinks"
      :key="id"
    >
      <a
        class="outline-link block truncate font-medium leading-7 text-$pr-c-text-2 transition-color-280 hover:(text-$pr-c-text-1)"
        :href="`#${id}`"
        :title="text"
        @click="onClick"
      >
        {{ text }}
      </a>

      <template v-if="children?.length">
        <ArticleAsideItem :toc-links="children" />
      </template>
    </li>
  </ul>
</template>
