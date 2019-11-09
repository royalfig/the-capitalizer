<template>
  <footer class="flex-row footer">
    <div class="container flex-row">
      <div class="footer-col">
        <img alt="" :src="require('../img/the_capitalizer.png')" />
        <p class="brand">The Capitalizer</p>
        <p class="copyright">
          &copy;
          <a href="https://ryanfeigenbaum.com" target="_blank" rel="noopener">Ryan Feigenbaum</a>
          {{ year }}
        </p>
        <div class="social-media">
          <a href="https://twitter.com/TCapitalizer" aria-label="Twitter">
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 400 400"
              style="enable-background:new 0 0 400 400;"
              xml:space="preserve"
            >
              <path
                class="st0"
                d="M400,200c0,110.5-89.5,200-200,200S0,310.5,0,200S89.5,0,200,0S400,89.5,400,200z M163.4,305.5
	c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6
	c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2
	c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6
	c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5
	c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"
              />
            </svg>
          </a>
          <a href="https://github.com/royalfig/Bulk-Title-Capitalizer" aria-label="Github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.579"
              height="31.775"
              viewBox="0 0 32.579 31.775"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M152.608,107.44a16.291,16.291,0,0,0-5.148,31.747c.815.149,1.112-.353,1.112-.785,0-.387-.014-1.411-.022-2.771-4.531.985-5.487-2.183-5.487-2.183a4.315,4.315,0,0,0-1.809-2.383c-1.479-1.011.112-.99.112-.99a3.42,3.42,0,0,1,2.495,1.678,3.468,3.468,0,0,0,4.741,1.354,3.482,3.482,0,0,1,1.034-2.178c-3.617-.411-7.42-1.808-7.42-8.051a6.3,6.3,0,0,1,1.677-4.371,5.852,5.852,0,0,1,.16-4.311s1.367-.438,4.479,1.67a15.448,15.448,0,0,1,8.156,0c3.11-2.108,4.475-1.67,4.475-1.67a5.854,5.854,0,0,1,.163,4.311A6.286,6.286,0,0,1,163,122.878c0,6.258-3.809,7.635-7.438,8.038a3.889,3.889,0,0,1,1.106,3.017c0,2.178-.02,3.935-.02,4.469,0,.435.294.942,1.12.783a16.292,16.292,0,0,0-5.16-31.745Z"
                transform="translate(-136.32 -107.44)"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      const currentYear = new Date().getFullYear();
      return currentYear;
    }
  }
};
</script>

<style lang="stylus" scoped>
.footer {
  margin-top: 5rem;
  background: cap-dark-gray;
  font-size: 0.8em;
  padding: 1em;
  font-weight: 100;

  .container {
    justify-content: space-between;
    width: 100%;
  }

  .footer-col > img {
    height: 2em;
    width: 2em;
  }

  .brand {
    font-size: 115%;
    color: cap-white;
  }

  p {
    margin: 0;
  }

  a, :visited {
    color: currentColor;
    text-decoration: none;
  }
}

.social-media svg {
  height: 1.25rem;
  width: 1.25rem;
  margin: 0.5em;
  fill: cap-border;
  transition: fill 0.2s ease-out;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    fill: cap-red;
  }
}

.copyright {
  font-size: 0.9em;
  color: cap-white;
}
</style>