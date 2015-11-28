/*global module, __dirname, require*/
'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        index: './public/es/index.es'
    },
    output: {
        path: __dirname + '/public/dist/js',
        publicPath: 'dist/js/',
        filename: '[name].js',
        chunkFilename: '[id].js'
    },
    module: {
        loaders: [
            {
                test: /\.(es|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};
