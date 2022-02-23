const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].bundle.js",
    //publicPath: "",
    //assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: "blocking",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: "blocking",
      filename: "about.html",
      template: "./src/html/about.html",
    }),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: "blocking",
      filename: "authors.html",
      template: "./src/html/authors.html",
    }),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: "blocking",
      filename: "signIn.html",
      template: "./src/html/signIn.html",
    }),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: "blocking",
      filename: "signUp.html",
      template: "./src/html/signUp.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 9000,
    hot: true,
  },
};
