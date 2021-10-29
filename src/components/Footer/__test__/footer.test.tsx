import React from "react";
import { Footer } from "../Footer";
import { render, screen } from "@testing-library/react";
import packageJSON from "../../../../package.json";

test("Footer renders", () => {
	render(<Footer />);
	const footer = screen.getByRole("contentinfo");
	expect(footer).toBeTruthy();
});

test("Footer has version info", () => {
	render(<Footer />);
	const footer = screen.getByRole("contentinfo");

	const pageInfo = footer.querySelector(".footer-page-info-text");
	expect(pageInfo).toBeTruthy();
	const regex = new RegExp(`Version*.${packageJSON.version}`);
	expect(pageInfo!.textContent).toMatch(regex);
});

test("Copyright info", () => {
	render(<Footer />);
	const footer = screen.getByRole("contentinfo");

	const copyrightInfo = footer.querySelector(".footer-copyright-info-text");
	const date = new Date();
	const year = date.getFullYear();
	expect(copyrightInfo).toBeTruthy();
	const regex = new RegExp(`©*.${year.toString()}`);
	expect(copyrightInfo!.textContent).toMatch(regex);
});
