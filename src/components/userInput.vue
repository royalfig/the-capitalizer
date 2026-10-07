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

<style scoped>
/*
  Specificity note: this element's class list is "container flex-row",
  both shared global utility classes (see App.vue). This rule needs to
  win over the global .flex-row's `flex-flow: row wrap` on small screens,
  so it targets both classes together (specificity 0,2,0) rather than
  relying on source order against the global stylesheet.
*/
.container.flex-row {
  display: flex;
  flex-direction: column;
}

.input-container, .result-container {
  padding: 1em;
  color: var(--color-on-surface);
  border-left: 1px solid var(--color-outline-variant);
  border-right: 1px solid var(--color-outline-variant);
  border-collapse: collapse;
  height: 250px;
  font-weight: 400;
}

@media (min-width: 768px) {
  .container.flex-row {
    flex-direction: row;
  }

  .input-container, .result-container {
    width: 50%;
    height: 400px;
  }
}

.input-container {
  background-color: var(--color-surface);
}

.input-container-bottom-border {
  width: 100%;
  height: 3px;
  background-color: var(--color-outline-variant);
  outline: none;
  transition: background-color 0.2s ease-out;
}

.input-titles:focus {
  outline: none;
}

.input-titles:focus + .input-container-bottom-border {
  background-color: var(--color-primary);
  transition: all 0.2s ease-out;
}

.result-container {
  background-color: var(--color-surface);
}

.results {
  flex: 1;
  overflow-y: auto;
}

.results-active {
  background-color: var(--color-success);
}

.input-header {
  margin-bottom: 0.5em;
  padding-bottom: 0.15em;
  border-bottom: 1px solid var(--color-outline-variant);
  font-weight: 600;
}

.input-titles {
  width: 100%;
  height: 100%;
  padding: 0;
  line-height: 1.6;
  color: var(--color-on-surface);
  background-color: var(--color-surface);
  resize: none;
  caret-color: var(--color-primary);
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Adwaita Sans, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
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
    background: var(--color-outline);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-on-surface-variant);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-on-surface);
  }
}

.title-num {
  margin-left: 1px;
  background: var(--color-container-overlay);
  color: var(--color-on-surface);
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
