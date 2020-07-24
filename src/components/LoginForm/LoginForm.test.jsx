import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../AuthContext";

import LoginForm from "./LoginForm";

test("Check Component mounting and rendering correctly", () => {
	const { getByText } = render(
		<AuthProvider>
			<LoginForm />
		</AuthProvider>
	);

	getByText("Login");
	getByText("Email Address");
	getByText("Password");
	getByText("Submit");
	getByText("Return");
});

test("Login sends loginData correctly", async () => {
	const component = render(
		<AuthProvider>
			<LoginForm />
		</AuthProvider>
	);

	const { getByText, getByTestId } = component;

	const emailInput = getByTestId("email");
	userEvent.type(emailInput, "test@test.com");
	expect(emailInput).toHaveValue("test@test.com");

	const passwordInput = getByTestId("password");
	userEvent.type(passwordInput, "test");
	expect(passwordInput).toHaveValue("test");

	const submitButton = getByText("Submit");
	userEvent.click(submitButton);
});
