import type { NextConfig } from "next";
const CopyPlugin = require("copy-webpack-plugin");

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
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "src/tailwind.css",
                    to: "./",
                },
            ],
        }),
    ],
};

export default nextConfig;
