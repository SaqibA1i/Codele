import { H1 } from "../../styles/Text";
import { VBox } from "../../styles/VBox";
import CurrentCommunities from "./CurrentCommunities";
import FutureCommunity from "./FutureCommunities";
import PastCommunity from "./PastCommunity";

const Community = () => {
  return (
    <VBox>
      <CurrentCommunities />
      <FutureCommunity />
    </VBox>
  );
};

export default Community;
