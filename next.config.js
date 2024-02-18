/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "unsplash.com",'images.pexels.com'],
    // Agrega las configuraciones remotePatterns aquí
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'xsgames.co',
      },
    ],
  }
};

module.exports = nextConfig;