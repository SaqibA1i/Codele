import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { HBox } from "../../styles/HBox";
import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";

const FutureCommunity = () => {
  return (
    <Section head="Future communities">
      <VBox style={{ gap: "2rem", marginBottom: "-20px" }}>
        <Banner
          src="waterloo.jpg"
          heading="Future Communities"
          subHeading="Communites coming to our portfolio"
        />
        <HBox style={{ gap: "2rem" }}>
          <Community
            src="napanee.jpg"
            Name="Greater Napanee"
            Description="Stay tuned for more details and new offerings in and near the Greater Napanee area. "
            disabled
          />
        </HBox>
      </VBox>
    </Section>
  );
};

export default FutureCommunity;
