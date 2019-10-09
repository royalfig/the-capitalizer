<template>
  <section class="container">
    <fieldset>
      <form class="cap-form">
        <div class="style-choice-container">
          <div class="style-choices">
            <div v-for="style in styles" :key="style.abb">
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
        </div>
        <textarea
          id="title-text"
          name="title"
          class="cap-input"
          placeholder="Enter Title(s)"
          autofocus
          v-model="message"
        ></textarea>
      </form>
      <p v-show="titleNum > 0">{{ titleNum }}</p>
    </fieldset>

    <div class="result-container">
      <div class="style-fullname">
        <a :href="anchorTag">{{ styleName }}</a>
      </div>
      <div class="output-text" :class="{capped: isCapped}">
        <p class="result-title" v-for="title in capitalize" :key="title">{{ title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
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
      for (name in this.styles) {
        if (this.styles[name].abb === this.picked) {
          return this.styles[name].name;
        }
      }
    },
    anchorTag: function() {
      return "#" + this.picked.toLowerCase();
    },
    capitalize: function() {
      if (this.message !== "") {
        const capArray = this.message.split(/\n/);
        this.titleNum = capArray.length;
        const returnArray = [];
        capArray.forEach(element => {
          returnArray.push(
            element.replace(/\s\w|^\w/g, letter => {
              return letter.toUpperCase();
            })
          );
        });
        this.isCapped = true;
        return returnArray;
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
section {
}

.style-choice-container {
  display: flex;
  width: 100%;
}

.style-fullname {
  flex: 1;
  text-align: right;
  margin-bottom: 0.25em;
}

.style-choices {
  display: flex;
  margin-bottom: 0.25em;
  align-items: center;
  justify-content: center;
}

.style-select-button {
  line-height: 1;
  margin: 0;
}

.style-select-label {
  font-weight: 600;
  margin-right: 0.5em;
  margin-left: 4px;
  line-height: 1;
}

.number-right {
  margin-left: auto;
  margin-right: 5px;
}

.cap-input-container {
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  border: none;
  box-shadow: none;
  font-size: 1em;
  line-height: 1.6;
  text-align: center;
}

textarea {
  box-shadow: none;
  border: 1px solid #fff;
  outline: none;
  -moz-appearance: none;
  user-select: none;
}

textarea:focus, [aria-label='results']:hover {
  border: 1px solid #ffbd00;
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

fieldset, .result-container {
  flex: 1;
}

.result-container {
  margin-left: 1em;
}

.output-text {
  border-radius: 5px;
  background: #ffffff;
  overflow: auto;
  resize: none;
  height: 250px;
  padding: 1em;
  border: 1px solid white;
  transition: all 0.2s ease-in;
}

.capped {
  border: 1px solid green;
}

.result-title {
  margin: 0;
}

.container {
  display: flex;
  font-size: 1em;
  line-height: 1.5;
}

.cap-text-header {
  display: flex;
  margin-bottom: 0.25em;
}

.cap-form {
  display: flex;
  flex-flow: column;
}

.cap-input {
  height: 250px;
  padding: 1em;
  position: relative;
  width: 100%;
  z-index: 0;
  border-radius: 5px;
  overflow: auto;
  resize: none;
  text-align: left;
  background: #ffffff;
  border: 1px solid #fff;
  margin: 0;
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input:focus {
  outline: none;
}

.cap-button {
  align-self: flex-end;
  padding: 3px 5px;
  display: inline-block;
  background: cap-yellow;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  color: #000;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
}

.cap-button:hover, .cap-button:focus {
  background: #ffbd00;
  border: none;
  color: #111111;
  outline: none;
  transition: 0.1s;
}

.cap-button:last-child {
  margin-left: 5px;
}

.button-box {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  position: relative;
  z-index: 1;
}
</style>