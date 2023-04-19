import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import EmailUs from "../HomePage/EmailUs";
import CurrentCommunities from "./CurrentCommunities";
import FutureCommunity from "./FutureCommunities";
import PastCommunity from "./PastCommunity";

const Community = () => {
  return (
    <VBox>
      <CurrentCommunities />
      <FutureCommunity />
      <EmailUs />
    </VBox>
  );
};

export default Community;
