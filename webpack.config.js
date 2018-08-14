var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                loaders:['style-loader', 'css-loader'],
            },

            ]
    },
    resolve: {
        alias: {
            // vue.js のビルドを指定する
            vue: 'vue/dist/vue.common.js',
        }
    },
};