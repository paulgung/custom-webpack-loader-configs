const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
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
        }),
        new MiniCssExtractPlugin({
            filename:'styles/[contenthash].css'
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
        }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin()
        ]
    }
};
