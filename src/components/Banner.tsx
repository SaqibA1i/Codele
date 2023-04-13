import styled from "styled-components";
import { Box } from "../styles/Box";
import { H1 } from "../styles/Text";
import { VBox } from "../styles/VBox";
import Aos from "aos";
import { useEffect } from "react";
type Props = {
  src: string;
};

const Img = styled(Box)<Props>`
  width: 100vw;
  height: 396px;
  background: linear-gradient(
      to left,
      rgb(78, 0, 0, 77%) 0%,
      rgb(31 1 1 / 87%) 100%
    ),
    url(niagra.jpg), url(${({ src }) => src});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  color: white !important;
  transition: 0.3s all;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background-position: 0 56%;
  z-index: 1000;
`;
type BannerProps = {
  heading: string;
  subHeading: string;
  src: string;
  anim?: boolean;
};
const Banner = ({ heading, subHeading, src, anim }: BannerProps) => {
  return (
    <Img src={src} data-aos={anim ? "fade-up" : ""}>
      <VBox>
        <H1 style={{ color: "white" }}>{heading}</H1>
        <p style={{ color: "white", fontSize: "1rem", padding: "20px 40px" }}>
          {subHeading}
        </p>
      </VBox>
    </Img>
  );
};

export default Banner;
