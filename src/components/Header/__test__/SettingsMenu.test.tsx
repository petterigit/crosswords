import React from "react";
import { SettingsMenu } from "../SettingsMenu";
import { render, screen } from "@testing-library/react";

test("Settings Menu renders", () => {
	render(<SettingsMenu />);
	const settingsMenu = screen.getByTitle("Settings");

	expect(settingsMenu).toBeTruthy();
	expect(settingsMenu.textContent).toBe("Settings Coming Soon!");
});
