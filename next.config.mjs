import million from "million/compiler";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nos.wjv-1.neo.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const millionConfig = {
  auto: true, // if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
