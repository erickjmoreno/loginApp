import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import LogPage from "./pages/LogPage";

function App() {
	const pageStyle = { backgroundColor: "#FFF", height: "100vh" };
	const { isLoggedIn, isLoading, userData } = useContext(AuthContext);

	const Router = () => (
		<Switch>
			<Route exact path="/">
				<Dashboard userData={userData} />
			</Route>
		</Switch>
	);

	return (
		<div className="" style={pageStyle}>
			<Header />
			{isLoggedIn ? <Router /> : <LogPage isLoading={isLoading} />}
			<Footer />
		</div>
	);
}

export default App;
