import { withContentlayer } from "next-contentlayer";
// import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
  swcMinify: false,
};

export default withContentlayer(options);
