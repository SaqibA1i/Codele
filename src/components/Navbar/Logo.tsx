import { url } from "inspector";
import styled from "styled-components";
import { background } from "styled-system";

type Props = {
  dark?: Boolean;
};
const StyledLogo = styled.img<Props>(
  ({ theme, dark }) => ({
    margin: 0,
    color: "#EF373E",
    width: "10rem",
    transition: "all 0.3s",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    padding: "5px 10px",
  }),
  `
  p {
    margin: 0;
    text-align: center;
  }
  hr {
    margin: 0 2px;
    height: 0;
    background: white;
    border: none;
    border-top: 2px solid red;
}
`
);

export const Logo = () => <StyledLogo src="logo.jpg" />;
