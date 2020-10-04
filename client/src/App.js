import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";

import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Route excat path="/" component={Landing} />
				<section className="container">
					<Alert />
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</section>
			</Router>
		</Provider>
	);
}

export default App;
