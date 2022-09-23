import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../TS types/types";

export const guessData = createSlice({
    name: "GUESS_DATA",
    initialState: [] as string[],
    reducers: {
        update: (state, action: PayloadAction<string[]>) => {
            const { payload } = action;
            localStorage.setItem(LOCAL_STORAGE.STATE, JSON.stringify(payload));
            Object.assign(state, payload);
        }
    },
});

export const GUESS_DATA = guessData.actions;
