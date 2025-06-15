const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  trailingSlash: true, // Important for static export
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withNextIntl(config);
