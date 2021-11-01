import React from "react";
import { HeaderMenuProps } from "../../types/propTypes";
import { useState } from "react";

type HeaderDropDownMenuProps = {
	title: string;
	contents: string[];
};

const HeaderDropDownMenu = ({ title, contents }: HeaderDropDownMenuProps) => {
	return (
		<ul className="header-menu-drop" title={title}>
			{contents.map((text) => (
				<li>{text}</li>
			))}
		</ul>
	);
};

export const HeaderMenu = ({ contents, title }: HeaderMenuProps) => {
	const [dropdownVisibility, setDropdownVisibility] = useState(false);
	return (
		<div>
			<button className="header-menu" role="menu" title={title} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
				{title}
			</button>
			{dropdownVisibility && <HeaderDropDownMenu title={`${title} Dropdown`} contents={contents} />}
		</div>
	);
};
