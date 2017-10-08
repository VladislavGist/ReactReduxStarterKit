import React, {Component} from "react"
import {connect} from "react-redux"

//actions
import {getArticles} from "../../redux/actions/articlesActions"

//components
import Article from "../article/article"
import Counter from "../counter/counter"
import Loader from "../loader/loader"

// import {List, is, fromJS} from "immutable"

class ArticlesList extends Component {
	componentDidMount() {
		const {loading, loaded, getArticles} = this.props
		if(!loading || !loaded) {
			getArticles()
		}
	}

	render() {
		let articleLength = Object.keys(this.props.articles).length
		if(this.props.loading) {
			return <Loader />
		}
		return (
			<div className="dashboard">
				<Counter />
				{
					articleLength > 0 ? this.props.articles.map(elem => {
						return <Article id={elem.id} key={elem.id} />
					}) : "No articles"
				}
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		articles: state.articlesReducer.get("entities"),
		loading: state.articlesReducer.get("loading"),
		loaded: state.articlesReducer.get("loaded")
	}
}


export default connect(mapStateToProps, {getArticles})(ArticlesList)