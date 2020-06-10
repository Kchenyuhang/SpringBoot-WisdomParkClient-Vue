module.exports = {
  devServer: {
    host: '10.40.140.122',
    port: 8088,
    https: false,
    open: true,
    hotOnly: true
  },
  outputDir: "./dist",
  assetsDir: "./assets/",
  publicPath: "./",
  indexPath: "./index.html",
  transpileDependencies: ["vuetify"],
};
