/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http", // Add the protocol (http or https)
        hostname: "127.0.0.1", // Add the hostname
        port: "1337", // Add the port if necessary
        pathname: "/uploads/**", // Add the pathname
      },
    ],
  },
};

module.exports = nextConfig;