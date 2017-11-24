import React, { Component } from 'react'

export default OriginalComponent => class WeappedComponent extends Component {
	state = {
		isOpenId: null
	}

	getOpenArticle(idElem) {
		this.setState({ isOpenId: idElem })
	}

	render() {
		return <OriginalComponent { ...this.props } { ...this.state } getOpenArticle={ ::this.getOpenArticle } />
	}
}