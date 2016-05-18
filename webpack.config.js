var webpack = require('webpack');
module.exports = {
	entry: {
		webpack: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server'],
		app: "./src/js/app.js",
		demoes5: "./src/js/demo1/demoes5.js",
		demoes6: "./src/js/demo1/demoes6.js"
	},
	output: {
		path: './build/js',
		filename: "[name].js"
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			loaders: ['react-hot', 'babel'],
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: "style!css"
		}]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //热替换插件
		new webpack.NoErrorsPlugin()	//防止报错插件

	]
};