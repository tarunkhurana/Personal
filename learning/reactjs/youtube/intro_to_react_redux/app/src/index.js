import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/presentation/Intro'
import {Search} from "./components/layout";

const app = (
	<Provider store={store.configure(null)}>
		<Intro/>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))