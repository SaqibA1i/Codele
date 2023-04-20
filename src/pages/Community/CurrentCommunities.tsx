import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { Box } from "../../styles/Box";
import { HBox } from "../../styles/HBox";
import { theme } from "../../styles/Styles";
import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";

const CurrentCommunities = () => {
  return (
    <Section head="Current Communities">
      <VBox style={{ gap: "2rem", marginBottom: "-20px" }}>
        {/* <Banner
          src="rogers.jpg"
          heading="Current Communities"
          subHeading="Communites currently existing in our portfolio"
          data-aos="zoom-out"
        /> */}
        <HBox style={{ margin: "0 auto" }}>
          <HBox flexWrap="wrap" style={{ gap: "2rem", textAlign: "left" }}>
            <Community
              src="current.jpg"
              Name="Lakeside  Views"
              Description="199 Freehold homes situated in Beaverton minutes away from the lake."
              link="https://lakesideviews.ca"
              MoreDesc={
                <p>
                  Settled lakeside in the charming community of Beaverton, also
                  known as the largest region in the Brock Township. Enjoy
                  year-round recreational activities along the stunning rolling
                  countryside, surrounded by shoreline parks and in the midst of
                  a quaint suburban area. Reside alongside Lake Simcoe, a key
                  destination to enjoy all four seasons and relish in outdoor
                  activities including swimming, canoeing, ice fishing, camping
                  and much more! This delightful family-oriented community
                  contains a mixture of Bungalows, 2-Storey & Towns starting
                  from the <b>$600's</b>. Don't miss out on this incredible
                  opportunity to enjoy an easy life of relaxation and bliss!
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
              src="sheridan.jpg"
              Name="Springside Meadows"
              link="https://springsidemeadows.ca"
              Description="An exceptional new subdivision offering consisting of 486 units in the Greater Napanee Area which is just 20 minutes away from Kingston."
              MoreDesc={
                <p>
                  Springside Meadows is a new home community offering over 15
                  acres of parks, ponds and passive green open spaces. A
                  community for your lifestyle, less than 1km to the vibrant
                  shops, restaurants, parks, riverside trails and choice fishing
                  in the town of Napanee. A location that is almost 30km’s to
                  either the City of Kingston, Belleville or to Prince Edward
                  County (famous wineries and beaches).
                  <br />
                  <br />
                  <a
                    style={{ color: theme.light.blue }}
                    href="https://springsidemeadows.ca"
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
        </HBox>
      </VBox>
    </Section>
  );
};

export default CurrentCommunities;
