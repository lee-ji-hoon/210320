const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src'), // 누구를 기준으로 번들링 할 것인가 ?
  output: {
    // 어디로 내보낼 것인가 ?
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      // 어떤 파일에 어떤 로더를 사용해서 변경을 줄 것 인가?
      {
        test: /\.(js|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], // 확장자 생략
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    hot: true,
    open: true,
    port: 8888,
  },
}
