/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		// ssr and displayname are configured by default
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: process.env.IMAGE_DOMAIN,
			},
		],
	},
};

module.exports = nextConfig;
