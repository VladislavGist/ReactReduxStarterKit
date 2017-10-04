import React, {Component} from "react"

class FormComment extends Component {

	state = {
		userName: "",
		text: ""
	}

	onChangeValue(e) {
		let stateElem = e.target.getAttribute("data-state")

		// let minLength = e.target.getAttribute("data-minLength")
		let maxLength = e.target.getAttribute("data-maxLength")

		if(e.target.value.length > maxLength) {
			return false
		} else {
			return (
				this.setState({
					[stateElem]: e.target.value
				})
			)
		}
	}

	render() {
		return (
			<form action="">
				<input
					type="text"
					placeholder="User name"
					data-minLength={8}
					data-maxLength={15}
					value={this.state.userName}
					data-state="userName"
					onChange={::this.onChangeValue} />

				<textarea
					name=""
					id=""
					cols="30"
					rows="3"
					data-minLength={8}
					data-maxLength={60}
					value={this.state.text}
					data-state="text"
					placeholder="Text"
					onChange={::this.onChangeValue} />

				<a href="javascript:void(0)">Submit</a>
			</form>
		)
	}
}

export default FormComment