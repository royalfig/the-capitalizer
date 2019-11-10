<template>
  <div>
    <div class="app-container">
      <app-header></app-header>
      <app-style-selector v-on:selectedStyle="styleValue"></app-style-selector>
      <app-user-input ref="titleText" :styleValue="this.chosenStyle"></app-user-input>
      <app-style-buttons v-on:clear="clearField" v-on:copy="copyField"></app-style-buttons>
      <app-style-rules></app-style-rules>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import styleSelector from "./components/styleSelector.vue";
import userInput from "./components/userInput.vue";
import styleButtons from "./components/styleButtons.vue";
import styleRules from "./components/styleRules.vue";
import Footer from "./components/Footer.vue";

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
    "app-style-rules": styleRules,
    "app-footer": Footer
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
  },
  mounted() {
    this.$ga.page("/");
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
