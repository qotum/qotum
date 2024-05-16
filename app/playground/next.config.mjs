/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@styled"] = path.resolve(__dirname, "styled-system")
    return config
  },
}
export default nextConfig
