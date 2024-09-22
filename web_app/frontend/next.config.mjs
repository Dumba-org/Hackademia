/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },

      {
        protocol: "https",
        hostname: "unsplash.it",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
