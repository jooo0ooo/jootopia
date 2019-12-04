var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/main/jsx'),
    entry: {
        main: './test/MainPage.jsx',
        page1: './test/Page1Page.jsx',
        movie_app: './movie_app/MovieApp.jsx'/*,
        movie: './Movie.jsx'*/
    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/webapp/js/react/[name].bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ],
                    plugins: [ '@babel/plugin-proposal-class-properties' ]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};