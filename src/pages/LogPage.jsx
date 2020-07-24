import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import LoginForm from "../components/LoginForm/LoginForm";
import ButtonWithStyle from "../HOCs/Button/ButtonWithStyle";

export default function LogPage(props) {
	const [isActive, setIsActive] = useState(false);
	const { isLoading } = props;

	function toggleForm() {
		setIsActive(!isActive);
	}

	return (
		<Container
			style={{
				padding: "1em",
				maxWidth: "350px",
			}}
		>
			<Paper style={{ padding: "1em", textAlign: "center" }}>
				{isLoading ? (
					<div>
						<h3>Loading...</h3>
						<CircularProgress />
					</div>
				) : isActive ? (
					<LoginForm toggleForm={toggleForm} />
				) : (
					<div>
						<h1 style={{ color: "#000" }}> Welcome </h1>
						<ButtonWithStyle variant="contained" onClick={() => toggleForm()}>
							Login
						</ButtonWithStyle>
					</div>
				)}
			</Paper>
		</Container>
	);
}
