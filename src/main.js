import { createApp } from "vue";
import App from "./App.vue";
import { registerSW } from "virtual:pwa-register";

if (import.meta.env.PROD) {
  registerSW({ immediate: true });
}

createApp(App).mount("#app");
