import {combineReducers} from "redux"

import firstReducer from "./firstReducer"
import articlesReducer from "./articlesReducer"
import comments from "./comments"

export default combineReducers({
	firstReducer,
	articlesReducer,
	comments
})