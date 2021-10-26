import React from "react";
import "./main-content.scss";

import { MainContentProps } from "../../types/propTypes";

export const MainContent = ({ layoutStyle }: MainContentProps) => {
	return (
		<div className={`${layoutStyle}`}>
			<p> MainContent </p>
		</div>
	);
};
