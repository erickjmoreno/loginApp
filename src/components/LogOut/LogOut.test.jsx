import React from "react";
import LogOut from "./LogOut";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../AuthContext";

test("LogOut Button renders correctly", () => {
	const { getByText } = render(
		<AuthProvider>
			<LogOut />
		</AuthProvider>
	);

	const LogOutButton = getByText("LogOut");
	userEvent.click(LogOutButton);
});
