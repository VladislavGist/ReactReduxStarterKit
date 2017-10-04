import {GET_ARTICLES} from "../constants/articlesConstants"

import {Map} from "immutable"

const articlesReducer = (state = [], action) => {


	//Immutable.js. Делает данные не изменяемыми. При изменении объекта или массива всегда возвращает новый объект или массив
	//иммутабельна только на верхнем уровне

	//create object
	//let map1 = new Immutable.Map({a: 1, b: 2, c: []})

	//get state
	//map1.get("a")

	//update
	//mep1.set("a", 10)

	switch(action.type) {
	case GET_ARTICLES:
		return action.payload
	default:
		return state
	}
}

export default articlesReducer