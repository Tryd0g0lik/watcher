const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  // devtool: 'evel-'

  entry: {

    main: './src/index.tsx'

  },


  target: 'web',
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    modules: [path.resolve(__dirname, "./.browserslistrc"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },
        ],

        exclude: [
          // path.resolve(__dirname, "./src/backend")
        ]

      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],

      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [

  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules"
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../../dist'),

    },

    watchFiles: [
      './src/frontend/src'
    ],

    compress: true,
    historyApiFallback: true,
    open: true,
    // port: 8080
  }
};
