var webpack = require('webpack');
var md5 = require('md5');
var hash = md5(new Date().getTime());
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    hash: hash,
    entry: {
        'app': './app/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-router-loader',
                    'angular2-template-loader']
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader",
                    "css-loader")
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
                loader: 'file?name=assets/[name].' + hash + '.[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        })
    ]
};
