const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const bootstrapEntryPoints=require("./webpack.bootstrap.config");


const isProduction = process.env.NODE_ENV=="production"?true:false;

const bootstrapConfig=isProduction?bootstrapEntryPoints.prod:bootstrapEntryPoints.dev;


const cssDev=["style-loader", "css-loader", "sass-loader"],
      cssProd=ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                }),
                cssConfig=isProduction?cssProd:cssDev;    

module.exports = {
    entry: {
        app: "./src/app.js",
        contact:"./src/contact.js",
        bootstrap:bootstrapConfig
    },
    output: { path: __dirname + "/dist", filename: "[name].bundle.js" },
    module: {
        rules: [{
                // test: /\.css$/i, // For css test
                test: /\.scss$/i,
                // use: ["style-loader", "css-loader"]
                // use: ["style-loader", "css-loader", "sass-loader"]
                use: cssConfig
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test:/\.pug$/i,
                use:"pug-loader"
            },
            {
            test: /\.html$/,
            use:[ {
            loader: 'html-loader',
            options: {
                minimize: true
            }
            }]
            },
            {
                test:/\.png$/i,
               // use:"file-loader",
                //use:"file-loader?name=[path][name].[ext]"
               // use:"file-loader?name=[name].[ext]"
              // use:"file-loader?name=[name].[ext]&outputPath=app/images/"
               use:[
                   "file-loader?name=[hash:12].[ext]&outputPath=app/images/",
                   "image-webpack-loader"
               ]
            },
             { test: /\.(woff2?|svg)$/, use: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
             { test: /\.(ttf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]' },
              // Bootstrap 3 
    { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
 
    // Bootstrap 4 
    { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports-loader?jQuery=jquery' }

        ]
    },
    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 9000,
        hot:true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                //collapseWhitespace: true,
                //cache: true
            },
            excludeChunks:["contact"], // use chunks or exclude chunks array containing entry points
           // chunks:["app"],
           // filename:"../index.html",
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact.html",
            minify: {
                //collapseWhitespace: true,
                //cache: true
            },
            chunks:["contact"],
            filename:"contact.html",
            hash: true
        }),
        // new ExtractTextPlugin("app.css") // For Older webpack versions this will work
        new ExtractTextPlugin({
            filename: "./css/[name].css",
            disable: !isProduction, 
            allChunks: true
        }),
        new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(__dirname+ 'src/*.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}