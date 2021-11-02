import React from "react";
import { HeaderMenuProps, HeaderDropDownMenuProps } from "../../types/propTypes";
import { useState, useEffect, useRef } from "react";

import "./header.scss";

export const HeaderMenu = ({ title, children }: HeaderMenuProps) => {
	const [dropdownVisibility, setDropdownVisibility] = useState(false);

	const dropdownRef = useRef<HTMLUListElement>(null);
	CreateDropdownListener(dropdownRef, dropdownVisibility, setDropdownVisibility);

	return (
		<li>
			<button aria-haspopup="true" className="header-menu-button" title={title} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
				{title}
			</button>
			{dropdownVisibility && (
				<HeaderDropDownMenu ref={dropdownRef} title={`${title} Dropdown`}>
					{children}
				</HeaderDropDownMenu>
			)}
		</li>
	);
};

const HeaderDropDownMenu = React.forwardRef<HTMLUListElement, HeaderDropDownMenuProps>(({ title, children }, ref) => (
	<ul ref={ref} className="header-menu-drop" role="menu" title={title}>
		{children}
	</ul>
));

const CreateDropdownListener = (
	dropdownRef: React.RefObject<HTMLUListElement>,
	dropdownVisibility: boolean,
	setDropdownVisibility: React.Dispatch<React.SetStateAction<boolean>>
) => {
	/* Using Refs to handle eventListener for clicks outside of dropdown menu */

	useEffect(() => {
		// Create eventListener Callback
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setDropdownVisibility(!dropdownVisibility);
			}
		};

		// Bind callback function
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			// Cleanup callback function when unmounting component
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, dropdownVisibility, setDropdownVisibility]);
};
