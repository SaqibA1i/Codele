import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import Section from "../../components/Section";
import Banner from "../../components/Banner";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";
import { H1 } from "../../styles/Text";

const StyledVBox = styled(VBox)`
  padding: 40px;
  gap: 2rem;
  p {
    max-width: 900px;
    b {
      font-weight: 600;
    }
  }
`;

const AboutUs = () => {
  return (
    <VBox style={{ gap: "2rem", alignItems: "stretch" }}>
      <Section head="Who are we ?">
        <StyledVBox>
          <p>
            The BASH Developments Group Inc. is a privately held company with
            substantial land holdings which develops and operates an extensive
            cross-section of residential, retail, commercial, and income
            properties. With more than 5 years of experience building dynamic
            communities in Western and Eastern Ontario, The BASH Development
            Group Inc. has evolved into one of the province’s largest growing
            land developers.
          </p>
          <p>
            The team has been working diligently to create an exceptional new
            home community in Napanee with the pending release of Springside
            Meadows. This is not a singular development for the group within
            Napanee, they have over 300 acres of development land and are making
            a long-term commitment to the Napanee Area. It was an easy
            commitment for the company to make given everything Napanee offers
            and its proximity to so much within a 30 km radius in either
            direction.
          </p>
          <p>
            At the core of this organization rests the skillful and inspired
            leadership of Ahsan Ashraf, Founder and President and Warris Kamran,
            CEO.
          </p>
          <p>
            BASH is widely recognized for its community-driven building
            philosophy and works closely with all levels of government to
            formulate nimble policy frameworks and forward-thinking plans to
            ensure each project is built to last.
          </p>
        </StyledVBox>
      </Section>
      <Section head="Say hello to our team!" secondary>
        <VBox style={{ scale: "1", gap: "3rem", padding: "40px 0 " }}>
          <VBox>
            <h2 style={{ color: "white" }}>Ahsan Ashraf</h2>
            <p style={{ color: "white" }}>President and Founder</p>
          </VBox>
          <VBox>
            <h2 style={{ color: "white" }}>Warris Kamran</h2>
            <p style={{ color: "white" }}>CEO</p>
          </VBox>
        </VBox>
      </Section>
    </VBox>
  );
};

export default AboutUs;
