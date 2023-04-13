import styled from "styled-components";

type Props = {
  dark?: Boolean;
};
const StyledLogo = styled.div<Props>(
  ({ theme, dark }) => ({
    margin: 0,
    color: dark ? theme.black : theme.accent,
    border: `2px solid ${dark ? theme.black : theme.accent}`,
    transition: "all 0.3s",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    padding: "5px 10px",
  }),
  `p {
    margin: 0;
    text-align: center;
  }
  hr {
    margin: 0 2px;
    height: 0;
    background: white;
    border: none;
    border-top: 2px solid white;
}
`
);

export const Logo = () => (
  <StyledLogo>
    <p>Bash Developments</p>
  </StyledLogo>
);
