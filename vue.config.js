module.exports = {
  devServer: {
    host: "localhost",
    // host: "101.37.31.188",
    port: 8088,
    https: false,
    open: true,
    hotOnly: true
  },
  outputDir: "./dist",
  assetsDir: "./assets/",
  publicPath: "./",
  indexPath: "./index.html",
  transpileDependencies: ["vuetify"]
};
