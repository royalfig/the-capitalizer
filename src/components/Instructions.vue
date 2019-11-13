<template>
  <div class="container">
    <p class="large">
      <span class="instructions">Instructions</span> Type or paste your title(s) in the box on the left side. Put each title on a new line. Converted titles will appear in the box on the right. The bottom border will turn green to show that the titles have been converted successfully. Click the &ldquo;Copy&rdquo; button to copy all titles to your clipboard. Click the &ldquo;Clear&rdquo; button to reset the text box.
    </p>
    <p class="small">
      <span class="instructions">Instructions</span> Type or paste your title(s) in the top box. Put each title on a new line. Converted titles will appear in the box below. The bottom border will turn green to show that the titles have been converted successfully. Click the &ldquo;Copy&rdquo; button to copy all titles to your clipboard. Click the &ldquo;Clear&rdquo; button to reset the text box.
    </p>
  </div>
</template>

<style lang="stylus" scoped>
@media (max-width: tablet) {
  .small {
    display: block;
  }

  .large {
    display: none;
  }
}

@media (min-width: tablet) {
  .small {
    display: none;
  }

  .large {
    display: block;
  }
}

.instructions {
  background: cap-yellow;
  color: cap-darker-gray;
  padding: 2px 5px;
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: 700;
}
</style>