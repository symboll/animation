const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
}
