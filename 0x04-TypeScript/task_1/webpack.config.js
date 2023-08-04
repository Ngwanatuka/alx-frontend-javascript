/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { compilation } = require("webpack");

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "js"),
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, "task"),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "./templates/index.template.html"
    }),
  ],
  output: {
    publicPath: './',
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};