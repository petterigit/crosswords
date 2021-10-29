import React from "react";
import { LanguageMenu } from "../LanguageMenu";
import { render, screen } from "@testing-library/react";

test("Language Menu renders", () => {
	render(<LanguageMenu />);
	const languageMenu = screen.getByTitle("Language Selector");
	expect(languageMenu).toBeTruthy();
	expect(languageMenu!.textContent).toBe("Language Selector Coming Soon!");
});
