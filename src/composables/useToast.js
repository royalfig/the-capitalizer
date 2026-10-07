import { ref } from "vue";

const toasts = ref([]);
let nextId = 0;

function show(message, { type = "info", duration = 4000 } = {}) {
  const id = nextId++;
  toasts.value.push({ id, message, type });
  setTimeout(() => {
    toasts.value = toasts.value.filter(toast => toast.id !== id);
  }, duration);
}

export function useToast() {
  return { toasts, show };
}
