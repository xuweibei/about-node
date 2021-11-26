const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node', //目标环境，告诉webpack打包node文件
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js',
  },
  //检测node的核心模块比如（fs）之类的，告诉webpack不要打包
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
