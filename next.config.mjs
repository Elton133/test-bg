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
  // webpack: (config, { webpack }) => {
  //   config.module.rules.push({
  //     test: /\.(pdf)$/,
  //     type: "asset/resource",
  //   })
  //   config.experiments = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   };
  //   config.externals.push({
  //     canvas: "commonjs canvas",
  //   });
  //   config.plugins.push(
  //     new webpack.ProvidePlugin({
  //       Buffer: ["buffer", "Buffer"],
  //       // process: "process/browser",
  //     }),
  //   );
  //   return config;
  // },

  // webpack: (config, options) => {
  // config.module.rules.push({
  //     test: /\.pdf$/,
  //     use: {
  //       loader: 'file-loader',
  //       options: {
  //         name: '[path][name].[ext]',
  //       },
  //     },
  //   });
  //   return config;
  // },
};

export default nextConfig;
