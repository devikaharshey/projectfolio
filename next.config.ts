import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    productionBrowserSourceMaps: true,
    webpack(config, { dev, isServer }) {
        if (dev && !isServer) {
            config.devtool = 'cheap-module-source-map';
        }
        return config;
    },
};

export default nextConfig;
