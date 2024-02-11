import { getServerSession } from "next-auth/next";
import fetchPublicNavbar from "@/utils/fetch/publicNavbarAxios";
import { POST } from "@/app/api/auth/[...nextauth]/route";

import NavbarPublic from "./NavbarPublic";
import NavbarPrivate from "./NavbarPrivate";

const NavbarComponent = async () => {
	const session = await getServerSession(POST);
	const navbarLinks = await fetchPublicNavbar();

	if (session) {
		return <NavbarPrivate />;
	}

	return <NavbarPublic publicNavbar={navbarLinks} />;
};

export default NavbarComponent;
