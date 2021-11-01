import React from "react";
import "./main-content.scss";

import { MainContentProps } from "../../types/propTypes";
import { GameModeContainer } from "./GameModeContainer";

export const MainContent = ({ layoutStyle }: MainContentProps) => {
	return (
		<main className={`main-content ${layoutStyle}`}>
			<GameModeContainer />
		</main>
	);
};
