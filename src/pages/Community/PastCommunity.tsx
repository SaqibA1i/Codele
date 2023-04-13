import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { Box } from "../../styles/Box";
import { HBox } from "../../styles/HBox";
import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";

const PastCommunity = () => {
  return (
    <Section head="Past communities">
      <VBox
        style={{
          gap: "2rem",
          marginBottom: "-20px",
        }}
      >
        <Banner
          src="niagra.jpg"
          heading="Past Communities"
          subHeading="Communites currently existing in our portfolio"
          anim
        />
        <Box
          style={{ margin: "0 auto", maxWidth: "1361px", marginBottom: "40px" }}
        >
          <HBox style={{ gap: "2rem", placeContent: "center" }}>
            <Community
              src="kings_gate.jpg"
              Name="King's Gate"
              Description="Kings Gate consists a mixture of townhouses and detaches houses in Richmond Hill. The development was completed in 2011 and consists of 21 units."
              MoreDesc={<></>}
            />
            <Community
              src="swallow.jpg"
              Name="Swallow's Nest"
              Description="Swallows Nest is one of South Unionville's
              finest communities, including more than 500 townhouses and luxury homes. Swallows Nest has won many awards for its designs and architecture."
              MoreDesc={<></>}
            />
            <Community
              src="art.jpg"
              Name="Art House"
              Description="Located in the heart of Markham. This condo
              is reputable due to its unique design. It has
              also been approved for LEED certification."
              MoreDesc={<></>}
            />
            <Community
              src="wismer.jpg"
              Name="Wismer Green"
              Description="120 semi-detached units in the Markham
              area, walking distance to the GO Station and
              several amenities. This project was delivered
              in 2012."
              MoreDesc={<></>}
            />
            <Community
              src="glengarry.jpg"
              Name="Glengarry Lane"
              Description="23 Exquisite townhomes in Mississauga with
              9-foot ceilings. Walking distance to a
              hospital, golf-course, and the TTC."
              MoreDesc={<></>}
            />
          </HBox>
        </Box>
      </VBox>
    </Section>
  );
};

export default PastCommunity;
