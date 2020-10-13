const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html') /* The '*' is used to find any folder and file that contains the html */
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0' /* Allows another device to access the app that is on the same wifi/server. */
    },
    mode: 'development',
    //watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i, // \.css$ indicates test any file that ends with .css.
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
                /*style-loader loads css file and css-loader applies it*/
            }
        ]
    }
}