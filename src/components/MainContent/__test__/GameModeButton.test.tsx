import React from "react";
import { GameModeButton } from "../GameModeButton";
import { render, screen } from "@testing-library/react";

test("GameModeButton renders", () => {
	render(<GameModeButton text="Game Mode 1" />);
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
		<div>
			{buttons.map((button) => (
				<GameModeButton text={button.text} key={button.id} />
			))}
		</div>
	);

	for (let i = 0; i < buttons.length; i++) {
		const buttonEl = screen.getByTitle(buttons[i].text + " Button");
		expect(buttonEl).toBeTruthy();
		expect(buttonEl.textContent).toBe(buttons[i].text);
	}
});
