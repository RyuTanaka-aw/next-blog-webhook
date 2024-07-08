/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: 'next-blog-ssg',
  trailingSlash: true,
  assetPrefix: '/react/next-blog-ssg',
  basePath: '/react/next-blog-ssg',
  images: {
    loader: 'custom',
    path: '/lib/image.js'
  }
};

export default nextConfig;