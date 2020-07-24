import React from "react";
import Container from "@material-ui/core/Container";
import oyster_mark_text_white from "../../assets/oyster_mark_text_white.svg";

export default function Footer() {
	const style = {
		backgroundColor: "#014651",
		width: "100%",
		padding: "2em",
		minHeight: "150px",
		position: "fixed",
		bottom: "0",
		textAlign: "center",
		color: "#fff",
	};
	return (
		<footer style={style}>
			<Container>
				<img src={oyster_mark_text_white} alt="oyster logo footer" />
				<h3>Site made for Testing purposes</h3>
			</Container>
		</footer>
	);
}
