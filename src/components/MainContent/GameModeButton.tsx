import React from "react";
import "./main-content.scss";

import { GameModeButtonProps } from "../../types/propTypes";

export const GameModeButton = ({ text }: GameModeButtonProps) => {
	return (
		<a className="game-mode-button" title="Game Mode Selection Button" href="./">
			{text}
		</a>
	);
};
