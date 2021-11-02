import React from "react";
import "./main-content.scss";

import { GameModeButtonProps } from "../../types/propTypes";

export const GameModeButton = ({ text }: GameModeButtonProps) => {
	return (
		<a className="game-mode-button" title={`${text} Button`} href="./">
			{text}
		</a>
	);
};
