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

	const languageMenu = screen.getByTitle("Language Menu");
	fireEvent.click(languageMenu);
	await waitFor(() => screen.getByTitle("Language Menu Dropdown"));
	expect(screen.getByTitle("Language Menu Dropdown")).toHaveTextContent("Language Menu Coming Soon!");
	fireEvent.click(languageMenu);
	await waitForElementToBeRemoved(() => screen.getByTitle("Language Menu Dropdown"));

	const instructionMenu = screen.getByTitle("Instruction Menu");
	fireEvent.click(instructionMenu);
	await waitFor(() => screen.getByTitle("Instruction Menu Dropdown"));
	expect(screen.getByTitle("Instruction Menu Dropdown")).toHaveTextContent("InstructionLanguage Menu Coming Soon!");
	fireEvent.click(instructionMenu);
	await waitForElementToBeRemoved(() => screen.getByTitle("Instruction Menu Dropdown"));

	const settingsMenu = screen.getByTitle("Settings Menu");
	fireEvent.click(settingsMenu);
	await waitFor(() => screen.getByTitle("Settings Menu Dropdown"));
	expect(screen.getByTitle("Settings Menu Dropdown")).toHaveTextContent("Settings Menu Coming Soon!");
	fireEvent.click(settingsMenu);
	await waitForElementToBeRemoved(() => screen.getByTitle("Setting Menu Dropdown"));
});
