const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/index.js", // relative path
    output: {
        path: path.resolve(__dirname, "build"), // absolute path
        filename: "bundle.js",
        publicPath: "build/"
    },
    module: {
        rules: [{
                use: "babel-loader",
                test: /\.js$/ // adding regular expression for js files
            },
            {
                // use: ['style-loader', 'css-loader'],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                test: /\.css$/
            },
            {
                use: [{
                        loader: "url-loader",
                        options: { limit: 40000 }
                    },
                    "image-webpack-loader"
                ],
                test: /\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")

    ]


}

module.exports = config;