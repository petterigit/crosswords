import React from "react";
import { SettingsMenu } from "../SettingsMenu";
import { render } from "@testing-library/react";

test("Settings Menu renders", () => {
	const { getByTestId } = render(<SettingsMenu />);
	const settingsMenu = getByTestId("header-Settings-menu");
});