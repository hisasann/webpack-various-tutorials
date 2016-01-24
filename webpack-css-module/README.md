# Hot Module Replacement しつつ CSS Module を使う

[css-modules/webpack-demo](https://github.com/css-modules/webpack-demo)

実行するコマンドは、

    node server.js

[http://localhost:3000/](http://localhost:3000/)

## CSS Module するために必要なこと

以下のプラグインを入れる

* style-loader
* css-loader

webpack の loaders に以下を追加

```json
{
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
}
```

全然苦労せずに動いた！
