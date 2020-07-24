import React, { useState, useContext } from "react";
import TextFieldWithStyle from "../../HOCs/Input/InputWithStyle";
import ButtonWithStyle from "../../HOCs/Button/ButtonWithStyle";
import { AuthContext } from "../../AuthContext";

export default function LoginForm(props) {
	const { toggleForm } = props;
	const { logIn } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		const { value, name } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		logIn(loginData);
	}

	return (
		<form data-testid="form" onSubmit={handleSubmit} style={{ textAlign: "center" }}>
			<h1 style={{ color: "#000", textAlign: "center", margin: "0" }}>Login</h1>
			<TextFieldWithStyle
				style={{ maxWidth: "300px" }}
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
				onChange={handleChange}
				type="email"
				value={loginData.email}
			/>
			<TextFieldWithStyle
				style={{ maxWidth: "300px" }}
				margin="normal"
				required
				fullWidth
				id="password"
				label="Password"
				name="password"
				type="password"
				value={loginData.password}
				autoFocus
				onChange={handleChange}
			/>
			<ButtonWithStyle variant="contained" type="submit">
				Submit
			</ButtonWithStyle>
			<ButtonWithStyle variant="contained" onClick={toggleForm}>
				Return
			</ButtonWithStyle>
		</form>
	);
}
