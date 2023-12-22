import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, SIZES, WEIGHT } from "@/styles/constants";
import {
	FlexCenter,
	FlexColumnStart,
	FlexRow,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";
import Link from "next/link";
import styled from "styled-components";

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
	${FlexRow}
	gap: 10px;
`;

export const NavbarMenuNotification = styled(Link)`
	padding: 5px;
`;

export const NavbarDropdownMenu = styled.div`
	${FlexCenter}
	position: relative;
`;

export const NavbarDropdownMenuButton = styled.button`
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
	padding: 18px 30px;
	background-color: ${(props) => props.theme.colorElement};
	border: 1px solid ${(props) => props.theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
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
	gap: 10px;

  width: 100%;
  margin: 0;
  padding: 0;
`;

export const NavbarMenuList = styled.ul`
	${groupOfLinks};
`;

export const NavbarMenuListLink = styled(Link)`
	${FlexRow}
	gap: 10px;

	&:hover {
		opacity: 0.5;
	}
`;

const groupOfLinksBorder = `
  ${groupOfLinks};
  padding: 0 0 10px;
`;

export const NavbarMenuListActiveProfile = styled.span`
	${groupOfLinksBorder};
	border-bottom: 1px solid ${(props) => props.theme.colorLink};
	color: ${(props) => props.theme.colorLink};
	cursor: default;
`;

export const NavbarMenuListProfiles = styled.ul`
	${groupOfLinksBorder};
	border-bottom: 1px solid ${(props) => props.theme.colorLink};
`;

export const NavbarMenuListRest = styled.ul`
	${groupOfLinks};
`;

export const NavbarMenuThemeToggle = styled.button`
	${FlexCenter}

	width: 100%;
	padding: 6px 16px;
	margin: 10px auto 0;
	border: 1px solid ${(props) => props.theme.colorLink};
	border-radius: ${BORDER_RADIUS};
	color: ${(props) => props.theme.color};
`;
