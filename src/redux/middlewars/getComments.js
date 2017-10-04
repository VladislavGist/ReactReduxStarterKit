export default () => next => action => {
	if(!action.getComments) return next(action)

	fetch(action.getComments)
		.then(data => data.json())
		.then(response => {
			next({
				...action,
				"payload": response
			})
		})

}