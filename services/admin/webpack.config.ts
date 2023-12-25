import path from 'path';
import webpack from 'webpack';
import { BuildMode, BuildPaths, BuildPlatform, buildWebpack, BuildOptions } from '@packages/build-config';

interface EnvVariables {
	mode?: BuildMode;
	port?: number;
	analyzer?: boolean;
	platform?: BuildPlatform;
}

export default (env: EnvVariables) => {  // env - объект с переменными окружения, которые передаются при запуске скрипта

	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src'),
	};

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop'
	});
	return config;
};


