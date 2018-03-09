import {INCREMENT, DECREMENT, RESET} from 'actions/action_counter';

/*
* 初始化state
 */

const initState = {
	count: 0
};
/*
*   reducer
 */
export default function reducer(state = initState, action) {
	// init-state: undefined
	// init-action: { type: '@@redux/INIT' }
	console.log("counter.js-state,action: ", state, action);
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1
			};
		case DECREMENT:
			return {
				count: state.count - 1
			};
		case RESET:
			return {
				count: 0
			};
		default:
			return state
	}
}