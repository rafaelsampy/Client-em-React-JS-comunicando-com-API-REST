import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import Orientation from './pages/create';

import Menu from './pages/menu';

import Orientacao from './pages/orientacao';
import listOrientacao from './pages/listOrientacao';

import Orientador from './pages/orientador';
import listOrientador from './pages/listOrientador';

import Orientado from './pages/orientado';
import listOrientado from './pages/listOrientado';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Menu} />
			
			<Route path="/orientador" component={Orientador} />
			<Route path="/listOrientacao" component={listOrientacao} />

			<Route path="/orientado" component={Orientado} />
			<Route path="/listOrientador" component={listOrientador} />

			<Route path="/orientacao" component={Orientacao} />
			<Route path="/listOrientado" component={listOrientado} />
		</Switch>
	</BrowserRouter>
);

export default Routes;