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
  metaInfo: {
    title: "The Capitalizer",
    meta: [
      {
        name: "description",
        content:
          "Turn your text into proper title case according to the style rules"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@thecapitalizer" },
      { name: "twitter:title", content: "The Capitalizer" },
      {
        name: "twitter:description",
        content:
          "Turn your text into proper title case according to the style rules"
      },
      { name: "twitter:creator", content: "@TheRoyalFig" },
      { name: "twitter:image:src", content: "img" },
      { name: "og:title", content: "The Capitalizer" },
      { name: "og:type", content: "article" },
      { name: "og:url", content: "https://thecapitalizer.com" },
      { name: "og:image", content: "img" },
      {
        name: "og:description",
        content:
          "Turn your text into proper title case according to the style rules"
      }
    ]
  },
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

<style lang="stylus">
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

@media (min-width: tablet) {
  html {
    font-size: 17px;
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

body {
  margin: 0;
  padding: 1em 2em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  background: #fffefe;
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

.changed {
  position: relative;
  border-bottom: 1px solid #fe4949;
}
</style>
