
// --------- trouble shooting --------
// look at migration documents if version changes 
// https://webpack.js.org/guides/migrating/

1) npm init in your project folder

2)	 -check latest version of webpack : npm show webpack version
	 -npm i -D webpack@latest_version_number

3) create webpack.config.js in ROOT and configure entry and output paths
	-set up entry and output

4) set up scripts in package.json
	-"dev"
	-"prod"

5) add html plugin
	//install
		npm i html-webpack-plugin --save-dev
	//add path in webpack.config
		-path: __dirname + '/dist'
		-filename: 'app.bundle.js'

6) add css loader
	//install
		npm install css-loader --save-dev

	//update webpack config

		add rules object and set up test & use parameters inside

	//go to main js file and require stylesheet

		const css = require('./src/app.css')  // USE PATH BASED ON MAIN JS FILE LOCATION !!!

6) add style loader (css loader inserts styles directly into javascript file)
	//install
		npm i style-loader --save-dev

	//update webpack config
		rules: [
		 			{
		 				test: /\.css$/,
		 				use: ['style-loader','css-loader']  // its an array
		 			}
		 		]

7) add SASS loader (sass and node-sass)
	//install
		npm i sass-loader node-sass --save-dev
	//update config
		//webpack reads loaders from right (end) to left - include sass last!
		use: ['style-loader','css-loader', 'sass-loader']		

	//update config test!
 		test: /\.sass$/,

 	//update required file type in app.js
 		const css = require('./app.sass')

8) if we want to extract styles into separate file we need a new plugin
	//install
	npm install --save-dev extract-text-webpack-plugin

	//edit config
		//on top require plugin
		const ExtractTextPlugin = require("extract-text-webpack-plugin")

		//edit module 
		use: ExtractTextPlugin.extract(
			{
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
				
			}),

		//add plugin at the bottom
		plugins: [
			new ExtractTextPlugin('./app.css'),

5) install babel :
	-core: 					npm install --save-dev babel-loader babel-core
	-plugin for ES2015: 	npm install babel-preset-env --save-dev
	-css/sass				npm install -D sass-loader style-loadecss-loader
