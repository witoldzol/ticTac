const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

module.exports = {

	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js',
	},
	module:{
 		rules: [
 			{
 				test: /\.sass$/,
 				//webpack reads loaders from right (end) to left - include sass last!
 				use: ExtractTextPlugin.extract(
 					{
 						fallback: 'style-loader',
 						use: ['css-loader', 'sass-loader'],
 					}),
 			},
 			{
 				test: /\.pug$/,
 				use: ['pug-loader','pug-html-loader']
 			}
 		]

	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		stats: 'errors-only', //limits amount of crap displayed when u run script
		open: true, //auto runs website

	},
	plugins: [
		new ExtractTextPlugin('./app.css'),
		new HtmlWebpackPlugin({
			title: 'TicTac Game - FCC project',
			minify: {
				collapseWhitespace: false
			},
			template: './src/index.pug', //load a custom template 
		}),

	]
}