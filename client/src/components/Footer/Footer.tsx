import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";

const StyledVBox = styled(HBox)`
  ${({ theme }) => `
    color: ${theme.text};
    border-top: 2px solid ${theme.accent};
`}
  margin-bottom: 20px;
  gap: 10px;
`;
const Footer = () => {
  return (
    <StyledVBox fontSize={15}>
      <p>Codele </p>
      <p
        onClick={() => {
          window.location.href = "https://saqibali.ca";
        }}
      >
        Developer
      </p>
    </StyledVBox>
  );
};

export default Footer;
