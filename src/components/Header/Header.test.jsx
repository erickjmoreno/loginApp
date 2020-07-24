import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

test("Check Component mounting and rendering correctly", () => {
	const { getByText, getByAltText } = render(<Header />);

	getByAltText("oyster logo");
});
