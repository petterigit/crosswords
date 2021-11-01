import React from "react";
import { Header } from "../Header";
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";

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

	const languageMenu = screen.getByTitle("Language Menu");
	expect(languageMenu).toBeTruthy();
	const instructionMenu = screen.getByTitle("Instruction Menu");
	expect(instructionMenu).toBeTruthy();
	const settingsMenu = screen.getByTitle("Settings Menu");
	expect(settingsMenu).toBeTruthy();
});

test("Rendered menus are interactable", async () => {
	render(<Header />);

	/* Get Menus */
	const languageMenu = screen.getByTitle("Language Menu");
	const instructionMenu = screen.getByTitle("Instruction Menu");
	const settingsMenu = screen.getByTitle("Settings Menu");

	/* Show Dropdown menus */
	fireEvent.click(languageMenu);
	fireEvent.click(instructionMenu);
	fireEvent.click(settingsMenu);

	/* Make sure dropdowns are shown */
	await waitFor(() => screen.getByTitle("Language Menu Dropdown"));
	await waitFor(() => screen.getByTitle("Instruction Menu Dropdown"));
	await waitFor(() => screen.getByTitle("Settings Menu Dropdown"));

	/* Get Dropdown menus */
	const languageDropDown = screen.getByTitle("Language Menu Dropdown");
	const instructionDropDown = screen.getByTitle("Instruction Menu Dropdown");
	const settingsDropDown = screen.getByTitle("Settings Menu Dropdown");

	/* Assert dropdown contents */
	expect(languageDropDown).toHaveTextContent("Language Menu Coming Soon!");
	expect(instructionDropDown).toHaveTextContent("Instruction Menu Coming Soon!");
	expect(settingsDropDown).toHaveTextContent("Settings Menu Coming Soon!");

	/* Hide Dropdowns */
	fireEvent.click(languageMenu);
	fireEvent.click(instructionMenu);
	fireEvent.click(settingsMenu);

	/* Assert hidden dropdowns */
	expect(languageDropDown).not.toBeInTheDocument();
	expect(instructionDropDown).not.toBeInTheDocument();
	expect(settingsDropDown).not.toBeInTheDocument();
});
