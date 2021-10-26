import React from "react";
import "./footer.scss";

import { FooterProps } from "../../types/propTypes";

export const Footer = ({ layoutStyle }: FooterProps) => {
	return (
		<footer className={`footer ${layoutStyle}`} data-testid="footer">
			<p> Footer </p>
		</footer>
	);
};
