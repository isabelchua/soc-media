import React, { useEffect } from "react";
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
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

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
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
					</Switch>
				</section>
			</Router>
		</Provider>
	);
}

export default App;
