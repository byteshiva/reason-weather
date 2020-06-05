const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.join(__dirname, 'build/');

module.exports = {
  entry: './src/Index.bs.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: outputDir,
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false,
    }),
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true,
  },
};
