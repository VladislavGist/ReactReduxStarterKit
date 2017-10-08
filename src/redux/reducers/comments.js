import {GET_COMMENTS} from "../constants/commentsConstants"

import {OrderedMap} from "immutable"

const comments = (state = OrderedMap(), action) => {

	let {payload} = action

	switch(action.type) {
	case GET_COMMENTS:
		return state.set([action.id], payload)
	default:
		return state
	}
}

export default comments