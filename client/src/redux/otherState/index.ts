import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../TS types/types";
export type OtherState = {
    currSel: string;
    success: boolean;
};


export const otherState = createSlice({
    name: "OTHER_DATA",
    initialState: { currSel: "", success: false } as OtherState,
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
    }
});

export const OTHER_DATA = otherState.actions;
