const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const WriteFilePlugin = require("write-file-webpack-plugin");
// const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: ["./retailer/src/index.js"],
  output: {
    path: path.resolve(__dirname, "./retailer/static/js/view/"),
    filename: "[name].js",
    publicPath: "/static/js/view/",
    hotUpdateChunkFilename: "[name].hot-update.js",
    hotUpdateMainFilename: "main.hot-update.json",
    chunkFilename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-refresh/babel"],
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: 'css-loader',
          //   options: { sourceMap: true },
          // },
          // {
          //   loader: 'postcss-loader',
          //   options: { sourceMap: true },
          // },
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     sourceMap: true,
          //   },
          // },
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     sourceMap: true,
          //     resources: [
          //       resolve('../src/assets/scss/modules/_globals.scss'),
          //     ]
          //   }
          // }
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less", ".sass"],
    alias: {
      "@distribuor": path.resolve(__dirname, "./frontend/src/*"),
      "@retailer": path.resolve(__dirname, "./retailerview/src/*"),
    },
  },
  plugins: [
    // new dotenv(),
    // new WriteFilePlugin({
    //   // exclude hot-reload files
    //   test: /^(?!main.*.(hot-reload)).*/,
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: 8090,
      },
    }),
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  devServer: {
    port: 8090,
    hotOnly: true,
    writeToDisk: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};