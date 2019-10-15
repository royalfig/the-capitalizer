<template>
  <section class="styles container flex-row">
    <div class="selected-style flex-row">
      <p class="legend">Style:</p>
      <transition name="fade" mode="out-in">
        <p class="current-style" :key="styleName">{{ styleName }}</p>
      </transition>
    </div>

    <div class="style-options flex-row">
      <label class="style-label flex-row" v-for="style in styles" :key="style.abb" :for="style.abb">
        {{ style.abb }}
        <input
          type="radio"
          class="radio-button"
          :id="style.abb"
          name="style"
          :value="style.abb"
          :aria-label="style.name"
          v-model="picked"
        />
        <span class="checkmark"></span>
      </label>
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
      picked: "AP"
    };
  },
  computed: {
    styleName() {
      for (let style of this.styles) {
        if (style.abb === this.picked) {
          return style.name;
        }
      }
    },
    anchorTag: function() {
      return "#" + this.picked.toLowerCase();
    }
  }
};
</script>

<style lang="stylus" scoped>
.styles {
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid cap-border;
  border-top-left-radius: cap-border-radius;
  border-top-right-radius: cap-border-radius;
}

.selected-style {
  align-items: center;
  flex: 1;
  font-weight: 600;
  color: cap-border;
}

.legend {
  margin: 0;
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

.current-style {
  margin: 0 0 0 0.5em;
}

.style-options {
  align-items: center;
}

.style-label {
  align-items: center;
  position: relative;
  padding-left: 1.25em;
  margin-right: 1.5em;
  cursor: pointer;
  font-weight: 600;
  color: cap-border;
  user-select: none;
  transition: all 0.2s ease-out;

  &:last-child {
    margin-right: 0;
  }
}

.style-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:focus {
    background: black;
  }
}

.checkmark {
  position: absolute;
  top: 0.25em;
  left: 0;
  height: 1em;
  width: 1em;
  border: 3px solid cap-border;
  border-radius: 50%;
  transition: all 0.2s ease-out;
}

.style-label:hover input ~ .checkmark, .style-label:focus input ~ .checkmark {
  background-color: lighten(cap-border, 75%);
}

/* When the radio button is checked, add a blue background */
.style-label input:checked ~ .checkmark {
  background-color: cap-border;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.style-label input:checked ~ .checkmark:after {
  display: block;
}
</style>