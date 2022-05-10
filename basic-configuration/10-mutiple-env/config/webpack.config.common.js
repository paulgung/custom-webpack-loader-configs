const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        index:'./src/index.js',
        another:'./src/another-module.js'
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        clean: true,
        assetModuleFilename:'images/[contenthash][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: 'body',
            filename: "app.html"
        }),
        new MiniCssExtractPlugin({
            filename:'styles/[contenthash].css'
        })
    ],
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
            test: /\.(css|less)$/,
            use:[MiniCssExtractPlugin.loader,'css-loader','less-loader'],
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            type: "asset/resource"
        },{
            test: /\.(csv|tsv)$/,
            use: 'csv-loader'
        },{
            test: /\.xml$/,
            use: 'xml-loader'
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets:['@babel/preset-env'],
                    plugins: [
                        [
                            '@babel/plugin-transform-runtime'
                        ]
                    ]
                }
            }
        }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: "all"
                }
            }
        }
    }
};
