import React from "react";
import { MemoryRouter as Router } from "react-router";
import { MainContent } from "../MainContent";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("MainContent renders", () => {
	render(
		<Router>
			<MainContent />)
		</Router>
	);
	const mainContent = screen.getByRole("main");
	expect(mainContent).toBeTruthy();
});

test("Child Components Render", () => {
	render(
		<Router>
			<MainContent />
		</Router>
	);

	const gameModeContainer = screen.getByTitle("Game Mode Selection");
	expect(gameModeContainer).toBeTruthy();
});

/* TODO: Can't find element after user Event
test("Play Along navigation works", () => {
	render(
		<Router>
			<MainContent />
		</Router>
	);
	const buttonEl = screen.getByTitle("Play Along Button");
	
	expect(screen.getByTitle("Play Along")).toBeInTheDocument();
});

test("Play vs. A Bot navigation works", () => {
	render(
		<Router>
			<MainContent />
		</Router>
	);
	const buttonEl = screen.getByTitle("Play vs. A Bot Button");
	userEvent.click(buttonEl, { button: 0 });
	expect(screen.getByTitle("Play vs. A Bot")).toBeInTheDocument();
});

test("Word Checker navigation works", () => {
	render(
		<Router>
			<MainContent />
		</Router>
	);
	const buttonEl = screen.getByTitle("Word Checker Button");
	userEvent.click(buttonEl, { button: 0 });
	expect(screen.getByTitle("Word Checker")).toBeInTheDocument();
});

*/
