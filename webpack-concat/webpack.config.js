module.exports = {
  context: __dirname + "/app",
  entry: {
    app: "./app.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};