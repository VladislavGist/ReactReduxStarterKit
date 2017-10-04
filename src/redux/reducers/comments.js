import {GET_COMMENTS} from "../constants/commentsConstants"

const comments = (state = {}, action) => {

	let {payload} = action

	switch(action.type) {
	case GET_COMMENTS:
		return {
			...state,
			[action.id]: payload
		}
	default:
		return state
	}
}

export default comments