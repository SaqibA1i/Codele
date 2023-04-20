import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { HBox } from "../../styles/HBox";
import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import Community from "../HomePage/Community";

const FutureCommunity = () => {
  return (
    <Section head="Future Communities">
      <VBox style={{ gap: "2rem", marginBottom: "-20px" }}>
        {/* <Banner
          src="waterloo.jpg"
          heading="Future Communities"
          subHeading="Communites coming to our portfolio"
        /> */}
        <HBox style={{ gap: "2rem" }}>
          <Community
            src="napanee.jpg"
            Name="Greater Napanee"
            Description="Stay tuned for more details and new offerings in and near the Greater Napanee area. "
            disabled
          />
          <Community
            src="bancroft.jpg"
            Name="Brancroft Meadows"
            Description="Nestled in the heart of Ontario's ruggedly beautiful landscape, Bancroft offers a welcoming small-town atmosphere."
            disabled
          />
          <Community
            src="colborne.jpg"
            Name="Colborne Meadows"
            Description="Colborne Meadows is a thriving community that boasts a peaceful suburban lifestyle with easy access to urban conveniences."
            disabled
          />
          <Community
            src="deseronto.jpg"
            Name="Deseronto"
            Description="The upcoming communities in the Deseronto area offer a unique blend of natural beauty, small-town charm, and modern amenities."
            disabled
          />
          <Community
            src="seguin.jpg"
            Name="Seguin"
            Description="Look forward to a one of a kind subdivision next to the beautiful lakes and all amenities nearby"
            disabled
          />
        </HBox>
      </VBox>
    </Section>
  );
};

export default FutureCommunity;
