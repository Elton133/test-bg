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
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
      
      // Ignore canvas module in client-side builds (used by pdfjs-dist but not needed in browser)
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^canvas$/,
        })
      );
      
      // Ignore .node files (native binary modules) - they can't be bundled for browser
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
