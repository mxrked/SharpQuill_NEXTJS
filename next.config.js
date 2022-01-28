const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  // assetPrefix: "./",
  // assetPrefix: "/.",

  //! This added clean urls and eliminates the .html extension
  assetPrefix: isProd
    ? "http://basicallyeasy.com/next-projects/sharpquills"
    : "",
  trailingSlash: true,
};
