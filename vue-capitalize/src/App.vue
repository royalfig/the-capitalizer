<template>
  <div>
    <app-header></app-header>
    <app-style-selector v-on:selectedStyle="styleValue"></app-style-selector>
    <app-user-input ref="titleText" :styleValue="this.chosenStyle"></app-user-input>
    <app-style-buttons v-on:clear="clearField" v-on:copy="copyField"></app-style-buttons>
    <app-style-rules></app-style-rules>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import styleSelector from "./components/styleSelector.vue";
import userInput from "./components/userInput.vue";
import styleButtons from "./components/styleButtons.vue";
import styleRules from "./components/styleRules.vue";

export default {
  data() {
    return {
      chosenStyle: { style: "AP" }
    };
  },
  components: {
    "app-header": Header,
    "app-style-selector": styleSelector,
    "app-user-input": userInput,
    "app-style-buttons": styleButtons,
    "app-style-rules": styleRules
  },
  methods: {
    clearField() {
      this.$refs.titleText.clearIt();
    },
    copyField() {
      this.$refs.titleText.copyIt();
    },
    styleValue(chosenStyle) {
      this.chosenStyle = chosenStyle;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 1em 2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  background: #fffefe;
}
.changed {
  position: relative;
  border-bottom: 1px solid #fe4949;
}
</style>
