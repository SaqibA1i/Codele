import styled from "styled-components";
import { Box } from "../../styles/Box";
import { VBox } from "../../styles/VBox";
import { HBox } from "../../styles/HBox";

type Props = {
  headText?: string;
  head?: string;
  children: JSX.Element;
  secondary?: boolean;
};

const Section = ({ headText, head, children, secondary }: Props) => {
  const HeadText = styled(HBox)`
    font-family: "Lato";
    font-size: 38px;
    font-weight: 1000;
    margin-bottom: 20px;
    padding-left: 20px;
    align-self: start;
    -webkit-text-stroke: thin;
    padding-top: ${secondary ? `50px` : 0};
    ${({ theme }) => `
    color: ${secondary ? theme.accent : theme.red};
  `}
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      -webkit-text-stroke: white;
    }
    /* &:before {
    display: block;
    content: "01 - ";
    height: 30px;
    width: 60px;
    color: #3333339b;
    font-size: 30px;
    margin-left: 10px;
    background-size: cover;
  } */
  `;

  const StyledBox = styled(Box)`
    align-self: stretch;
    background: ${({ theme }) => `${secondary ? theme.red : theme.accent}`};
  `;
  const StyledVBox = styled(VBox)`
    padding: 20px;
    padding-top: 30px;
    width: min-content;
    margin: 0 auto;
    max-width: 1127px;
    width: -webkit-fill-available;
    color: ${({ theme }) =>
      `${secondary ? `${theme.accent} !important` : theme.black}`};

    h2 {
      font-weight: 700;
      margin: 0;
      font-size: 1.5rem;
      text-align: center;
      ${({ theme }) => `
    color: ${theme.red};`}
      width: -webkit-fill-available;
      @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
        font-size: 2rem;
      }
    }
    p {
      font-family: LatoLight;
      margin: 0;
      font-size: 1rem;
      @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
        font-size: 1.2rem;
      }
      font-weight: 600;
    }
  `;
  return (
    <StyledBox>
      <StyledVBox>
        <HeadText>{head}</HeadText>
        <Box>{children}</Box>
      </StyledVBox>
    </StyledBox>
  );
};

export default Section;
