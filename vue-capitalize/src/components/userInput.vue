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

<script>
import titleCapitalizer from "../capitalize/capitalize.js";

export default {
  data() {
    return {
      message: ""
    };
  },
  computed: {
    titleNum() {
      if (this.message !== "") {
        // Split titles into individuals
        const originalTitles = this.message
          .trim()
          .toLowerCase()
          .split(/\n/);

        return originalTitles.length;
      } else {
        return 0;
      }
    },
    capitalize() {
      const style = this.styleValue.style;

      if (this.message !== "") {
        const capitalizedTitle = titleCapitalizer(style, this.message);
        return capitalizedTitle;
      } else {
        return "";
      }
    }
  },
  methods: {
    clearIt() {
      if (this.message === "") {
        this.$toasted.show("Enter a title first", { type: "info" });
      } else {
        this.message = "";
        this.$toasted.show("✅ Titles Cleared", { type: "success" });
      }
    },
    copyIt() {
      if (this.message === "") {
        this.$toasted.show("Enter a title to copy", { type: "info" });
      } else {
        const textArea = document.createElement("textarea");
        const titleArray = [];
        this.capitalize.forEach(element => {
          titleArray.push(element.capitalized);
        });
        const copyTitle = titleArray.join("\n");
        textArea.value = copyTitle;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        const copied = this.titleNum > 1 ? " Titles Copied" : " Title Copied";
        this.$toasted.show(this.titleNum + copied, { type: "success" });
      }
    }
  },
  props: ["styleValue"]
};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.input-container, .result-container {
  // width: 50%;
  padding: 1em;
  color: #F9F7F7;
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
  background-color: #3D3D3D;
}

.input-container-bottom-border {
  width: 100%;
  height: 3px;
  background-color: #eee;
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
  background-color: #313030;
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
  color: #F9F7F7;
  background-color: #3D3D3D;
  resize: none;
  caret-color: cap-red;
}

.input-titles, .result-title {
  border: none;
  margin: 0;
}

.title-num {
  margin-left: 1px;
  background: #F9F7F7;
  color: #333;
  padding: 1px 3px;
  vertical-align: text-top;
  border-radius: 4px;
  font-size: 0.8em;
}

.fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  transform: translateY(0);
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  transform: translateY(10px);
  opacity: 0;
}
</style>