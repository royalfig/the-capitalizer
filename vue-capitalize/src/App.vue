<template>
  <div>
    <app-header></app-header>
    <app-user-input></app-user-input>
    <app-style-rules></app-style-rules>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import userInput from "./components/userInput.vue";
import styleRules from "./components/styleRules.vue";

export default {
  components: {
    "app-header": Header,
    "app-user-input": userInput,
    "app-style-rules": styleRules
  }
};
</script>

<style lang="stylus"></style>
