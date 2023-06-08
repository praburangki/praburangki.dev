<script lang="ts" setup>
const colorMode = useColorMode();

const toggleRef = ref<HTMLElement>();

function onClickToggle(event: MouseEvent) {
  // @ts-expect-error: Transition API
  if (!document.startViewTransition) {
    toggleColorMode();
    return;
  }

  let x: number;
  let y: number;

  if (event.detail === 0) {
    const rect = toggleRef.value!.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  } else {
    x = event.clientX;
    y = event.clientY;
  }
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  // @ts-expect-error: Transition API
  const viewTransition = document.startViewTransition(() => {
    toggleColorMode();
  });

  viewTransition.ready.then(() => {
    const isDarkMode = colorMode.value === 'dark';
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
    document.documentElement.animate(
      {
        clipPath: isDarkMode ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDarkMode ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    );
  });
}

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <button
    class="btn-toggle relative isolate z-10 aspect-ratio-8/3 w-$width transform-gpu overflow-hidden border-0 rounded-full outline-transparent duration-500 ease-$slide-ease transition-property-[background] will-change-transform after:(absolute inset-0 rounded-full content-empty)"
    :aria-pressed="colorMode.value === 'dark'"
    title="Toggle Dark Mode"
    @click="onClickToggle"
  >
    <span class="btn-toggle__content absolute inset-0 block overflow-hidden rounded-full">
      <ToggleDarkBackdrop>
        <g class="clouds">
          <path
            fill="#D9D9D9"
            d="M335 147.5c0 27.89-22.61 50.5-50.5 50.5a50.78 50.78 0 0 1-9.29-.853c-2.478 12.606-10.595 23.188-21.615 29.011C245.699 243.749 228.03 256 207.5 256a50.433 50.433 0 0 1-16.034-2.599A41.811 41.811 0 0 1 166 262a41.798 41.798 0 0 1-22.893-6.782A42.21 42.21 0 0 1 135 256a41.82 41.82 0 0 1-19.115-4.592A41.84 41.84 0 0 1 88 262c-1.827 0-3.626-.117-5.391-.343C74.911 270.448 63.604 276 51 276c-23.196 0-42-18.804-42-42s18.804-42 42-42c1.827 0 3.626.117 5.391.343C64.089 183.552 75.396 178 88 178a41.819 41.819 0 0 1 19.115 4.592C114.532 176.002 124.298 172 135 172a41.798 41.798 0 0 1 22.893 6.782 42.066 42.066 0 0 1 7.239-.773C174.137 164.159 189.749 155 207.5 155c.601 0 1.199.01 1.794.031A41.813 41.813 0 0 1 234 147h.002c.269-27.66 22.774-50 50.498-50 27.89 0 50.5 22.61 50.5 50.5Z"
          />
        </g>
      </ToggleDarkBackdrop>

      <ToggleDarkBackdrop>
        <g class="clouds">
          <path
            fill="#fff"
            d="M328 167.5c0 15.214-7.994 28.56-20.01 36.068.007.31.01.621.01.932 0 23.472-19.028 42.5-42.5 42.5-3.789 0-7.461-.496-10.957-1.426C249.671 263.676 233.141 277 213.5 277a42.77 42.77 0 0 1-7.702-.696C198.089 284.141 187.362 289 175.5 289a42.338 42.338 0 0 1-27.864-10.408A42.411 42.411 0 0 1 133.5 281c-4.36 0-8.566-.656-12.526-1.876C113.252 287.066 102.452 292 90.5 292a42.388 42.388 0 0 1-15.8-3.034A42.316 42.316 0 0 1 48.5 298C25.028 298 6 278.972 6 255.5S25.028 213 48.5 213a42.388 42.388 0 0 1 15.8 3.034A42.316 42.316 0 0 1 90.5 207c4.36 0 8.566.656 12.526 1.876C110.748 200.934 121.548 196 133.5 196a42.338 42.338 0 0 1 27.864 10.408A42.411 42.411 0 0 1 175.5 204c2.63 0 5.204.239 7.702.696C190.911 196.859 201.638 192 213.5 192c3.789 0 7.461.496 10.957 1.426 2.824-10.491 9.562-19.377 18.553-24.994-.007-.31-.01-.621-.01-.932 0-23.472 19.028-42.5 42.5-42.5s42.5 19.028 42.5 42.5Z"
          />
        </g>
      </ToggleDarkBackdrop>

      <span
        ref="toggleRef"
        class="toggle__indicator-wrapper absolute inset-0 duration-500 ease-$slide-ease transition-property-[translate]"
      >
        <span class="grid aspect-ratio-1 h-full place-items-center rounded-0 p-[3%]">
          <span class="toggle__star relative aspect-ratio-1 h-full rounded-half duration-500 ease-$slide-ease transition-property-[translate] after:(absolute inset-0 block rounded-half blur-4 content-empty -z-1) before:(absolute left-[50%] top-[50%] aspect-ratio-1 rounded-half duration-500 ease-$slide-ease transition-property-[translate] content-empty -z-1)">
            <span class="sun absolute inset-0 overflow-hidden rounded-half">
              <span class="moon absolute inset-[-1%] rounded-half duration-500 ease-in-out transition-property-[translate]">
                <span class="moon__crater absolute aspect-ratio-1 rounded-half" />
                <span class="moon__crater absolute aspect-ratio-1 rounded-half" />
                <span class="moon__crater absolute aspect-ratio-1 rounded-half" />
              </span>
            </span>
          </span>
        </span>
      </span>

      <ToggleDarkBackdrop>
        <g>
          <g class="stars">
            <ToggleDarkStars d="M61 11.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.749 3.749 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.749 3.749 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.749 3.749 0 0 0 2.576-2.576l.813-2.846A.75.75 0 0 1 61 11.5Z" />
            <ToggleDarkStars d="M62.5 45.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z" />
            <ToggleDarkStars d="M32 31.188a.28.28 0 0 1 .27.204l.305 1.067a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.067-.305a.28.28 0 0 1 0-.54l1.067-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.203Z" />
            <ToggleDarkStars d="M41.5 74.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z" />
            <ToggleDarkStars d="M34 83.188a.28.28 0 0 1 .27.203l.305 1.068a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.068-.305a.28.28 0 0 1 0-.54l1.068-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.204Z" />
            <ToggleDarkStars d="M63 89.25a.375.375 0 0 1 .36.272l.407 1.423a1.874 1.874 0 0 0 1.288 1.288l1.423.406a.374.374 0 0 1 0 .722l-1.423.406a1.874 1.874 0 0 0-1.288 1.288l-.407 1.423a.374.374 0 0 1-.72 0l-.407-1.423a1.874 1.874 0 0 0-1.288-1.288l-1.423-.406a.374.374 0 0 1 0-.722l1.423-.406a1.874 1.874 0 0 0 1.288-1.288l.407-1.423a.376.376 0 0 1 .36-.272Z" />
            <ToggleDarkStars d="M110.5 53.156a.236.236 0 0 1 .225.17l.254.89a1.174 1.174 0 0 0 .805.805l.89.254a.23.23 0 0 1 .122.084.233.233 0 0 1-.122.366l-.89.254a1.167 1.167 0 0 0-.805.805l-.254.89a.232.232 0 0 1-.225.17.235.235 0 0 1-.225-.17l-.254-.89a1.174 1.174 0 0 0-.805-.805l-.89-.254a.23.23 0 0 1-.122-.084.233.233 0 0 1 .122-.366l.89-.254a1.167 1.167 0 0 0 .805-.805l.254-.89a.232.232 0 0 1 .225-.17Z" />
            <ToggleDarkStars d="M120 27.188a.279.279 0 0 1 .27.204l.305 1.067a1.41 1.41 0 0 0 .966.966l1.067.305a.283.283 0 0 1 .148.1.286.286 0 0 1 0 .34.283.283 0 0 1-.148.1l-1.067.305a1.403 1.403 0 0 0-.966.966l-.305 1.067a.279.279 0 0 1-.439.147.275.275 0 0 1-.101-.147l-.305-1.067a1.41 1.41 0 0 0-.966-.966l-1.068-.305a.284.284 0 0 1-.147-.1.286.286 0 0 1 0-.34.284.284 0 0 1 .147-.1l1.068-.305a1.405 1.405 0 0 0 .966-.966l.305-1.067a.279.279 0 0 1 .27-.204Z" />
            <ToggleDarkStars d="M155 28.5a.753.753 0 0 1 .721.544l.813 2.846a3.746 3.746 0 0 0 2.576 2.576l2.846.813a.747.747 0 0 1 .543.721.75.75 0 0 1-.543.721l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.747.747 0 0 1-.721.543.749.749 0 0 1-.721-.543l-.813-2.846a3.746 3.746 0 0 0-2.576-2.576l-2.846-.813a.747.747 0 0 1-.543-.721.75.75 0 0 1 .543-.721l2.846-.813a3.75 3.75 0 0 0 2.576-2.576l.813-2.846A.751.751 0 0 1 155 28.5Z" />
            <ToggleDarkStars d="M147 60.25a.377.377 0 0 1 .36.272l.407 1.423a1.883 1.883 0 0 0 1.288 1.288l1.423.407a.375.375 0 0 1 0 .72l-1.423.407a1.875 1.875 0 0 0-1.288 1.288l-.407 1.423a.371.371 0 0 1-.36.272.377.377 0 0 1-.36-.272l-.407-1.423a1.883 1.883 0 0 0-1.288-1.288l-1.423-.406a.375.375 0 0 1 0-.722l1.423-.406a1.875 1.875 0 0 0 1.288-1.288l.407-1.423a.372.372 0 0 1 .36-.272Z" />
            <ToggleDarkStars d="M125.5 76.344a.513.513 0 0 1 .496.374l.559 1.956a2.574 2.574 0 0 0 1.771 1.771l1.956.56a.514.514 0 0 1 .27.805.514.514 0 0 1-.27.186l-1.956.559a2.57 2.57 0 0 0-1.771 1.77l-.559 1.957a.514.514 0 0 1-.806.27.514.514 0 0 1-.186-.27l-.559-1.956a2.574 2.574 0 0 0-1.771-1.771l-1.956-.56a.514.514 0 0 1-.27-.805.514.514 0 0 1 .27-.186l1.956-.559a2.57 2.57 0 0 0 1.771-1.77l.559-1.957a.515.515 0 0 1 .496-.374Z" />
          </g>
        </g>
      </ToggleDarkBackdrop>
    </span>
  </button>
</template>

<style lang="postcss" scoped>
.btn-toggle {
  --slide-ease: cubic-bezier(.4,-0.3,.6,1.3);
  --speed: 0.5s;
  --width: 100px;

  &[aria-pressed=true] {
    --dark: 1;
  }

  -webkit-tap-highlight-color: transparent;

  background: hsl(
    calc(204 + (var(--dark, 0) * 25))
    calc((53 - (var(--dark, 0) * 28)) * 1%)
    calc((47 - (var(--dark, 0) * 31)) * 1%)
  );

  box-shadow:
    calc(var(--width) * 0) calc(var(--width) * 0.02) calc(var(--width) * 0.01) calc(var(--width) * -0.0025) hsl(210 10% 100% / 0.95),
    calc(var(--width) * 0) calc(var(--width) * -0.02) calc(var(--width) * 0.01) calc(var(--width) * -0.0025) hsl(210 10% 10% / 0.2),
    calc(var(--width) * 0) calc(var(--width) * 0.02) calc(var(--width) * 0.5) 0 hsl(210 10% 100% / 0.15);

  &:after {
    box-shadow:
      calc(var(--width) * 0) calc(var(--width) * -0.025) calc(var(--width) * 0.025) 0 hsl(210 10% 10% / 0.15) inset,
      calc(var(--width) * 0) calc(var(--width) * 0.025) calc(var(--width) * 0.025) 0 hsl(210 10% 10% / 0.65) inset;
  }

  &[aria-pressed=false] .toggle__backdrop:last-of-type {
    transition-timing-function: cubic-bezier(.2,-0.6,.7,1.6);
  }

  &[aria-pressed=false] .stars path {
    transition-delay: 0s;
  }
}

.btn-toggle__content {
  clip-path: inset( 0 0 0 0 round 100vh);
}

.toggle__backdrop:first-of-type .clouds path:first-of-type {
  fill: hsl(0 0% 100% / 0.5);
}

.toggle__indicator-wrapper {
  translate: calc(
    var(--dark, 0) * (var(--width) - (3 / 8 * var(--width)))
  ) 0;
}

.toggle__star {
  translate: calc((var(--dark, 0) * -10%) + 5%) 0;

  &:after {
    background: hsl(0 0% 0% / 0.5);
    translate: 2% 4%;
  }

  &:before {
    width: 356%;
    background:
      radial-gradient(hsl(0 0% 100% / 0.25) 40%, transparent 40.5%),
      radial-gradient(hsl(0 0% 100% / 0.25) 56%, transparent 56.5%)
      hsl(0 0% 100% / 0.25);
    translate: calc((50 - (var(--dark, 0) * 4)) * -1%) -50%;
  }
}

.sun {
  background: hsl(47, 91%, 58%);
  box-shadow:
    calc(var(--width) * 0.01) calc(var(--width) * 0.01) calc(var(--width) * 0.02) 0 hsl(210 10% 100% / 0.95) inset,
    calc(var(--width) * -0.01) calc(var(--width) * -0.01) calc(var(--width) * 0.02) 0 hsl(210 10% 20% / 0.5) inset;
}

.moon {
  background: hsl(212, 13%, 82%);
  translate: calc((100 - (var(--dark, 0) * 100)) * 1%) 0%;
  box-shadow:
    calc(var(--width) * 0.01) calc(var(--width) * 0.01) calc(var(--width) * 0.02) 0 hsl(210 10% 100% / 0.95) inset,
    calc(var(--width) * -0.01) calc(var(--width) * -0.01) calc(var(--width) * 0.02) 0 hsl(210 10% 10% / 0.95) inset;
}

.moon__crater {
  background: hsl(221, 16%, 68%);
  width: calc(var(--size, 10) * 1%);
  left: calc(var(--x) * 1%);
  top: calc(var(--y) * 1%);
  box-shadow:
    calc(var(--width) * 0.01) calc(var(--width) * 0.01) calc(var(--width) * 0.01) 0 hsl(210 10% 6% / 0.25) inset,
    0 calc(var(--width) * 0.005) calc(var(--width) * 0.01) 0 hsl(210 10% 100% / 0.25);
}

.moon__crater:nth-of-type(1) {
  --size: 18;
  --x: 40;
  --y: 15;
}
.moon__crater:nth-of-type(2) {
  --size: 20;
  --x: 65;
  --y: 58;
}
.moon__crater:nth-of-type(3) {
  --size: 34;
  --x: 18;
  --y: 40;
}

.stars path {
  transform-box: fill-box;
  transform-origin: 25% 50%;
  scale: calc(0.25 + (var(--dark, 0) * 0.75));
  transition: scale var(--speed) calc(var(--speed) * 0.5) var(--slide-ease);
}

.stars g {
  transform-box: fill-box;
  transform-origin: 50% 50%;
}
.stars g:nth-of-type(3) {
  animation: twinkle 4s -2s infinite;
}

.stars g:nth-of-type(11) {
  animation: twinkle 6s -2s infinite;
}

.stars g:nth-of-type(9) {
  animation: twinkle 4s -1s infinite;
}

@keyframes twinkle {
  0%, 40%, 60%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
}
</style>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 9999;
}
::view-transition-new(root) {
  z-index: 1;
}
.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 9999;
}
</style>
