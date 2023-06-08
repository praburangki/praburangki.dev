<script lang="ts" setup>

</script>

<template>
  <div class="absolute inset-0 mx-0 max-w-none overflow-hidden -z-10">
    <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
      <!-- <div class="[mask-image:radial-gradient(farthest-side_at_top,white,transparent)] absolute inset-0 from-[#36b49f] to-[#DBFF75] bg-gradient-to-r opacity-40 dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"> -->
      <div class="[mask-image:radial-gradient(farthest-side_at_top,white,transparent)] absolute inset-0 from-[#0ea5e9] to-[#f3f2f7] bg-gradient-to-r opacity-40 dark:(from-[#0ea5e9]/30 to-[#f3f2f7]/30 opacity-100)">
        <svg
          aria-hidden="true"
          class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
        >
          <defs>
            <pattern
              id="layout-grid-bg"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path
                d="M.5 56V.5H72"
                fill="none"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#layout-grid-bg)"
          />

          <svg
            x="-12"
            y="4"
            class="overflow-visible"
          >
            <path d="M288 168h73v57h-73zM144 56h73v57h-73zM504 168h73v57h-73zM720 336h73v57h-73z" />
          </svg>
        </svg>
      </div>

      <svg
        viewBox="0 0 1113 440"
        aria-hidden="true"
        class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
      >
        <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
      </svg>
    </div>

    <svg
      viewBox="0 0 1113 440"
      aria-hidden="true"
      class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
    >
      <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
    </svg>
  </div>
</template>
