import React from "react";
import { GameModeButton } from "./GameModeButton";
import "./main-content.scss";

export const GameModeContainer = () => {
	return (
		<div className="main-game-mode-container" title="Game Mode Selection">
			<GameModeButton text="Play Along" key="1" />
			<GameModeButton text="Play Vs. A Bot" key="2" />
			<GameModeButton text="Word Checker" key="3" />
		</div>
	);
};
