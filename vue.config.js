const path = require("path");

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
  pwa: {
    name: "The Capitalizer - A Title Capitalization Tool",
    shortName: "The Capitalizer",
    themeColor: "#f16b6f",
    msTileColor: "#f16b6f",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#f16b6f",
    iconPaths: {
      favicon32: "/favicon-32x32.png",
      favicon16: "/favicon-16x16.png",
      appleTouchIcon: "/apple-touch-icon.png",
      maskIcon: "/safari-pinned-tab.svg",
      msTileImage: "/msapplication-icon-144x144.png"
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
