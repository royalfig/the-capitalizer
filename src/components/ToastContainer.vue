<template>
  <div class="toast-stack">
    <transition-group name="toast">
      <p
        v-for="toast in toasts"
        :key="toast.id"
        class="toasted custom-toast outline"
        :class="toast.type"
      >{{ toast.message }}</p>
    </transition-group>
  </div>
</template>

<script setup>
import { useToast } from "../composables/useToast";

const { toasts } = useToast();
</script>

<style lang="stylus" scoped>
.toast-stack {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.toasted {
  margin: 4px 0;
  padding: 0.75em 1.25em;
  background: cap-white;
  border: 2px solid;
  border-radius: cap-border-radius;
  font-weight: 600;
}

.toast-enter-active, .toast-leave-active {
  transition: all 0.2s ease;
}

.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
