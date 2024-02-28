/** @type {import('next').NextConfig} */
import withPlugins from "next-compose-plugins";
import withLess from "next-with-less";

const plugins = [
  [
    withLess,
    {
      lessLoaderOptions: {
        modifyVars: {
          "primary-color": "#9900FF",
          "border-radius-base": "2px",
          /* ... */
        },
      },
    },
  ],
];

const nextConfig = {
  reactStrictMode: true,
};

export default withPlugins(plugins, nextConfig);
