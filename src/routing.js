import React, { Component } from 'react'
import { Provider}  from 'react-redux'

import { Router, hashHistory } from 'react-router'

import { store } from './store'

// components
import App from './app'
import Counter from './components/counter/counter'
import NotFound from './components/notFound/notFound'

const routesConfig = [
    { path: '/', component: App },
	{ path: '/counter', component: Counter },
	{ path: '*', component: NotFound }
]

class Routing extends Component {
	render() {
		return (
			<Provider store={ store }>
				<Router history={ hashHistory } routes={ routesConfig } />
			</Provider>
		)
	}
}

export default Routing