import { useState } from "react";
import { CopyBlock, monokai as s } from "react-code-blocks";
import styled from "styled-components";
import { Box } from "../../styles/Box";
import { VBox } from "../../styles/VBox";
import { CodeData, CodeTheme } from "../../TS types/types";
import SearchBar from "../SearchBar/SearchBar";
import { SpinnerInfinity, SpinnerRoundFilled } from "spinners-react";
import { theme } from "../../wrappers/theme";

const StyledVBox = styled(VBox)`
  width: 90vw;
  align-items: stretch;
  gap: 30px;
  max-width: 500px;
  color: #333;
`;
const Button = styled.button(
  ({ theme }) => ({
    color: "white",
    width: "200px",
    margin: "0 auto",
    height: "60px",
    fontSize: "20px",
    transition: "all 0.3s",
    background: theme.accent,
    border: 0,
    borderRadius: "50px",
    cursor: "pointer",
  }),
  `
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: black;
  }
`
);

const CodeSection = ({ codeData }: { codeData: CodeData }) => {
  const { language, data, options = [], type } = codeData;
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
    <StyledVBox>
      {!loading ? (
        <>
          <CopyBlock
            language={language}
            text={data}
            showLineNumbers={true}
            theme={s}
            wrapLines={true}
            codeBlock
          />
          <SearchBar />
          <VBox>
            {!loading ? (
              <Button>Submit</Button>
            ) : (
              <SpinnerInfinity
                color={theme.light.accent}
                thickness={200}
                style={{ width: "100px" }}
              />
            )}
          </VBox>
        </>
      ) : (
        <VBox>
          <SpinnerRoundFilled
            color={theme.light.accent}
            thickness={100}
            style={{ width: "80vw", maxWidth: "420px" }}
          />
        </VBox>
      )}
    </StyledVBox>
  );
};

export default CodeSection;
