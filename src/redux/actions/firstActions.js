// import fetch from 'isomorphic-fetch'
import {REPLACE_NUMBER} from "../constants/firstConstants"

export const increment = data => {
	return dispatch => (
		dispatch({
			type: REPLACE_NUMBER,
			payload: data
		})
	)
}