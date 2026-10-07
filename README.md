# The Capitalizer

The Capitalizer is a lightning⚡fast tool for automatically converting text to title case, according to the style guidelines of the Associated Press, American Psychological Association, Chicago Manual of Style, Modern Language Association, New York Times, and Wikipedia.

[👉 Capitalize Some Titles](https://thecapitalizer.com)

## Advantages

- No ads
- Real-time capitalization
- Bulk conversion (convert multiple titles at once)
- Formatting assistance for quotes and em dashes
- Offline support
- Easily copy to clipboard
- Lightning⚡fast

## About

The Capitalizer is a PWA built with Vue.js. The business logic for capitalization lives in /capitalize/capitalize.js.

## Deploy

This is a static Vite build (`npm run build` -> `dist/`), set up for Cloudflare Pages.

**Git integration (recommended):** connect this repo in the Cloudflare dashboard under Workers & Pages. It picks up `wrangler.jsonc`'s build output directory automatically; set the build command to `npm run build` if it isn't detected.

**Direct upload from the CLI:** `npm run deploy` (runs `wrangler pages deploy`; requires `wrangler login` first).

Node 22+ is required (see `.node-version`).

## TODOs

- Improve capitalization logic (e.g., hyphenation rules, better verbal noun support)
- Bug fixes
- Show reasons why words were or were not capitalized
- Add ability to define custom rules
- ???

Follow me on Twitter: [@theroyalfig](https://twitter.com/theroyalfig) | [@the_capitalizer](https://twitter.com/the_capitalizer)
