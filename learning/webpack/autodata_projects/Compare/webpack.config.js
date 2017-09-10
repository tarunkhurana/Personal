/*
 * (c) 2016 Autodata Solutions, Inc. (Autodata). All Rights Reserved.,
 * This source code is the confidential and proprietary information of,
 * Autodata. The user shall not, in whole or in part, modify, copy,,
 * publish, disclose or make any use of this source code unless,
 * specifically authorized in a written agreement with Autodata.
 */
const pkg = require("./package.json");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const BannerPlugin = require("webpack/lib/BannerPlugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const styleLintPlugin = require("stylelint-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");

const argv = require("yargs")
                .alias("v", "verbose")
                .boolean("useDefaultConfig")
                .defaults({
                    "useDefaultConfig": false
                })
                .argv;


const SOURCE_HEADER = [
    "(c) 2016 Autodata Solutions, Inc. (Autodata). All Rights Reserved.",
    "This source code is the confidential and proprietary information of",
    "Autodata. The user shall not, in whole or in part, modify, copy,",
    "publish, disclose or make any use of this source code unless",
    "specifically authorized in a written agreement with Autodata."
].join("\n");

const PATHS = {
    build: {
        conf: path.join(__dirname, "build/www/html/compare/conf"),
        html: path.join(__dirname, "build/www/html")
    },
    handleBarHelpers:   path.join(__dirname, "src/helpers"),
    src:                path.join(__dirname, "src"),
    styleLint:          path.join(__dirname, "../.stylelintrc"),
    nodeModules:        path.join(__dirname, "node_modules")
};

const babelSettings = {
    extends: path.join(__dirname, "/.babelrc")
};

let filesToCopy = [
    { from: "src/version.json", to: "../" }
];

// Directories to be emptied by the Clean plugin
// If webpack is copying the default.config.js into the build/www/conf directory it needs to be clean the directory
// before each run
let pathsToClean = [PATHS.build.html];


if (argv.useDefaultConfig) {
    // If you need to have different settings that the default dev
    // the config.js file can be overridden by including --configFile=./username.config.js within the arguments field
    // of the NPM intelliJ runner
    filesToCopy.push({ from: "default.config.js", to: "../html/compare/conf/config.js" });
    pathsToClean.push(PATHS.build.conf);
}

module.exports = {

    devtool: "inline-source-map",

    entry: {
        "main": path.join(PATHS.src, "index.js"),
        "vendor": Object.keys(pkg.dependencies),
        "fonts": path.join(__dirname, "src/base/_fonts.scss")
    },

    output: {
        path: PATHS.build.html,
        filename: "scripts/[name].bundle.js"
    },

    module: {
        preLoaders: [
            {
                test   : /\.js$/i,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],

        loaders: [
            {
                test   : /\.js$/i,
                exclude: /node_modules/,
                loaders : ["ng-annotate?add=true&sourcemap=true", "babel-loader?" + JSON.stringify(babelSettings)],
                cacheable: true
            },

            // We've told Webpack to first run any file that ends in ".scss" through the sass-loader
            // to transpile it to css, then run the css through the css-loader which loads the style
            // declarations into a JavaScript module, and finally the ExtractTextPlugin extracts the css
            // into one main bundle file, "css/style.css"
            {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract("css!sass?sourceMap=true&precision=8", { publicPath: "../" })
            },

            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract("css", { publicPath: "../" })
            },

            { test: /\.html$/, loaders: ["html"] },

            { test: /\.(svg|woff|woff2)(\?\S*)?$/, loader: "url-loader?limit=8192&name=fonts/[hash].[ext]" },
            { test: /\.(eot|ttf)(\?\S*)?/,       loader: "file-loader?name=fonts/[hash].[ext]" },
            { test: /\.(png|jpe?g)|gif$/, loader: "file-loader?name=img/[hash].[ext]" },
            { test: /\.hbs$/,             loader: "handlebars" },
            { test: /\.json$/, loader: 'json-loader'}
        ]
    },

    node: {
        //__filename: true,
        //Do not include fs in the client side code
        fs: "empty"
    },

    plugins: [

        new CleanPlugin(pathsToClean),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src/index.hbs"),
            inject: false
        }),

        // separate the webpack initialization code into it"s own JS file
        new CommonsChunkPlugin({
            names: [ "vendor" ],
            filename: "scripts/[name].js",
            minChunks: Infinity
        }),

        // Insert a common file header into all output files
        new BannerPlugin(
            SOURCE_HEADER,
            {
                exclude: ["webpack_bootstrap.js"]
            }
        ),

        // The extract plugin will remove all the embedded CSS from a file and place them into a single CSS file
        new ExtractTextPlugin("css/[name].css"),

        new CopyWebpackPlugin(filesToCopy),

        new styleLintPlugin({
            configFile: PATHS.styleLint,
            context: PATHS.src,
            failOnError: false
        })
    ],

    resolve: {
        fallback: path.join(__dirname, "node_modules"),
        modulesDirectories: [ "node_modules" ]
    },

    resolveLoader: { fallback: path.join(__dirname, "node_modules") }
};
