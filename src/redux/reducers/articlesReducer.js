import {GET_ARTICLES, START, SUCCESS} from "../constants/articlesConstants"

import {Map, List} from "immutable"

const defaultState = Map({
	loading: false,
	loaded: false,
	entities: List()
})

const articlesReducer = (state = defaultState, action) => {

	switch(action.type) {
	case GET_ARTICLES + START:
		return state.set("loading", true)
	case GET_ARTICLES + SUCCESS:
		return state
			.set("entities", action.payload)
			.set("loading", false)
			.set("loaded", true)

	default:
		return state
	}
}

export default articlesReducer