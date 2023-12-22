"use client";

import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import SVGimage from "@/components/SvgIcon";

import {
	Navbar,
	NavbarLogotype,
	NavbarMenu,
	NavbarMenuNotification,
	NavbarDropdownMenu,
	NavbarMenuDropdown,
	NavbarMenuList,
	NavbarMenuListLink,
	NavbarMenuListActiveProfile,
	NavbarMenuListProfiles,
	NavbarMenuListRest,
	NavbarMenuThemeToggle,
	NavbarDropdownMenuButton,
} from "./navbar.styled";

export default function NavbarComponent() {
	const { darkMode, navbar, toggleMode } = useAppContext();

	const dropdownMenuRef = useRef<HTMLDivElement>(null);
	const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);

	useEffect(() => {
		const handler = (event: MouseEvent | TouchEvent) => {
			if (
				showDropdownMenu &&
				dropdownMenuRef.current &&
				!dropdownMenuRef.current.contains(event.target as Node)
			) {
				setShowDropdownMenu(false);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [showDropdownMenu]);

	const handleDropdown = () => {
		setShowDropdownMenu((prevState) => !prevState);
	};

	const isMode = darkMode ? (
		<SVGimage src="/dark_mode.svg" />
	) : (
		<SVGimage src="/light_mode.svg" />
	);

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
									<NavbarDropdownMenuButton onMouseDown={handleDropdown}>
										<SVGimage src="/more_vert.svg" />
									</NavbarDropdownMenuButton>

									<NavbarMenuDropdown
										ref={dropdownMenuRef}
										onMouseLeave={handleDropdown}
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

											<NavbarMenuThemeToggle onClick={toggleMode}>
												{isMode}
											</NavbarMenuThemeToggle>
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
