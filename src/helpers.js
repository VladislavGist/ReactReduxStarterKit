//массив в объект
export function arrToMap(arr) {
	return arr.reduce((acc, comment) => {
		acc[comment.id] = comment
		return acc
	}, {})
}

//объект в массив
export function mapToArr(obj) {
	return Object.keys(obj).map(id => obj[id])
}