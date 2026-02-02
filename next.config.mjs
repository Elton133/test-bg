/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "api.thebeststudyguide.com",
      },
      {
        protocol: "https",
        hostname: "bsg.nyc3.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  webpack: (config, { isServer, webpack }) => {
    // Externalize canvas for client-side builds (it's a server-only native module)
    if (!isServer) {
      // Externalize canvas module - prevents bundling native .node files
      if (!config.externals) {
        config.externals = [];
      }
      config.externals.push({
        canvas: "commonjs canvas",
      });
      
      // Ignore .node files using IgnorePlugin
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /\.node$/,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
