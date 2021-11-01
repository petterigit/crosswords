import React from "react";
import { GameModeButton } from "../GameModeButton";
import { GameModeContainer } from "../GameModeContainer";
import { render, screen } from "@testing-library/react";

test("GameModeButton renders", () => {
	render(<GameModeButton text="" />);
	const gameModeButton = screen.getByTitle("Game Mode Selection Button");
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

	const renderedButtons = screen.getAllByTitle("Game Mode Selection Button");
	for (let i = 0; i < buttons.length; i++) {
		const buttonEl = renderedButtons[i];
		expect(buttonEl).toBeTruthy();
		expect(buttonEl.textContent).toBe(buttons[i].text);
	}
});
