const path = require("path"); //pathというモジュールはnode.jsのコアモジュールなのでインストールする必要なし。

module.exports = {
  mode: 'development',//minifyされない
  entry: "./src/app.ts",
  output: {
    // filename: 'bundle.[contenthash].js'//動的にファイル名を生成、ブラウザにキャッシュされた古いjsを読み込まれるのを防ぐ
    filename: "bundle.js",
    //出力先psthはtsconfigのoutDirの設定と同じにする.ただし絶対パスで指定する必要あり
    //path.resolveによって 指定したpathを順次解決
    //__dirnameはnode.jsの環境で使えるglobalな変数
    //以下の指定によってwebpackconfigと同階層にあるdistフォルダの絶対パスを解決する
    path: path.resolve(__dirname, "dist"),
    //webpack-dev-serverを使うときの追加設定
    //serverからの相対パスでdistを指定（webpack-dev-serverは変更後更新をメモリにしか書き込まないため）
    publicPath: 'dist',
  },
  //tsconfigの方でsourcemapが有効になっているのを確認し、
  //既にsoucemapが有効なのでそれを使ってねという指示
  devtool: "inline-source-map",
  //webpackが見つけたファイルをどう処理するかを指定
  module: {
    rules: [
      {
        //.tsという拡張子がついたファイルに関しては、te-loaderを使う。node_modulesは除外
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //imoprtの解決にどの拡張子を使うかの設定に.tsも追加（デフォルトは.jsのみ）
  resolve: {
    extensions: [".ts", ".js"],
  },
};
