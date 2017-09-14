var path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            use: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer:{
        port:8080,
        contentBase:'./build',
        inline:true
    }
}