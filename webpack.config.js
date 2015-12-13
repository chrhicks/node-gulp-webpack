/*global module, __dirname, require*/
'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.join(process.cwd(), 'app/client-render.js'),
    output: {
        path: __dirname + '/public/dist/js',
        publicPath: 'dist/js/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};
