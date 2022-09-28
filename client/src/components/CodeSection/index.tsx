import { useCallback, useEffect, useMemo, useState } from "react";
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
  const { currSel, success, streak } = useSelector(getOtherState);
  const guesses = useSelector(getGuessData) || [];

  useLocalStorage();

  useEffect(() => {
    let now: any = new Date();
    let start: any = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    fetch(process.env.REACT_APP_SERVER + "/get/" + day)
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

        let streaks: string = localStorage.getItem(LOCAL_STORAGE.STREAK) || "0";

        dispatch(GUESS_DATA.update(guesses));
        dispatch(OTHER_DATA.updateStreak(parseInt(streaks)));
      });
  }, []);

  const validate = () => {
    if (answer === currSel) {
      dispatch(OTHER_DATA.updateSuccess(true));
      dispatch(OTHER_DATA.updateStreak(streak + 1));
      dispatch(GUESS_DATA.update([...guesses, currSel]));
      fetch(process.env.REACT_APP_SERVER + "/post/" + guesses.length)
        .then((response) => response.json())
        .then((codeData) => {
          console.log("done");
        });
      addNotification({ type: "success", message: "Correct: Streak +1 😎" });
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
          message: "Streak is reset to 0 😔",
          time: 6000,
        });
        fetch(process.env.REACT_APP_SERVER + "/post/" + guesses.length + 1)
          .then((response) => response.json())
          .then((codeData) => {
            console.log("fail");
          });
        dispatch(OTHER_DATA.updateStreak(0));
      } else {
        addNotification({
          type: "danger",
          message: "Not correct 😢",
        });
      }
    }
  };
  const MemoPill = useMemo(
    () => <Pill name={guesses[0] || ""} failed={guesses[0] !== answer} />,
    [guesses[0]]
  );

  const MemoPill2 = useMemo(
    () => <Pill name={guesses[1] || ""} failed={guesses[1] !== answer} />,
    [guesses[1]]
  );

  const MemoPill3 = useMemo(
    () => <Pill name={guesses[2] || ""} failed={guesses[2] !== answer} />,
    [guesses[2]]
  );

  const MemoPill4 = useMemo(
    () => <Pill name={guesses[3] || ""} failed={guesses[3] !== answer} />,
    [guesses[3]]
  );

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
          <Box style={{ maxHeight: "420px", overflow: "scroll" }}>
            <CopyBlock
              language={language}
              text={data}
              showLineNumbers={true}
              theme={s}
              wrapLines={true}
              codeBlock
            />
          </Box>
          <VBox
            style={{ gap: 8, alignItems: "stretch", marginBottom: "-10px" }}
          >
            {MemoPill}
            {MemoPill2}
            {MemoPill3}
            {MemoPill4}
          </VBox>
          <VBox
            style={{
              display: guesses.length >= 4 || success ? "none" : "block",
              marginTop: "-10px",
            }}
          >
            <SearchBar />
            <br />
            <Button onClick={validate}>Submit</Button>
          </VBox>
          <VBox
            style={{
              display: guesses.length >= 4 && !success ? "" : "none",
              color: theme.light.text,
            }}
          >
            The correct answer was:{" "}
            <b style={{ color: theme.light.accent }}>{answer}</b>
            For more information on this algorithm visit:{" "}
            <a
              style={{ color: theme.light.accent }}
              href={"https://www.programiz.com/search/" + answer}
            >
              programiz
            </a>
          </VBox>

          <VBox
            style={{
              display: success ? "" : "none",
              color: theme.light.text,
            }}
          >
            You chose correctly! For more information on the '{answer}'
            algorithm visit:
            <a
              style={{ color: theme.light.accent }}
              href={"https://www.programiz.com/search/" + answer}
            >
              programiz
            </a>
          </VBox>
        </>
      )}
    </StyledVBox>
  );
};

export default CodeSection;
