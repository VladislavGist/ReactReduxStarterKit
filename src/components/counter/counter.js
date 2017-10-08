import React, {Component} from "react"
import {connect} from "react-redux"

//actions
import {replaceNumber} from "../../redux/actions/firstActions"

class Counter extends Component {

	increment() {
		this.props.replaceNumber(this.props.cnt + 1)
	}

	decrement() {
		this.props.replaceNumber(this.props.cnt - 1)
	}

	render() {
		return (
			<div>
				Counter: {this.props.cnt}
				<button onClick={::this.increment}>Increment</button>
				<button onClick={::this.decrement}>Decrement</button>
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		cnt: state.firstReducer.get("cnt")
	}
}

export default connect(mapStateToProps, {replaceNumber})(Counter)