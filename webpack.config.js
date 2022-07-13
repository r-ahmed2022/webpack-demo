const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './src/index.js',
 entry: {
   index: './src/index.js',
   print: './src/print.js',
 },

 devServer: {
    static: './dist',
  },

 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

 plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',

    }),
  ],

  output: {
   filename: 'bundle.js',
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    runtimeChunk: 'single',
  },
};