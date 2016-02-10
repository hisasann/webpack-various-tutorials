# Hot Module Replacement しつつ CSS Module を使いつつ、PostCSS を使う

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

## PostCSS するために必要なこと

[PostCSS](https://github.com/postcss)

以下のプラグインを入れる

* postcss-loader

[postcss/postcss-loader: PostCSS loader for webpack](https://github.com/postcss/postcss-loader)

```javascript
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
}
```

## Composition is everything

[Glen Maddern: Internet Pro](http://glenmaddern.com/articles/css-modules)

```css
.common { /* font-sizes, padding, border-radius */ }
.normal { composes: common; /* blue color, light blue background */ }
.error { composes: common; /* red color, light red background */ }
```

```html
<button class="components_submit_button__common__abc5436 
               components_submit_button__normal__def6547">
  Submit
</button>
```

## postcss-size

[postcss/postcss-size: PostCSS plugin for size shortcut](https://github.com/postcss/postcss-size)

```css
.two {
    size: 20px 10px;
}
.one {
    size: 10px;
}
.two {
    width: 20px;
    height: 10px;
}
.one {
    width: 10px;
    height: 10px;
}
```

## autoprefixer

[postcss/autoprefixer: Parse CSS and add vendor prefixes to rules by Can I Use](https://github.com/postcss/autoprefixer)

```css
a {
    display: flex;
}
compiles to:

a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
```

## postcss-css-variables

[MadLittleMods/postcss-css-variables: PostCSS plugin to transform CSS Custom Properties(CSS variables) syntax into a static representation](https://github.com/MadLittleMods/postcss-css-variables)

```css
:root {
    --width: 100px;
}

@media (max-width: 1000px) {
    :root {
        --width: 200px;
    }
}

.box {
    width: var(--width);
}
```

## postcss-import

[postcss/postcss-import: PostCSS plugin to inline @import rules content](https://github.com/postcss/postcss-import)

```css
@import "normalize.css"; /* == @import "./node_modules/normalize.css/normalize.css"; */
```





