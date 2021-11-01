import React from "react";
import { GameModeButton } from "./GameModeButton";
import "./main-content.scss";

export const GameModeContainer = () => {
	return (
		<div className="main-game-mode-container" title="Game Mode Selection">
			<ul>
				<li>
					<GameModeButton text="Play Along" key="1" />
				</li>
				<li>
					<GameModeButton text="Play Vs. A Bot" key="2" />
				</li>
				<li>
					<GameModeButton text="Word Checker" key="3" />
				</li>
			</ul>
		</div>
	);
};
