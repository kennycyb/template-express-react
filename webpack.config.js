const path = require('node:path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const CLIENT_DIR = path.resolve(__dirname, 'client');

const config = {
    context: CLIENT_DIR,
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.join(CLIENT_DIR, 'index.jsx'),
    watch: true,
    output: {
        path: BUILD_DIR,
        filename: 'client.min.js',
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/i, //to support eg. background-image property
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: '../',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d\.\d\.\d)?$/, //to support @font-face rule
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: '[path][name].[ext]',
                    outputPath: '../',
                },
            },
            {
                test: /\.jsx?$/,
                include: CLIENT_DIR,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        'react-html-attrs',
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                    ],
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        proxy: {
            '^/api/*': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
    },
};

module.exports = config;
