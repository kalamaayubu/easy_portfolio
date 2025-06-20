import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    id: '',
    isTemplateEditable: false, // Flag to indicate if the template is editable
    sections: []
}

// Create a slice for storing templateData for state management
export const templateDataSlice = createSlice({
    name: 'templateData',
    initialState,
    reducers: {
        setTemplateData: (state, action) => {
            const { id, sections } = action.payload
            state.id = id
            state.sections = sections
        },

        // Update section during editing
        updateSection: (state, action) => {
            const { sectionId, newProps } = action.payload;
            const sectionIndex = state.sections.findIndex(section => section.id === sectionId);
            if (sectionIndex !== -1) {
                state.sections[sectionIndex].props = newProps;
            }
        },

        // New reducer to set isTemplateEditable separately
        setIsTemplateEditable: (state, action) => {
            state.isTemplateEditable = action.payload;
        },
    }
})

export const { setTemplateData, setIsTemplateEditable, updateSection } = templateDataSlice.actions // Export action creator for setting template data
export default templateDataSlice.reducer // Export reducer function