import styled from "styled-components";
import { Box } from "../../styles/Box";
import { VBox } from "../../styles/VBox";
import { HBox } from "../../styles/HBox";

type Props = {
  headText?: string;
  head?: string;
  children: JSX.Element;
};

const StyledVBox = styled(VBox)`
  background: white;
  padding: 20px;
  width: min-content;
  margin: 0 auto;
  max-width: 1127px;
  width: -webkit-fill-available;
  h2 {
    font-family: Serif;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    ${({ theme }) => `
    color: ${theme.blue};`}
    width: -webkit-fill-available;
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      font-size: 1.8rem;
    }
  }
  p {
    font-family: LatoLight;
    margin: 0;
    font-size: 1rem;
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      font-size: 1.2rem;
    }
    font-weight: 200;
    max-width: 350px;
  }
`;
const HeadText = styled(HBox)`
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-bottom: 20px;
  align-self: start;
  ${({ theme }) => `
    color: ${theme.grey};
  `}
  &:after {
    display: block;
    content: "";
    height: 1px;
    width: 120px;
    background-color: #9d9d9c;
    margin-left: 10px;
  }
`;
const Section = ({ headText, head, children }: Props) => {
  return (
    <StyledVBox>
      <HeadText>{head}</HeadText>
      <Box>{children}</Box>
    </StyledVBox>
  );
};

export default Section;
