const path = require("path");
const ejs = require("ejs");
const getDemands = require("./src/getDemands.exec.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin")
  .default;

module.exports = async () => {
  const demands = await getDemands();
  const index = await ejs.renderFile("./src/views/index.html", {
    pageData: { demands },
  });

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "public/assets/bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(svg|eot|ttf|woff|woff2)$/,
          use: "file-loader",
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        template: "src/views/_site.html",
        title: "The People's Demands DC",
        body: index,
      }),
      new HTMLInlineCSSWebpackPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
    },
  };
};
