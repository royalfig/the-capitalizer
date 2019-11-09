<template>
  <footer class="flex-row footer">
    <div class="container flex-row">
      <div class="footer-1">
        <h4>About</h4>
        <p>
          The Capitalizer was created by
          <a
            href="https://ryanfeigenbaum.com"
            target="_blank"
            rel="noopener"
          >Ryan Feigenbaum</a>.
        </p>
      </div>
      <div class="footer-2">
        <h4>Two</h4>
      </div>
      <div class="footer-3">
        <h4>Three</h4>
      </div>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
.footer {
  margin-top: 5rem;
  min-height: 300px;
  background: cap-dark-gray;
  font-size: 0.8em;
  padding: 1em 2em;

  .container {
    justify-content: space-between;
    width: 100%;
  }

  p {
    color: cap-white;
  }

  a {
    color: cap-red;
  }
}

h4 {
  color: cap-white;
  font-size: 1.25em;
  font-weight: 400;
}
</style>