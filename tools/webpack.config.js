const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, '../app/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  // webpack-dev-server 服務器配置相關，自動刷新!
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
      },
      {
        test: /\.js$/,
        include: [],
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          babelrc: true,
          presets:['es2015', 'es2016', 'stage-0'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    // html-webpack-plugin 能夠動態產生 index.html
    // inject = true, index.html 可以不用加<script src="bundle.js">, 會自己加载这些 bundle.js
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: './index.html',
      inject: true,
    }),
  ],
  resolve: {
    // require時省略的擴展名，如：require（'module'）不需要module.js
    extensions: ['.js', '.vue'],
    alias: {
      components: path.join(__dirname, './app/components'),
    },
  },
  devtool: 'eval-source-map',
}
