import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../AuthContext";

import LogPage from "./LogPage";

test("LogPage mounts correctly", () => {
	const { getByText } = render(
		<AuthProvider>
			<LogPage isLoading={false} />
		</AuthProvider>
	);

	getByText("Welcome");
	const buttonLogin = getByText("Login");
	userEvent.click(buttonLogin);

	getByText("Login");
	getByText("Email Address");
	getByText("Password");
	getByText("Submit");

	const buttonReturn = getByText("Return");
	userEvent.click(buttonReturn);

	getByText("Welcome");
});

test("login behavior", async () => {
	const { getByText, getByTestId } = render(
		<AuthProvider>
			<LogPage isLoading={false} />
		</AuthProvider>
	);

	getByText("Welcome");
	const buttonLogin = getByText("Login");
	userEvent.click(buttonLogin);

	getByText("Login");
	getByText("Email Address");
	getByText("Password");
	getByText("Submit");

	const emailInput = getByTestId("email");
	userEvent.type(emailInput, "test@test.com");
	expect(emailInput).toHaveValue("test@test.com");

	const passwordInput = getByTestId("password");
	userEvent.type(passwordInput, "test");
	expect(passwordInput).toHaveValue("test");

	const submitButton = getByText("Submit");
	userEvent.click(submitButton);
});

test("When is Loading should display loading...", async () => {
	const { getByText, getByTestId } = render(
		<AuthProvider>
			<LogPage isLoading={true} />
		</AuthProvider>
	);

	getByText("Loading...");
});
