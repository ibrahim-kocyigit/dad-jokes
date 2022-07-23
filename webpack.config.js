const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackFavicons = require("webpack-favicons");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/js/controller.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "./img/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new WebpackFavicons({
      src: "src/img/favicon.png",
      path: "img",
      background: "#000",
      theme_color: "#000",
      icons: {
        favicons: true,
      },
    }),
  ],
};
