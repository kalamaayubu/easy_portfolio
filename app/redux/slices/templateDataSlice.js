import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    id: '',
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
        }
    }
})

export const { setTemplateData } = templateDataSlice.actions // Export action creator for setting template data
export default templateDataSlice.reducer // Export reducer function