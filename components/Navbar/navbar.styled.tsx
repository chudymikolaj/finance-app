import Link from "next/link";
import styled, { css } from "styled-components";
import ButtonRefSvg from "../Buttons/ButtonRefSvg";
import ButtonSVG from "../Buttons/ButtonSvg";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, BORDER_RADIUS_10, SIZES, WEIGHT } from "@/styles/constants";

import { FlexCenter, FlexColumnStart, FlexRowAlignCenter, FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const Navbar = styled.div`
	width: calc(100% - 20px);
	margin: 30px 10px;

	@media ${devices.md} {
		width: calc(100% - 10vh);
		margin: 30px 5vh;
	}

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
`;

export const NavbarWrapper = styled.div`
	${FlexRowSpaceBetweenCenter}

	width: 100%;
	margin: auto;

	@media ${devices.md} {
		max-width: 768px;
	}

	@media ${devices.xl} {
		max-width: 100%;
	}
`;

export const NavbarLogotype = styled(Link)`
	font-size: ${SIZES.navbarSize};
	font-weight: ${WEIGHT.medium};
`;

export const NavbarMenu = styled.div`
	${FlexRowAlignCenter}
	gap: 10px;
`;

export const NavbarMenuNotification = styled.a`
	width: 30px;
	height: 30px;
	padding: 5px;
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: ${BORDER_RADIUS_10};
	tabindex: -1;
	cursor: not-allowed;

	svg,
	div {
		width: 16px;
		margin: auto;
	}
`;

export const NavbarDropdownMenu = styled.div`
	${FlexCenter}

	@media ${devices.lg} {
		position: relative;
	}
`;

export const NavbarDropdownMenuButton = styled(ButtonRefSvg)`
	${FlexCenter}

	width: 30px;
	height: 30px;
	padding: 5px;
	background-color: ${({ theme }) => theme.backgroundElement};
`;

export const NavbarMenuDropdown = styled.div<{ $show?: boolean }>`
	min-width: 200px;
	width: 100%;
	padding: 16px;
	margin: auto;
	background-color: ${({ theme }) => theme.backgroundElement};
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 18px;
	display: ${(props) => (props.$show ? "block" : "none")};
	position: absolute;
	top: calc(100% + 10px);
	right: 0;
	left: 0;

	@media ${devices.md} {
		width: calc(100vw - 10vh);
	}

	@media ${devices.lg} {
		width: auto;
		left: unset;
	}

	@media ${devices["2xl"]} {
		width: auto;
		top: calc(100% + 10px);
	}
`;

const groupOfLinks = `
	${FlexColumnStart}
	gap: 6px;

  width: 100%;
	max-width: 600px;
  margin: 0 auto;
  padding: 0;
`;

export const NavbarMenuList = styled.ul`
	${groupOfLinks};
`;

const NavbarLinksAndButtons = css`
	${FlexRowAlignCenter}
	gap: 10px;

	width: 100%;
	padding: 10px 16px;
	background-color: ${({ theme }) => theme.backgroundColor};
	border-radius: ${BORDER_RADIUS};
	color: ${({ theme }) => theme.linkColor};

	&:hover {
		opacity: 0.5;
	}

	div,
	svg {
		width: 15px;
		height: 15px;
	}
`;

export const NavbarMenuListLink = styled(Link)`
	${NavbarLinksAndButtons}
`;

export const NavbarMenuListEmptyLink = styled.button`
	${NavbarLinksAndButtons}
`;

export const NavbarMenuListButton = styled.button`
	${NavbarLinksAndButtons}
`;

export const NavbarMenuListLogout = styled.button`
	${NavbarLinksAndButtons}
`;

const groupOfLinksBorder = `
  ${groupOfLinks};
  padding: 0 0 10px;
`;

export const NavbarMenuListActiveProfile = styled.span`
	${groupOfLinksBorder};

	width: 100%;
	padding: 16px 0;
	display: block;
	font-size: 12px;
	text-align: center;
	color: ${({ theme }) => theme.linkColor};
	cursor: default;
`;

export const NavbarMenuListProfiles = styled.ul`
	${groupOfLinksBorder};
	border-bottom: 1px solid ${({ theme }) => theme.line};
`;

export const NavbarMenuListRest = styled.ul`
	${groupOfLinks};
`;

export const NavbarMenuThemeToggle = styled(ButtonSVG)`
	width: 100%;
	padding: 10px 16px;
	height: auto;
	background-color: ${({ theme }) => theme.backgroundColor};
	border: none;
	border-radius: ${BORDER_RADIUS};
	justify-content: center;

	div,
	svg {
		width: 15px;
		height: 15px;
	}
`;
