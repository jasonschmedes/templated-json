const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  externals: [

  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'templated-json.js',
    library: 'templatedJSON',
    libraryExport: 'templatedJSON',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}
