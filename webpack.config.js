const path = require('path');
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        usercreate: path.join(__dirname, './public/js/userCreate.js'),
        useredit: path.join(__dirname, './public/js/userEdit.js'),
        userlist: path.join(__dirname, './public/js/userlist.js'),
        login: path.join(__dirname, './public/js/login.js'),
        appoint: path.join(__dirname, './public/js/appoint.js'),
        clueedit: path.join(__dirname, './public/js/clueEdit.js'),
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '',
    },

    devServer: {
        compress: true
    },
    /*optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        beautify: false,
                        comments: false
                    },
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                }
            })
        ],
    },*/

};