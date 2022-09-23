import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeData, CodeType, Language } from "../../TS types/types";

export type Load = {
    incomingData: boolean;
}
export const loading = createSlice({
    name: "LOAD_DATA",
    initialState: {
        incomingData: true
    } as Load,
    reducers: {
        update: (state, action: PayloadAction<Load>) => {
            const { payload: { incomingData } } = action;
            Object.assign(state, { incomingData });
        }
    },
});

export const LOADING_ACTIONS = loading.actions;
