/** @type {import('next').NextConfig} */

const nextConfig = {
  // 如何解决 nextjs 默认的 public 不会拷贝到output 问题：https://github.com/vercel/next.js/blob/f110a3735b9c4cbdc23b302592f5c24e6a666f02/examples/with-docker/Dockerfile#L39-L45
  //   output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/tools",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    // 引入md文本内容
    config.module.rules.push({
      test: /.(md|txt)$/,
      type: "asset/source",
    });

    config.module.rules.push({
      test: /\.(png|svg)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
