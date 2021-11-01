import React from "react";
import "./header.scss";

import { HeaderProps } from "../../types/propTypes";
import { LanguageMenu } from "./LanguageMenu";
import { InstructionsMenu } from "./InstructionsMenu";
import { SettingsMenu } from "./SettingsMenu";

export const Header = ({ layoutStyle }: HeaderProps) => {
	return (
		<header className={`header-style ${layoutStyle}`}>
			<div className="header-left-container">
				<div className="header-logo" />
				<div className="header-site-name">
					<p>CROSSWORDS</p>
				</div>
			</div>

			<div className="header-right-container">
				<LanguageMenu />
				<InstructionsMenu />
				<SettingsMenu />
			</div>
		</header>
	);
};
