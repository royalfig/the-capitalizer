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

<style lang="stylus"></style>
