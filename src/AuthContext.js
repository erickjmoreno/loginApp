import React, { useState, useEffect } from "react";
import loginHandler, { LOGIN, CHECK_TOKEN } from "./utils/userAuthentication";
import { isLoginSuccessful, isLoginFailure } from "./utils/sessionStatus";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	async function logIn(credentials) {
		setIsLoading(true);
		const { status, userData } = await loginHandler({ type: LOGIN, payload: credentials });
		if (isLoginSuccessful(status)) {
			localStorage.setItem("userCredentials", JSON.stringify(userData));
			setUserData(userData);
			setIsLoggedIn(true);
		}
		if (isLoginFailure(status)) {
			alert("Invalid credentials");
		}
		setIsLoading(false);
	}

	async function keepSessionAlive(payload) {
		setIsLoading(true);
		const { status } = await loginHandler({ type: CHECK_TOKEN, payload });
		if (isLoginSuccessful(status)) {
			setUserData(payload);
			setIsLoggedIn(true);
		}
		if (isLoginFailure(status)) localStorage.removeItem("userCredentials");
		setIsLoading(false);
	}

	function logOut() {
		localStorage.removeItem("userCredentials");
		setUserData({});
		setIsLoggedIn(false);
	}

	useEffect(() => {
		async function checkLoginToServer() {
			const user = localStorage.getItem("userCredentials");
			if (user) {
				const userData = JSON.parse(user);
				keepSessionAlive(userData);
			}
		}
		checkLoginToServer();
	}, []);

	return (
		<AuthContext.Provider value={{ isLoggedIn, logOut, logIn, userData, isLoading }}> {children} </AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
