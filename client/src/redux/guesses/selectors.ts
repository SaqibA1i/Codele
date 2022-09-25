import { AppState } from "../reduxStore";

export const getGuessData = (state: AppState) => {
    return state.guessData;
}
