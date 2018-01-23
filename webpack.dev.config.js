const path = require('path');
console.log("__dirname", __dirname)
module.exports = {
    //part-01
    /*入口*/
    
    entry: path.join(__dirname, 'src/index.js'),

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    //part-02
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
};