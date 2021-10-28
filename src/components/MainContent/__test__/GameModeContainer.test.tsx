import React from "react";
import { GameModeContainer } from "../GameModeContainer";
import { render } from "@testing-library/react";

test("GameModeContainer renders", () => {
	const { getByTestId } = render(<GameModeContainer />);
	const gameModeContainer = getByTestId("game-mode-container");
	expect(gameModeContainer).toBeTruthy();
});

test("Game mode selection is always visible", () => {
	const { getByTestId } = render(<GameModeContainer />);
	const gameModeContainer = getByTestId("game-mode-container");

	expect(gameModeContainer).toBeVisible();
});
