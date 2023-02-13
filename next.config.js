/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   optimizeFonts: true,
   swcMinify: true,
   i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "ik.imagekit.io",
            port: "",
            pathname: `/${process.env.NEXT_PUBLIC_IMAGEKIT_KEY}/Brhino/**`,
         },
      ],
   },
   // experimental: { appDir: true },
};

module.exports = nextConfig;
