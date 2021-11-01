import React from "react";
import { HeaderMenuProps, HeaderDropDownMenuProps } from "../../types/propTypes";
import { useState, useEffect, useRef } from "react";

const HeaderDropDownMenu = React.forwardRef<HTMLUListElement, HeaderDropDownMenuProps>(({ contents, title }, ref) => (
	<ul ref={ref} className="header-menu-drop" role="menu" title={title}>
		{contents.map((text, i) => (
			<li role="menuitem" key={i}>
				{text}
			</li>
		))}
	</ul>
));

export const HeaderMenu = ({ contents, title }: HeaderMenuProps) => {
	const [dropdownVisibility, setDropdownVisibility] = useState(false);

	/* Using Refs to handle eventListener for clicks outside of dropdown menu */
	const dropdownRef = useRef<HTMLUListElement>(null);
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
	}, [dropdownRef, dropdownVisibility]);

	return (
		<div>
			<button aria-haspopup="true" className="header-menu-button" title={title} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
				{title}
			</button>
			{dropdownVisibility && <HeaderDropDownMenu ref={dropdownRef} title={`${title} Dropdown`} contents={contents} />}
		</div>
	);
};
