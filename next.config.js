/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ISSO AQUI
  },
  trailingSlash: true,
  swcMinify: true,
  images: {
    //adicionar domínios onde é permitido a realização de importações para imagens
    domains: ["via.placeholder.com", "cdn.shopify.com"],
  },
};

module.exports = nextConfig;
