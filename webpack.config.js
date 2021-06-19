const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// ========================================= //

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      // plugins: []
    }
  }
}

const cssRules = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    "sass-loader"
  ]
}

const fileRules = {
  test: /\.(webp|png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
}


// -----------------------------------------

module.exports = {
  entry: {
    path: path.resolve(__dirname + '/src/index.js')
  },
  output: {
    path: path.resolve(__dirname + '/docs'),
    filename: 'app.[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './public/index.html',}),
],
  module: {
    rules: [ 
      cssRules,
      javascriptRules,
      fileRules
    ]
  },
  devServer: {
    open: true,
    port: 8080,
  },
  // target: 'node',
  // node: {
  //   fs:  'empty'
  // }
}
