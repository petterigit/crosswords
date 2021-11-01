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
				<li>
					<HeaderMenu contents="Language Selector coming soon!" title="Language Menu" />
				</li>
				<li>
					<HeaderMenu contents="Settings coming soon!" title="Settings Menu" />
				</li>
				<li>
					<HeaderMenu contents="Instructions coming soon!" title="Instruction Menu" />
				</li>
			</ul>
		</header>
	);
};
