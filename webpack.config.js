const path = require("path");
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
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
    devtool: 'source-map',
    watchOptions: {
      ignored: /node_modules/
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
      hot: true,
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000
  }
};
