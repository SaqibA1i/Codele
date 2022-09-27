import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../TS types/types";
export type OtherState = {
    currSel: string;
    success: boolean;
    streak: number;
};


export const otherState = createSlice({
    name: "OTHER_DATA",
    initialState: { currSel: "", streak: 0, success: false } as OtherState,
    reducers: {
        updateCurrSel: (state, action: PayloadAction<string>) => {
            const { payload: currSel } = action;
            Object.assign(state, { currSel });
        },
        updateSuccess: (state, action: PayloadAction<boolean>) => {
            const { payload: success } = action;
            localStorage.setItem(LOCAL_STORAGE.SUCCESS, success.toString());
            Object.assign(state, { success });
        },
        updateStreak: (state, action: PayloadAction<number>) => {
            const { payload: streak } = action;
            localStorage.setItem(LOCAL_STORAGE.STREAK, streak.toString());
            Object.assign(state, { streak });
        },

    }
});

export const OTHER_DATA = otherState.actions;
