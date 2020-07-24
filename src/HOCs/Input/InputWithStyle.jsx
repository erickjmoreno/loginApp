import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
	root: {
		"& label.Mui-focused": {
			color: "#1fd7ae",
			"&:active": {
				color: "#14a383",
			},
		},
	},
};

function TextFieldWithStyle(props) {
	return (
		<TextField
			className={props.classes.root}
			style={props.style}
			margin={props.margin}
			required
			fullWidth
			autoFocus
			id={props.id}
			inputProps={{ "data-testid": props.id }}
			label={props.label}
			name={props.name}
			autoComplete={props.autoComplete}
			onChange={props.onChange}
			type={props.type}
			value={props.value}
			variant={props.variant}
		>
			{props.children}
		</TextField>
	);
}

export default withStyles(styles)(TextFieldWithStyle);
