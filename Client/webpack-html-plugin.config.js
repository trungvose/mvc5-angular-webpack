const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryPath = path.resolve(__dirname, "modules");
const corePath = path.resolve(
  __dirname,
  "../Server/WebApplication/Scripts/ng2"
);
const viewPath = path.resolve(
    __dirname,
    "../Server/WebApplication/Views/Home"
  );
const module1 = `${entryPath}/angularModule-1`;
const module2 = `${entryPath}/angularModule-2`;

module.exports = envOptions => {
  envOptions = envOptions || {};

  const config = {
    entry: {
      polyfills: `${entryPath}/polyfill.ts`,
      vendors: `${entryPath}/vendor.ts`,
      module1: `${module1}/main.ts`      
    },
    output: {
      path: corePath,
      filename: "[name].[hash].js",
      sourceMapFilename: "[name].[hash].js.map"
    },
    resolve: {
      extensions: [".ts", ".js", ".html"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: ["awesome-typescript-loader", "angular2-template-loader"]
        },
        {
          test: /\.html$/,
          loader: "raw-loader"
        },
        {
          test: /\.css$/,
          loader: "raw-loader"
        }
      ]
    },
    devtool: "source-map",
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: ["vendors", "polyfills"]
      }),
      new HtmlWebpackPlugin({
        template: viewPath + "/loader.cshtml",
        filename: viewPath + "/Module1.cshtml",
        inject: false
      })
    ]
  };

  if (envOptions.MODE === "prod") {
    config.plugins.push(
      new UglifyJsPlugin()      
    );
  }

  return config;
};
