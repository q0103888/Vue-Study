module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  derServer: {
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
