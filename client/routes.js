import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/Main'

class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
