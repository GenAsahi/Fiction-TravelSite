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
    mode: 'development',
    watch: true,
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