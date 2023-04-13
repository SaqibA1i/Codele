import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";
import { theme } from "../../styles/Styles";
import styled from "styled-components";
import { H1 } from "../../styles/Text";
import { Button } from "../../styles/Button";

const StyledVBox = styled(VBox)`
  padding: 40px;
  gap: 2rem;
  button {
    color: white;
    padding: 15px 30px;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    ${({ theme }) => `
    background: ${theme.blue}`}
  }
  p {
    @media screen and (max-width: ${({ theme }) => `${theme.tablet}`}) {
      font-size: 1.3rem;
    }
    max-width: 900px;
    b {
      font-weight: 600;
    }
  }
`;

const Partners = () => {
  return (
    <Section head="Our Family">
      <VBox
        style={{
          gap: "2rem",
          marginBottom: "-20px",
        }}
      >
        <Banner
          src="niagra.jpg"
          heading="Partners"
          subHeading="Meet the Bash Developments family!"
          anim
        />
        <HBox flexWrap="wrap" style={{ gap: "2rem" }}>
          <Community src="bash.png" disabled />
          <StyledVBox style={{ paddingTop: "5px" }}>
            <H1>Best Developments</H1>
            <p>
              Since the 1990s thousands of families have chosen Best
              Developments to provide them with their biggest investment, a
              home. With the vision of combining affordability and luxury Best
              Developments has won several awards for their outstanding service
              and homes.
            </p>
            <p>
              Our vision at Best Developments is to ensure that the house we
              build can be defined and molded to a home, by allowing a wide
              array of customizations. We provide all types of units from
              singles, townhomes, bungalows, and condos all over and around the
              GTA.
            </p>
            <p>
              Being a family business, we understand the importance of a home
              for not only basic needs but to create a strong culture and
              community. Once you buy a home from us, you’re not only a customer
              but you become a part of our ever-growing family. Contact us if
              you want to learn more and become a part of Best Developments.
            </p>
            <Button
              intent="submit"
              onClick={() =>
                window.open("https://bashdevelopments.com", "_blank")
              }
            >
              Visit
            </Button>
          </StyledVBox>
        </HBox>
      </VBox>
    </Section>
  );
};

export default Partners;
