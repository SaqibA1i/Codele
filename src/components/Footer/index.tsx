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

const StyledVBox = styled(VBox)`
  width: -webkit-fill-available;
  padding: 40px;
  align-items: start;
  gap: 1rem;
  border-radius: -18px -18px 0 0;
  ${({ theme }) => `
        background: url("footer.svg");
        background-size: cover;
        p {
            color: ${theme.accent};
            font-size: 0.9rem;
        }
    `};
`;
const Footer = () => {
  return (
    <StyledVBox>
      <VBox maxWidth={"800px"} margin="0 auto" style={{ alignItems: "start" }}>
        <Logo />
        <VBox style={{ padding: 0, gap: "0", alignItems: "start" }}>
          <FooterLink
            Icon={<GeoAlt />}
            text="221 Helen Ave. Markham ON L3R 1J7"
          />
          <FooterLink Icon={<Telephone />} text="+1 (905) 479 - 9600" />
          <FooterLink
            Icon={<Whatsapp />}
            text={
              <a
                style={{
                  color: "white",
                  padding: "10px 0",
                }}
                href="https://wa.me/12896375120"
              >
                <b>+1 (289) 637-5120</b>
              </a>
            }
          />
          <FooterLink Icon={<Envelope />} text="paula@besthomescanada.com" />
        </VBox>
      </VBox>
    </StyledVBox>
  );
};

export default Footer;
