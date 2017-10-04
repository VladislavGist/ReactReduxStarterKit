import React, {Component} from "react"
import {connect} from "react-redux"

//actions
import {getArticles} from "../../redux/actions/articlesActions"

//components
import Article from "../article/article"

class ArticlesList extends Component {
	componentDidMount() {
		this.props.getArticles()
	}

	render() {
		let articleLength = Object.keys(this.props.articles).length
		console.log("-- update ArticlesList")
		return (
			<div className="dashboard">
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
		articles: state.articlesReducer
	}
}


export default connect(mapStateToProps, {getArticles})(ArticlesList)