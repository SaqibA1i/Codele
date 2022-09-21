import styled from "styled-components";
import { HBox } from "../../styles/HBox";

const CodeSection = ({ data }: { data: string }) => {
  return (
    <HBox fontSize={30}>
      <p>{data}</p>
    </HBox>
  );
};

export default CodeSection;
