import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"

//middlewars
import reduxThunk from "redux-thunk"
import getArticles from "../middlewars/getArticles"
// import getComments from "../middlewars/getComments"

import rootReducer from "../reducers/rootReducer"
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, getArticles)))