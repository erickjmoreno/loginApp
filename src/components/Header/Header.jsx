import React from "react";
import oyster_mark_test from "../../assets/oyster_mark_text.svg";
import Container from "@material-ui/core/Container";

export default function Header() {
	const style = { height: "3em", padding: "2em", textAlign: "center" };
	return (
		<header style={style}>
			<Container>
				<img src={oyster_mark_test} alt="oyster logo" />
			</Container>
		</header>
	);
}
