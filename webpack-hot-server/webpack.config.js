var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    "./app"
  ],
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};