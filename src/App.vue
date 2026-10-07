<template>
  <div>
    <div class="app-container">
      <AppHeader></AppHeader>
      <AppStyleSelector @selected-style="styleValue"></AppStyleSelector>
      <AppUserInput ref="titleText" :style-value="chosenStyle"></AppUserInput>
      <AppStyleButtons @clear="clearField" @copy="copyField"></AppStyleButtons>
      <AppInstructions></AppInstructions>
      <AppStyleRules></AppStyleRules>
    </div>
    <AppFooter></AppFooter>
    <AppToastContainer></AppToastContainer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/Header.vue";
import AppStyleSelector from "./components/styleSelector.vue";
import AppUserInput from "./components/userInput.vue";
import AppStyleButtons from "./components/styleButtons.vue";
import AppInstructions from "./components/Instructions.vue";
import AppStyleRules from "./components/styleRules.vue";
import AppFooter from "./components/Footer.vue";
import AppToastContainer from "./components/ToastContainer.vue";

const chosenStyle = ref({ style: "AP" });
const titleText = ref(null);

function clearField() {
  titleText.value.clearIt();
}

function copyField() {
  titleText.value.copyIt();
}

function styleValue(newStyle) {
  chosenStyle.value = newStyle;
}
</script>

<style lang="stylus">
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 3.052em;
}

h2 {
  font-size: 2.441em;
}

h3 {
  font-size: 1.953em;
}

h4 {
  font-size: 1.563em;
}

h5 {
  font-size: 1.25em;
}

.app-container {
  background: #fffefe;
  padding: 1em;
}

@media (min-width: tablet) {
  html {
    font-size: 17px;
  }

  .app-container {
    padding: 1em 2em;
  }
}

@media (min-width: laptop) {
  html {
    font-size: 18px;
  }
}

@media (min-width: desktop) {
  html {
    font-size: 19px;
  }
}

.toasted.custom-toast.outline.info {
  color: cap-info;
  border-color: cap-info;
}

.toasted.custom-toast.outline.success {
  color: cap-success;
  border-color: cap-success;
}

.underline {
  height: 2px;
  width: 100%;
  background-color: cap-red;
  margin: 2px auto;
}
</style>
