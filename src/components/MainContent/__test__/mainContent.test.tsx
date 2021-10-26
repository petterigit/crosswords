import React from "react";
import { MainContent } from "../MainContent";
import { render } from "@testing-library/react";

test("MainContent renders", () => {
	const { getByTestId } = render(<MainContent />);
	const mainContent = getByTestId("main-content");
	expect(mainContent).toBeTruthy();
});
