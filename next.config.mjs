/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    UNISAT_API_KEY: process.env.UNISAT_API_KEY
  }
};

export default nextConfig;
