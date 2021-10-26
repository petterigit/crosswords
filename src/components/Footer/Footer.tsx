import React from "react";
import "./footer.scss";

import { FooterProps } from "../../types/propTypes";

export const Footer = ({ layoutStyle }: FooterProps) => {
	return (
		<footer className={`${layoutStyle}`}>
			<p> Footer </p>
		</footer>
	);
};
