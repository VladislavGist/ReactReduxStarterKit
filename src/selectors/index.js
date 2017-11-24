import {createSelector} from 'reselect'

//селектор фильтра статей

const filterGetter = state => state.filterReducer
const articlesGetter = state => state.articlesReducer

//articlesGetter из этой функции вернутся статьи
//filterGetter из этой функции вернется массив выбраных селектов
//если они такие же как в прошлый раз, то функция не вызовется
//а если изменились, то она сработает

export const filterArticles = createSelector(articlesGetter, filterGetter, (articlesReducer, filterReducer) => {

	//фильтруем статьи
	return articlesReducer.filter(article => {
		//перебирая каждую статью смотрим, чтобы массив filterReducer.selected содержал в себе id статьи
		return !filterReducer.selected.length || filterReducer.selected.includes(article.article)
	})
})


//селектор комментариев в статьях

const commentsGetter = state => state.commentsList
const idGetter = (state, props) => props.id

//все последующие селекторы должны возвращать функцию
export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (commentsList, idGetter) => {
	return commentsList[idGetter]
})

//селектор статей

import { fromJS } from 'immutable'

//пришедшие данные в selector делаю глубого иммутабельными через fromJS()
const articleState = state => fromJS(state.articlesReducer).get('entities')
const articlesOwnPropsId = (state, props) => props

//createSelector сравнивает articleState с предыдушим глубоко иммутабельным элементом
export const articlesSelector = () => createSelector(articleState, articlesOwnPropsId, (articleState, ownPropsId) => {
	return articleState.filter(item => item.id === ownPropsId)
})