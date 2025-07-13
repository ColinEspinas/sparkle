<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full">
    <div
      class="absolute inset-0 h-full w-full -z-50 bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div class="absolute inset-0 h-full w-full -z-40 bg-transparent bg-radial-[circle_at_50%_300%] from-accent to-transparent to-80%" />
    <main>
      <slot />
    </main>
  </div>
</template>
