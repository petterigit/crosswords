import React from "react";
import { Footer } from "../Footer";
import { render } from "@testing-library/react";
import packageJSON from "../../../../package.json";

test("Footer renders", () => {
	const { getByTestId } = render(<Footer />);
	const footer = getByTestId("footer");
	expect(footer).toBeTruthy();
});

test("Footer has version info", () => {
	const { getByTestId } = render(<Footer />);
	const footer = getByTestId("footer");

	const pageInfo = footer.querySelector(".footer-page-info-text");
	expect(pageInfo).toBeTruthy();
	const regex = new RegExp(`Version*.${packageJSON.version}`);
	expect(pageInfo!.textContent).toMatch(regex);
});

test("Copyright info", () => {
	const { getByTestId } = render(<Footer />);
	const footer = getByTestId("footer");

	const copyrightInfo = footer.querySelector(".footer-copyright-info-text");
	const date = new Date();
	const year = date.getFullYear();
	expect(copyrightInfo).toBeTruthy();
	const regex = new RegExp(`©*.${year.toString()}`);
	expect(copyrightInfo!.textContent).toMatch(regex);
});
