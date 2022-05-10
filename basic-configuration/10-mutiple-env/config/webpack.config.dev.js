module.exports = {
    mode: 'development',
    output: {
        filename: "scripts/[name].js",
    },
    devtool: 'inline-source-map',
    devServer: {
        static:"./dist"
    }
};
