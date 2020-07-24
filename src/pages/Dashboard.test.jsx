import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./Dashboard";
import { AuthProvider } from "../AuthContext";

test("Dashboard renders correctly", () => {
	const { getByText } = render(
		<AuthProvider>
			<Dashboard userData={{ username: "test" }} />
		</AuthProvider>
	);

	getByText("Dashboard");
	getByText("Welcome test");
	const button = getByText("LogOut");
	userEvent.click(button);
});
