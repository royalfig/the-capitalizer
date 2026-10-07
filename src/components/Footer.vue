<template>
  <footer class="flex-row footer">
    <div class="container flex-row">
      <div class="footer-col">
        <img alt src="../img/the_capitalizer.png" />
        <p class="brand">The Capitalizer</p>
        <p class="copyright">
          &copy; {{ year }}
          <a
            href="https://ryanfeigenbaum.com"
            target="_blank"
            rel="noopener"
          >Ryan Feigenbaum</a>
        </p>
        <div class="social-media">
          <a
            href="https://github.com/royalfig/the-capitalizer"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-w-feigenbaum/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="https://bsky.app/profile/ryanfeigenbaum.com"
            target="_blank"
            rel="noopener"
            aria-label="Bluesky"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.011 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.203-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
              />
            </svg>
          </a>
          <a
            href="https://mastodon.social/@royalfig"
            target="_blank"
            rel="me noopener"
            aria-label="Mastodon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.052c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.025-5.545zm-3.665 9.25h-2.33V9.593c0-1.1-.464-1.658-1.392-1.658-1.024 0-1.538.663-1.538 1.971v2.856H12.03V9.906c0-1.308-.514-1.971-1.538-1.971-.928 0-1.392.558-1.392 1.658v4.97h-2.33V9.415c0-1.1.282-1.973.845-2.62.581-.647 1.343-.979 2.292-.979 1.098 0 1.928.422 2.48 1.266l.535.896.535-.896c.552-.844 1.382-1.266 2.48-1.266.949 0 1.711.332 2.292.98.563.646.845 1.519.845 2.62v5.148z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const year = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: 5rem;
  background: var(--color-container);
  color: var(--color-on-surface);
  font-size: 0.8em;
  padding: 1em;
  font-weight: 100;

  & .container {
    justify-content: space-between;
    width: 100%;
  }

  & .footer-col > img {
    height: 2em;
    width: 2em;
  }

  & .brand {
    font-size: 115%;
    color: var(--color-on-surface);
  }

  & p {
    margin: 0;
  }

  & a, & :visited {
    color: currentColor;
    text-decoration: none;
  }
}

.social-media {
  line-height: 0;
}

.social-media svg {
  height: 1.1rem;
  width: 1.1rem;
  margin: 0.75em;
  fill: var(--color-on-surface-variant);
  transition: fill 0.2s ease-out;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    fill: var(--color-secondary);
  }
}

.copyright {
  font-size: 0.9em;
  color: var(--color-on-surface);
}
</style>
