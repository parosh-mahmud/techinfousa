module.exports = {
  images: {
    domains: ["res.cloudinary.com"], // Add Cloudinary or any other domains you use
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  trailingSlash: true, // This helps in generating static files with a trailing slash
};
