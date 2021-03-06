import React from "react";
import { HeaderMenu } from "../HeaderMenu";
import { render, screen } from "@testing-library/react";

test("Header Menu renders", () => {
	render(
		<HeaderMenu title="Header Menu">
			<div />
		</HeaderMenu>
	);
	const menu = screen.getByTitle("Header Menu");

	expect(menu).toBeTruthy();
	expect(menu.textContent).toBe("Header Menu");
});
