import {REPLACE_NUMBER} from "../constants/firstConstants"

const firstReducer = (state = {count: 1}, action) => {
	switch (action.type) {
	case REPLACE_NUMBER:
		return {
			...state,
			count: action.payload
		}
	default:
		return state
	}
}

export default firstReducer