const webpack = require("webpack");
const compressionPlugin = require("compression-webpack-plugin");

module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: __dirname,
		publicPath: "",
		filename: "bundle.js"
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		port: 8081,
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-1"]
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				loader: "scss-loader!style-loader!css-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			},
			{
				test: /\.gif$/,
				loader: "file-loader"
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				loader: "svg-react-loader",
			},
		]
	},
	// cache: false,
	// devtool: "cheap-module-source-map",
	// plugins: [
	// 	new webpack.DefinePlugin({
	// 		"process.env.NODE_ENV": "\"production\""
	// 	}),
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		mangle: true,
	// 		compress: {
	// 			warnings: false, // Suppress uglification warnings
	// 			pure_getters: true,
	// 			unsafe: true,
	// 			unsafe_comps: true,
	// 			screw_ie8: true
	// 		},
	// 		output: {
	// 			comments: false,
	// 		},
	// 		exclude: [/\.min\.js$/gi] // skip pre-minified libs
	// 	}),
	// 	new webpack.NoEmitOnErrorsPlugin(),
	// 	new compressionPlugin({
	// 		asset: "[path].gz[query]",
	// 		algorithm: "gzip",
	// 		test: /\.js$|\.css$|\.html$/,
	// 		threshold: 10240,
	// 		minRatio: 0
	// 	}),
	// ]
};