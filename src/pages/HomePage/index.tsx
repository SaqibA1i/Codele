import styled from "styled-components";
import { VBox } from "../../styles/VBox";
import Section from "../../components/Section";
import { Box } from "../../styles/Box";
import { HBox } from "../../styles/HBox";
import Community from "./Community";
import Form from "./Form";
import { ChevronDown, EnvelopeFill } from "react-bootstrap-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { H1 } from "../../styles/Text";
import { Button } from "../../styles/Button";
import { theme } from "../../styles/Styles";
import EmailUs from "./EmailUs";
import CurrentCommunities from "../Community/CurrentCommunities";
import FutureCommunity from "../Community/FutureCommunities";

const Vid = styled.video`
  min-height: 100%;
  height: auto;
  object-fit: cover;
  object-position: 50% 0;
  margin-top: -10px;
  @media screen and (min-width: ${({ theme }) => `${theme.tablet}`}) {
    top: 0px;
  }
`;

const Skyline = styled(Vid)`
  height: 95vh;
  width: 100%;
  left: 0;
  z-index: 2;
`;

const StyledVBox = styled(VBox)`
  width: 100%;
  height: 30vh;
  padding-top: 50px;
  z-index: 10;
  background-size: cover;
  transition: none;
  position: absolute;
  top: 0;
  background: linear-gradient(180deg, white, transparent);
  place-content: flex-start;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 10px;
    }
    50% {
      bottom: 0;
    }
  }

  h1 {
    font-size: 3.6pc;
    padding: 0 40px;
    text-transform: uppercase;
    font-weight: 100;
    z-index: 110;
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      font-size: 2.6pc;
    }
    ${({ theme }) => `
    b {
      font-weight: 600;
    }
    color: ${theme.red};
    margin: 0;
    margin-top: 20px;
  `}
  }
  p {
    color: white;
    font-size: 1pc;
    z-index: 110;
    padding: 0 40px;
  }
`;

const StyleVBox = styled(VBox)``;
const HomePage = (): JSX.Element => {
  let bubbles: JSX.Element[] = [];
  const addBubbles = (): JSX.Element[] => {
    for (let i = 0; i < 20; i++) {
      bubbles.push(<div className="bubble" key={i} />);
    }
    return bubbles;
  };

  return (
    <StyleVBox
      style={{
        gap: "2rem",
        width: "-webkit-fill-available",
        scrollBehavior: "smooth",
      }}
    >
      <Skyline data-aos="zoom-out" autoPlay muted loop id="video-background">
        <source src="timelapse.mp4" type="video/mp4" />
      </Skyline>
      <StyledVBox>
        {addBubbles()}
        <VBox>
          <h1 data-aos="fade-down">
            Building Tomorrow <b>Together</b>
          </h1>
        </VBox>
      </StyledVBox>
      {/* <Section head="Mission">
        <VBox style={{ gap: "1rem" }} id="first">
          <H1>WE MAKE THE CHOICE SIMPLE</H1>
          <p style={{ maxWidth: "800px" }}>
            At Bash Developments, we respect and consider the opinions of our
            Architects, Designers and Fung Shui professional; realizing that
            each team has valuable insight into what it takes to design and
            construct a the perfect home. When it comes to making the best
            decision on which home is right for you, materials choices and
            finishing details are selected to enhance your family’s living
            experience and to meet or exceed the comfort levels you expect and
            deserve. Best Homes is <br />
            “Simply the Best."
          </p>
        </VBox>
      </Section> */}
      <CurrentCommunities />
      {/* <Section head="Communities" secondary>
        <HBox style={{ gap: "2rem" }}>
          <Community
            src="napanee.jpg"
            Name="Greater Napanee"
            Description="Stay tuned for more details and new offerings in and near the Greater Napanee area. "
            disabled
          />
        </HBox>
      </Section> */}
      <EmailUs />
    </StyleVBox>
  );
};

export default HomePage;
