const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:8090,
    host: "0.0.0.0",
    allowedHosts:"all",
    proxy:{
      '/api':{
        target:'http://localhost:8060',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
