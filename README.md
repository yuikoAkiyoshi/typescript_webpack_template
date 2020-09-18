# webpack + typescript テンプレート

## tsconfig生成コマンド
``` npx tsc --init ```

## 開発
``` npm start ```
- サーバーがlocalhost:8080で立ち上がります。
- 変更保存後、自動に再描画されます。


## ビルド
``` npx run build ```
- distに圧縮済みのjsを排出


## 注意
webpackを使うときは全てのインポート文から拡張子（.js）を削除する
