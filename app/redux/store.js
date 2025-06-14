import { configureStore } from "@reduxjs/toolkit";
import templateDataRecuder from "./slices/templateDataSlice"

export const store = configureStore({
    reducer: {
        templateData: templateDataRecuder
    }
})