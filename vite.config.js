import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "img/icons/favicon-16x16.png",
        "img/icons/favicon-32x32.png",
        "img/icons/apple-touch-icon.png",
        "img/icons/safari-pinned-tab.svg"
      ],
      manifest: {
        name: "Title Capitalization Tool - The Capitalizer - Automatically Convert Text to Title Case",
        short_name: "The Capitalizer",
        theme_color: "#f16b6f",
        background_color: "#fffefe",
        icons: [
          {
            src: "img/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "img/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  test: {
    environment: "jsdom"
  }
});
