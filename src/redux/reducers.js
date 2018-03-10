import counter from 'reducers/reducer_counter';

export default function combineReducers(state = {}, action) {
	return {
		counter: counter(state.counter, action)
	}
}