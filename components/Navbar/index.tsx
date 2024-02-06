"use client";

import { getSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import SVGimage from "@/components/SvgIcon";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import fetchPrivateNavbar from "@/utils/fetch/privateNavbarAxios";
import useOutsideClick from "@/utils/useOutsideClick";

import {
	type PrivateNavbarLinkProps,
	type PublicNavbarLinkProps,
	type PublicNavbarProps,
} from "./navbar.types";

import {
	Navbar,
	NavbarDropdownMenu,
	NavbarDropdownMenuButton,
	NavbarLogotype,
	NavbarMenu,
	NavbarMenuDropdown,
	NavbarMenuList,
	NavbarMenuListActiveProfile,
	NavbarMenuListButton,
	NavbarMenuListEmptyLink,
	NavbarMenuListLink,
	NavbarMenuListRest,
	NavbarMenuNotification,
	NavbarMenuThemeToggle,
} from "./navbar.styled";

const NavbarComponent = ({ publicNavbar }: PublicNavbarProps) => {
	const pathname = usePathname();
	const { darkMode, toggleMode } = useAppContext();

	const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
	const [privateNavbar, setPrivateNavbar] = useState<[]>([]);
	const [getUserEmail, setGetUserEmail] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
	const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

	const isMode = darkMode ? "/dark_mode.svg" : "/light_mode.svg";

	const toggleDropdown = () => {
		setShowDropdownMenu((prevState) => !prevState);
	};

	const handleRouteChange = () => {
		setShowDropdownMenu(false);
	};

	useEffect(() => {
		handleRouteChange();
	}, [pathname]);

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();

			if (session) {
				fetchPrivateNavbar((session as any)?.jwt)
					.then((res) => {
						setPrivateNavbar(res);
						setLoading(true);
						setGetUserEmail((session as any)?.user.email);
					})
					.catch((err) => {
						setLoading(false);
						console.log(err);
					});
			} else {
				setLoading(false);
			}
		};

		securePage();
	}, [pathname]);

	useOutsideClick({
		isVisible: showDropdownMenu,
		setIsVisible: setShowDropdownMenu,
		refs: [dropdownMenuRef, toggleButtonRef],
	});

	if (loading) {
		return (
			<Navbar>
				<NavbarLogotype href="/">
					<span>Planer Finansowy</span>
				</NavbarLogotype>
				<NavbarMenu>
					{loading &&
						privateNavbar.map((link: PrivateNavbarLinkProps) => {
							if (link.link === "/notifications") {
								return (
									<NavbarMenuNotification
										key={link.id}
										href={link.link}
									>
										<SVGimage src="/notifications.svg" />
									</NavbarMenuNotification>
								);
							}

							if (link.link?.link === "/dropdown") {
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
												<NavbarMenuListActiveProfile>
													{getUserEmail}
												</NavbarMenuListActiveProfile>

												<NavbarMenuListRest>
													{link.dropdown.map(({ id, name, href }) => {
														if (href === null) {
															return (
																<NavbarMenuListEmptyLink key={id}>
																	<span>{name}</span>
																</NavbarMenuListEmptyLink>
															);
														}

														if (href !== "/logout") {
															return (
																<NavbarMenuListLink
																	key={id}
																	href={href}
																>
																	<span>{name}</span>
																</NavbarMenuListLink>
															);
														}

														if (href === "/logout") {
															return (
																<NavbarMenuListButton
																	key={id}
																	onClick={() => signOut()}
																>
																	<SVGimage src="/logout.svg" />
																	<span>{name}</span>
																</NavbarMenuListButton>
															);
														}
													})}
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
	}

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

export default NavbarComponent;
