import React from "react";
import { GameModeButton } from "../GameModeButton";
import { GameModeContainer } from "../GameModeContainer";
import { render } from "@testing-library/react";

test("GameModeButton renders", () => {
	const { getByTestId } = render(<GameModeButton text="" id="" />);
	const gameModeButton = getByTestId("game-mode-button");
	expect(gameModeButton).toBeTruthy();
});

test("GameModeButton takes in props", () => {
	const buttons = [
		{ id: "1", text: "Play Along" },
		{ id: "2", text: "Play Vs. A Bot" },
		{ id: "3", text: "Word Checker" },
	];

	const { getByTestId } = render(
		<div>
			{buttons.map((button) => {
				<GameModeButton text={button.text} id={button.id} />;
			})}
		</div>
	);

	for (const button of buttons) {
		const buttonEl = getByTestId(`game-mode-button-${button.id}`);
		expect(buttonEl).toBeTruthy();
		expect(buttonEl.textContent).toBe(button.text);
	}
});
