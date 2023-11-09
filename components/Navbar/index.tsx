'use client';

import { useState } from "react";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import SVGimage from "@/components/SvgIcon";

import {
  Navbar,
  NavbarLogotype,
  NavbarMenu,
  NavbarMenuNotification,
  NavbarDropdownMenu,
  NavbarDropdownMenuButton,
  NavbarMenuDropdown,
  NavbarMenuList,
  NavbarMenuListLink,
  NavbarMenuListActiveProfile,
  NavbarMenuListProfiles,
  NavbarMenuListRest,
  NavbarMenuThemeToggle,
} from "./navbar.styled";

export default function NavbarComponent() {
  const { navbar, toggleMode } = useAppContext();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  }

  return (
    <Navbar>
      <NavbarLogotype href="/"><span>Twój finansowy planer</span></NavbarLogotype>
      <NavbarMenu>
        {
          navbar && navbar.map(link => {
            if (link.name == "notifications") {
              return (
                <NavbarMenuNotification key={link.id} href={{
                  pathname: link.link,
                }}>
                  <SVGimage src="/notifications.svg" />
                </NavbarMenuNotification>
              )
            }

            return (
              <NavbarDropdownMenu key={link.id}>
                <NavbarDropdownMenuButton onClick={handleDropdown} >
                  <span>{link.active}</span>
                  <SVGimage src="/expand_more.svg" />
                </NavbarDropdownMenuButton>

                <NavbarMenuDropdown $show={showDropdown}>
                  <NavbarMenuList>
                    <NavbarMenuListActiveProfile>{link.active}</NavbarMenuListActiveProfile>

                    <NavbarMenuListProfiles>
                      {link.profiles?.map(profile => (
                        <NavbarMenuListLink key={profile.id} href={profile.link}>
                          <SVGimage src={profile.icon} /><span>{profile.name}</span>
                        </NavbarMenuListLink>
                      ))}
                    </NavbarMenuListProfiles>

                    <NavbarMenuListRest>
                      {link.others?.map(other => (
                        <NavbarMenuListLink key={other.id} href={other.link}>
                          <SVGimage src={other.icon} /><span>{other.name}</span>
                        </NavbarMenuListLink>
                      ))}
                    </NavbarMenuListRest>

                    <NavbarMenuThemeToggle onClick={toggleMode}>
                      <span>Toggle mode</span>
                    </NavbarMenuThemeToggle>

                  </NavbarMenuList>
                </NavbarMenuDropdown>
              </NavbarDropdownMenu>
            )
          })
        }
      </NavbarMenu>
    </Navbar >
  )
}