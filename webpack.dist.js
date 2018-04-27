'use strict';

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const merge = require('deepmerge');
const webpack = require('webpack');
const path = require('path');

const options = require('./build/options');
// const base = require('./build/webpack.base.js');
const autoprefixer = require('autoprefixer');

const config = {
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname),
        library: 'SecureUi',
        libraryTarget: 'commonjs2'
    },

    plugins: [
        // new ExtractTextPlugin({
        //     filename: options.isProduction ? 'keen-ui.min.css' : 'keen-ui.css'
        // }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },
    externals: {
        vue: 'vue'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
            {
        test: /\.css$/,
        loader: 'css-loader',
      },
        ]
    },
};

module.exports = config;
