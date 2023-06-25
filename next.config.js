// const { withContentlayer } = require("next-contentlayer");
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = withContentlayer(options);
