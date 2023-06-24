/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['app.alphalearn.com', 's3.ap-south-1.amazonaws.com'], // Add the hostname for your images here
  },

}



module.exports = nextConfig