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
      // Replace canvas with an empty module stub for client-side builds
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /^canvas$/,
          require.resolve('./canvas-stub.js')
        )
      );
      
      // Ignore .node files using IgnorePlugin - they are native binary modules
      config.plugins.push(
        new webpack.IgnorePlugin({
          checkResource(resource, context) {
            // Ignore .node files
            if (/\.node$/.test(resource)) {
              return true;
            }
            // Ignore canvas.node specifically
            if (/canvas\.node$/.test(resource)) {
              return true;
            }
            return false;
          },
        })
      );
      
      // Add to resolve fallback
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }

    return config;
  },
};

export default nextConfig;
