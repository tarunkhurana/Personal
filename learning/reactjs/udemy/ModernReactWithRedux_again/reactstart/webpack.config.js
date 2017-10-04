const path=require("path");
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname),
        publicPath:'/',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                    presets:["env","react"]
                    }
                },
                test:/\.js$/,
                                
            }
        ]
    },
    devServer:{
        port:8000,
        contentBase:path.join(__dirname),
        host:"localhost"
    }
    
}