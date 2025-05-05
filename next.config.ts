import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	styledComponents: true,
	webpack(config) {
		config.infrastructureLogging = {
			level: 'error'
		};
		return config;
	},
	output: 'export',
	basePath: process.env.PAGES_BASE_PATH ?? '/'
};

export default nextConfig;
