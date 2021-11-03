export type MainContentProps = {
	layoutStyle?: string;
};
export type HeaderProps = {
	layoutStyle?: string;
};
export type FooterProps = {
	layoutStyle?: string;
};
export type GameModeButtonProps = {
	text: string;
	path: string;
};
export type HeaderMenuProps = {
	children: JSX.Element | JSX.Element[];
	title: string;
};
export type HeaderDropDownMenuProps = {
	title: string;
	children: JSX.Element | JSX.Element[];
};
