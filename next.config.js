/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   optimizeFonts: true,
   swcMinify: true,
   i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
   },
   // experimental: { appDir: true },
};

module.exports = nextConfig;
