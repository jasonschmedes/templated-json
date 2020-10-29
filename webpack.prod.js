const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /src\/environments\/environment\.ts/,
      './environment.prod.ts'
    ),
  ]
})
