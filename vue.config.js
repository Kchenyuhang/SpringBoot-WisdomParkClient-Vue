module.exports = {
  devServer: {
    host: "localhost",
    port: 8089,
    https: false,
    open: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://120.26.185.155:8079",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "", //代理的路径
        },
      },
    },
  },

  outputDir: "./dist",
  assetsDir: "./assets/",
  publicPath: "./",
  indexPath: "./index.html",
  transpileDependencies: ["vuetify"],
};