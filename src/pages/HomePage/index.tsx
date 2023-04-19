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
  height: 100vh;
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
    font-size: 4.6pc;
    padding: 0 40px;
    text-transform: uppercase;
    font-weight: 100;
    z-index: 110;

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
    for (let i = 0; i < 50; i++) {
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
        <div className="bubble-wrap">{addBubbles()}</div>
        <source src="timelapse.mp4" type="video/mp4" />
      </Skyline>
      <StyledVBox>
        <VBox>
          <h1 data-aos="fade-down">
            Simply <b>Better</b>
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
      <Section head="Current Communities">
        <HBox flexWrap="wrap" style={{ gap: "2rem" }}>
          <Community
            src="current.jpg"
            Name="The Lakeside Views"
            Description="199 Freehold homes situated in Beaverton minutes away from the lake."
            MoreDesc={
              <p>
                Settled lakeside in the charming community of Beaverton, also
                known as the largest region in the Brock Township. Enjoy
                year-round recreational activities along the stunning rolling
                countryside, surrounded by shoreline parks and in the midst of a
                quaint suburban area. Reside alongside Lake Simcoe, a key
                destination to enjoy all four seasons and relish in outdoor
                activities including swimming, canoeing, ice fishing, camping
                and much more! This delightful family-oriented community
                contains a mixture of Bungalows, 2-Storey & Towns starting from
                the <b>$600's</b>. Don't miss out on this incredible opportunity
                to enjoy an easy life of relaxation and bliss!
                <br />
                <br />
                <a
                  style={{ color: theme.light.blue }}
                  href="https://lakesideviews.ca"
                >
                  Visit →
                </a>
              </p>
            }
          />
          <Community
            src="bobcaygeon.jpg"
            Name="Spencer Condos"
            Description="Currently in preconstruction at 24 Brock Street North, Hamilton. The Spencer at Dundas Peal has a total of 51 units."
            disabled
          />
        </HBox>
      </Section>
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
