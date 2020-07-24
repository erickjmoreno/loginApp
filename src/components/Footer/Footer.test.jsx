import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

test("Check Component mounting and rendering correctly", () => {
	const { getByText, getByAltText } = render(<Footer />);

	getByText("Site made for Testing purposes");
	getByAltText("oyster logo footer");
});
