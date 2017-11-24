import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//actions
import { actions as counterActions } from '../../ducks/counter'

class Counter extends Component {

	increment = () => {
		this.props.replaceNumber(this.props.cnt + 1)
	}

	decrement = () => {
		this.props.replaceNumber(this.props.cnt - 1)
	}

	render() {
		return (
			<div>
				Counter: { this.props.cnt }
				<button onClick={ this.increment }>Increment</button>
				<button onClick={ this.decrement }>Decrement</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		cnt: state.firstReducer.get('cnt')
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)