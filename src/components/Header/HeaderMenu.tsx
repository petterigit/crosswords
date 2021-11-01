import React from "react";
import { HeaderMenuProps } from "../../types/propTypes";
import { useState } from "react";

type HeaderDropDownMenuProps = {
	title: string;
	contents: string[];
};

const HeaderDropDownMenu = ({ title, contents }: HeaderDropDownMenuProps) => {
	return (
		<ul className="header-menu-drop" role="menu" title={title}>
			{contents.map((text, i) => (
				<li role="menuitem" key={i}>
					{text}
				</li>
			))}
		</ul>
	);
};

export const HeaderMenu = ({ contents, title }: HeaderMenuProps) => {
	const [dropdownVisibility, setDropdownVisibility] = useState(false);
	return (
		<div>
			<button aria-haspopup="true" className="header-menu-button" title={title} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
				{title}
			</button>
			{dropdownVisibility && <HeaderDropDownMenu title={`${title} Dropdown`} contents={contents} />}
		</div>
	);
};
