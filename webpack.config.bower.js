'use strict';


var webpack = require('webpack');
var path = require('path');
var babelLoader = 'babel?' +
  JSON.stringify({
    presets: ['es2015', 'react'],
    plugins: ['transform-es2015-modules-commonjs', 'transform-object-rest-spread']
  });


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: require('./package.json').name + '.js',
    path: path.resolve('build'),
    library: 'ReactCollapse',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: babelLoader, include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-motion': {
      root: 'ReactMotion',
      commonjs2: 'react-motion',
      commonjs: 'react-motion',
      amd: 'react-motion'
    },
    'react-height': {
      root: 'ReactHeight',
      commonjs2: 'react-height',
      commonjs: 'react-height',
      amd: 'react-height'
    }
  }
};
