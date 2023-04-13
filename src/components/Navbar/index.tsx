import styled, { ThemeContext, useTheme } from "styled-components";
import { HBox } from "../../styles/HBox";
import { Logo } from "./Logo";
import { List, Whatsapp } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { Button } from "../../styles/Button";
import { Link } from "react-router-dom";
import NavLinks, { LinkExternalPage, LinkPage } from "./NavLinks";

export const WhatappLogo = styled(HBox)`
  ${({ theme }) => `
    color: ${theme.accent};
    gap: 10px;
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
  color: ${theme.accent};
    svg {
        @media (min-width: ${theme.tablet}) {
           display:none;
        }
    }
`}
`;

const Navbar = ({ onSideBarClick }: { onSideBarClick: any }) => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  const theme = useContext(ThemeContext);

  const StyledHBox = styled(HBox)`
    padding: 20px;
    justify-content: space-between;
    width: -webkit-fill-available;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2000;
    font-size: 0.7rem;
    background: #00000053;
    backdrop-filter: blur(3px);
    color: white;
    a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      text-transform: uppercase;
    }
  `;
  return (
    <StyledHBox>
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
      <WhatappLogo>
        <Whatsapp color={theme.accent} />
        <LinkExternalPage href="https://wa.me/12896375120">
          Whatsapp
        </LinkExternalPage>
      </WhatappLogo>
    </StyledHBox>
  );
};
export default Navbar;
