const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
    mode: mode,

    entry: "./src/assets/js/mainScript.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/js/pew-pew.[contenthash:9].js",
        assetModuleFilename: "assets/images/[name].[contenthash:9][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g)/i,
                type: "asset",
            },
            {
                test: /\.(s)css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.[contenthash:9].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            scriptLoading: "blocking",
        }),
    ],

    target: target,

    devtool: "source-map",

    devServer: {
        static: "./dist",
        hot: true,
    },
};