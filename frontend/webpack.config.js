/**
 * Webpack
 * 
 * É um empacotador de módulo e que para para cada tipo de arquivo (.js, .css, .png) realiza uma conversão diferente por meios dos loaders
 * - Loaders: babel-loader, image-loader, css-loader
 */

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3334,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
