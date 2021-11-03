import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { GameModeContainer } from "../GameModeContainer";
import { render, screen } from "@testing-library/react";

test("GameModeContainer renders", () => {
	render(
		<Router>
			<GameModeContainer />
		</Router>
	);
	const gameModeContainer = screen.getByTitle("Game Mode Selection");
	expect(gameModeContainer).toBeTruthy();
});

test("Game mode selection is always visible", () => {
	render(
		<Router>
			<GameModeContainer />
		</Router>
	);
	const gameModeContainer = screen.getByTitle("Game Mode Selection");

	expect(gameModeContainer).toBeVisible();
});
