import { BORDER_RADIUS, WEIGHT } from "@/styles/constants";
import Link from "next/link";
import styled from "styled-components";

export const Navbar = styled.div`
  width: calc(100% - 30px);
  margin: 30px 15px;

  @media (min-width: 768px) {
    width: calc(100% - 10vh);
    margin: 30px 5vh;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavbarLogotype = styled(Link)`
  font-weight: ${WEIGHT.medium};
`;

export const NavbarMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const NavbarMenuNotification = styled(Link)`
  padding: 5px;
`;

export const NavbarDropdownMenu = styled.div`
  position: relative;
`;

export const NavbarDropdownMenuButton = styled.button`
  padding: 5px;
  background-color: unset;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: ${props => props.theme.color};
  cursor: pointer;
`;

export const NavbarMenuDropdown = styled.div<{ $show?: boolean; }>`
  min-width: calc(200px);
  width: calc(100vw);
  padding: 18px 30px;
  background-color: ${props => props.theme.colorElement};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: ${BORDER_RADIUS};
  display: ${(props) => (props.$show ? "block" : "none")};
  position: absolute;
  top: calc(100% + 5px);
  right: 0;

  @media (min-width: 1200px) {
    width: auto;
  }
`;

const groupOfLinks = `
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const NavbarMenuList = styled.ul`
  ${groupOfLinks};
`;

export const NavbarMenuListLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 10px;

  &:hover {
    opacity: .5;
  }
`;

const groupOfLinksBorder = `
  ${groupOfLinks};
  padding: 0 0 10px;
`;

export const NavbarMenuListActiveProfile = styled.span`
  ${groupOfLinksBorder};
  border-bottom: 1px solid ${props => props.theme.colorLink};
  color: ${props => props.theme.colorLink};
  cursor: default;
`;

export const NavbarMenuListProfiles = styled.ul`
  ${groupOfLinksBorder};
  border-bottom: 1px solid ${props => props.theme.colorLink};
`;

export const NavbarMenuListRest = styled.ul`
  ${groupOfLinks};
`;

export const NavbarMenuThemeToggle = styled.button`
  width: 100%;
  padding: 6px 16px;
  margin: 10px auto 0;
  border: 1px solid ${props => props.theme.colorLink};
  border-radius: ${BORDER_RADIUS};
  color: ${props => props.theme.color};
`;