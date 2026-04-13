const path = require('path');
const CWD = process.cwd();

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin(),
		new Dotenv({ path: path.resolve(CWD, '.env') }),
	],
	module: {
		rules: [
			{
				test: /\.m?[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env'],
							plugins: ['@babel/plugin-transform-runtime']
						}
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			},

			// This is to handle CSS and SCSS files
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader, //extracs CSS into files
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sourceMap: true
						}
					}
				],
			}
		]
	},

	// Remove this when above will be placed in a dedicated repositories
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: [path.resolve(CWD, 'node_modules'), 'node_modules'],
	}
};
