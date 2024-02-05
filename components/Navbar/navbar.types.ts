export interface PublicNavbarProps {
	publicNavbar: any;
}

export interface PublicNavbarLinkProps {
	id: number;
	name: string;
	link: string & { link: string };
	dropdown: { id: number; name: string; href: string }[];
}
export interface PrivateNavbarLinkProps {
	id: number;
	link: string | { link: string };
	dropdown: { id: number; name: string; href: string }[];
}
