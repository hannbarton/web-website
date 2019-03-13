const path = require("path");
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill',
    './client/index.js'
  ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ]
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
};
