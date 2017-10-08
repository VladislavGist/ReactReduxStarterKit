import {START, SUCCESS, FAIL} from "../constants/articlesConstants"

export default () => next => action => {
	const {getArticles, type, ...rest} = action

	if(!getArticles) return next(action)

	next({
		...rest,
		type: type + START
	})

	setTimeout(() => {
		fetch(getArticles)
			.then(data => data.json())
			.then(response => {
				return next({
					...rest,
					"type": type + SUCCESS,
					"payload": response
				})
			})
			.catch(error => {
				console.log(error)
				return next({
					...rest,
					type: type + FAIL
				})
			})
	}, 2000)

}