import React from "react";
import { Link } from "react-router-dom";

import "./main-content.scss";

import { GameModeButtonProps } from "../../types/propTypes";

export const GameModeButton = ({ text, path }: GameModeButtonProps) => {
	return (
		<Link to={path} component={buttonLink} title={`${text} Button`}>
			{text}
		</Link>
	);
};

type buttonLinkProps = {
	navigate: string;
	children: JSX.Element | JSX.Element[];
	rest: React.ReactNode;
};

const buttonLink = React.forwardRef<HTMLAnchorElement, buttonLinkProps>(({ navigate, children, ...rest }, ref) => (
	<a ref={ref} className="game-mode-button" {...rest}>
		{children}
	</a>
));
