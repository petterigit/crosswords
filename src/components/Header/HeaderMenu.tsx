import React from "react";
import { HeaderMenuProps } from "../../types/propTypes";
import { useState } from "react";

export const HeaderMenu = ({ contents, title }: HeaderMenuProps) => {
	const [dropdownVisibility, setDropdownVisibility] = useState(false);
	return (
		<div>
			<button className="header-menu" role="menu" title={title} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
				{title}
			</button>
			{dropdownVisibility && <p title={`${title} Dropdown`}>{contents}</p>}
		</div>
	);
};
