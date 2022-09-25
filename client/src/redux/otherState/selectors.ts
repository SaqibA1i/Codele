import { AppState } from "../reduxStore";

export const getOtherState = (state: AppState) => {
    return state.otherData;
}
