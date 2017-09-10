const optimize = require("webpack").optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const visualizer = require('webpack-visualizer-plugin');
module.exports = {
    //entry: "./src/index.js",
    entry: {
        bundle: "./src/index.js",
        vendor: ["jquery"]
    },
    output: {
        path: __dirname + "/build",
        //publicPath: "build/", // not required it get the location from index.html which is now placed in build folder with the help fo html webpack pugin
        //filename: "bundle.js"
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [{
            use: "babel-loader",
            test: /\.js$/i
        }, {
            test: /\.(png|jpe?g)|gif$/,
            use: [{
                    loader: "url-loader",
                    options: {
                        limit: 35000
                    }
                },
                "image-webpack-loader"
            ]
        }]
    },
    plugins: [
        new optimize.UglifyJsPlugin(),
        new optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new visualizer({
            filename: './statistics.html'
        })
    ]
}