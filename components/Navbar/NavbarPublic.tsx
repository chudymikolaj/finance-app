"use client";

import { useEffect, useRef, useState } from "react";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import useOutsideClick from "@/utils/useOutsideClick";

import { type PublicNavbarLinkProps, type PublicNavbarProps } from "./navbar.types";

import {
	Navbar,
	NavbarDropdownMenu,
	NavbarDropdownMenuButton,
	NavbarLogotype,
	NavbarMenu,
	NavbarMenuDropdown,
	NavbarMenuList,
	NavbarMenuListLink,
	NavbarMenuListRest,
	NavbarMenuNotification,
	NavbarMenuThemeToggle,
} from "./navbar.styled";
import { usePathname } from "next/navigation";

const NavbarPublic = ({ publicNavbar }: PublicNavbarProps) => {
	const pathname = usePathname();
	const { darkMode, toggleMode } = useAppContext();

	const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
	const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
	const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

	const isMode = darkMode ? "/dark_mode.svg" : "/light_mode.svg";

	const toggleDropdown = () => {
		setShowDropdownMenu((prevState) => !prevState);
	};

	useEffect(() => {
		setShowDropdownMenu(false);
	}, [pathname]);

	useOutsideClick({
		isVisible: showDropdownMenu,
		setIsVisible: setShowDropdownMenu,
		refs: [dropdownMenuRef, toggleButtonRef],
	});

	return (
		<Navbar>
			<NavbarLogotype href="/">
				<span>Planer Finansowy</span>
			</NavbarLogotype>

			<NavbarMenu>
				{publicNavbar &&
					publicNavbar.map((link: PublicNavbarLinkProps) => {
						if (link.link?.link !== "/dropdown") {
							return (
								<NavbarMenuNotification
									key={link.id}
									href={link.link}
								>
									{link.name}
								</NavbarMenuNotification>
							);
						} else {
							return (
								<NavbarDropdownMenu key={link.id}>
									<NavbarDropdownMenuButton
										ref={toggleButtonRef}
										action={toggleDropdown}
										svgUrl="/more_vert.svg"
									/>
									<NavbarMenuDropdown
										ref={dropdownMenuRef}
										$show={showDropdownMenu}
									>
										<NavbarMenuList>
											<NavbarMenuListRest>
												{link.dropdown?.map(
													({ id, href, name }) =>
														href && (
															<NavbarMenuListLink
																key={id}
																href={href}
															>
																{/* <SVGimage src="/logout.svg" /> */}
																<span>{name}</span>
															</NavbarMenuListLink>
														)
												)}
											</NavbarMenuListRest>
											<NavbarMenuThemeToggle
												onClick={toggleMode}
												svgUrl={isMode}
											/>
										</NavbarMenuList>
									</NavbarMenuDropdown>
								</NavbarDropdownMenu>
							);
						}
					})}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavbarPublic;
