import React from "react";
import "./header.scss";

import { HeaderProps } from "../../types/propTypes";
import { HeaderMenu } from "./HeaderMenu";

export const Header = ({ layoutStyle }: HeaderProps) => {
	return (
		<header className={`header-style ${layoutStyle}`}>
			<div className="header-left-container">
				<div className="header-logo" />
				<p className="header-site-name">CROSSWORDS</p>
			</div>
			<ul className="header-right-container">
				<HeaderMenu title="Language Menu" key={1}>
					<li role="menuitem">Language Menu Coming Soon!</li>
				</HeaderMenu>
				<HeaderMenu title="Settings Menu">
					<li role="menuitem">Settings Menu Coming Soon!</li>
				</HeaderMenu>
				<HeaderMenu title="Instruction Menu">
					<li role="menuitem">Instruction Menu Coming Soon!</li>
				</HeaderMenu>
			</ul>
		</header>
	);
};
