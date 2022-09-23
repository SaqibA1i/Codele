import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import { theme } from "../../wrappers/theme";

const Pill = ({ name, failed }: { name: string; failed: boolean }) => {
  const StyledHBox = styled(HBox)`
    color: white;
    justify-content: flex-start;
    background: ${!failed ? "#2c2d3a" : "#2c2d3a"};
    padding: 3px 10px;
    border-radius: 10px;
    border: 3px solid ${!failed ? theme.light.accent : "#272835"};
    min-height: 16px;
  `;

  return <StyledHBox>{name}</StyledHBox>;
};

export default Pill;
