import React from "react";
import { GameModeButton } from "./GameModeButton";
import "./main-content.scss";

import { pathInfo } from "../../utils/mainContentPaths";

export const GameModeContainer = () => {
	return (
		<div className="main-game-mode-container" title="Game Mode Selection">
			<ul>
				<li>
					<GameModeButton text={pathInfo.PlayAlong.buttonText} path={pathInfo.PlayAlong.path} key={pathInfo.PlayAlong.id} />
				</li>
				<li>
					<GameModeButton text={pathInfo.PlayABot.buttonText} path={pathInfo.PlayABot.path} key={pathInfo.PlayABot.id} />
				</li>
				<li>
					<GameModeButton text={pathInfo.WordChecker.buttonText} path={pathInfo.WordChecker.path} key={pathInfo.WordChecker.id} />
				</li>
			</ul>
		</div>
	);
};
