# Hot Module Replacement を express を使ってやってみる場合

ベースはこちらを使用

[gaearon/react-transform-boilerplate - JavaScript](https://github.com/gaearon/react-transform-boilerplate)

実行するコマンドは、

    node server.js

[http://localhost:3000/](http://localhost:3000/)

## 一向に HMR してくれなかった

**express** 版にした場合、 **babel-preset-react-hmre** がどうも大事なようで、これを package.json に入れ忘れていた

## .babelrc に **react-hmre** を追加する必要あり

これも写経の最中に抜けてて、 HMR してくれなかった

```json
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
```

express 版のメリットって

```javascript
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
```

index.html をどのディレクトリのものを返すか自分で設定できるからなのかな？

