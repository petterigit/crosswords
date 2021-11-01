import React from "react";
import { App } from "../App";
import { render, screen } from "@testing-library/react";

test("App renders an app div", () => {
	render(<App />);

	const app = screen.getByTitle("Page");
	expect(app).toBeTruthy();
});

test("App renders child components", () => {
	render(<App />);

	const header = screen.getByRole("banner");
	expect(header).toBeTruthy();

	const mainContent = screen.getByRole("main");
	expect(mainContent).toBeTruthy();

	const footer = screen.getByRole("contentinfo");
	expect(footer).toBeTruthy();
});
