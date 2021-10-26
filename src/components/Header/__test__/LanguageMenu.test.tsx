import React from "react";
import { LanguageMenu } from "../LanguageMenu";
import { render } from "@testing-library/react";

test("Language Menu renders", () => {
	const { getByTestId } = render(<LanguageMenu />);
	const languageMenu = getByTestId("header-Language-menu");
});
