/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		urlImports: ["https://esm.sh", "https://cdn.jsdelivr.net"],
	},
}

module.exports = nextConfig
