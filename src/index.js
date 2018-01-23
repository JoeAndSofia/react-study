//0001
// document.getElementById('app').innerHTML = "Webpack worked"

//0002
/*使用es6的箭头函数*/
// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

//0003
// import React from 'react';
// import ReactDom from 'react-dom';
//
// ReactDom.render(
// <div>Hello React!</div>, document.getElementById('app'));

//0004
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello'

ReactDom.render(
	<Hello/>, document.getElementById('app')
);