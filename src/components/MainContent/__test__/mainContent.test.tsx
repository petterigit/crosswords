import React from "react";
import { MainContent } from "../MainContent";
import { render, screen } from "@testing-library/react";

test("MainContent renders", () => {
	render(<MainContent />);
	const mainContent = screen.getByTitle("Main Content");
	expect(mainContent).toBeTruthy();
});

test("Children Components Render", () => {
	render(<MainContent />);

	const gameModeContainer = screen.getByTitle("Game Mode Selection");
	expect(gameModeContainer).toBeTruthy();
});
