import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import ButtonWithStyle from "../../HOCs/Button/ButtonWithStyle";

export default function LogOut() {
	const { logOut } = useContext(AuthContext);
	return <ButtonWithStyle onClick={logOut}>LogOut</ButtonWithStyle>;
}
