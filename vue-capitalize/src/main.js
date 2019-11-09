import Vue from "vue";
import App from "./App.vue";
import Toasted from "vue-toasted";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

Vue.use(Toasted, {
  duration: 4000,
  theme: "outline",
  className: "custom-toast"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
