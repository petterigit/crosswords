import React from "react";
import { MainContent } from "../MainContent";
import { render, screen, fireEvent } from "@testing-library/react";

test("MainContent renders", () => {
	render(<MainContent />);
	const mainContent = screen.getByRole("main");
	expect(mainContent).toBeTruthy();
});

test("Child Components Render", () => {
	render(<MainContent />);

	const gameModeContainer = screen.getByTitle("Game Mode Selection");
	expect(gameModeContainer).toBeTruthy();
});

test("Game mode buttons link to correct locations", () => {
	render(<MainContent />);

	const buttons = [
		{ text: "Play Along", link: "/playAlong" },
		{ text: "Play Vs. A Bot", link: "/playABot" },
		{ text: "Word Checker", link: "/wordCheck" },
	];

	for (let i = 0; i < buttons.length; i++) {
		const buttonEl = screen.getByTitle(buttons[i].text + " Button");
		fireEvent.click(buttonEl);
		expect(window.location.pathname).toBe(buttons[i].link);
	}
});
