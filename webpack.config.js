
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    output: {
        clear: true
    },

    module: {
        rules: [
            {
                text: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                text: /\.css$/,
                use : [ 'style-loader' , 'css-loader' ]
            }
        ]
    },

    optmization: {},

    Plugins: [
        new HtmlWebpack({
            title: 'Mi webpack App',
            filename: 'index.html'
        })
    ]
}