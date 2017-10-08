import {GET_COMMENTS} from "../constants/commentsConstants"
import {START, SUCCESS, FAIL} from "../constants/articlesConstants"

import {OrderedMap} from "immutable"

const comments = (state = OrderedMap({}), action) => {

	let {payload} = action

	switch(action.type) {
	case GET_COMMENTS + START:
		return state.setIn([action.id, "loading"], true)
	case GET_COMMENTS + SUCCESS:
		return state.set([action.id], payload)
	case GET_COMMENTS + FAIL:
		return state.set([action.id, "loading"], false)
	default:
		return state
	}
}

export default comments