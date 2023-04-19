import styled from "styled-components";
import { VBox } from "../../styles/VBox";
import { Logo } from "../Navbar/Logo";
import FooterLink from "./FooterLink";
import {
  GeoAlt,
  Phone,
  Telephone,
  Envelope,
  Whatsapp,
} from "react-bootstrap-icons";
import { LinkExternalPage } from "../Navbar/NavLinks";
import { HBox } from "../../styles/HBox";

const FootHeader = styled.p`
  ${({ theme }) => `
          color: ${theme.red} !important;
          font-size: 1rem !important;
          padding-bottom: 5px;
          padding-top: 20px;
          border-bottom: 1.5px solid ${theme.red};
          font-weight: 600 !important;
          min-width: 150px;
    `};
`;
const StyledVBox = styled(VBox)`
  width: -webkit-fill-available;
  padding: 40px;
  align-items: start;
  gap: 1rem;
  border-radius: -18px -18px 0 0;
  ${({ theme }) => `
  border-top: 1px solid ${theme.red};
        a, p {
            color: ${theme.black};
            font-weight: 300;
            font-size: 0.8rem;
            margin: 0;
            @media (max-width: ${theme.mobile}) {
              font-size:1rem;
        }
        }
    `};
`;
const Footer = () => {
  return (
    <StyledVBox>
      <HBox
        maxWidth={"1000px"}
        margin="0 auto"
        style={{
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <Logo />
        <VBox style={{ padding: 0, gap: "10px", alignItems: "start" }}>
          <FootHeader>Contact</FootHeader>

          <FooterLink Icon={<Telephone />} text="+1 (905) 479 - 9600" />

          <FooterLink Icon={<Envelope />} text="paula@besthomescanada.com" />
          <FooterLink
            Icon={<Whatsapp />}
            text={<a href="https://wa.me/12896375120">+1 (289) 637-5120</a>}
          />
          <FootHeader>Location</FootHeader>
          <FooterLink
            Icon={<GeoAlt />}
            text="221 Helen Ave. Markham ON L3R 1J7"
          />
          <FootHeader>Communities</FootHeader>
          <FooterLink
            Icon={<Whatsapp />}
            text={<a href="https://wa.me/12896375120">Napaneell</a>}
          />
          <FooterLink
            Icon={<Whatsapp />}
            text={<a href="https://wa.me/12896375120">Springside</a>}
          />
        </VBox>
      </HBox>
    </StyledVBox>
  );
};

export default Footer;
