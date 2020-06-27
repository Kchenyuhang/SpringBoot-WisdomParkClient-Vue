module.exports = {
  devServer: {
    host: '192.168.43.180',
    port: 8088,
    https: false,
    open: true,
    hotOnly: true,

    proxy: {
      '/a': {
        target: 'http://120.26.185.155:8079',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/a': '',
        },
        // pathRewrite:{'.+?/api':'/api'},
      },
    },
  },

  outputDir: './dist',
  assetsDir: './assets/',
  publicPath: './',
  indexPath: './index.html',
  transpileDependencies: ['vuetify'],
}
