const path = require('path');
const ejs = require("ejs");
const getDemands = require("./src/getDemands.exec.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async () => {
	const demands = await getDemands();
	const index = await ejs.renderFile("./src/views/index.html", { pageData: { demands } });
	
	return {
	  entry: './src/index.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'public/assets/bundle.js'
	  },
	  module: {
	  	rules: [
	      {
	        test: /\.scss$/i,
	        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
	      },
      	]
	  },
	  plugins: [
	  	new HtmlWebpackPlugin({
	  		template: "src/views/_site.html",
	  		title: "The People's Demands DC",
	  		body: index
	  	}),
	  ],
	  devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    compress: true,
	    port: 9000
	  }
	}
};