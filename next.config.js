/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\\.(png|jp(e*)g|svg|gif)$/,
      use: [
        'file-loader'
      ],
    });
 
    return config;
  },
}

module.exports = nextConfig
