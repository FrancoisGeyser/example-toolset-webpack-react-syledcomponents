const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
},
devtool: 'source-map',
optimization: {
    splitChunks: {
        chunks: 'all',
        name: false,
    },
    runtimeChunk: true,
},
devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    // watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
      new CleanWebpackPlugin(),
     new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' },
      ],
    }),
],
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
    },
          {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    {
        test: /\.(html)$/,
        use: ['html-loader']
        },
          {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
}
};