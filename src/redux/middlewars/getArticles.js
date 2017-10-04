export default () => next => action => {
	if(!action.getArticles) return next(action)
	fetch(action.getArticles)
		.then(data => data.json())
		.then(response => {
			return next({
				...action,
				"payload": [
					...response
				]
			})
		})
}