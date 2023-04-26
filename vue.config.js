'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

module.exports = {
  publicPath: './',
  devServer: {
    // Paths
    proxy: {
      '/api': {
          target: "http://192.168.210.208:8884",
          changeOrigin: true,
          cookieDomainRewrite: {
              '*': "http://127.0.0.1:8088/",
          },
          pathRewrite:{  // 路径重写，
              '^/api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
          }
      }
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  },
  chainWebpack(config) {
		config.plugin('html').tap((args) => { //标题
			args[0].title = '东新盛（上海）展览有限公司'
			return args
		})
	}
}
