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
          font-size: 1.3rem !important;
          padding-bottom: 5px;
          padding-top: 40px;
          border-bottom: 2px solid ${theme.red};
          font-weight: 900 !important;
          min-width: 150px;
          -webkit-text-stroke: thin;
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
            margin: 0;
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
        <Logo style={{ width: "300px" }} />
        <VBox style={{ padding: 0, gap: "10px", alignItems: "start" }}>
          <FootHeader>Contact</FootHeader>

          <FooterLink Icon={<Telephone />} text="+1 (905) 479 - 9600" />

          <FooterLink Icon={<Envelope />} text="contact@bashdevelopments.com" />
          <FooterLink
            Icon={<Whatsapp />}
            text={<a href="https://wa.me/16478690087">+1 (647) 869-0087</a>}
          />
          <FootHeader>Location</FootHeader>
          <FooterLink
            Icon={<GeoAlt />}
            text="221 Helen Ave. Markham ON L3R 1J7"
          />
          <FooterLink Icon={<GeoAlt />} text="1275 Finch Ave West" />
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
