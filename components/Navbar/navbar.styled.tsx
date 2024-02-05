import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, SIZES, WEIGHT } from "@/styles/constants";
import {
	FlexCenter,
	FlexColumnStart,
	FlexRow,
	FlexRowAlignCenter,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";
import Link from "next/link";
import styled, { css } from "styled-components";
import ButtonRefSvg from "../Buttons/ButtonRefSvg";
import ButtonSVG from "../Buttons/ButtonSvg";

export const Navbar = styled.div`
	width: calc(100% - 30px);
	margin: 30px 15px;

	@media ${devices.md} {
		width: calc(100% - 10vh);
		margin: 30px 5vh;
	}

	${FlexRowSpaceBetweenCenter}

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
`;

export const NavbarLogotype = styled(Link)`
	font-size: ${SIZES.navbarSize};
	font-weight: ${WEIGHT.medium};
`;

export const NavbarMenu = styled.div`
	${FlexRowAlignCenter}
	gap: 10px;
`;

export const NavbarMenuNotification = styled(Link)`
	padding: 5px;
`;

export const NavbarDropdownMenu = styled.div`
	${FlexCenter}
	position: relative;
`;

export const NavbarDropdownMenuButton = styled(ButtonRefSvg)`
	${FlexCenter}

	width: 30px;
	height: 30px;
	padding: 5px;
	background-color: unset;
	cursor: pointer;

	div,
	svg {
		width: 15px;
		height: 15px;
	}
`;

export const NavbarMenuDropdown = styled.div<{ $show?: boolean }>`
	min-width: 200px;
	width: calc(100vw - 30px);
	padding: 16px;
	background-color: ${(props) => props.theme.backgroundElement};
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 18px;
	display: ${(props) => (props.$show ? "block" : "none")};
	position: absolute;
	top: calc(100% + 10px);
	right: 0;

	@media ${devices.md} {
		width: calc(100vw - 10vh);
	}

	@media ${devices["2xl"]} {
		width: auto;
	}
`;

const groupOfLinks = `
	${FlexColumnStart}
	gap: 6px;

  width: 100%;
  margin: 0;
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
	color: ${(props) => props.theme.linkColor};

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

const groupOfLinksBorder = `
  ${groupOfLinks};
  padding: 0 0 10px;
`;

export const NavbarMenuListActiveProfile = styled.span`
	${groupOfLinksBorder};

	width: 100%;
	padding: 10px 16px;
	border-bottom: 1px solid ${(props) => props.theme.backgroundColor};
	font-size: 12px;
	text-align: center;
	color: ${(props) => props.theme.linkColor};
	cursor: default;
`;

export const NavbarMenuListProfiles = styled.ul`
	${groupOfLinksBorder};
	border-bottom: 1px solid ${(props) => props.theme.line};
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
