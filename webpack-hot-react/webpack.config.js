module.exports = {
  context: __dirname + "/app",
  entry: {
    app: "./app.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};