import {GET_ARTICLES} from "../constants/articlesConstants"

export const getArticles = () => {
	return {
		type: GET_ARTICLES,
		getArticles: "/api/article"
	}
}