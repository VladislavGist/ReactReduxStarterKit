import {REPLACE_NUMBER} from "../constants/firstConstants"

import {OrderedMap} from "immutable"

const firstReducer = (state = OrderedMap({cnt: 0}), action) => {
	switch (action.type) {
	case REPLACE_NUMBER:
		return state.set("cnt", action.payload)
	default:
		return state
	}
}

export default firstReducer