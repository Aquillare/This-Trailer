const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        assetModuleFilename: "[hash].[ext]",
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:
                    {
                      loader: 'babel-loader',
                    }
                    
                ,
                
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|jpg|gif|png|svg)$/,
                use:[
                    {
                        loader: 'file-loader',
                    }
                ]

                
            },

        ],
    },
    devServer:{
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
        }),
        new Dotenv()
    ]

}