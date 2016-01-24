# webpack での concat

webpack で JavaScript ファイルの concat をやりたがったが、あまりそういった操作には webpack に向いていないと感じた

基本、 browserify の延長線とした tool であるので、細かい部分は向いていない

そもそもどうやるか発見できなかったので、 gulp を導入

実行するコマンドは、

    npm run dev
    
このように、 gulp のコマンドを実行後に、 webpack-dev-server を起動するようにした
    
    gulp local && webpack-dev-server --hot --inline --progress --colors

