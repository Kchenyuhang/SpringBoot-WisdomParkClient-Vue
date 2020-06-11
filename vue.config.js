module.exports = {
  devServer: {
    host: "10.40.203.246",
    // host: '10.40.178.143',
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
