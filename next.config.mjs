/** @type {import('next').NextConfig} */
import CopyPlugin from "copy-webpack-plugin";

const nextConfig = {
  // 如何解决 nextjs 默认的 public 不会拷贝到output 问题：https://github.com/vercel/next.js/blob/f110a3735b9c4cbdc23b302592f5c24e6a666f02/examples/with-docker/Dockerfile#L39-L45
//   output: "standalone",
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [{ from: "./public", to: "./public" }],
      })
    );
    return config;
  },
};

export default nextConfig;
