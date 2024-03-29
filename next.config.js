/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
        '1000logos.net',
        'links.papareact.com',
        'fakestoreapi.com',
        'whitebox.com',
    ],
  }
}

module.exports = nextConfig
