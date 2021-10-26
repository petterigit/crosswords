import React from "react";
import { App } from "../App";
import { render } from "@testing-library/react";

test("App renders an app div", () => {
	const { getByTestId } = render(<App />);

	const app = getByTestId("app");
	expect(app).toBeTruthy();
});

test("App contains header, main-content, and footer divs", () => {
	const { getByTestId } = render(<App />);

	const app = getByTestId("app");

	const header = app.querySelector(".header");
	expect(header).toBeTruthy();

	const mainContent = app.querySelector(".main-content");
	expect(mainContent).toBeTruthy();

	const footer = app.querySelector(".footer");
	expect(footer).toBeTruthy();
});
