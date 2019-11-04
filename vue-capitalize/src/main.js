import Vue from "vue";
import App from "./App.vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  duration: 4000,
  theme: "outline"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
