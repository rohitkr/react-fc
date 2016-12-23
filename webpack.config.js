module.exports = {
	// entry: "./react/react-fc.js",
	entry: "./src/index.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel-loader'
		}]
	}
}