/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: 'out',
  images: {
    domains: [
      'res.cloudinary.com',
      'panel-back.landaholding.com',
      'panel.landaholding.com',
      'landaholding.com'
    ],
  },
};

module.exports = nextConfig;
