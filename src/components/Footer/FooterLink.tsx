import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import { LinkExternalPage } from "../Navbar/NavLinks";

type Props = {
  Icon: JSX.Element;
  text: any;
};
const StyledHBox = styled(HBox)`
  color: white;
`;
const FooterLink = ({ Icon, text }: Props) => {
  return (
    <StyledHBox>
      {Icon}
      {"string" === typeof text ? <p>{text}</p> : text}
    </StyledHBox>
  );
};

export default FooterLink;
