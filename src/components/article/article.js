import React, {Component} from "react"
import {connect} from "react-redux"

//components
import CommentsList from "../commentsList/commentsList"

//selectors
import {articlesSelector} from "../../selectors/index"

class Article extends Component {

	render() {
		console.log("-- update Article")

		let {title, comments = []} = this.props.article[0]

		return (
			<div>
				<h3>{title}</h3>
				<CommentsList id={this.props.id} comments={comments} />
			</div>
		)
	}
}

let mapStateToProps = () => {
	let artSelector = articlesSelector()

	return (state, ownProps) => {
		let ownPropsId = ownProps.id
		return {
			article: artSelector(state, ownPropsId)
		}
	}
}

export default connect(mapStateToProps)(Article)