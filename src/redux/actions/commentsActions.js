import {GET_COMMENTS} from "../constants/commentsConstants"
import {START, SUCCESS} from "../constants/articlesConstants"

export const getComments = id => {
	return dispatch => {
		dispatch({
			type: GET_COMMENTS + START,
			id: id
		})

		setTimeout(() => {
			fetch(`/api/comment?article=${id}`)
			.then(data => data.json())
			.then(response => {
				dispatch ({
					type: GET_COMMENTS + SUCCESS,
					id: id,
					payload: response
				})
			})
		}, 1400)
	}


	// if(!action.getComments) return next(action)
	// fetch(action.getComments)
	// .then(data => data.json())
	// .then(response => {
	// 	next({
	// 		...action,
	// 		"payload": response
	// 	})
	// })
}