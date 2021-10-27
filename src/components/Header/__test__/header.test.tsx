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
	const headerStyle = window.getComputedStyle(header);

	const background = headerStyle.getPropertyValue("background");
	expect(background).toMatch(/12, 29, 14/);

	const width = header.offsetWidth;
	expect(width).toEqual(window.innerWidth);
	const height = header.offsetHeight;
	expect(height).toEqual(window.innerHeight / 18);
});

test("Header contains logo & site name in the left corner", () => {
	const { getByTestId } = render(<Header />);
	const header = getByTestId("header");

	const logo = header.querySelector(".header-logo");
	expect(logo).toBeTruthy();
	const logoStyle = window.getComputedStyle(logo!);
	expect(logoStyle.width).toBe("19px");
	expect(logoStyle.height).toBe("19px");

	const headerName = header.querySelector(".header-site-name");
	expect(headerName).toBeTruthy();
	expect(headerName!.textContent).toBe("CROSSWORDS");
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
