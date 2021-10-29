import React from "react";
import { GameModeContainer } from "../GameModeContainer";
import { render, screen } from "@testing-library/react";

test("GameModeContainer renders", () => {
	render(<GameModeContainer />);
	const gameModeContainer = screen.getByTitle("Game Mode Selection");
	expect(gameModeContainer).toBeTruthy();
});

test("Game mode selection is always visible", () => {
	render(<GameModeContainer />);
	const gameModeContainer = screen.getByTitle("Game Mode Selection");

	expect(gameModeContainer).toBeVisible();
});
