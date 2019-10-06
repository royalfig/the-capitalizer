<template>
  <div id="app">
    <app-header></app-header>
    <app-user-input></app-user-input>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import userInput from './components/userInput.vue'

export default {
  components: {
    'app-header': Header,
    'app-user-input': userInput
  }
}
</script>

<style lang="stylus">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
