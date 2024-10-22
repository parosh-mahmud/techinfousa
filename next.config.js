module.exports = {
  images: {
    domains: ["plus.unsplash.com", "source.unsplash.com"], // Add the allowed domains here
    unoptimized: true,
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
