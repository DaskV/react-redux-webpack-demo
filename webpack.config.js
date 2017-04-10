var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'eval',
  devServer: {
    contentBase: './build',
    hot: true,
    port: 8888,
    inline: true,
    colors: true,
    open: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
