import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Cover from './components/pages/Cover';
import Options from './components/pages/Options';
import DrinkingWater from './components/pages/DrinkingWater/DrinkingWater';
import Toilet from './components/pages/Toilet/Toilet';
import Bin from './components/pages/Bin/Bin';
import Bench from './components/pages/Bench/Bench';
import Map from './components/pages/Map/Map';
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Theme from './style/Theme';
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
							<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
							{/*<Box m={3}>*/}
							<Switch>
								<Route
									path="/index.html"
									component={Options} />
								<Route
									exact
									path="/"
									component={Options} />
								<Route
									exact
									path="/Options"
									component={Options} />
								<Route
									exact
									path="/DrinkingWater"
									component={DrinkingWater} />
								<Route
									exact
									path="/Toilet"
									component={Toilet} />
								<Route
									exact
									path="/Bin"
									component={Bin} />
								<Route
									exact
									path="/Bench"
									component={Bench} />
								<Route
									exact
									path="/Map/:type"
									component={Map} />
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
