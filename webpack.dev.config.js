const path = require('path');
console.log("__dirname", __dirname);
module.exports = {
    //part-01
    /*入口*/
    
    entry: [
    	'react-hot-loader/patch',   /*for react-hot-loader*/
	    path.join(__dirname, 'src/index.js')
    ],

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },

    //part-02
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
        }]
    },
	
    //part-03
	devServer: {
		port: 8083,
		contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true,
		host: '0.0.0.0',
		compress: true,
		
	},

	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			component: path.join(__dirname, 'src/component'),
			router: path.join(__dirname, 'src/router'),
			actions: path.join(__dirname, 'src/redux/actions'),
			reducers: path.join(__dirname, 'src/redux/reducers'),
		}
	},
};