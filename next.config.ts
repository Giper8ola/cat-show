import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	styledComponents: true,
	webpack(config) {
		config.infrastructureLogging = {
			level: 'error'
		};
		return config;
	}
};

export default nextConfig;
