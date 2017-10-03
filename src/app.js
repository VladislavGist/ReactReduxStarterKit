import React, { Component } from "react"

import "./styles/styles.sass"
import "./styles/base.sass"

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default App