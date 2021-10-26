import React from "react";
import { Header } from "../Header";
import { render } from "@testing-library/react";

test("Header renders", () => {
	const { getByTestId } = render(<Header />);
	const header = getByTestId("header");
	expect(header).toBeTruthy();
});

test("Header has a background that scales appropriately", () => {
	const { getByTestId } = render(<Header />);
	const header = getByTestId("header");
});

test("Header contains logo & site name in the left corner", () => {
	const { getByTestId } = render(<Header />);
	const header = getByTestId("header");
});

test("Header contains language, instructions, and settings menus", () => {
	const { getByTestId } = render(<Header />);
	const header = getByTestId("header");

	const languageMenu = header.querySelector(".header-language-menu");
	expect(languageMenu).toBeTruthy();
	const instructionsMenu = header.querySelector(".header-instructions-menu");
	expect(instructionsMenu).toBeTruthy();
	const settingsMenu = header.querySelector(".header-settings-menu");
	expect(settingsMenu).toBeTruthy();
});
