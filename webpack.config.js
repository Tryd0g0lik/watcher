const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { merge } = require("webpack-merge");
const webpackFront = require("./src/frontend/webpack.config.js");
module.exports = merge(webpackFront, {
  entry: './src/index.ts',
  // devtool: 'evel-'
  mode: 'none',


  module: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './public/manifest.json', to: './', },
        { from: './public/logo512.png', to: './', },
        { from: './public/logo192.png', to: './', }
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map.[query]',
      exclude: path.resolve(__dirname, 'src/'),
    }),

    new ESLintPlugin({
      files: path.resolve(__dirname, 'src/frontend/src'),

    })
  ],
});
