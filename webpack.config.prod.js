const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  //プロジェクト全体に対して効かせる設定
  plugins: [
      //distの中身を一回一回きれいにする（常に最新のファイルだけの状態にする）
      new CleanPlugin.CleanWebpackPlugin(),
  ]
};
