module.exports = {
  devServer: {
    host: '192.168.75.1',
    port: 8088,
    https: false,
    open: true,
    hotOnly: true,
  },
  outputDir: './dist',
  assetsDir: './assets/',
  publicPath: './',
  indexPath: './index.html',
  transpileDependencies: ['vuetify'],
}
