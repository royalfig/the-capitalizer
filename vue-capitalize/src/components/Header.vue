<template>
  <header class="header flex-col">
    <h1 class="title">The Capitalizer</h1>
    <p class="subtitle">Turn your text into proper title case</p>
  </header>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  padding: 0 1em 3em;
  justify-content: center;
  align-items: center;
}

.title {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  font-size: 3em;
  color: #333333;
  text-align: center;
  border-bottom: 1px solid cap-red;

  &:before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 2px;
    border-bottom: 1px solid cap-red;
  }

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: -4.5px;
    border-bottom: 1px solid cap-red;
  }
}

.subtitle {
  color: #333;
  text-align: center;
  font-size: 0.9;
  font-weight: 600;
  text-transform: uppercase;
}
</style>