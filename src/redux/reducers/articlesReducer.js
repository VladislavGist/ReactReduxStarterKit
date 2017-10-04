import {GET_ARTICLES} from "../constants/articlesConstants"

const articlesReducer = (state = [], action) => {
	switch(action.type) {
	case GET_ARTICLES:
		return action.payload
	default:
		return state
	}
}

export default articlesReducer