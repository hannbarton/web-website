import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Browser from './components/Browser'

class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Browser}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
