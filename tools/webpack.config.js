const path = require('path')

module.exports = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
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
  plugins: [],
  resolve: {
    // require時省略的擴展名，如：require（'module'）不需要module.js
    extensions: ['.js', '.vue'],
    alias: {
      components: path.join(__dirname, './app/components'),
    },
  },
  devtool: 'eval-source-map',
}
