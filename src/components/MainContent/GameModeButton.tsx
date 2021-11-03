import React from "react";
import { Link } from "react-router-dom";

import "./main-content.scss";

import { GameModeButtonProps } from "../../types/propTypes";

export const GameModeButton = ({ text, path }: GameModeButtonProps) => {
	return (
		<Link to={path} component={buttonLink}>
			{text}
		</Link>
	);
};

const buttonLink = React.forwardRef<HTMLAnchorElement>((props, ref) => (
	<a ref={ref} className="game-mode-button" {...props}>
		{props.children}
	</a>
));
