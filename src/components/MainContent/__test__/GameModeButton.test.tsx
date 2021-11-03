import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { GameModeButton } from "../GameModeButton";
import { render, screen } from "@testing-library/react";

test("GameModeButton renders", () => {
	render(
		<Router>
			<GameModeButton path="/" text="Game Mode 1" />
		</Router>
	);
	const gameModeButton = screen.getByTitle("Game Mode 1 Button");
	expect(gameModeButton).toBeTruthy();
});

test("GameModeButton takes in props", () => {
	const buttons = [
		{ id: "1", text: "Play Along" },
		{ id: "2", text: "Play Vs. A Bot" },
		{ id: "3", text: "Word Checker" },
	];
	render(
		<Router>
			{buttons.map((button) => (
				<GameModeButton path="/" text={button.text} key={button.id} />
			))}
		</Router>
	);

	for (let i = 0; i < buttons.length; i++) {
		const buttonEl = screen.getByTitle(buttons[i].text + " Button");
		expect(buttonEl).toBeTruthy();
		expect(buttonEl.textContent).toBe(buttons[i].text);
	}
});
