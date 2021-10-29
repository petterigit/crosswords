import React from "react";
import { InstructionsMenu } from "../InstructionsMenu";
import { render, screen } from "@testing-library/react";

test("Instructions Menu renders", () => {
	render(<InstructionsMenu />);
	const instructionsMenu = screen.getByTitle("Instructions");
	expect(instructionsMenu).toBeTruthy();
	expect(instructionsMenu!.textContent).toBe("Instructions Coming Soon!");
});
