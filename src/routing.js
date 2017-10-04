import React, {Component} from "react"
import {Provider} from "react-redux"

import {Router, Route, hashHistory, browserHistory} from "react-router";

import {store} from "./redux/store/store"

// //components
import App from "./app"
import ArticlesList from "./components/articlesList/articlesList"

class Routing extends Component {

	history() {
		switch(process.env.NODE_ENV) {
		case "development":
			return browserHistory
			break
		case "testBrowser":
			return hashHistory
			break
		case "production":
			return browserHistory
			break
		default:
			return browserHistory
		}
	}

	render() {
		return (
			<Provider store={store}>
				<Router history={::this.history()}>
					<Route component={App}>
						<indexRoute path="/" component={ArticlesList} />
					</Route>
				</Router>
			</Provider>
		)
	}
}

export default Routing