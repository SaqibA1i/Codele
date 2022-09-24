import { useEffect, useState } from "react";
import { CopyBlock, monokai as s } from "react-code-blocks";
import styled from "styled-components";
import { Box } from "../../styles/Box";
import { VBox } from "../../styles/VBox";
import { CodeData, CodeTheme, LOCAL_STORAGE } from "../../TS types/types";
import SearchBar from "../SearchBar/SearchBar";
import { SpinnerInfinity, SpinnerRoundFilled } from "spinners-react";
import { theme } from "../../wrappers/theme";
import Pill from "../Pills";
import { useSelector } from "react-redux";
import { getCodeData } from "../../redux/codeData/selectors";
import { useDispatch } from "react-redux";
import { CODE_DATA } from "../../redux/codeData";
import { getLoader } from "../../redux/loading/selectors";
import { getGuessData } from "../../redux/guesses/selectors";
import { LOADING_ACTIONS } from "../../redux/loading";
import { GUESS_DATA } from "../../redux/guesses";
import { getOtherState } from "../../redux/otherState/selectors";
import useLocalStorage from "../../helpers/useLocalStorage";
import { OTHER_DATA } from "../../redux/otherState";
import addNotification from "../../helpers/addNotification";

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

  @media (max-width: 500px) {
    width: 150px;
    font-size: 15px;
  }

`
);

const CodeSection = () => {
  const dispatch = useDispatch();
  const {
    language,
    data = "",
    options = [],
    type,
    answer,
  } = useSelector(getCodeData);
  const { incomingData: loading } = useSelector(getLoader);
  const { currSel, success } = useSelector(getOtherState);
  const guesses = useSelector(getGuessData) || [];

  useLocalStorage();

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER + "/get/" + new Date().getDate())
      .then((response) => response.json())
      .then((codeData) => {
        let temp: string = codeData.data;
        temp = temp.replaceAll("\\n", "\n");
        temp = temp.replaceAll("\\t", "\t");

        dispatch(LOADING_ACTIONS.update({ incomingData: false }));
        dispatch(
          CODE_DATA.update({
            type,
            data: temp,
            language,
            answer: codeData.displayName,
          })
        );

        // get localstorage stuff
        let guesses = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE.STATE) || "[]"
        );

        dispatch(GUESS_DATA.update(guesses));
      });
  }, []);

  const validate = () => {
    if (answer === currSel) {
      dispatch(OTHER_DATA.updateSuccess(true));
      addNotification({ type: "success", message: "You are correct!" });
    } else if (currSel === "") {
      addNotification({ type: "warning", message: "Please make a choice" });
    } else if (guesses.find((guess) => guess === currSel)) {
      addNotification({
        type: "warning",
        message: "You already made this choice ",
      });
    } else {
      dispatch(GUESS_DATA.update([...guesses, currSel]));
      if ([...guesses, currSel].length >= 4) {
        addNotification({
          type: "danger",
          message: "The correct answer was: " + answer + ".",
          time: 6000,
        });
      } else {
        addNotification({
          type: "danger",
          message: "Not correct :(",
        });
      }
    }
  };

  return (
    <StyledVBox>
      {loading ? (
        <VBox>
          <SpinnerRoundFilled
            color={theme.light.accent}
            thickness={100}
            style={{ width: "80vw", maxWidth: "420px" }}
          />
        </VBox>
      ) : (
        <>
          <CopyBlock
            language={language}
            text={data}
            showLineNumbers={true}
            theme={s}
            wrapLines={true}
            codeBlock
          />
          <VBox
            style={{ gap: 8, alignItems: "stretch", marginBottom: "-10px" }}
          >
            {guesses.map((guess) => (
              <Pill name={guess} failed={true} />
            ))}
            {success && <Pill name={answer} failed={false} />}
          </VBox>
          <SearchBar />
          <VBox
            style={{
              display: guesses.length >= 4 || success ? "none" : "block",
            }}
          >
            <Button onClick={validate}>Submit</Button>
          </VBox>
        </>
      )}
    </StyledVBox>
  );
};

export default CodeSection;
