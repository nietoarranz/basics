import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Cover from './components/pages/Cover';
import Home from './components/pages/Home';
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Theme from 'style/Theme';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
	return (
		<React.StrictMode>
			<HashRouter>

				<Provider store={store}>
					<ThemeProvider theme={Theme}>
					<div>
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
						{/*<Box m={3}>*/}
						<Switch>
							<Route
								path="/index.html"
								component={Cover} />
							<Route
								exact
								path="/"
								component={Cover} />
							<Route
								exact
								path="/home"
								component={Home} />
						</Switch>
						{/*</Box>*/}
					</div>
					</ThemeProvider>
				</Provider>
			</HashRouter>
		</React.StrictMode>
	);
}

export default App;
