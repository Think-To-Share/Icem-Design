const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './js/app.js',
      chunkFilename: './js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    'sass-loader',
                ],
            },

            {
                test: /\.(jpg|png|webp|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '../',
                            name: 'public/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
          "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
          "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
          "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
        }
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: './css/[name].css',
          chunkFilename: './css/[id].css',
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};