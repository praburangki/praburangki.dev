<template>
  <div class="not-prose flex flex-1 px-4 py-16 md:(grid place-items-center) lg:px-8 sm:(px-6 py-24)">
    <main class="mx-auto max-w-full sm:(flex gap-6)">
      <p class="text-4xl font-700 tracking-tight text-$pr-c-brand sm:text-5xl">
        404
      </p>

      <div class="content">
        <div class="text-section">
          <h1>
            Not Found
          </h1>
          <p>
            This is not the page you're looking for.
          </p>
        </div>

        <div class="button-section">
          <NuxtLink
            to="/"
          >
            Go back home
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>
