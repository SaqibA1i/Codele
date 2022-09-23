import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { CodeData } from "../TS types/types";
import { codeData } from "./codeData";
import { guessData } from "./guesses";
import { Load, loading } from "./loading";
import { OtherState, otherState } from "./otherState";

type Props = {
  children: JSX.Element;
};

export type AppState = {
  codeData: CodeData;
  loading: Load;
  guessData: string[];
  otherData: OtherState;
};

const ReduxWrapper = ({ children }: Props) => {
  const store = configureStore({
    reducer: {
      codeData: codeData.reducer,
      loading: loading.reducer,
      guessData: guessData.reducer,
      otherData: otherState.reducer,
    },
  });
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
