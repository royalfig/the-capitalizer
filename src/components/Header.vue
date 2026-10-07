<template>
  <header class="header flex-col">
    <div>
      <h1 class="title">The Capitalizer</h1>
      <div class="underline"></div>
      <div class="underline"></div>
      <div class="underline"></div>
    </div>
    <p class="subtitle">A Lightning-Fast Tool for Automatically Capitalizing Titles</p>
  </header>
</template>

<style scoped>
.header {
  padding: 0 1em 1em;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.title {
  margin: 0.15em auto;
  color: var(--color-on-surface);
  text-align: center;
  line-height: 1.2;
  font-weight: 900;
}

.subtitle {
  color: var(--color-on-surface-variant);
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
