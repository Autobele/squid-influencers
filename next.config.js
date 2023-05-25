/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'us-central1-squid-apis.cloudfunctions.net'
    }
  ],
   domains: ['storage.googleapis.com', 'us-central1-squid-apis.cloudfunctions.net'] 
  }
}

module.exports = nextConfig
