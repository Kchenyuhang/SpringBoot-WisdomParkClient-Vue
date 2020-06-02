module.exports = {
  devServer: {
    host: '10.40.248.34',
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
