'use strict'

const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: MiniCSSExtractPlugin.loader
          // },
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Nuevo titulo con el plugin de html',
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}