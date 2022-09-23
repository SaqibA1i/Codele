import { AppState } from "../reduxStore";

export const getCodeData = (state: AppState) => {
    return state.codeData;
}
