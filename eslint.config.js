import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Single-word SFC filenames (Header.vue, Footer.vue, Instructions.vue)
      // are already registered under multi-word names (AppHeader, etc.)
      // wherever they're used, so the native-element collision this rule
      // guards against doesn't apply here.
      "vue/multi-word-component-names": "off"
    }
  }
];
