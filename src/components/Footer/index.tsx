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
  align-items: center;
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
        style={{
          width: "-webkit-fill-available",
          maxWidth: "900px",
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <Logo style={{ maxWidth: "300px", width: "100%" }} />
        <VBox style={{ padding: 0, gap: "10px", alignItems: "start" }}>
          <FootHeader>Contact</FootHeader>

          <FooterLink Icon={<Telephone />} text="+1 (905) 479 - 9600" />

          <FooterLink
            Icon={<Envelope />}
            text={
              <a href="mailto:contact@bashdevelopments.com">
                contact@bashdevelopments.com
              </a>
            }
          />
          <FooterLink
            Icon={<Whatsapp />}
            text={<a href="https://wa.me/16479477087">+1 (647) 947-7087</a>}
          />
          <FootHeader>Location</FootHeader>
          <FooterLink
            Icon={<GeoAlt />}
            text={
              <a href="https://goo.gl/maps/xdEcXZyrPxBoU1js5">
                221 Helen Ave. Markham, ON L3R 1J7
              </a>
            }
          />
          <FooterLink
            Icon={<GeoAlt />}
            text={
              <a href="https://goo.gl/maps/ToJti6fEnPi6vwaK7">
                1275 Finch Ave West, North York, ON M3J 2G5
              </a>
            }
          />
          <FootHeader>Communities</FootHeader>
          <FooterLink
            Icon={<Whatsapp />}
            text={<a href="/present">Current</a>}
          />
          <FooterLink Icon={<Whatsapp />} text={<a href="/future">Future</a>} />
        </VBox>
      </HBox>
      <hr />
      <FooterLink
        Icon={<Telephone />}
        text={
          <p style={{ color: "#333333c1" }}>
            Site Design and Development <a href="https://codele.ca">@Codele</a>
          </p>
        }
      />
    </StyledVBox>
  );
};

export default Footer;
