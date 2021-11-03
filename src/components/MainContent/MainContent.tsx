import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main-content.scss";

import { MainContentProps } from "../../types/propTypes";
import { GameModeContainer } from "./GameModeContainer";

import { pathInfo } from "../../utils/mainContentPaths";

export const MainContent = ({ layoutStyle }: MainContentProps) => {
	return (
		<main className={`main-content ${layoutStyle}`}>
			<Router>
				<Switch>
					<Route exact path={pathInfo.GameModeSelector.path}>
						<GameModeContainer />
					</Route>
					<Route path={pathInfo.PlayAlong.path}></Route>
					<Route path={pathInfo.PlayABot.path}></Route>
					<Route path={pathInfo.WordChecker.path}></Route>
				</Switch>
			</Router>
		</main>
	);
};
