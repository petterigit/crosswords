import React from "react";
import { HeaderMenuProps } from "../../types/propTypes";

export const HeaderMenu = ({ contents, title }: HeaderMenuProps) => {
	return (
		<div className="header-menu" role="menu" title={title}>
			<p>{contents}</p>
		</div>
	);
};
