const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./client/index.js",
  },

  devtool: "inline-source-map",

  devServer: {
    port: 8081,
    static: {
      publicPath: "/",
      directory: path.join(__dirname, "/dist"),
    },
    proxy: {
      "/sendscore": {
        target: "http://localhost:3000",
        secure: false,
      },
    },

    // // for some reason HMR does not work properly. So liveReload is being used (hot has to be set to false to make liveReload work)
    hot: false,
    liveReload: true,
    client: {
      progress: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules(?!\/bootstrap)/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
