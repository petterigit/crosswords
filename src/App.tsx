import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import "./global-styles/normalize.css";
import "./global-styles/layout-styles.scss";
import "./global-styles/global-styles.scss";

export const App = () => {
	return (
		<Router>
			<div className="app-layout" title="Page">
				<Header layoutStyle="header-layout" />
				<MainContent layoutStyle="main-content-layout" />
				<Footer layoutStyle="footer-layout" />
			</div>
		</Router>
	);
};
