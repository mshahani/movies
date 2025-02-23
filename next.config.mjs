import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.moviely.live",
      "moviely.live",
      "api.moviely.live",
      "dl.navaapp.com",
    ],
  },
};

export default withNextIntl(nextConfig);
