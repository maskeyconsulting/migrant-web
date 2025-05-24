import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["next-mdx-remote"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
