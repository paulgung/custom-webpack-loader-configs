const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename:'images/[contenthash][ext]'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: 'body',
            filename: "app.html"
        })
    ],
    devServer: {
        static:"./dist"
    },
    module: {
        rules: [{
            test: /\.png$/,
            type: "asset/resource",
            generator: {
                filename: 'image/[contenthash][ext]'
            }
        },{
            test: /\.jpg$/,
            type: "asset/inline",
        },{
            test: /\.txt$/,
            type: "asset/source",
        },{
            test: /\.svg$/,
            type: "asset",
        },{
            test: /\.css$/,
            use:['style-loader','css-loader','less-loader'],
        }
        ]
    }
};
