<template>
  <header class="header flex-col">
    <h1 class="title">The Capitalizer</h1>
    <div :style="{ width: itemWidth }" class="underline"></div>
    <div :style="{ width: itemWidth }" class="underline"></div>
    <div :style="{ width: itemWidth }" class="underline"></div>
    <p class="subtitle">Turn your text into proper title case</p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      itemWidth: "75%"
    };
  },
  mounted() {
    const title = document.querySelector(".title").offsetWidth;
    this.itemWidth = title + "px";
  }
};
</script>

<style lang="stylus" scoped>
.header {
  padding: 0 1em 1em;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.title {
  margin: 0.15em auto;
  color: #333333;
  text-align: center;
  line-height: 1.2;
  font-weight: 900;
}

.underline {
  height: 2px;
  width: 100%;
  background-color: cap-red;
  margin: 1px auto;
}

.subtitle {
  color: #444;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
}
</style>