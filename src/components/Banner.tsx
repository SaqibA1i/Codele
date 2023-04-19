import styled, { ThemeContext } from "styled-components";
import { Box } from "../styles/Box";
import { H1 } from "../styles/Text";
import { VBox } from "../styles/VBox";
import Aos from "aos";
import { useContext, useEffect } from "react";
import Section from "./Section";
import { HBox } from "../styles/HBox";
import { Button } from "../styles/Button";
import Form from "../pages/HomePage/Form";
type Props = {
  src: string;
};

const Img = styled(Box)<Props>`
  width: 100vw;
  height: 396px;
  background: linear-gradient(
      to bottom,
      rgb(255, 255, 255) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(niagra.jpg), url(${({ src }) => src});
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 20px;
  align-items: center;
  background-size: cover;
  color: ${({ theme }) => `${theme.red}`} !important;
  transition: 0.3s all;
  -webkit-text-stroke-width: thin;
  text-decoration: none;
  text-align: center;
  background-position: 0 56%;
  z-index: 1000;
  @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
    -webkit-text-stroke: white;
  }
`;
type BannerProps = {
  heading: string;
  subHeading: string;
  src: string;
  anim?: boolean;
};
const Banner = ({ heading, subHeading, src, anim }: BannerProps) => {
  return (
    <div data-aos={anim ? "fade-up" : ""}>
      <Section head={heading} secondary>
        <HBox
          flexWrap="wrap"
          style={{ gap: "2rem", padding: "40px", color: "white" }}
        >
          <VBox style={{ gap: "2rem" }}>
            <p style={{ color: "white", fontWeight: 100 }}>{subHeading}</p>
          </VBox>
        </HBox>
      </Section>
    </div>
  );
};

export default Banner;
