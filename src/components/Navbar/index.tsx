import styled, { ThemeContext, useTheme } from "styled-components";
import { HBox } from "../../styles/HBox";
import { Logo } from "./Logo";
import { List, Whatsapp } from "react-bootstrap-icons";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../styles/Button";
import { Link } from "react-router-dom";
import NavLinks, { LinkExternalPage, LinkPage } from "./NavLinks";

export const WhatappLogo = styled(HBox)`
  cursor: pointer;
  ${({ theme }) => `
    color: white;
    gap: 10px;
    background: ${theme.red};
    border-radius: 10px;
    padding: 10px 20px;
    svg {
        height: 30px;
        width: 30px;
        height: 20px;
        width: 20px;
        @media (max-width: ${theme.mobile}) {
           height: 1.6rem;
            width: 1.6rem;
        }
    }
    
`}
`;

const LogoSection = styled(HBox)`
  gap: 1rem;
  text-transform: uppercase;

  ${({ theme }) => `
  color: ${theme.red};
    svg {
        @media (min-width: ${theme.tablet}) {
           display:none;
        }
    }
`}
`;

const StyledHBox = styled(HBox)`
  padding: 1.2rem;
  justify-content: space-between;
  width: -webkit-fill-available;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
  font-size: 0.7rem;
  background: #ffffff;
  backdrop-filter: blur(3px);
  color: #333;
  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
  }
`;
const Navbar = ({ onSideBarClick }: { onSideBarClick: any }) => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const doc = document.getElementById("hello");
    // Add an event listener to detect when the user scrolls
    doc?.addEventListener("scroll", function () {
      // Check if the user has scrolled to the top of the page
      if (doc?.scrollTop === 0 && window.location.pathname === "/") {
        // Add the "top-nav" class to the navbar element
        // navbar!.classList.add("navbar-top");
        navbar!.classList.remove("navbar-scroll");
      } else {
        navbar!.classList.add("navbar-scroll");
        // navbar!.classList.remove("navbar-top");
      }
    });
  }, []);

  return (
    <StyledHBox id="navbar">
      <LogoSection>
        <List
          size={"2.3rem"}
          onClick={() => {
            setShowSidebar(!showSidebar);
            onSideBarClick();
          }}
        />
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks />
      </LogoSection>
      <WhatappLogo
        onClick={() => {
          window.open("https://wa.me/16479477087");
        }}
      >
        <Whatsapp />
        <LinkExternalPage>Whatsapp</LinkExternalPage>
      </WhatappLogo>
    </StyledHBox>
  );
};
export default Navbar;
