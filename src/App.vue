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

  Color tokens: a generated light/dark pair, seeded from the app's
  original brand red (--color-primary). Switches with the OS via
  prefers-color-scheme; color-scheme below lets the browser also theme
  its own default UI (scrollbars, form controls) to match.
*/
:root {
  color-scheme: light dark;

  --color-primary: #af2d3a;
  --color-primary-contrast: #fff;
  --color-on-primary: #fff1ef;
  --color-on-primary-contrast: #000;
  --color-primary-container: #ffcdcb;
  --color-primary-container-contrast: #000;
  --color-on-primary-container: #180000;
  --color-on-primary-container-contrast: #fff;
  --color-secondary: #005462;
  --color-secondary-contrast: #fff;
  --color-on-secondary: #84f1ff;
  --color-on-secondary-contrast: #000;
  --color-secondary-container: #bfe6ee;
  --color-secondary-container-contrast: #000;
  --color-on-secondary-container: #00090e;
  --color-on-secondary-container-contrast: #fff;
  --color-tertiary: #8d6165;
  --color-tertiary-contrast: #fff;
  --color-on-tertiary: #fff0f2;
  --color-on-tertiary-contrast: #000;
  --color-tertiary-container: #edd8da;
  --color-tertiary-container-contrast: #000;
  --color-on-tertiary-container: #110103;
  --color-on-tertiary-container-contrast: #fff;
  --color-surface: #fcfcfc;
  --color-surface-contrast: #000;
  --color-on-surface: #211b1b;
  --color-on-surface-contrast: #fff;
  --color-on-surface-variant: #6b6463;
  --color-on-surface-variant-contrast: #fff;
  --color-container: #f0f0f0;
  --color-container-contrast: #000;
  --color-container-sunken: #e2e2e2;
  --color-container-sunken-contrast: #000;
  --color-container-overlay: #e9e9e9;
  --color-container-overlay-contrast: #000;
  --color-outline: #959191;
  --color-outline-contrast: #000;
  --color-outline-variant: #d3cfcf;
  --color-outline-variant-contrast: #000;
  --color-inverse-surface: #211b1b;
  --color-inverse-surface-contrast: #fff;
  --color-on-inverse-surface: #fffafc;
  --color-on-inverse-surface-contrast: #000;
  --color-error: #b14f46;
  --color-error-contrast: #fff;
  --color-on-error: #fff1ed;
  --color-on-error-contrast: #000;
  --color-error-container: #ffd2cc;
  --color-error-container-contrast: #000;
  --color-on-error-container: #190000;
  --color-on-error-container-contrast: #fff;
  --color-error-text: #b14f46;
  --color-error-text-contrast: #fff;
  --color-success: #199e6e;
  --color-success-contrast: #000;
  --color-on-success: #000a02;
  --color-on-success-contrast: #fff;
  --color-success-container: #c0e9d4;
  --color-success-container-contrast: #000;
  --color-on-success-container: #000a02;
  --color-on-success-container-contrast: #fff;
  --color-success-text: #008557;
  --color-success-text-contrast: #fff;
  --color-warning: #d2a23b;
  --color-warning-contrast: #000;
  --color-on-warning: #0d0400;
  --color-on-warning-contrast: #fff;
  --color-warning-container: #efdcb8;
  --color-warning-container-contrast: #000;
  --color-on-warning-container: #0d0400;
  --color-on-warning-container-contrast: #fff;
  --color-warning-text: #996b00;
  --color-warning-text-contrast: #fff;
  --color-primary-hover: #b63d48;
  --color-primary-hover-contrast: #fff;
  --color-primary-pressed: #b9454f;
  --color-primary-pressed-contrast: #fff;
  --color-on-disabled: #868686;
  --color-on-disabled-contrast: #000;
  --color-disabled-container: #e8e8e8;
  --color-disabled-container-contrast: #000;
  --color-scrim: #000;
  --color-scrim-contrast: #fff;
  --color-shadow: #000;
  --color-shadow-contrast: #fff;
  --light-angle: 0deg;
  --shadow-strength: 1;
  --shadow-color: #50494a;
  --highlight-color: #fff;
  --shadow-elevation-xs: calc(sin(var(--light-angle)) * -0.50px) calc(cos(var(--light-angle)) * 0.50px) 0.8px 0px rgb(from var(--shadow-color) r g b / calc(0.1 * var(--shadow-strength)));
  --shadow-elevation-low: inset 0 1px 0 rgb(from var(--highlight-color) r g b / calc(0.5 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -0.50px) calc(cos(var(--light-angle)) * 0.50px) 0.6px 0px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -1.00px) calc(cos(var(--light-angle)) * 1.00px) 1.3px -0.6px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -2.30px) calc(cos(var(--light-angle)) * 2.30px) 2.7px -1.3px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength)));
  --shadow-elevation-medium: inset 0 1px 0 rgb(from var(--highlight-color) r g b / calc(0.5 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -0.50px) calc(cos(var(--light-angle)) * 0.50px) 0.6px 0px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -1.80px) calc(cos(var(--light-angle)) * 1.80px) 2.1px -0.5px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -4.50px) calc(cos(var(--light-angle)) * 4.50px) 5.2px -1px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -9.00px) calc(cos(var(--light-angle)) * 9.00px) 10.5px -1.6px rgb(from var(--shadow-color) r g b / calc(0.12 * var(--shadow-strength)));
  --shadow-elevation-high: inset 0 1px 0 rgb(from var(--highlight-color) r g b / calc(0.5 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -0.50px) calc(cos(var(--light-angle)) * 0.50px) 0.6px 0px rgb(from var(--shadow-color) r g b / calc(0.11 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -3.00px) calc(cos(var(--light-angle)) * 3.00px) 3.5px -0.3px rgb(from var(--shadow-color) r g b / calc(0.11 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -6.00px) calc(cos(var(--light-angle)) * 6.00px) 6.8px -0.6px rgb(from var(--shadow-color) r g b / calc(0.11 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -10.50px) calc(cos(var(--light-angle)) * 10.50px) 12px -1px rgb(from var(--shadow-color) r g b / calc(0.11 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -17.00px) calc(cos(var(--light-angle)) * 17.00px) 19px -1.4px rgb(from var(--shadow-color) r g b / calc(0.11 * var(--shadow-strength))),
    calc(sin(var(--light-angle)) * -26.00px) calc(cos(var(--light-angle)) * 26.00px) 29px -1.9px rgb(from var(--shadow-color) r g b / calc(0.11 * var(--shadow-strength)));

  --cap-border-radius: 6px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #f16b6f;
    --color-primary-contrast: #000;
    --color-on-primary: #180000;
    --color-on-primary-contrast: #fff;
    --color-primary-container: #4a1e1f;
    --color-primary-container-contrast: #fff;
    --color-on-primary-container: #ffcbc9;
    --color-on-primary-container-contrast: #000;
    --color-secondary: #61d0e3;
    --color-secondary-contrast: #000;
    --color-on-secondary: #00090e;
    --color-on-secondary-contrast: #fff;
    --color-secondary-container: #10333a;
    --color-secondary-container-contrast: #fff;
    --color-on-secondary-container: #a5ecf9;
    --color-on-secondary-container-contrast: #000;
    --color-tertiary: #b38488;
    --color-tertiary-contrast: #000;
    --color-on-tertiary: #160002;
    --color-on-tertiary-contrast: #fff;
    --color-tertiary-container: #39292b;
    --color-tertiary-container-contrast: #fff;
    --color-on-tertiary-container: #f8d4d6;
    --color-on-tertiary-container-contrast: #000;
    --color-surface: #131313;
    --color-surface-contrast: #fff;
    --color-on-surface: #f5ecec;
    --color-on-surface-contrast: #000;
    --color-on-surface-variant: #978f8e;
    --color-on-surface-variant-contrast: #000;
    --color-container: #202020;
    --color-container-contrast: #fff;
    --color-container-sunken: #0b0b0b;
    --color-container-sunken-contrast: #fff;
    --color-container-overlay: #2a2a2a;
    --color-container-overlay-contrast: #fff;
    --color-outline: #837f7f;
    --color-outline-contrast: #000;
    --color-outline-variant: #3d3939;
    --color-outline-variant-contrast: #fff;
    --color-inverse-surface: #f2eded;
    --color-inverse-surface-contrast: #000;
    --color-on-inverse-surface: #161213;
    --color-on-inverse-surface-contrast: #fff;
    --color-error: #d67066;
    --color-error-contrast: #000;
    --color-on-error: #190000;
    --color-on-error-contrast: #fff;
    --color-error-container: #44231f;
    --color-error-container-contrast: #fff;
    --color-on-error-container: #ffccc4;
    --color-on-error-container-contrast: #000;
    --color-error-text: #d67066;
    --color-error-text-contrast: #000;
    --color-success: #4ec491;
    --color-success-contrast: #000;
    --color-on-success: #000a02;
    --color-on-success-contrast: #fff;
    --color-success-container: #113626;
    --color-success-container-contrast: #fff;
    --color-on-success-container: #a6f1cc;
    --color-on-success-container-contrast: #000;
    --color-success-text: #4ec491;
    --color-success-text-contrast: #000;
    --color-warning: #ffd673;
    --color-warning-contrast: #000;
    --color-on-warning: #0d0400;
    --color-on-warning-contrast: #fff;
    --color-warning-container: #3a2b0a;
    --color-warning-container-contrast: #fff;
    --color-on-warning-container: #fcd998;
    --color-on-warning-container-contrast: #000;
    --color-warning-text: #ffd673;
    --color-warning-text-contrast: #000;
    --color-primary-hover: #e06266;
    --color-primary-hover-contrast: #000;
    --color-primary-pressed: #d75e62;
    --color-primary-pressed-contrast: #000;
    --color-on-disabled: #555;
    --color-on-disabled-contrast: #fff;
    --color-disabled-container: #242424;
    --color-disabled-container-contrast: #fff;
    --color-scrim: #000;
    --color-scrim-contrast: #fff;
    --color-shadow: #000;
    --color-shadow-contrast: #fff;
    --shadow-color: #0e0c0c;
    --highlight-color: #ac9191;
  }
}

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  background: var(--color-surface);
  color: var(--color-on-surface);
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
  background: var(--color-surface);
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
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.toasted.custom-toast.outline.success {
  color: var(--color-success-text);
  border-color: var(--color-success-text);
}

.underline {
  height: 2px;
  width: 100%;
  background-color: var(--color-primary);
  margin: 2px auto;
}
</style>
