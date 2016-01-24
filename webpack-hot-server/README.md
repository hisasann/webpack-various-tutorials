# Hot Module Replacement を server を使ってやってみる場合

via [react-hot-loader/Troubleshooting.md at master · gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)

実行するコマンドは、

    node server.js

[http://localhost:3000/](http://localhost:3000/)

## The following modules couldn't be hot updated: (They would need a full reload!)

```
If you get this warning when editing a root component, this may be because you don't export anything from it, and call React.render from there. Put your root component in a separate file (e.g. App.jsx) and require it from index.js where you call React.render.

This warning may also appear if you edit some non-component file which is required from files other than components. This means hot update bubbled up, but the app couldn't handle it. This is normal! Just refresh.

If you get this warning together with a 404 for hot-update.json file, you're probably using an ancient version of webpack-dev-server (just update it).
```

このとおりだが、 **non-component** なファイルを変更しても HMR はしてくれない

つまり、 **React.render** を呼ばないとダメなようだ
