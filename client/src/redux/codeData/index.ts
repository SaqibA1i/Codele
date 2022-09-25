import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeData, CodeType, Language } from "../../TS types/types";

export const codeData = createSlice({
    name: "CODE_DATA",
    initialState: {
        type: CodeType.ALGORITHM,
        data: "",
        language: Language.JAVASCRIPT,
        answer: ""
    } as CodeData,
    reducers: {
        update: (state, action: PayloadAction<CodeData>) => {
            const { payload: { type, data, language, answer } } = action;
            Object.assign(state, { type, data, language, answer });
        }
    },
});

export const CODE_DATA = codeData.actions;
