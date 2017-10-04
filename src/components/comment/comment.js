import React, {Component} from "react"

class Comment extends Component {
	render() {
		return (
			<div>
				<h4>{this.props.user}</h4>
				<p>{this.props.text}</p>
			</div>
		)
	}
}

export default Comment