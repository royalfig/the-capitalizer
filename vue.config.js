const path = require("path");

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
  pwa: {
    name:
      "Title Capitalization Tool - The Capitalizer - Automatically Convert Text to Title Case",
    manifestOptions: {
      short_name: "The Capitalizer"
    },
    themeColor: "#f16b6f",
    msTileColor: "#fffefe",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#f16b6f",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/mstile-150x150.png"
    }
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")]
    });
}
