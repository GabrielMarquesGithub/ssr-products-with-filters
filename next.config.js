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
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
