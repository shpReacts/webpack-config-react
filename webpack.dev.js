const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "babel-plugin-styled-components",
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          ,
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif$)/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "cheap-source-map",
};
