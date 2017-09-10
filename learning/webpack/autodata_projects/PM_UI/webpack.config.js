/*
 * (c) 2016 Autodata Solutions, Inc. (Autodata). All Rights Reserved.,
 * This source code is the confidential and proprietary information of,
 * Autodata. The user shall not, in whole or in part, modify, copy,,
 * publish, disclose or make any use of this source code unless,
 * specifically authorized in a written agreement with Autodata.
 */
const pkg = require("./package.json");
const BabiliPlugin = require("babili-webpack-plugin");
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
        conf: path.join(__dirname, "build/www/conf"),
        html: path.join(__dirname, "build/www/html"),
        help: path.join(__dirname, "build/www/html/help")
    },

    handleBarHelpers: path.join(__dirname, "src/helpers"),
    src:              path.join(__dirname, "src"),
    styleLint:        path.join(__dirname, "./.stylelintrc"),
    nodeModules:      path.join(__dirname, "node_modules")
};

const entryPoints = [
    "dashboard",
    "customers",
    "concierge",
    "calendar",
    "announcements",
    "account",
    "configuration",
    "error",
    "landing"
];

// TODO add support for a "PROD" build argument that can be used to omit the config.json file from the filesToCopy array
let filesToCopy = [
    { from: "src/version.json", to: "../" },
    { from: "Webhelp/", to: "../../html/help/" }
];

// Directories to be emptied by the Clean plugin
// If webpack is copying the default.config.js into the build/www/conf directory it needs to be clean the directory
// before each run
let pathsToClean = [PATHS.build.html];

// TODO find a better name for this flag
if (argv.useDefaultConfig) {
    // If you need to have different settings that the default dev
    // the config.js file can be overridden by including --configFile=./username.config.js within the arguments field
    // of the NPM intelliJ runner
    filesToCopy.push({ from: "default.config.js", to: "../../conf/config.js" });
    pathsToClean.push(PATHS.build.conf);
}

const entry = buildEntries(entryPoints);
const entryPlugins = buildHTMLPluginData(entryPoints);

entry.modernizr = "modernizr";
entry.vendor = getVendor(pkg);
entry.fonts = path.join(__dirname, "src/base/_fonts.scss");
entry.vendor.push(path.join(__dirname, "src/base/_vendor.scss"));
entry.vendor.push("fullcalendar/dist/fullcalendar.css");

//Add parameter to toggle adding file hashes to the file names
const FILE_NAMES = {
    BUNDLE:     "[name].bundle.js",
    FONT:       "[name].[ext]",
    IMAGE:      "[name].[hash].[ext]",
    JAVASCRIPT: "[name].[hash].js",
    STYLESHEET: "[name].css"
};


if (argv.verbose) {

    console.log(
        JSON.stringify({
            filesToCopy: filesToCopy,
            vendors: entry.vendor
        }, undefined, 2)
    );
}

module.exports = {

    devtool: "hidden-cheap-module-source-map",

    entry: entry,

    output: {
        path: path.join(PATHS.build.html, "assets"),
        filename: "scripts/" + FILE_NAMES.BUNDLE,
        publicPath: "/assets/"
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
                test: /\.modernizrrc$/,
                loader: "modernizr",
            },
            {
                test   : /\.js$/i,
                exclude: /node_modules/,
                loaders : [
                    "ng-annotate?add=true&sourcemap=true",
                    "babel-loader?presets[]=es2015&plugins[]=transform-runtime"
                ],
                cacheable: true
            },
            // We"ve told Webpack to first run any file that ends in ".scss" through the sass-loader
            // to transpile it to css, then run the css through the css-loader which loads the style
            // declarations into a JavaScript module, and finally the ExtractTextPlugin extracts the css
            // into one main bundle file, "css/style.css"
            {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract("css!sass?sourceMap=true&precision=8"),
            },
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract("css"),
                cacheable: true
            },
            {
                test: /\.html$/, loaders: ["html"], cacheable: true
            },
            {
                test: /\.json$/, loaders: ["json"]
            },
            {
                test: /\.(svg|woff|woff2)(\?\S*)?$/,
                loader: "url-loader?limit=8192&name=fonts/" + FILE_NAMES.FONT,
                cacheable: true
            },
            {
                test: /\.(eot|ttf)(\?\S*)?/, loader: "file-loader?&name=fonts/" + FILE_NAMES.FONT, cacheable: true
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file?hash=sha512&digest=hex&name=images/" + FILE_NAMES.IMAGE,
                    "image-webpack?bypassOnDebug"
                ],
                cacheable: true
            },
            {
                test: /\.hbs$/, loader: "handlebars"
            },
            {
                test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery", cacheable: true
            },
            {
                test: require.resolve("moment"), loader: "expose-loader?moment", cacheable: true
            }
        ]
    },

    node: {
        //__filename: true,
        //Do not include fs in the client side code
        fs: "empty"
    },

    imageWebpackLoader: {
        gifsicle: {
            interlaced: false
        },
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        optipng: {
            optimizationLevel: 7
        },
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },

    plugins: [

        new BabiliPlugin({
            "mangle":false,
            "replace":false,
            "evaluate":false
        }),

        new CleanPlugin(pathsToClean),

        // separate the webpack initialization code into it"s own JS file
        new CommonsChunkPlugin({
            names: [ "fonts", "modernizr", "vendor" ],
            filename: "scripts/" + FILE_NAMES.JAVASCRIPT,
            minChunks: Infinity
        }),

        // Insert a common file header into all output files
        new BannerPlugin(
            SOURCE_HEADER,
            {
                exclude: [
                    "assets/scripts/pack.js",
                    "assets/scripts/vendor.js",
                    "assets/scripts/modernizr.js"
                ]
            }
        ),
        // separate the webpack initialization code into it"s own JS file
        new CommonsChunkPlugin("scripts/pack.loader.js"),

        new CopyWebpackPlugin(filesToCopy),

        // The extract plugin will remove all the embedded CSS from a file and place them into a single CSS file
        new ExtractTextPlugin("css/" + FILE_NAMES.STYLESHEET),

        new styleLintPlugin({
            configFile: PATHS.styleLint,
            context: PATHS.src,
            failOnError: false
        })
    ].concat(entryPlugins),

    resolve: {
        modulesDirectories: [ "node_modules" ],
        alias: {
            modernizr$: path.resolve(__dirname, ".modernizrrc"),
            "easy-pie-chart": path.resolve(PATHS.nodeModules + "/easy-pie-chart/dist/angular.easypiechart.js")
        }
    }
};

function buildHTMLPluginData (entryNameArray) {
    const retArray = [];

    entryNameArray.forEach(function (item) {
        retArray.push(new HtmlWebpackPlugin({
            filename: "../" + item.concat(".html"),
            title: item.toUpperCase().charAt(0).concat(item.substring(1)),
            app: item,
            template: item !== "error" ? path.join(__dirname, "src/index.hbs") : path.join(__dirname, "src/error.hbs"),
            inject: false,
            chunks: ["vendor", item]
        }));
    });

    return retArray;
}

function buildEntries (entryNameArray) {
    const retObj = {};

    entryNameArray.forEach(function (item) {
        retObj[item] = path.join(PATHS.src, item.concat(".js"));
    });

    return retObj;
}

function getVendor(pkg) {
    let vendors = Object.keys(pkg.dependencies);
    vendors = vendors.sort(sort);

    return vendors;

    function sort(dependencyA, dependencyB) {
        const a = sortOrder(dependencyA);
        const b = sortOrder(dependencyB);
        return a - b;
    }

    function sortOrder(dependency) {
        //noinspection JSUnresolvedVariable
        return pkg.dependencyOrder[dependency] || 9999;
    }
}
