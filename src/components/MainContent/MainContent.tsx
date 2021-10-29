import React from "react";
import "./main-content.scss";

import { MainContentProps } from "../../types/propTypes";
import { GameModeContainer } from "./GameModeContainer";

export const MainContent = ({ layoutStyle }: MainContentProps) => {
	return (
		<div className={`main-content ${layoutStyle}`} title="Main Content">
			<GameModeContainer />
		</div>
	);
};
