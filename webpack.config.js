var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        index: "./index.js",

    },
    module: {
        loaders: [
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test: /\.es6|.jsx|.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime', ['import', {
                        libraryName: 'antd',
                        style: 'css' // or true or css 这里必须是 css，否则样式不能加载  
                    }]]
                }
            }
        ]
    },
    output: {
        path: __dirname + "/dist/Scripts/",
        filename: "[name].js"
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8088
    },
}