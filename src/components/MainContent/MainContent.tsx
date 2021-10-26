import React from "react";
import "./main-content.scss";

import { MainContentProps } from "../../types/propTypes";

export const MainContent = ({ layoutStyle }: MainContentProps) => {
	return (
		<div className={`main-content ${layoutStyle}`} data-testid="main-content">
			<p> MainContent </p>
		</div>
	);
};
