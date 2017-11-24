import { OrderedMap } from 'immutable'

export const types = {
	REPLACE_NUMBER: 'COUNTER/REPLACE_NUMBER'
}

export const actions = {
	replaceNumber: data => dispatch => dispatch({ type: types.REPLACE_NUMBER, payload: data })
}

export default (state = OrderedMap({ cnt: 0 }), action) => {
	switch (action.type) {
	case types.REPLACE_NUMBER:
		return state.set('cnt', action.payload)
	default: return state
	}
}