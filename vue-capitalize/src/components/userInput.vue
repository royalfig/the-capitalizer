<template>
  <section class="container flex-row">
    <div class="style-choice-container flex-row flex-100">
      <div class="style-choices flex-row">
        <p class="style-choice-instruction m-0">Choose Style:</p>
        <div class="style-button-container" v-for="style in styles" :key="style.abb">
          <input
            v-model="picked"
            type="radio"
            name="style"
            class="style-select-button"
            :value="style.abb"
            :id="style.abb"
            required
            :aria-label="style.name"
          />

          <label class="style-select-label" :for="style.abb">{{ style.abb }}</label>
        </div>
      </div>
      <div class="style-fullname">
        <a :href="anchorTag">{{ styleName }}</a>
      </div>
    </div>

    <div class="input-container">
      <textarea
        id="title-text"
        name="title"
        class="input-titles"
        placeholder="Enter Title(s)"
        autofocus
        v-model="message"
      ></textarea>
    </div>

    <div class="result-container">
      <div class="output-text" :class="{capped: isCapped}">
        <p class="result-title m-0" v-for="(title,index) in capitalize" :key="index">{{ title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { prep, coordConj, articles, spec } from "../capitalize/lists.js";
import cap from "../capitalize/capitalize.js";

export default {
  data() {
    return {
      styles: [
        {
          abb: "AP",
          name: "Associated Press"
        },
        {
          abb: "APA",
          name: "American Psychological Association"
        },
        {
          abb: "CMS",
          name: "Chicago Manual of Style"
        },
        {
          abb: "MLA",
          name: "Modern Language Association"
        },
        {
          abb: "NYT",
          name: "New York Times"
        },
        {
          abb: "WP",
          name: "Wikipedia"
        }
      ],
      picked: "AP",
      message: "",
      isCapped: false,
      titleNum: 0
    };
  },
  computed: {
    styleName: function() {
      for (let style of this.styles) {
        if (style.abb === this.picked) {
          return style.name;
        }
      }
    },
    anchorTag: function() {
      return "#" + this.picked.toLowerCase();
    },
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
.style-choice-container, .style-choices {
  // justify-content: space-around;
  align-items: center;
}

.style-choices {
}

.style-button-container {
  margin: 0 5px;
}

.style-select-button {
  margin: 0 5px;

  &:hover {
    cursor: pointer;
  }
}

.input-container, .result-container {
  width: calc(50% - 2em);
  padding: 1em;
  margin: 1em;
  background: #fff;
  border-radius: cap-border-radius;
  border: 1px solid #000000;
  min-height: 300px;
}

.input-titles {
  width: 100%;
  height: 100%;
  line-height: 1.5;
  resize: none;
}

.input-titles, .result-title {
  border: none;
  margin: 0;
  background: #ffffff;
  border-radius: cap-border-radius;
}
</style>