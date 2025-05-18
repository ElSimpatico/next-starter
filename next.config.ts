import type { NextConfig } from "next";
import { join } from "path";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [join(__dirname, "src/ui/globals")],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
