/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'panel-back.landaholding.com',
      'panel.landaholding.com',
    ],
  },
};

module.exports = nextConfig;
