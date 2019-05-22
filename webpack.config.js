const path = require("path");
const webpack = require('webpack');
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: env,
  entry: './client/index.js',
  output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
  },
  target:'web',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ]
          },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
      ignored: /node_modules/
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  },
};
