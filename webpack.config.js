var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
        main: [path.join(__dirname, "public/javascripts/main.js")],
        vender: ["react", "react-dom", "react-router", "antd"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('plugins')
    ],
    output: {
        path: path.join(__dirname, "public/javascripts/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', "react"]
                }
            }
        ]

    },
    resolve: {
        modules: [path.join(__dirname, "public"), "node_modules"],
        alias: {
            "ajax": "javascripts/ajax",
            "setTime": "javascripts/setTime",
            "Font": "indexFont.less"
        }
    }
}