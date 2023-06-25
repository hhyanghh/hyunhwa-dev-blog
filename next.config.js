const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.contentlayer$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = withContentlayer(options);
