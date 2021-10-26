import React from "react";
import "./header.scss";

import { HeaderProps } from "../../types/propTypes";

export const Header = ({ layoutStyle }: HeaderProps) => {
	return (
		<header className={`${layoutStyle}`}>
			<p> Header </p>
		</header>
	);
};
