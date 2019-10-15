<template>
  <header class="header flex-row">
    <h1 class="title">Titles Capitalized</h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  padding: 1.5em 1em 3em;
}

.title {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  font-size: 3em;
  color: #333333;
  text-align: center;
  border-bottom: 1px solid cap-red;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 2px;
    border-bottom: 4px double cap-red;
  }
}
</style>