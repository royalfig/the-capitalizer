<template>
  <section class="container flex-row">
    <div class="input-container flex-col">
      <header class="input-header">Enter One Title per Line</header>
      <textarea
        id="title-text"
        name="title"
        class="input-titles"
        v-bind:value="message"
        v-on:input="message = $event.target.value"
        autofocus
        aria-label="Title Input Field"
      ></textarea>
      <div class="input-container-bottom-border"></div>
    </div>

    <div class="result-container flex-col">
      <header class="input-header">
        Titles Capitalized
        <transition name="fade">
          <span class="title-num" v-if="titleNum > 0">{{ titleNum }}</span>
        </transition>
      </header>
      <div class="results">
        <p
          class="result-title m-0"
          v-for="(title, index) in capitalize"
          :key="index"
        >{{ title.capitalized }}</p>
      </div>
      <div class="input-container-bottom-border" :class="{'results-active': titleNum > 0}"></div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import titleCapitalizer from "../capitalize/capitalize.js";
import { useToast } from "../composables/useToast";

const props = defineProps(["styleValue"]);
const { show } = useToast();

const message = ref("");

const titleNum = computed(() => {
  if (message.value !== "") {
    const originalTitles = message.value
      .trim()
      .toLowerCase()
      .split(/\n/);

    return originalTitles.length;
  }
  return 0;
});

const capitalize = computed(() => {
  const style = props.styleValue.style;

  if (message.value !== "") {
    return titleCapitalizer(style, message.value);
  }
  return "";
});

function clearIt() {
  if (message.value === "") {
    show("Enter a title first", { type: "info" });
  } else {
    message.value = "";
    show("Titles Cleared", { type: "success" });
  }
}

function copyIt() {
  if (message.value === "") {
    show("Enter a title to copy", { type: "info" });
  } else {
    const textArea = document.createElement("textarea");
    const titleArray = [];
    capitalize.value.forEach(element => {
      titleArray.push(element.capitalized);
    });
    const copyTitle = titleArray.join("\n");
    textArea.value = copyTitle;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    const copied = titleNum.value > 1 ? " Titles Copied" : " Title Copied";
    show(titleNum.value + copied, { type: "success" });
  }
}

defineExpose({ clearIt, copyIt });
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.input-container, .result-container {
  padding: 1em;
  color: cap-white;
  border-left: 1px solid cap-border;
  border-right: 1px solid cap-border;
  border-collapse: collapse;
  height: 250px;
  font-weight: 400;
}

@media (min-width: tablet) {
  .container {
    flex-direction: row;
  }

  .input-container, .result-container {
    width: 50%;
    height: 400px;
  }
}

.input-container {
  background-color: cap-gray;
}

.input-container-bottom-border {
  width: 100%;
  height: 3px;
  background-color: cap-border;
  outline: none;
  transition: background-color 0.2s ease-out;
}

.input-titles:focus {
  outline: none;
}

.input-titles:focus + .input-container-bottom-border {
  background-color: cap-red;
  transition: all 0.2s ease-out;
}

.result-container {
  background-color: cap-darker-gray;
}

.results {
  flex: 1;
  overflow-y: auto;
}

.results-active {
  background-color: cap-green;
}

.input-header {
  margin-bottom: 0.5em;
  padding-bottom: 0.15em;
  border-bottom: 1px solid cap-border;
  font-weight: 600;
}

.input-titles {
  width: 100%;
  height: 100%;
  padding: 0;
  line-height: 1.6;
  color: cap-white;
  background-color: cap-gray;
  resize: none;
  caret-color: cap-red;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.input-titles, .result-title {
  border: none;
  margin: 0;
  font-size: 1.2em;
}

.input-titles, .results {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: cap-border;
  }

  &::-webkit-scrollbar-thumb {
    background: cap-white;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: cap-dark-gray;
  }
}

.title-num {
  margin-left: 1px;
  background: cap-white;
  color: cap-dark-gray;
  padding: 1px 3px;
  vertical-align: text-top;
  border-radius: 4px;
  font-size: 0.8em;
}

.fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>