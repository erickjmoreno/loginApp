import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = {
	root: {
		backgroundColor: "#1fd7ae",
		color: "white",
		fontWeight: "600",
		margin: "1em",
		"&:hover": {
			backgroundColor: "#14a383",
		},
		"&:active": {
			backgroundColor: "#49f0ac",
		},
	},
};

function ButtonWithStyle({ children, classes, variant, type, onClick }) {
	return (
		<Button className={classes.root} variant={variant} type={type} onClick={onClick}>
			{children}
		</Button>
	);
}

export default withStyles(styles)(ButtonWithStyle);
