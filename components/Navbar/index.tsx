"use client";

import SVGimage from "@/components/SvgIcon";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

	const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
		const target = event.target as Node;

		if (
			dropdownMenuRef.current &&
			!dropdownMenuRef.current.contains(target) &&
			toggleButtonRef.current &&
			!toggleButtonRef.current.contains(target)
		) {
			setShowDropdownMenu(false);
		}
	};

	const handleRouteChange = () => {
		setShowDropdownMenu(false);
	};

	useEffect(() => {
		handleRouteChange();
	}, [pathname]);

	useEffect(() => {
		// Attach event listeners when the dropdown is open
		if (showDropdownMenu) {
			document.addEventListener("mousedown", handleOutsideClick);
			document.addEventListener("touchstart", handleOutsideClick);
		}

		return () => {
			// Remove event listeners on cleanup
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		};
	}, [usePathname, showDropdownMenu]);

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
									<NavbarDropdownMenuButton
										ref={toggleButtonRef}
										onClick={toggleDropdown}
									>
										<SVGimage src="/more_vert.svg" />
									</NavbarDropdownMenuButton>

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
