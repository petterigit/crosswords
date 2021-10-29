import React from "react";
import "./footer.scss";
import packageJSON from "../../../package.json";

import { FooterProps } from "../../types/propTypes";

export const Footer = ({ layoutStyle }: FooterProps) => {
	return (
		<footer className={`footer ${layoutStyle}`} role="contentinfo">
			<div className="footer-page-info-text">
				<p>Version {packageJSON.version}</p>
			</div>
			<div className="footer-copyright-info-text">
				<p>© 2021</p>
			</div>
		</footer>
	);
};
