import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { HBox } from "../../styles/HBox";
import { theme } from "../../styles/Styles";
import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";

const CurrentCommunities = () => {
  return (
    <Section head="Current communities">
      <VBox style={{ gap: "2rem", marginBottom: "-20px" }}>
        <Banner
          src="rogers.jpg"
          heading="Current Communities"
          subHeading="Communites currently existing in our portfolio"
          data-aos="zoom-out"
        />
        <HBox flexWrap="wrap" style={{ gap: "2rem" }}>
          <Community
            src="current.jpg"
            Name="Lakeside  Views"
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
      </VBox>
    </Section>
  );
};

export default CurrentCommunities;
