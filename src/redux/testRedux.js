import {increment, decrement, reset} from 'actions/action_counter';

import store from './store';

//打印初始状态
console.log("print init state");
console.log("testRedux.js-store.getState()", store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
console.log("start subscribe")
let unsubscribe = store.subscribe(() => {
	console.log("testRedux.js-store.getState()-2", store.getState());
});

//发起一系列 action
console.log("dispatching")
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(reset());

//停止监听 state 更新
console.log("stop subscribe")
unsubscribe();