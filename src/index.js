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
// import React from 'react';
// import ReactDom from 'react-dom';
// import Hello from './component/Hello/Hello'
//
// ReactDom.render(
//     <Hello/>, document.getElementById('app'));

//0005
// import React from 'react';
// import ReactDom from 'react-dom';
//
// import getRouter from './router/router'
//
// ReactDom.render(
//     getRouter(), document.getElementById('app')
// );

//0006
// import React from 'react';
// import ReactDom from 'react-dom';
//
// import getRouter from './router/router';
//
// // if(module.hot) {
// // 	module.hot.accept();
// // }
//
// ReactDom.render(
// 	getRouter(), document.getElementById('app'));

//0007
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import getRouter from 'router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if(module.hot){
	module.hot.accept('./router/router', () => {
		const getRouter = require('./router/router').default;
		renderWithHotReload(getRouter());
	});
}

function renderWithHotReload(RootElement) {
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>
				{RootElement}
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}