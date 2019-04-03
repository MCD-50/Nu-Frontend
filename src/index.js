//from system
import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history'; // static app
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore'

//import from app
import routes from '../src/route/route';

//import styles here
//import '../src/style/css/antd.css';
import '../src/style/css/app.css';
//import js files
//import "../src/style/js/antd.js";

//configure store
const store = configureStore();

window.onload = () => {
	render(
		<Provider store={store}>
			<Router history={createBrowserHistory()}>
				{routes}
			</Router>
		</Provider>, document.getElementById('app')
	);
};
