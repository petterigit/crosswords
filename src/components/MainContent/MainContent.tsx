import React from "react";
import { Switch, Route } from "react-router-dom";
import "./main-content.scss";

import { MainContentProps } from "../../types/propTypes";
import { GameModeContainer } from "./GameModeContainer";

import { pathInfo } from "../../utils/mainContentPaths";

export const MainContent = ({ layoutStyle }: MainContentProps) => {
	return (
		<main className={`main-content ${layoutStyle}`}>
			<Switch>
				<Route exact path={pathInfo.GameModeSelector.path}>
					<GameModeContainer />
				</Route>
				<Route path={pathInfo.PlayAlong.path}>
					<div title="Play Along" />
				</Route>
				<Route path={pathInfo.PlayABot.path}>
					<div title="Play vs. A Bot" />
				</Route>
				<Route path={pathInfo.WordChecker.path}>
					<div title="Word Checker" />
				</Route>
			</Switch>
		</main>
	);
};
