import { AppState } from "../reduxStore";

export const getLoader = (state: AppState) => {
    return state.loading;
}
