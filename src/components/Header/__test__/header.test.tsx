import React from "react";
import { Header } from "../Header";
import { render, screen } from "@testing-library/react";

test("Header renders", () => {
	render(<Header />);
	const header = screen.getByRole("banner");
	expect(header).toBeTruthy();
});

test("Header contains logo & site name in the left corner", () => {
	render(<Header />);
	const header = screen.getByRole("banner");

	const logo = header.querySelector(".header-logo");
	expect(logo).toBeTruthy();

	const headerName = header.querySelector(".header-site-name");
	expect(headerName).toBeTruthy();
	expect(headerName!.textContent).toBe("CROSSWORDS");
});

test("Header contains language, instructions, and settings menus", () => {
	render(<Header />);
	const header = screen.getByRole("banner");

	const languageMenu = header.querySelector(".header-language-menu");
	expect(languageMenu).toBeTruthy();
	const instructionsMenu = header.querySelector(".header-instructions-menu");
	expect(instructionsMenu).toBeTruthy();
	const settingsMenu = header.querySelector(".header-settings-menu");
	expect(settingsMenu).toBeTruthy();
});
