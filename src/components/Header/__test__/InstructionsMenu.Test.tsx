import React from "react";
import { InstructionMenu } from "../InstructionMenu";
import { render } from "@testing-library/react";

test("Instructions Menu renders", () => {
	const { getByTestId } = render(<InstructionMenu />);
	const instructionsMenu = getByTestId("header-instructions-menu");
});
