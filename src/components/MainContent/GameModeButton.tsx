import React from "react";
import "./main-content.scss";

import { GameModeButtonProps } from "../../types/propTypes";

export const GameModeButton = ({ text }: GameModeButtonProps) => {
	return (
		<div className="game-mode-button" title="Game Mode Button">
			<p>{text}</p>
		</div>
	);
};
