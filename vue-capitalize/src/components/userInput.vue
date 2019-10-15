<template>
  <section class="container flex-row">
    <div class="input-container flex-col">
      <header class="input-header">Enter your title(s)</header>
      <textarea id="title-text" name="title" class="input-titles" autofocus v-model="message"></textarea>
    </div>

    <div class="result-container flex-col">
      <header class="input-header">Titles Capitalized</header>
      <p class="result-title m-0" v-for="(title,index) in capitalize" :key="index">{{ title }}</p>
    </div>
  </section>
</template>

<script>
import { prep, coordConj, articles, spec } from "../capitalize/lists.js";
import cap from "../capitalize/capitalize.js";

export default {
  data() {
    return {
      message: "",
      isCapped: false,
      titleNum: 0
    };
  },
  computed: {
    capitalize: function() {
      if (this.message !== "") {
        // Split titles into individuals
        const originalTitles = this.message
          .trim()
          .toLowerCase()
          .split(/\n/);

        // Get number of titles
        this.titleNum = originalTitles.length;
        const titleArray = [];

        originalTitles.forEach(element => {
          titleArray.push(
            element.replace(/\s\w|^\w/g, letter => {
              return letter.toUpperCase();
            })
          );
        });

        const wordArray = [];

        titleArray.forEach(element => {
          wordArray.push(element.split(" "));
        });

        // Lowercase prepositions and articles
        for (let title in wordArray) {
          for (let word in wordArray[title]) {
            if (
              [...prep, ...articles].includes(
                wordArray[title][word].toLowerCase()
              )
            ) {
              wordArray[title][word] = wordArray[title][word].toLowerCase();
            }
          }
        }

        const finalTitle = [];

        for (let word in wordArray) {
          finalTitle.push(
            wordArray[word]
              .join(" ")
              .replace(/\w/, firstLetter => firstLetter.toUpperCase())
          );
        }
        this.isCapped = true;
        return finalTitle;
      } else {
        this.isCapped = false;
        this.titleNum = 0;
      }
    }
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.container {
  position: relative;
  margin-bottom: 2em;

  &:after {
    height: 3px;
    width: 100%;
    position: absolute;
    background: linear-gradient(to right, cap-red, cap-green);
    left: 0;
    bottom: 0;
    content: '';
  }
}

.input-container, .result-container {
  width: 50%;
  padding: 1em;
  color: #F9F7F7;
  border-left: 1px solid cap-border;
  border-right: 1px solid cap-border;
  border-collapse: collapse;
  min-height: 400px;
  font-weight: 400;
}

.input-container {
  background-color: #3D3D3D;
}

.result-container {
  background-color: #313030;
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

  &:focus {
    outline: none;
    border-bottom: 3px dotted cap-border;
  }
}

.input-titles, .result-title {
  border: none;
  margin: 0;
}
</style>