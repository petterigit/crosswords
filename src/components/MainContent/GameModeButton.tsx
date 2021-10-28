import React from "react";
import "./main-content.scss";

import { GameModeButtonProps } from "../../types/propTypes";

export const GameModeButton = ({ text }: GameModeButtonProps) => {
	return <div className={`main-game-mode-button`} data-testid="game-mode-button"></div>;
};
