import { Link } from "react-router-dom";
import styled from "styled-components";
import { HBox } from "../../styles/HBox";

export const LinkPage = styled(Link)`
  ${({ theme }) => `
    
            color: white;
            text-decoration: none;
            cursor: pointer;
            text-transform: uppercase;
            @media (max-width: ${theme.tablet}) {
                display: none;
            }
            
            border-bottom: 2px solid transparent;
            padding-bottom: 2px;
            transition: 0.3s all;
            &:hover {
                border-bottom: 2px solid white;
            }
  `};
`;
export const LinkExternalPage = styled.a`
  ${({ theme }) => `
    
            color: white !important;
            text-transform: none;
            text-decoration: none;
            cursor: pointer;
            @media (max-width: ${theme.tablet}) {
                display: none;
            }
            
            border-bottom: 2px solid transparent;
            padding-bottom: 2px;
            transition: 0.3s all;
            &:hover {
                border-bottom: 2px solid white;
            }
  `};
`;
const NavLinks = () => {
  return (
    <>
      <LinkPage to="/communities">Communities</LinkPage>
      <LinkPage to="/contactus">Contact Us</LinkPage>
      <LinkPage to="/jobs">Jobs</LinkPage>
      <LinkPage to="/partners">Partners</LinkPage>
      <LinkPage to="/about">About Us</LinkPage>
    </>
  );
};

export default NavLinks;
