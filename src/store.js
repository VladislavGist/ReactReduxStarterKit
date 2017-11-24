import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {combineReducers} from 'redux'

//middlewars
import reduxThunk from 'redux-thunk'

import firstReducer from './ducks/counter'

const rootReduces = combineReducers({
	firstReducer
})

export const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(reduxThunk)))