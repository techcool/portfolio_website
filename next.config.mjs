/** @type {import('next').NextConfig} */
const nextConfig = {
   
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.html$/,
        loader: 'raw-loader',
      });
    }

    return config;
  }

};

export default nextConfig;
