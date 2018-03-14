import reducer_counter from 'reducers/reducer_counter';
import reducer_userInfo from 'reducers/reducer_userInfo';

export default function combineReducers(state = {}, action) {
	return {
		counter: reducer_counter(state.counter, action),
		userInfo: reducer_userInfo(state.userInfo, action),
	}
}