import React, {Component} from "react"
import {connect} from "react-redux"

//actions
import {getComments} from "../../redux/actions/commentsActions"

//components
import Comment from "../comment/comment"
import FormComment from "../formComments/formComments"
import Loader from "../loader/loader"

import "./commentList.sass"

class CommentsList extends Component {

	state = {
		isOpen: false
	}

	getComments = () => {
		this.setState({
			isOpen: true
		})

		//чтобы не загружать загруженные комменты повторно
		if(this.props.commentsList === undefined) {
			this.props.getComments(this.props.id)
		}
	}

	showComments = () => {
		let {commentsList} = this.props

		//если есть св-во loading, то показываем лоадер
		if(this.props.commentsList.loading === true) {
			return <Loader />
		} else if(this.props.commentsList.loading === false) {
			return <div>Error loading</div>
		} else {
			return (
				<div>
					{
						commentsList !== undefined ? commentsList.map(elem => {
							return <Comment key={elem.id} user={elem.user} text={elem.text} />
						}) : ""
					}
					<FormComment />
				</div>
			)
		}
	}

	hideComments = () => {
		this.setState({
			isOpen: false
		})
	}

	getContent = () => {
		return(
			<div>
				{
					this.state.isOpen ? this.showComments() : ""
				}
				{
					this.state.isOpen ? <button onClick={this.hideComments}>Hide comments</button> : <button onClick={this.getComments}>Show comments</button>
				}
			</div>
		)
	}

	render() {
		return (
			<div>
				{
					this.props.comments.length > 0 ? this.getContent() : "No comments"
				}
			</div>
		)
	}
}

let mapStateToProps = (state, ownProps) => {
	return {
		commentsList: state.comments.toJS()[ownProps.id]
	}
}

export default connect(mapStateToProps, {getComments})(CommentsList)