import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../TS types/types";
export type OtherState = {
    currSel: string;
    success: boolean;
    streak: number;
    sideBar: boolean;
    userName: string;
    top7: string[];
};


export const otherState = createSlice({
    name: "OTHER_DATA",
    initialState: { currSel: "", streak: 0, success: false, sideBar: false } as OtherState,
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
        updateSidebar: (state, action: PayloadAction<boolean>) => {
            const { payload: sideBar } = action;
            Object.assign(state, { sideBar });
        },
        updateUserName: (state, action: PayloadAction<string>) => {
            const { payload: userName } = action;
            localStorage.setItem(LOCAL_STORAGE.USER_NAME, userName);
            Object.assign(state, { userName });
        },
        updateTop7: (state, action: PayloadAction<string[]>) => {
            const { payload: top7 } = action;
            Object.assign(state, { top7 });
        },
    }
});

export const OTHER_DATA = otherState.actions;
