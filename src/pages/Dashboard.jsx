import React from "react";
import Container from "@material-ui/core/Container";
import LogOut from "../components/LogOut/LogOut";
import Paper from "@material-ui/core/Paper";

export default function Dashboard({ userData }) {
	return (
		<Container>
			<Paper style={{ padding: "1em", textAlign: "center" }}>
				<h1>Dashboard</h1>
				<h3>Welcome {userData.username}</h3>
				<LogOut />
			</Paper>
		</Container>
	);
}
