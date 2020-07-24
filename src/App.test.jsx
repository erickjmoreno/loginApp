import React from "react";
import { render } from "@testing-library/react";

import { AuthProvider } from "./AuthContext";
import App from "./App";

test("Check App workflow", () => {
	const { getByText, getByAltText } = render(
		<AuthProvider>
			<App />
		</AuthProvider>
	);

	getByAltText("oyster logo");
	getByText("Welcome");
	getByText("Login");
	getByAltText("oyster logo footer");
	getByText("Site made for Testing purposes");
});
