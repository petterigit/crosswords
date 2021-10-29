import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import "./global-styles/normalize.css";
import "./global-styles/layout-styles.scss";

export const App = () => {
	return (
		<main className="app-layout">
			<Header layoutStyle="header-layout" />
			<MainContent layoutStyle="main-content-layout" />
			<Footer layoutStyle="footer-layout" />
		</main>
	);
};
