const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputPath = path.resolve(__dirname, "./dist");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackConfig = {
	entry: {
		app: [
			path.resolve(__dirname, "./src/index.js")
		]
	},
	output: {
		path: outputPath,
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: "eslint-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				loader: ["style-loader", "css-loader"]
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
					publicPath: "../",
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				}))
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				loader: "file-loader",
				options: {
					name: "images/[name].[ext]"
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "file-loader",
				options: {
					name: "fonts/[name].[ext]"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "./src/assets/index.html"),
			filename: "index.html",
			path: outputPath
		}),
		new ExtractTextPlugin("./css/[name].css"),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourseMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.NamedModulesPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		port: 8080,
		historyApiFallback: true,
		host: "localhost",
		proxy: [{
			path: "/api/",
			target: "http://localhost:3001"
		}]
	}
};

module.exports = webpackConfig;