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

<style>
/*
  Global styles and design tokens. This is the app's only unscoped
  <style> block, so it's the one place the shared design tokens and
  layout utility classes (below) live -- real CSS custom properties
  cascade to every component automatically, unlike Stylus variables,
  which needed to be re-imported into each component's own compiled
  output.

  Breakpoints can't be custom properties: @media condition values don't
  support var(). tablet = 768px, laptop = 992px, desktop = 1200px.
*/
:root {
  --cap-red: #f16b6f;
  --cap-green: #aacd6e;
  --cap-border: #707070;
  --cap-white: #f9f7f7;
  --cap-gray: #3d3d3d;
  --cap-dark-gray: #333333;
  --cap-darker-gray: #313030;
  --cap-info: #433b60;
  --cap-success: #556b30;
  --cap-yellow: #f1aa6b;
  --cap-border-radius: 6px;
}

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

.m-0 {
  margin: 0;
}

.container {
  max-width: 1040px;
  margin: 0 auto;
}

.flex-row {
  display: flex;
  flex-flow: row wrap;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-100 {
  width: 100%;
}

.app-container {
  background: #fffefe;
  padding: 1em;
}

@media (min-width: 768px) {
  html {
    font-size: 17px;
  }

  .app-container {
    padding: 1em 2em;
  }
}

@media (min-width: 992px) {
  html {
    font-size: 18px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 19px;
  }
}

.toasted.custom-toast.outline.info {
  color: var(--cap-info);
  border-color: var(--cap-info);
}

.toasted.custom-toast.outline.success {
  color: var(--cap-success);
  border-color: var(--cap-success);
}

.underline {
  height: 2px;
  width: 100%;
  background-color: var(--cap-red);
  margin: 2px auto;
}
</style>
