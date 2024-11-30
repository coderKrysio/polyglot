import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    trailingSlash: true,
    transpilePackages: ["next"],
    webpack: (config) => {
        config.output.webassemblyModuleFilename =
            "static/wasm/[modulehash].wasm";
        return config;
    },
};

export default nextConfig;
