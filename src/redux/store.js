import {createStore} from 'redux';
import combineReducers from 'reducers';

console.log("store.js-beforeCreateStore");
let store = createStore(combineReducers);
console.log("store.js-afterCreateStore");

export default store