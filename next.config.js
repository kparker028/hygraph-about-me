/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "media.graphassets.com" },
			{ protocol: "https", hostname: "us-west-2.graphassets.com" },
		],
	},
};
