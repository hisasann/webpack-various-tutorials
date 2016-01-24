# Hot Module Replacement

via [hot module replacement with webpack · webpack/docs Wiki](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack)

準備

    npm install webpack webpack-dev-server -g
    npm install webpack css-loader style-loader

実行するコマンドは、

    webpack-dev-server ./entry --hot --inline --module-bind "css=style\!css"

[http://localhost:8080/bundle](http://localhost:8080/bundle) にアクセスすると、 **hot load** が開始される

つまり、 **css js** ファイルを修正すると自動的に、ブラウザに通知される

**index.html** すらいらない

すごいのが、 entry.js で **css** ファイルを require すると、勝手に link タグにより import される

また、 sub.js を require すると entry.js にちゃんと import される

参考リンク

[webpack-dev-serverで、URLから「webpack-dev-server」を削る - CLOVER](http://d.hatena.ne.jp/Kazuhira/20150928/1443448917)
[webpack dev server](https://webpack.github.io/docs/webpack-dev-server.html#inline-mode)