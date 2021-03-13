// const debug = process.env.NODE_ENV !== "production";

module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.module.rules.push({
      // test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      test: /\.(png|jpe?g|gif)$/i,
      loader: "url-loader",
    });
    return config;
  },
  // assetPrefix: !debug ? "https://shengzhuangrocks.github.io/portofolio/" : "",
};
