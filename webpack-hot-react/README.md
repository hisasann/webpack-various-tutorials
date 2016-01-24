# Hot Module Replacement and React Loader

via [Setting Up Webpack for React and Hot Module Replacement](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)

実行するコマンドは、

    webpack-dev-server --hot --inline

[http://localhost:8080/](http://localhost:8080/)

この URL は **HRM** はせずに画面がリロードされる

[http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html)

この URL は HRM がされるので、画面のリロードなしに js が読み込まれる
