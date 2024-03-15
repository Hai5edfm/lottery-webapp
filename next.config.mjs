// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { env } from "./src/modules/config/env.mjs"
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
