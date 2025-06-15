import { configureStore } from "@reduxjs/toolkit";
import templateDataRecuder from "./slices/templateDataSlice"

// Create the store
export const store = configureStore({
    reducer: {
        templateData: templateDataRecuder
    }
});

// Load initial state from localStorage (Client-side only)
if (typeof window !== "undefined") {
    const savedTemplateData = localStorage.getItem("templateData");
    if (savedTemplateData) {
        store.dispatch({
            type: "templateData/setTemplateData",
            payload: JSON.parse(savedTemplateData)
        });
    }

    // Filter logic: Only save to localStorage when the templateData changes
    let previousTemplateData = store.getState().templateData;

    store.subscribe(() => {
        const currentTemplateData = store.getState().templateData;

        const hasChanged = JSON.stringify(previousTemplateData) !== JSON.stringify(currentTemplateData);
        if (hasChanged) {
            previousTemplateData = currentTemplateData;
            localStorage.setItem("templateData", JSON.stringify(currentTemplateData));
        }
    })
}