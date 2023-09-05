<script lang="ts" setup>
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue';

import ToggleDarkBtn from './toggle-dark/toggle-dark-btn.vue';
import { navItems } from '../data/nav';

const currentTrigger = ref();

// Close the menu when a link is clicked
function onSelect() {
  currentTrigger.value = undefined;
}
</script>

<template>
  <NavigationMenuRoot
    v-model="currentTrigger"
    class="relative hidden md:flex"
  >
    <NavigationMenuList class="flex items-center pr-3">
      <NavigationMenuItem
        v-for="navItem in navItems"
        :key="navItem.text"
        :value="navItem.text"
      >
        <NavigationMenuLink
          v-if="navItem.link"
          as-child
        >
          <NuxtLink
            :to="navItem.link"
            active-class="text-$pr-c-brand-1"
            class="flex items-center px-3 text-size-sm font-500 leading-$pr-nav-height transition-colors-280 hover:text-$pr-c-brand-1"
          >
            {{ navItem.text }}
          </NuxtLink>
        </NavigationMenuLink>

        <NavigationMenuTrigger
          v-else
          class="group flex items-center px-3 text-size-sm font-500 leading-$pr-nav-height transition-colors-280 hover:text-$pr-c-brand-1"
        >
          {{ navItem.text }}

          <i class="i-radix-icons:caret-down ml-1 transition-transform-280 group-data-[state=open]:-rotate-180" />
        </NavigationMenuTrigger>

        <NavigationMenuContent
          class="data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0 w-full sm:w-auto"
        >
          <ul class="p-3">
            <li
              v-for="item in navItem.items"
              :key="item.link"
            >
              <NavigationMenuLink
                as-child
                @select="onSelect"
              >
                <NuxtLink
                  :to="item.link"
                  class="block whitespace-nowrap rounded-[6px] px-3 text-size-sm font-500 leading-[32px] text-$pr-c-text-1 transition-colors-280 hover:(bg-$pr-c-default-soft text-$pr-c-brand-1)"
                >
                  {{ item.text }}
                </NuxtLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <ClientOnly>
        <ToggleDarkBtn class="ml-3" />
      </ClientOnly>

      <NavigationMenuIndicator
        class="top-[calc(100%-21px)] z-1 h-[10px] flex items-end justify-center overflow-hidden transition-all-280 data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in data-[state=hidden]:opacity-0"
      >
        <div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-$pr-c-bg-elv" />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="absolute left-0 top-[calc(100%-12px)] w-full flex perspective-[2000px] justify-center">
      <NavigationMenuViewport
        class="data-[state=open]:animate-scale-in shadow-3 data-[state=closed]:animate-scale-out relative h-$radix-navigation-menu-viewport-height w-$radix-navigation-menu-viewport-width origin-[top_center] overflow-hidden border border-$pr-c-divider rounded-3 bg-$pr-c-bg-elv duration-300 transition-property-[width,height]"
      />
    </div>
  </NavigationMenuRoot>
</template>
