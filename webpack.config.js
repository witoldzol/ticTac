const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {

	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js',
	},
	module:{
 		rules: [
 			{
 				test: /\.sass$/,
 				//webpack reads loaders from right (end) to left - include sass last!
 				use: ExtractTextPlugin.extract(
 					{
 						fallback: 'style-loader',
 						use: ['css-loader', 'sass-loader']
 						
 					}),
 			}
 		]

	},
	plugins: [
		new ExtractTextPlugin('./app.css'),
		new HtmlWebpackPlugin({
			title: 'TicTac Game - FCC project',
			minify: {
				collapseWhitespace: false
			},
			template: './src/index_template.ejs', //load a custom template 
		}),

	]
}