<template>
  <footer class="container footer flex-row">
    <button class="button" @click="$emit('clear')">Clear</button>
    <button class="button" @click="$emit('copy')">Copy</button>
  </footer>
</template>

<script setup>
defineEmits(["clear", "copy"]);
</script>

<style scoped>
.footer {
  margin-bottom: 2em;
  justify-content: space-between;
  background-color: var(--color-container-sunken);
  border: 1px solid var(--color-outline-variant);
  border-bottom-left-radius: var(--cap-border-radius);
  border-bottom-right-radius: var(--cap-border-radius);
}

.button {
  background: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: var(--color-on-surface-variant);
  transition: all 0.2s ease;

  &:first-child {
    border-right: 1px solid var(--color-outline-variant);

    &:hover, &:focus {
      box-shadow: inset -1px 0 2px rgba(0, 0, 0, 0.25);
      outline: none;
    }

    &:active {
      box-shadow: inset -2px 0 2px rgba(0, 0, 0, 0.35);
    }
  }

  &:last-child {
    border-left: 1px solid var(--color-outline-variant);

    &:hover, &:focus {
      box-shadow: inset 1px 0 2px rgba(0, 0, 0, 0.25);
      outline: none;
    }

    &:active {
      box-shadow: inset 2px 0 2px rgba(0, 0, 0, 0.35);
    }
  }
}
</style>