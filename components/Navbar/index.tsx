"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import SVGimage from "@/components/SvgIcon";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import useOutsideClick from "@/utils/useOutsideClick";
import {
	Navbar,
	NavbarDropdownMenu,
	NavbarDropdownMenuButton,
	NavbarLogotype,
	NavbarMenu,
	NavbarMenuDropdown,
	NavbarMenuList,
	NavbarMenuListActiveProfile,
	NavbarMenuListLink,
	NavbarMenuListProfiles,
	NavbarMenuListRest,
	NavbarMenuNotification,
	NavbarMenuThemeToggle,
} from "./navbar.styled";

export default function NavbarComponent() {
	const { darkMode, navbar, toggleMode } = useAppContext();
	const pathname = usePathname();

	const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
	const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
	const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

	const toggleDropdown = () => {
		setShowDropdownMenu((prevState) => !prevState);
	};

	const handleRouteChange = () => {
		setShowDropdownMenu(false);
	};

	useEffect(() => {
		handleRouteChange();
	}, [pathname]);

	const isMode = darkMode ? "/dark_mode.svg" : "/light_mode.svg";

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
				{navbar &&
					navbar.map((link) => {
						if ("link" in link) {
							if (link.name == "notifications") {
								return (
									<NavbarMenuNotification
										key={link.id}
										href={{
											pathname: link.link,
										}}
									>
										<SVGimage src="/notifications.svg" />
									</NavbarMenuNotification>
								);
							}
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
											<NavbarMenuListActiveProfile>
												{link.active}
											</NavbarMenuListActiveProfile>

											<NavbarMenuListProfiles>
												{link.profiles?.map((profile) => (
													<NavbarMenuListLink
														key={profile.id}
														href={profile.link}
													>
														<SVGimage src={profile.icon} />
														<span>{profile.name}</span>
													</NavbarMenuListLink>
												))}
											</NavbarMenuListProfiles>

											<NavbarMenuListRest>
												{link.others?.map((other) => (
													<NavbarMenuListLink
														key={other.id}
														href={other.link}
													>
														<SVGimage src={other.icon} />
														<span>{other.name}</span>
													</NavbarMenuListLink>
												))}
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
