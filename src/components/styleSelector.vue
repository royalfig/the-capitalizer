<template>
  <section class="styles container flex-row">
    <div class="selected-style flex-row">
      <p class="legend">Style:</p>
      <transition name="fade" mode="out-in">
        <p class="current-style" :key="styleName">
          <a :href="anchorTag">{{ styleName }}</a>
        </p>
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

<script setup>
import { computed, onMounted, ref, watch } from "vue";

const emit = defineEmits(["selected-style"]);

const styles = [
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
];

const picked = ref("AP");

const styleName = computed(() => {
  const found = styles.find(o => o.abb === picked.value);
  return found.name;
});

const anchorTag = computed(() => "#" + picked.value + "_rule");

onMounted(() => {
  if (localStorage.style) {
    picked.value = localStorage.style;
    emit("selected-style", { style: picked.value });
  }
});

watch(picked, newStyle => {
  localStorage.style = newStyle;
  emit("selected-style", { style: picked.value });
});
</script>

<style scoped>
.styles {
  padding: 1rem;
  background-color: var(--color-container);
  border: 1px solid var(--color-outline-variant);
  border-top-left-radius: var(--cap-border-radius);
  border-top-right-radius: var(--cap-border-radius);
}

.selected-style {
  align-items: center;
  flex: 100%;
  font-weight: 600;
  color: var(--color-on-surface-variant);
}

@media (min-width: 768px) {
  .selected-style {
    flex: 1;
  }
}

.legend {
  margin: 0;
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

.current-style {
  margin: 0 0 0 0.5em;

  & a {
    color: var(--color-on-surface-variant);
    text-decoration: none;
  }
}

.style-options {
  align-items: center;
  flex: 100%;
  margin-top: 10px;
}

@media (min-width: 768px) {
  .style-options {
    flex: 1;
  }
}

.style-label {
  /* for accessibility */
  min-width: 48px;
  align-items: center;
  position: relative;
  padding-left: 1.25em;
  margin-right: 1.5em;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-on-surface-variant);
  user-select: none;
  transition: all 0.2s ease-out;

  &:last-child {
    margin-right: 0;
  }
}

.style-label input {
  position: absolute;
  height: 48px;
  min-width: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  margin-left: -1.25em;
}

.checkmark {
  position: absolute;
  top: 0.25em;
  left: 0;
  height: 1em;
  width: 1em;
  border: 3px solid var(--color-outline-variant);
  border-radius: 50%;
  transition: all 0.2s ease-out;
}

.style-label input:focus ~ .checkmark {
  border: 3px solid var(--color-on-surface);
  z-index: 100;
  background: none;
}

/* When the radio button is checked, add a blue background */
.style-label input:checked ~ .checkmark {
  background-color: var(--color-outline);
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

@media (min-width: 768px) {
  .style-options {
    margin-top: 0;
  }

  .style-label {
    margin-bottom: 0;
  }
}
</style>